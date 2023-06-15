import { useState } from "react"
import { Instances, Instance, CubicBezierLine } from "@react-three/drei"
import { RigidBody, CuboidCollider } from "@react-three/rapier"

import { ui } from "@/global"
import { Button, Slider } from "@/components/gui"
import { Starfield, Moon, Image } from "@/components/world"

export function Lunaria() {
  return (
    <>
      <Hallway pos={[0, 0, 0]} />
      <Starfield count={4000} factor={2} />
      <Moon scale={5} position={[40, 100, -160]} />
      <pointLight distance={70} position={[30, 80, -140]} intensity={10} />
      <Images />
    </>
  )
}

function Hallway({ pos }) {
  return (
    <>
      <Instances>
        <boxGeometry />
        <meshPhongMaterial shininess={0} />
        <Floor pos={pos} />
        <Roof position={[0, 1.5, 0]} />
        <Rail />
        <Walls pos={[0, 0, 45]} />
        <Walls pos={[0, 0, 30]} />
        <Walls pos={[0, 0, 15]} />
        <Walls pos={[0, 0, 0]} />
        <Walls pos={[0, 0, -15]} />
        <Walls pos={[0, 0, -30]} />
        <Walls pos={[0, 0, -45]} />
        <Columns position={[0, 0, 45]} />
        <Columns position={[0, 0, 30]} />
        <Columns position={[0, 0, 15]} />
        <Columns position={[0, 0, 0]} />
        <Columns position={[0, 0, -15]} />
        <Columns position={[0, 0, -30]} />
        <Columns position={[0, 0, -45]} />
      </Instances>
      <Lights />
    </>
  )
}

function Images() {
  return (
    <>
      <group position={[0, 0, 0]}>
        <Image
          color='hotpink'
          position={[-2.89, 0, 3]}
          map='https://res.cloudinary.com/dexin8o58/image/upload/v1676239383/5B758959-5682-4A83-AA20-A429C53AF854_exp9da.jpg'
          owner='OG'
        />
        <Image
          color='hotpink'
          map='https://res.cloudinary.com/dexin8o58/image/upload/v1676239388/IMG_5638_vqwa7h.jpg'
          position={[-2.89, 0, 1]}
          owner='OG'
        />
        <Image
          color='hotpink'
          map='https://res.cloudinary.com/dexin8o58/image/upload/v1676239389/IMG_5667_fhvrbt.jpg'
          position={[-2.89, 0, -1]}
          owner='OG'
        />
        <Image
          color='hotpink'
          map='https://res.cloudinary.com/dexin8o58/image/upload/v1676239388/AACABEAC-F96C-46D9-8AC5-83C5994C7F4E_grnioz.jpg'
          position={[-2.89, 0, -3]}
          owner='OG'
        />
      </group>
      <group position={[0, 0, -15]}>
        <Image
          position={[-2.89, 0, 3]}
          map='https://res.cloudinary.com/dexin8o58/image/upload/v1685218397/FjLR2_eXEAAbI2J_os2zlu.jpg'
          owner='Santista'
        />
        <Image
          map='https://res.cloudinary.com/dexin8o58/image/upload/v1685218541/FgKEctFWIAAyFFc_fudqvi.jpg'
          position={[-2.89, 0, 1]}
          owner='Santista'
        />
        <Image
          map='https://res.cloudinary.com/dexin8o58/image/upload/v1685221244/782ed0d298ebfffca45a5d6a91a4a167_tnmbyn.png'
          position={[-2.89, 0, -1]}
          owner='Santista'
        />
        <Image
          map='https://res.cloudinary.com/dexin8o58/image/upload/v1685221048/three_j414x5.gif'
          position={[-2.89, 0, -3]}
          owner='Santista'
        />
      </group>
      <group position={[0, 0, -30]}>
        <Image
          position={[-2.89, 0, 3]}
          map='https://res.cloudinary.com/dexin8o58/image/upload/v1685998057/snake_gccjdp.png'
          owner='Pholuna'
        />
        <Image
          map='https://res.cloudinary.com/dexin8o58/image/upload/v1685998056/got_lunc_oo6kot.png'
          position={[-2.89, 0, 1]}
          owner='Pholuna'
        />
        <Image
          map='https://res.cloudinary.com/dexin8o58/image/upload/v1685998057/Lunc_for_his_and_her_pleasure_Final_p5u5jd.png'
          position={[-2.89, 0, -1]}
          owner='Pholuna'
        />
        <Image
          map='https://res.cloudinary.com/dexin8o58/image/upload/v1685998056/got_lunc_2_puf4la.png'
          position={[-2.89, 0, -3]}
          owner='Pholuna'
        />
      </group>
    </>
  )
}

