import { useState } from "react"
import * as THREE from "three"
import { Instance } from "@react-three/drei"
import { RigidBody, CuboidCollider } from "@react-three/rapier"
import { useFrame } from "@react-three/fiber"
import { cubes } from "@/global"

import { Wall } from "@/Lunaria/Wall"
import { Lights } from "@/Lunaria/Lights"

export default function Hallway() {
  return (
    <>
      <cubes.In>
        <Floor pos={[0, 0, 0]} />
        <Floor2 position={[0, -1.5, 0]} />
        {/* <Roof position={[0, 3, 0]} /> */}
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
      <Wall pos={[2.9, y, -30]} />
      <Wall pos={[2.9, y, -45]} />
      <Wall pos={[-2.9, y, 45]} />
      <Wall pos={[-2.9, y, 30]} />
      <Wall pos={[-2.9, y, 15]} />
      <Wall pos={[-2.9, 0, 0]} />
      <Wall pos={[-2.9, 0, -15]} />
      <Wall pos={[-2.9, y, -30]} />
      <Wall pos={[-2.9, y, -45]} />
      <group position={[0, 3, 0]}>
        <Wall pos={[2.9, y, 45]} />
        <Wall pos={[2.9, y, 30]} />
        <Wall pos={[2.9, y, 15]} />
        <Wall pos={[2.9, 0, 0]} />
        <Wall pos={[2.9, 0, -15]} />
        <Wall pos={[2.9, y, -30]} />
        <Wall pos={[2.9, y, -45]} />
        <Wall pos={[-2.9, y, 45]} />
        <Wall pos={[-2.9, y, 30]} />
        <Wall pos={[-2.9, y, 15]} />
        <Wall pos={[-2.9, 0, 0]} />
        <Wall pos={[-2.9, 0, -15]} />
        <Wall pos={[-2.9, y, -30]} />
        <Wall pos={[-2.9, y, -45]} />
      </group>
      <group position={[0, -3, 0]}>
        <Wall pos={[2.9, y, 45]} />
        <Wall pos={[2.9, y, 30]} />
        <Wall pos={[2.9, y, 15]} />
        <Wall pos={[2.9, 0, 0]} />
        <Wall pos={[2.9, 0, -15]} />
        <Wall pos={[2.9, y, -30]} />
        <Wall pos={[2.9, y, -45]} />
        <Wall pos={[-2.9, y, 45]} />
        <Wall pos={[-2.9, y, 30]} />
        <Wall pos={[-2.9, y, 15]} />
        <Wall pos={[-2.9, 0, 0]} />
        <Wall pos={[-2.9, 0, -15]} />
        <Wall pos={[-2.9, y, -30]} />
        <Wall pos={[-2.9, y, -45]} />
      </group>
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

function Floor2({ position }) {
  return (
    <>
      <Instance position={[0, position[1], 0]} scale={[3, 0.1, 200]} />
    </>
  )
}

// function Roof({ position }) {
//   return (
//     <>
//       <Instance position={[2.9, position[1], 0]} scale={[1.4, 0.1, 200]} />
//       <Instance position={[-2.9, position[1], 0]} scale={[1.4, 0.1, 200]} />
//       <Instance position={[0, position[1], -49]} scale={[6, 0.1, 2]} />
//       <Instance position={[0, position[1], -37.5]} scale={[6, 0.1, 4]} />
//       <Instance position={[0, position[1], -22.5]} scale={[6, 0.1, 4]} />
//       <Instance position={[0, position[1], -7.5]} scale={[6, 0.1, 4]} />
//       <Instance position={[0, position[1], 7.5]} scale={[6, 0.1, 4]} />
//       <Instance position={[0, position[1], 22.5]} scale={[6, 0.1, 4]} />
//       <Instance position={[0, position[1], 37.5]} scale={[6, 0.1, 4]} />
//       <Instance position={[0, position[1], 49]} scale={[6, 0.1, 2]} />
//     </>
//   )
// }

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
      <Instance position={[2.9, position[1], position[2] + 4.5]} scale={[0.2, 30, 0.2]} />
      <Instance position={[-2.9, position[1], position[2] + 4.5]} scale={[0.2, 30, 0.2]} />
      <Instance position={[2.9, position[1], position[2] - 4.5]} scale={[0.2, 30, 0.2]} />
      <Instance position={[-2.9, position[1], position[2] - 4.5]} scale={[0.2, 30, 0.2]} />
    </>
  )
}
