import { useRef, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { KeyboardControls, CameraControls, PointerLockControls } from "@react-three/drei"
import { DepthOfField, EffectComposer } from "@react-three/postprocessing"
import { Physics } from "@react-three/rapier"
import { Perf } from "r3f-perf"
import ReactNipple from "react-nipple"
import { useSetAtom } from "jotai"

import { ChainProvider } from "@cosmos-kit/react"
import { chains, assets } from "chain-registry"
import { wallets as station } from "@cosmos-kit/station"
import { wallets as keplr } from "@cosmos-kit/keplr"
import { wallets as trust } from "@cosmos-kit/trust"
import { wallets as web3auth } from "@cosmos-kit/web3auth"

import { Analytics } from "@vercel/analytics/react"

import { Player } from "./Player"
import { World } from "./World"
import { Gui } from "./Gui"
import { touch, joystick, lock } from "./global"

export function App() {
  const setJoystick = useSetAtom(joystick)

  const [crosshair, setCrosshair] = useState(false)

  document.addEventListener("pointerlockchange", function () {
    document.pointerLockElement ? setCrosshair(true) : setCrosshair(false)
  })

  return (
    <>
      <Analytics />

      {crosshair && <div className='crosshair' />}

      {touch && (
        <ReactNipple
          options={{ mode: "static", position: { top: "50%", left: "50%" } }}
          style={{
            position: "absolute",
            bottom: 175,
            left: 75,
          }}
          onMove={(evt, data) => setJoystick(data)}
          onEnd={(evt, data) => setJoystick(data)}
        />
      )}

      <ChainProvider
        chains={chains}
        assetLists={assets}
        wallets={[...station, ...keplr, ...web3auth, ...trust]}
        wrappedWithChakra={true}
        walletConnectOptions={{ signClient: { projectId: "3f62067a65bd747c9b1f4b9c331b35eb" } }}
      >
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
    <Canvas style={{ background: "black" }}>
      {process.env.NODE_ENV === "development" && !touch && <Perf position='bottom-right' />}

      <Gui />

      {!touch && (
        <EffectComposer>
          <DepthOfField focusDistance={0} focalLength={10} bokehScale={5} height={200} />
        </EffectComposer>
      )}

      {touch ? <TouchControls /> : <DesktopControls />}

      <Physics gravity={[0, -3, 0]}>
        <World />
        <Player />
      </Physics>
    </Canvas>
  )
}

function DesktopControls() {
  const ref = useRef()
  const setLock = useSetAtom(lock)
  window.addEventListener("pointerdown", () => setLock(ref.current))
  return <PointerLockControls ref={ref} selector='#none' makeDefault />
}

var dif = [0, 0]

function TouchControls() {
  const { camera, gl, pointer } = useThree()

  const ref = useRef()

  window.addEventListener("pointerdown", () => {
    if (ref.current) dif = [ref.current.azimuthAngle + pointer.x, pointer.y - ref.current.polarAngle + Math.PI / 2]
  })

  useFrame((state, delta) => {
    ref.current.azimuthAngle = -(state.pointer.x - dif[0])
    ref.current.polarAngle = Math.PI / 2 + state.pointer.y - dif[1]
    ref.current.update(delta)
  })

  return <CameraControls ref={ref} args={[camera, gl.domElement]} />
}
