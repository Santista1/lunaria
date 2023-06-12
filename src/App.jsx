import { Canvas } from "@react-three/fiber"
import { PointerLockControls, KeyboardControls, CameraControls } from "@react-three/drei"
import { DepthOfField, EffectComposer } from "@react-three/postprocessing"
import { Physics } from "@react-three/rapier"
import { Perf } from "r3f-perf"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import ReactNipple from "react-nipple"

import { ChainProvider } from "@cosmos-kit/react"
import { chains, assets } from "chain-registry"
import { wallets as station } from "@cosmos-kit/station"
import { wallets as keplr } from "@cosmos-kit/keplr"
import { wallets as trust } from "@cosmos-kit/trust"
import { wallets as web3auth } from "@cosmos-kit/web3auth"

import { Player } from "./Player"
import { World } from "./World"
import { Gui } from "./Gui"

const touch = "ontouchstart" in document.documentElement

export function App() {
  return (
    <>
      <div className='crosshair' />
      <ChainProvider
        chains={chains}
        assetLists={assets}
        wallets={[...station, ...keplr, ...web3auth, ...trust]}
        wrappedWithChakra={true}
      >
        {touch && (
          <>
            <ReactNipple
              options={{ mode: "static", position: { bottom: 75, right: 75 } }}
              style={{
                position: "absolute",
                bottom: 75,
                right: 75,
              }}
              onMove={(evt, data) => console.log(evt, data)}
            />
          </>
        )}
        <KeyboardControls
          map={[
            { name: "forward", keys: ["ArrowUp", "w", "W"] },
            { name: "backward", keys: ["ArrowDown", "s", "S"] },
            { name: "left", keys: ["ArrowLeft", "a", "A"] },
            { name: "right", keys: ["ArrowRight", "d", "D"] },
            { name: "shift", keys: ["Shift"] },
          ]}
        >
          <Scene />
        </KeyboardControls>
      </ChainProvider>
    </>
  )
}

function Scene() {
  return (
    <Canvas frameloop='demand' shadows>
      {process.env.NODE_ENV === "development" && !touch && <Perf position='bottom-right' />}

      <Gui />

      <Physics gravity={[0, -3, 0]}>
        <World />
        <Player />
      </Physics>

      {touch ? <TouchControls /> : <DesktopControls />}

      <EffectComposer>
        <DepthOfField focusDistance={0} focalLength={10} bokehScale={5} height={200} />
      </EffectComposer>

      <color attach='background' args={["black"]} />
    </Canvas>
  )
}

function DesktopControls() {
  return <PointerLockControls makeDefault />
}

function TouchControls() {
  const ref = useRef()

  useFrame((state, delta) => {
    var mouseX = state.mouse.x
    var mouseY = state.mouse.y
    ref.current.azimuthAngle = -mouseX
    ref.current.polarAngle = Math.PI / 2 + mouseY
    ref.current.update(delta)
  })

  return <CameraControls ref={ref} />
}
