import { Canvas } from "@react-three/fiber"
import { OrthographicCamera, PointerLockControls, Hud, KeyboardControls } from "@react-three/drei"
import { DepthOfField, EffectComposer } from "@react-three/postprocessing"
import { Physics } from "@react-three/rapier"

import { Player } from "./Player"
import { Ground } from "./Ground"

import { Bench, Room, Starfield, Moon, Painting, Button } from "./components"

export default function Lunaria() {
  return (
    <>
      <div className='dot' />
      <KeyboardControls
        map={[
          { name: "forward", keys: ["ArrowUp", "w", "W"] },
          { name: "backward", keys: ["ArrowDown", "s", "S"] },
          { name: "left", keys: ["ArrowLeft", "a", "A"] },
          { name: "right", keys: ["ArrowRight", "d", "D"] },
        ]}
      >
        <Canvas shadows>
          <Hud renderPriority={2}>
            <ambientLight intensity={1} />
            <OrthographicCamera makeDefault position={[0, 0, 200]} />
            <Button text='Connect' position={[780, 430, 0]} size={40} />
            <Button text='Inventory' position={[-780, 430, 0]} size={40} />
          </Hud>

          <color attach='background' args={["black"]} />

          <EffectComposer>
            <DepthOfField focusDistance={0} focalLength={10} bokehScale={5} height={200} />
          </EffectComposer>
          <PointerLockControls />
          <Starfield factor={3} />
          <Moon scale={5} position={[40, 100, -160]} />
          <pointLight distance={100} position={[90, 110, -165]} intensity={5} />
          <Room scale={[6, 3, 60]} />
          <Physics gravity={[0, -20, 0]}>
            <Ground />
            <Player />
          </Physics>
          <Bench position={[2.5, -1, 0]} />

          <pointLight castShadow distance={15} color='blue' position={[0, 0, -30]} intensity={0.4} />
          <pointLight castShadow distance={15} position={[0, 0, -15]} intensity={0.4} />
          <pointLight castShadow distance={15} color='blue' position={[0, 0, 0]} intensity={0.4} />
          <pointLight castShadow distance={15} position={[0, 0, 15]} intensity={0.4} />
          <pointLight castShadow distance={15} color='blue' position={[0, 0, 30]} intensity={0.4} />

          <group position={[0, 0, 0]}>
            <pointLight distance={0.95} position={[-2.5, 0, 3]} intensity={5} />
            <pointLight distance={0.95} position={[-2.5, 0, 1]} intensity={5} />
            <pointLight distance={0.95} position={[-2.5, 0, -1]} intensity={5} />
            <pointLight distance={0.95} position={[-2.5, 0, -3]} intensity={5} />

            <Painting
              color='hotpink'
              position={[-2.95, 0, 3]}
              map='https://res.cloudinary.com/dexin8o58/image/upload/v1676239383/5B758959-5682-4A83-AA20-A429C53AF854_exp9da.jpg'
              owner='OG'
            />
            <Painting
              color='hotpink'
              map='https://res.cloudinary.com/dexin8o58/image/upload/v1676239388/IMG_5638_vqwa7h.jpg'
              position={[-2.95, 0, 1]}
              owner='OG'
            />
            <Painting
              color='hotpink'
              map='https://res.cloudinary.com/dexin8o58/image/upload/v1676239389/IMG_5667_fhvrbt.jpg'
              position={[-2.95, 0, -1]}
              owner='OG'
            />
            <Painting
              color='hotpink'
              map='https://res.cloudinary.com/dexin8o58/image/upload/v1676239388/AACABEAC-F96C-46D9-8AC5-83C5994C7F4E_grnioz.jpg'
              position={[-2.95, 0, -3]}
              owner='OG'
            />
          </group>

          <group position={[0, 0, -15]}>
            <pointLight castShadow distance={1} position={[-2.5, 0, 3]} intensity={2} />
            <pointLight castShadow distance={1} position={[-2.5, 0, 1]} intensity={2} />
            <pointLight castShadow distance={1} position={[-2.5, 0, -1]} intensity={2} />
            <pointLight castShadow distance={1} position={[-2.5, 0, -3]} intensity={2} />
            <Painting
              position={[-2.95, 0, 3]}
              map='https://res.cloudinary.com/dexin8o58/image/upload/v1685218397/FjLR2_eXEAAbI2J_os2zlu.jpg'
            />
            <Painting
              map='https://res.cloudinary.com/dexin8o58/image/upload/v1685218541/FgKEctFWIAAyFFc_fudqvi.jpg'
              position={[-2.95, 0, 1]}
            />
            <Painting
              map='https://res.cloudinary.com/dexin8o58/image/upload/v1685221244/782ed0d298ebfffca45a5d6a91a4a167_tnmbyn.png'
              position={[-2.95, 0, -1]}
            />
            <Painting
              map='https://res.cloudinary.com/dexin8o58/image/upload/v1685221048/three_j414x5.gif'
              position={[-2.95, 0, -3]}
            />
          </group>
        </Canvas>
      </KeyboardControls>
    </>
  )
}