function Floor({ pos }) {
  const [gui, setGui] = useState(false)
  const width = 11
  return (
    <>
      <RigidBody colliders={false} type='fixed' friction={20}>
        <CuboidCollider position={[pos[0], pos[1] - 1.5, pos[2]]} args={[width / 2, 0.1, 50]} />
      </RigidBody>
      <Instance
        position={[pos[0], pos[1] - 1.5, pos[2]]}
        scale={[width, 0.1, 100]}
        onClick={(e) => e.which == 3 && setGui(true)}
        onPointerLeave={() => setGui(false)}
      />
      {gui && (
        <ui.In>
          <Button text='Floor' position={[0, 0, 0]} size={40} />
        </ui.In>
      )}
    </>
  )
}

function Roof({ position }) {
  return (
    <>
      <Instance position={[2.9, position[1], 0]} scale={[1.4, 0.1, 100]} />
      <Instance position={[-2.9, position[1], 0]} scale={[1.4, 0.1, 100]} />
      <Instance position={[0, position[1], -49]} scale={[6, 0.1, 2]} />
      <Instance position={[0, position[1], -37.5]} scale={[6, 0.1, 4]} />
      <Instance position={[0, position[1], -22.5]} scale={[6, 0.1, 4]} />
      <Instance position={[0, position[1], -7.5]} scale={[6, 0.1, 4]} />
      <Instance position={[0, position[1], 7.5]} scale={[6, 0.1, 4]} />
      <Instance position={[0, position[1], 22.5]} scale={[6, 0.1, 4]} />
      <Instance position={[0, position[1], 37.5]} scale={[6, 0.1, 4]} />
      <Instance position={[0, position[1], 49]} scale={[6, 0.1, 2]} />
    </>
  )
}

function Rail() {
  const separation = 6
  return (
    <>
      <RigidBody colliders={false} type='fixed'>
        <CuboidCollider position={[separation, -1, 0]} args={[0.5, 0.1, 50]} />
        <CuboidCollider position={[-separation, -1, 0]} args={[0.5, 0.1, 50]} />
      </RigidBody>
      <Instance position={[separation, -1, 0]} scale={[0.3, 0.1, 100]} />
      <Instance position={[-separation, -1, 0]} scale={[0.3, 0.1, 100]} />
    </>
  )
}

function Columns({ position }) {
  return (
    <>
      <Instance position={[2.9, position[1], position[2] + 5]} scale={[0.2, 3, 0.2]} />
      <Instance position={[-2.9, position[1], position[2] + 5]} scale={[0.2, 3, 0.2]} />
      <Instance position={[2.9, position[1], position[2] - 5]} scale={[0.2, 3, 0.2]} />
      <Instance position={[-2.9, position[1], position[2] - 5]} scale={[0.2, 3, 0.2]} />
    </>
  )
}

function Walls({ pos, scale = [0.01, 2, 10] }) {
  const [gui, setGui] = useState(false)
  return (
    <>
      <RigidBody colliders={false} type='fixed'>
        <CuboidCollider position={[-2.9, pos[1], pos[2]]} args={[0.01, 3, 5]} />
        <CuboidCollider position={[2.9, pos[1], pos[2]]} args={[0.01, 3, 5]} />
      </RigidBody>
      <Instance position={[-2.9, pos[1], pos[2]]} scale={scale} onClick={(e) => e.which == 3 && setGui(true)} />
      <Instance position={[2.9, pos[1], pos[2]]} scale={scale} onClick={(e) => e.which == 3 && setGui(true)} />
      {gui && (
        <ui.In>
          <Button text='Walls' position={[0, 0, 0]} size={40} />
          <Slider position={[-300, 100, 0]} scale={[250, 15, 5]} text={"Width: 0.01"} min={0.2} max={1} step={0.01} />
          <Slider position={[-300, 0, 0]} scale={[250, 15, 5]} text={"Height: 3"} min={0.2} max={1} step={0.01} />
          <Slider position={[-300, -100, 0]} scale={[250, 15, 5]} text={"Depth: 5"} min={0.2} max={1} step={0.01} />
          <CubicBezierLine
            start={[-70, 0, 0]}
            end={[-170, 100, 0]}
            midA={[-120, 0, 0]}
            midB={[-150, 100, 0]}
            color='yellow'
            lineWidth={3}
          />
          <CubicBezierLine
            start={[-70, 0, 0]}
            end={[-170, 0, 0]}
            midA={[-70, 0, 0]}
            midB={[-70, 0, 0]}
            color='yellow'
            lineWidth={3}
          />
          <CubicBezierLine
            start={[-70, 0, 0]}
            end={[-170, -100, 0]}
            midA={[-120, 0, 0]}
            midB={[-150, -100, 0]}
            color='yellow'
            lineWidth={3}
          />
        </ui.In>
      )}
    </>
  )
}

