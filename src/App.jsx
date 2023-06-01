import { useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { OrthographicCamera, PerspectiveCamera, FirstPersonControls, PointerLockControls, Hud } from "@react-three/drei"
import { DepthOfField, EffectComposer, Noise } from "@react-three/postprocessing"

import { Bench } from "./components/Bench.jsx"
import { Room } from "./components/Room.jsx"
import { Starfield } from "./components/Starfield.jsx"
import { Moon } from "./components/Moon.jsx"
import { Painting } from "./components/Painting.jsx"
import { Button } from "./components/Button.jsx"

export default function App() {
  const view = useRef()

  return (
    <>
      <div
        ref={view}
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          userSelect: "none",
        }}
      />

      <Canvas eventSource={window.root} frameloop='demand' shadows>
        <Hud renderPriority={2}>
          <ambientLight intensity={1} />
          <OrthographicCamera makeDefault position={[0, 0, 100]} />
          <Button text='wallet' position={[800, 400, 0]} size={50} />
          <Button text='inventory' position={[800, 300, 0]} size={50} />
          <Button text='create' position={[800, 200, 0]} size={50} />
        </Hud>

        <color attach='background' args={["black"]} />

        <EffectComposer>
          <DepthOfField focusDistance={0} focalLength={10} bokehScale={5} height={200} />
        </EffectComposer>

        <PointerLockControls />

        <Starfield factor={3} />

        <Moon scale={2} position={[10, 20, -100]} />

        <Room scale={[6, 3, 60]} />

        <Bench position={[2.5, -1, 0]} />

        <pointLight castShadow distance={15} color='blue' position={[0, 0, -30]} intensity={0.4} />
        <pointLight castShadow distance={15} position={[0, 0, -15]} intensity={0.4} />
        <pointLight castShadow distance={15} color='blue' position={[0, 0, 0]} intensity={0.4} />
        <pointLight castShadow distance={15} position={[0, 0, 15]} intensity={0.4} />
        <pointLight castShadow distance={15} color='blue' position={[0, 0, 30]} intensity={0.4} />

        <pointLight castShadow distance={1} position={[-2.5, 0, 0]} intensity={5} />
        <pointLight castShadow distance={1} position={[-2.5, 0, 2]} intensity={5} />
        <pointLight castShadow distance={1} position={[-2.5, 0, 4]} intensity={5} />
        <pointLight castShadow distance={1} position={[-2.5, 0, -2]} intensity={5} />

        <pointLight castShadow distance={1} position={[-2.5, 0, -10]} intensity={5} />
        <pointLight castShadow distance={1} position={[-2.5, 0, -12]} intensity={5} />
        <pointLight castShadow distance={1} position={[-2.5, 0, -14]} intensity={5} />
        <pointLight castShadow distance={1} position={[-2.5, 0, -16]} intensity={5} />

        <Painting
          position={[-2.9, 0, 4]}
          map='https://res.cloudinary.com/dexin8o58/image/upload/v1676239383/5B758959-5682-4A83-AA20-A429C53AF854_exp9da.jpg'
        />
        <Painting
          map='https://res.cloudinary.com/dexin8o58/image/upload/v1676239388/IMG_5638_vqwa7h.jpg'
          position={[-2.9, 0, 2]}
        />
        <Painting
          map='https://res.cloudinary.com/dexin8o58/image/upload/v1676239389/IMG_5667_fhvrbt.jpg'
          position={[-2.9, 0, 0]}
        />
        <Painting
          map='https://res.cloudinary.com/dexin8o58/image/upload/v1676239388/AACABEAC-F96C-46D9-8AC5-83C5994C7F4E_grnioz.jpg'
          position={[-2.9, 0, -2]}
        />
        <Painting
          position={[-2.9, 0, -10]}
          map='https://res.cloudinary.com/dexin8o58/image/upload/v1685218397/FjLR2_eXEAAbI2J_os2zlu.jpg'
        />
        <Painting
          map='https://res.cloudinary.com/dexin8o58/image/upload/v1685218541/FgKEctFWIAAyFFc_fudqvi.jpg'
          position={[-2.9, 0, -12]}
        />
        <Painting
          map='https://res.cloudinary.com/dexin8o58/image/upload/v1685221244/782ed0d298ebfffca45a5d6a91a4a167_tnmbyn.png'
          position={[-2.9, 0, -14]}
        />
        <Painting
          map='https://res.cloudinary.com/dexin8o58/image/upload/v1685221048/three_j414x5.gif'
          position={[-2.9, 0, -16]}
        />
      </Canvas>
    </>
  )
}
