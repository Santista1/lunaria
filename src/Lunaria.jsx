import { Canvas, useThree } from "@react-three/fiber"
import { OrthographicCamera, PointerLockControls, Hud, KeyboardControls, Html, CameraControls } from "@react-three/drei"
import { DepthOfField, EffectComposer } from "@react-three/postprocessing"
import { Physics } from "@react-three/rapier"
import { Perf } from "r3f-perf"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

import { Player } from "./Player"
import { Starfield, Moon, Poster, Button, Sphere, Hallway } from "./components"

const touch = "ontouchstart" in document.documentElement

console.log(touch)

export default function Lunaria() {
  return (
    <>
      {touch && (
        <>
          <div className='joystick' />
          <div className='joystick2' />
        </>
      )}
      <div className='crosshair' />
      <KeyboardControls
        map={[
          { name: "forward", keys: ["ArrowUp", "w", "W"] },
          { name: "backward", keys: ["ArrowDown", "s", "S"] },
          { name: "left", keys: ["ArrowLeft", "a", "A"] },
          { name: "right", keys: ["ArrowRight", "d", "D"] },
          { name: "shift", keys: ["Shift"] },
        ]}
      >
        <World />
      </KeyboardControls>
    </>
  )
}

function World() {
  return (
    <Canvas frameloop='demand' shadows>
      {/* {process.env.NODE_ENV === "development" && <Perf position='bottom-right' deepAnalyze={true} />} */}
      <Hud renderPriority={2}>
        <ambientLight intensity={1} />
        <OrthographicCamera makeDefault position={[0, 0, 200]} />
        <Button text='Connect' position={[780, 430, 0]} size={40} />
        <Button text='Inventory' position={[-780, 430, 0]} size={40} />
      </Hud>
      <EffectComposer>
        <DepthOfField focusDistance={0} focalLength={10} bokehScale={5} height={200} />
      </EffectComposer>
      <color attach='background' args={["black"]} />

      {touch ? <TouchControls /> : <Controls />}

      <Starfield count={4000} factor={2} />
      <Moon scale={5} position={[40, 100, -160]} />
      <pointLight distance={70} position={[30, 80, -140]} intensity={10} />

      <Physics gravity={[0, -3, 0]}>
        <Hallway />
        <Player />
      </Physics>

      <Sphere position={[0, 0, -122]} />
      <pointLight distance={30} position={[0, 0, -122]} intensity={10} />

      <Html
        occlude
        zIndexRange={[0, 0]}
        scale={[0.12, 0.12, 1]}
        transform
        rotation-y={-90 * (Math.PI / 180)}
        position={[2.89, 0, 3]}
      >
        <iframe
          style={{ width: "500px", height: "500px", border: "0px" }}
          src='https://www.youtube.com/embed/lTHWPvVka4M?rel=0?autoplay=1'
        />
      </Html>

      <group position={[0, 0, 0]}>
        <pointLight distance={0.95} position={[-2.5, 0, 3]} intensity={5} />
        <pointLight distance={0.95} position={[-2.5, 0, 1]} intensity={5} />
        <pointLight distance={0.95} position={[-2.5, 0, -1]} intensity={5} />
        <pointLight distance={0.95} position={[-2.5, 0, -3]} intensity={5} />

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
        <pointLight castShadow distance={1} position={[-2.5, 0, 3]} intensity={2} />
        <pointLight castShadow distance={1} position={[-2.5, 0, 1]} intensity={2} />
        <pointLight castShadow distance={1} position={[-2.5, 0, -1]} intensity={2} />
        <pointLight castShadow distance={1} position={[-2.5, 0, -3]} intensity={2} />
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
      <group position={[0, 0, -45]}>
        <pointLight castShadow distance={1} position={[-2.5, 0, 3]} intensity={2} />
        <pointLight castShadow distance={1} position={[-2.5, 0, 1]} intensity={2} />
        <pointLight castShadow distance={1} position={[-2.5, 0, -1]} intensity={2} />
        <pointLight castShadow distance={1} position={[-2.5, 0, -3]} intensity={2} />
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