function Lights() {
  const [switch0, setSwitch0] = useState(true)
  const [on1, setOn1] = useState(true)
  const [on2, setOn2] = useState(true)
  const [on3, setOn3] = useState(true)
  const [on4, setOn4] = useState(true)
  const [on5, setOn5] = useState(true)
  const [on6, setOn6] = useState(true)

  const coverScale = [0.03, 0.12, 0.08]
  const buttonScale = [0.05, 0.03, 0.03]

  return (
    <>
      <pointLight distance={12} color='blue' position={[0, 0, 45]} intensity={switch0 ? 0.4 : 0} />
      <pointLight distance={12} color='hotpink' position={[0, 0, 30]} intensity={on1 ? 0.4 : 0} />
      <pointLight distance={12} color={0xfdf29f} position={[0, 0, 15]} intensity={on2 ? 0.4 : 0} />
      <pointLight distance={12} color='blue' position={[0, 0, 0]} intensity={on3 ? 0.4 : 0} />
      <pointLight distance={12} color='hotpink' position={[0, 0, -15]} intensity={on4 ? 0.4 : 0} />
      <pointLight distance={12} color={0xfef9d1} position={[0, 0, -30]} intensity={on5 ? 0.4 : 0} />
      <pointLight distance={12} color='blue' position={[0, 0, -45]} intensity={on6 ? 0.4 : 0} />
      <Instances>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial />
        <Instance onClick={() => setSwitch0(!switch0)} color='red' position={[2.9, 0, 4.3 + 45]} scale={buttonScale} />
        <Instance
          onClick={() => setSwitch0(!switch0)}
          color={switch0 ? "white" : "black"}
          position={[2.9, 0, 4.3 + 45]}
          scale={coverScale}
        />
        <Instance onClick={() => setOn1(!on1)} color='red' position={[2.9, 0, 4.3 + 30]} scale={buttonScale} />
        <Instance
          onClick={() => setOn1(!on1)}
          color={on1 ? "white" : "black"}
          position={[2.9, 0, 4.3 + 30]}
          scale={coverScale}
        />
        <Instance onClick={() => setOn2(!on2)} color='red' position={[2.9, 0, 4.3 + 15]} scale={buttonScale} />
        <Instance
          onClick={() => setOn2(!on2)}
          color={on2 ? "white" : "black"}
          position={[2.9, 0, 4.3 + 15]}
          scale={coverScale}
        />
        <Instance onClick={() => setOn3(!on3)} color='red' position={[2.9, 0, 4.3]} scale={buttonScale} />
        <Instance
          onClick={() => setOn3(!on3)}
          color={on3 ? "white" : "black"}
          position={[2.9, 0, 4.3]}
          scale={coverScale}
        />
        <Instance onClick={() => setOn4(!on4)} color='red' position={[2.9, 0, 4.3 - 15]} scale={buttonScale} />
        <Instance
          onClick={() => setOn4(!on4)}
          color={on4 ? "white" : "black"}
          position={[2.9, 0, 4.3 - 15]}
          scale={coverScale}
        />
        <Instance onClick={() => setOn5(!on5)} color='red' position={[2.9, 0, 4.3 - 30]} scale={buttonScale} />
        <Instance
          onClick={() => setOn5(!on5)}
          color={on5 ? "white" : "black"}
          position={[2.9, 0, 4.3 - 30]}
          scale={coverScale}
        />
        <Instance onClick={() => setOn6(!on6)} color='red' position={[2.9, 0, 4.3 - 45]} scale={buttonScale} />
        <Instance
          onClick={() => setOn6(!on6)}
          color={on6 ? "white" : "black"}
          position={[2.9, 0, 4.3 - 45]}
          scale={coverScale}
        />
      </Instances>
    </>
  )
}
