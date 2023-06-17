import { useState } from "react"
import * as THREE from "three"
import { Instances, Instance } from "@react-three/drei"
import { RigidBody, CuboidCollider } from "@react-three/rapier"
import { useFrame } from "@react-three/fiber"
import { cubes } from "@/global"

import { Wall } from "./Wall"

export default function Hallway() {
  return (
    <>
      <cubes.In>
        <Floor pos={[0, 0, 0]} />
        <Roof2 position={[0, -1.5, 0]} />
        <Roof position={[0, 3, 0]} />
        <Rail />
        <Walls />
        <Columns position={[0, 0, 45]} />
        <Columns position={[0, 0, 30]} />
        <Columns position={[0, 0, 15]} />
        <Columns position={[0, 0, 0]} />
        <Columns position={[0, 0, -15]} />
        <Columns position={[0, 0, -30]} />
        <Columns position={[0, 0, -45]} />
      </cubes.In>
      <Lights />
    </>
  )
}

var clock = new THREE.Clock()

function Walls() {
  const [y, setY] = useState(0)
  useFrame(() => {
    var time = clock.getElapsedTime()
    setY(Math.sin(time * 1) * 2)
  })

  return (
    <>
      <Wall pos={[2.9, y, 45]} />
      <Wall pos={[2.9, y, 30]} />
      <Wall pos={[2.9, y, 15]} />
      <Wall pos={[2.9, 0, 0]} />
      <Wall pos={[2.9, 0, -15]} />
      <Wall pos={[2.9, 0, -30]} />
      <Wall pos={[2.9, 0, -45]} />
      <Wall pos={[-2.9, 0, 45]} />
      <Wall pos={[-2.9, 0, 30]} />
      <Wall pos={[-2.9, 0, 15]} />
      <Wall pos={[-2.9, 0, 0]} />
      <Wall pos={[-2.9, 0, -15]} />
      <Wall pos={[-2.9, 0, -30]} />
      <Wall pos={[-2.9, 0, -45]} />
    </>
  )
}

function Floor({ pos }) {
  const width = 11
  return (
    <>
      <RigidBody colliders={false} type='fixed' friction={20}>
        <CuboidCollider position={[pos[0], pos[1] - 1.5, pos[2]]} args={[width / 2, 0.1, 100]} />
      </RigidBody>
      {/* <Instance
        position={[pos[0], pos[1] - 1.5, pos[2]]}
        scale={[width, 0.1, 200]}
        onClick={(e) => e.which == 3 && setGui(true)}
        onPointerLeave={() => setGui(false)}
      /> */}
    </>
  )
}

function Roof2({ position }) {
  return (
    <>
      <Instance position={[0, position[1], 0]} scale={[3, 0.1, 200]} />
      {/* <Instance position={[-2.9, position[1], 0]} scale={[1.4, 0.1, 200]} /> */}
      <Instance position={[0, position[1], -49]} scale={[10, 0.1, 2]} />
      <Instance position={[0, position[1], -37.5]} scale={[10, 0.1, 4]} />
      <Instance position={[0, position[1], -22.5]} scale={[10, 0.1, 4]} />
      <Instance position={[0, position[1], -7.5]} scale={[10, 0.1, 4]} />
      <Instance position={[0, position[1], 7.5]} scale={[10, 0.1, 4]} />
      <Instance position={[0, position[1], 22.5]} scale={[10, 0.1, 4]} />
      <Instance position={[0, position[1], 37.5]} scale={[10, 0.1, 4]} />
      <Instance position={[0, position[1], 49]} scale={[10, 0.1, 2]} />
    </>
  )
}

function Roof({ position }) {
  return (
    <>
      <Instance position={[2.9, position[1], 0]} scale={[1.4, 0.1, 200]} />
      <Instance position={[-2.9, position[1], 0]} scale={[1.4, 0.1, 200]} />
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
        <CuboidCollider position={[separation, -1, 0]} args={[0.5, 0.1, 100]} />
        <CuboidCollider position={[-separation, -1, 0]} args={[0.5, 0.1, 100]} />
      </RigidBody>
      <Instance position={[separation, -1, 0]} scale={[0.3, 0.1, 200]} />
      <Instance position={[-separation, -1, 0]} scale={[0.3, 0.1, 200]} />
    </>
  )
}

function Columns({ position }) {
  return (
    <>
      <Instance position={[2.9, position[1], position[2] + 4.5]} scale={[0.2, 6, 0.2]} />
      <Instance position={[-2.9, position[1], position[2] + 4.5]} scale={[0.2, 6, 0.2]} />
      <Instance position={[2.9, position[1], position[2] - 4.5]} scale={[0.2, 6, 0.2]} />
      <Instance position={[-2.9, position[1], position[2] - 4.5]} scale={[0.2, 6, 0.2]} />
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
