import { Canvas } from "@react-three/fiber"
import { PointerLockControls, KeyboardControls, Html, CameraControls } from "@react-three/drei"
import { DepthOfField, EffectComposer } from "@react-three/postprocessing"
import { Physics } from "@react-three/rapier"
import { Perf } from "r3f-perf"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import ReactNipple from "react-nipple"

import { Player } from "./Player"
import { World } from "./World"
import { Gui } from "./Gui"
import { Starfield, Moon, Poster } from "./components"

import { ChainProvider } from "@cosmos-kit/react"
import { chains, assets } from "chain-registry"
import { wallets as station } from "@cosmos-kit/station"
import { wallets as keplr } from "@cosmos-kit/keplr"
import { wallets as trust } from "@cosmos-kit/trust"

const touch = "ontouchstart" in document.documentElement

export function App() {
  return (
    <>
      <div className='crosshair' />
      <ChainProvider
        chains={chains}
        assetLists={assets}
        wallets={[...station, ...keplr, ...trust]}
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

      <EffectComposer>
        <DepthOfField focusDistance={0} focalLength={10} bokehScale={5} height={200} />
      </EffectComposer>
      <color attach='background' args={["black"]} />

      <Physics gravity={[0, -3, 0]}>
        <World />
        <Player />
      </Physics>

      {touch ? <TouchControls /> : <Controls />}

      <Starfield count={4000} factor={2} />
      <Moon scale={5} position={[40, 100, -160]} />
      <pointLight distance={70} position={[30, 80, -140]} intensity={10} />

      <group position={[0, 0, 0]}>
        <Poster
          color='hotpink'
          position={[-2.89, 0, 3]}
          map='https://res.cloudinary.com/dexin8o58/image/upload/v1676239383/5B758959-5682-4A83-AA20-A429C53AF854_exp9da.jpg'
          owner='OG'
        />
        <Poster
          color='hotpink'
          map='https://res.cloudinary.com/dexin8o58/image/upload/v1676239388/IMG_5638_vqwa7h.jpg'
          position={[-2.89, 0, 1]}
          owner='OG'
        />
        <Poster
          color='hotpink'
          map='https://res.cloudinary.com/dexin8o58/image/upload/v1676239389/IMG_5667_fhvrbt.jpg'
          position={[-2.89, 0, -1]}
          owner='OG'
        />
        <Poster
          color='hotpink'
          map='https://res.cloudinary.com/dexin8o58/image/upload/v1676239388/AACABEAC-F96C-46D9-8AC5-83C5994C7F4E_grnioz.jpg'
          position={[-2.89, 0, -3]}
          owner='OG'
        />
      </group>
      <group position={[0, 0, -15]}>
        <Poster
          position={[-2.89, 0, 3]}
          map='https://res.cloudinary.com/dexin8o58/image/upload/v1685218397/FjLR2_eXEAAbI2J_os2zlu.jpg'
          owner='Santista'
        />
        <Poster
          map='https://res.cloudinary.com/dexin8o58/image/upload/v1685218541/FgKEctFWIAAyFFc_fudqvi.jpg'
          position={[-2.89, 0, 1]}
          owner='Santista'
        />
        <Poster
          map='https://res.cloudinary.com/dexin8o58/image/upload/v1685221244/782ed0d298ebfffca45a5d6a91a4a167_tnmbyn.png'
          position={[-2.89, 0, -1]}
          owner='Santista'
        />
        <Poster
          map='https://res.cloudinary.com/dexin8o58/image/upload/v1685221048/three_j414x5.gif'
          position={[-2.89, 0, -3]}
          owner='Santista'
        />
      </group>
      <group position={[0, 0, -30]}>
        <Poster
          position={[-2.89, 0, 3]}
          map='https://res.cloudinary.com/dexin8o58/image/upload/v1685998057/snake_gccjdp.png'
          owner='Pholuna'
        />
        <Poster
          map='https://res.cloudinary.com/dexin8o58/image/upload/v1685998056/got_lunc_oo6kot.png'
          position={[-2.89, 0, 1]}
          owner='Pholuna'
        />
        <Poster
          map='https://res.cloudinary.com/dexin8o58/image/upload/v1685998057/Lunc_for_his_and_her_pleasure_Final_p5u5jd.png'
          position={[-2.89, 0, -1]}
          owner='Pholuna'
        />
        <Poster
          map='https://res.cloudinary.com/dexin8o58/image/upload/v1685998056/got_lunc_2_puf4la.png'
          position={[-2.89, 0, -3]}
          owner='Pholuna'
        />
      </group>
    </Canvas>
  )
}

function Controls() {
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
