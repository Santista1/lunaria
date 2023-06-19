import { useState } from "react"
import * as THREE from "three"
import { Instance } from "@react-three/drei"
import { RigidBody, CuboidCollider } from "@react-three/rapier"
import { useFrame } from "@react-three/fiber"
import { cubes } from "@/global"

import { Wall } from "@/Lunaria/Wall"

export default function Hallway() {
  return (
    <>
      <RigidBody colliders={false} type='fixed' friction={20}>
        <CuboidCollider position={[0, -1.5, 0]} args={[11 / 2, 0.1, 100]} />
      </RigidBody>
      <cubes.In>
        <Floor2 position={[0, -1.5, 0]} />
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
  const x = 4

  return (
    <>
      <group position={[0, 0, 0]}>
        <Wall pos={[x, -3, 0]} />
        <Wall pos={[x, 0, 0]} />
        <Wall pos={[x, 3, 0]} />
      </group>

      <Wall pos={[x, y, 45]} />
      <Wall pos={[x, y, 30]} />
      <Wall pos={[x, y, 15]} />

      <Wall pos={[x, 0, -15]} />
      <Wall pos={[x, y, -30]} />
      <Wall pos={[x, y, -45]} />
      <Wall pos={[-x, y, 45]} />
      <Wall pos={[-x, y, 30]} />
      <Wall pos={[-x, y, 15]} />
      <Wall pos={[-x, 0, 0]} />
      <Wall pos={[-x, 0, -15]} />
      <Wall pos={[-x, y, -30]} />
      <Wall pos={[-x, y, -45]} />
      <group position={[0, 3, 0]}>
        <Wall pos={[x, y, 45]} />
        <Wall pos={[x, y, 30]} />
        <Wall pos={[x, y, 15]} />

        <Wall pos={[x, 0, -15]} />
        <Wall pos={[x, y, -30]} />
        <Wall pos={[x, y, -45]} />
        <Wall pos={[-x, y, 45]} />
        <Wall pos={[-x, y, 30]} />
        <Wall pos={[-x, y, 15]} />
        <Wall pos={[-x, 0, 0]} />
        <Wall pos={[-x, 0, -15]} />
        <Wall pos={[-x, y, -30]} />
        <Wall pos={[-x, y, -45]} />
      </group>
      <group position={[0, -3, 0]}>
        <Wall pos={[x, y, 45]} />
        <Wall pos={[x, y, 30]} />
        <Wall pos={[x, y, 15]} />
        <Wall pos={[x, 0, -15]} />
        <Wall pos={[x, y, -30]} />
        <Wall pos={[x, y, -45]} />
        <Wall pos={[-x, y, 45]} />
        <Wall pos={[-x, y, 30]} />
        <Wall pos={[-x, y, 15]} />
        <Wall pos={[-x, 0, 0]} />
        <Wall pos={[-x, 0, -15]} />
        <Wall pos={[-x, y, -30]} />
        <Wall pos={[-x, y, -45]} />
      </group>
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

function Rail() {
  const separation = 2
  return (
    <>
      <RigidBody colliders={false} type='fixed'>
        <CuboidCollider position={[separation, -1, 0]} args={[0.1, 0.1, 100]} />
        <CuboidCollider position={[-separation, -1, 0]} args={[0.1, 0.1, 100]} />
      </RigidBody>
      <Instance position={[separation, -1, 0]} scale={[0.1, 0.1, 200]} />
      <Instance position={[-separation, -1, 0]} scale={[0.1, 0.1, 200]} />
    </>
  )
}

function Columns({ position }) {
  return (
    <>
      <Instance position={[4, position[1], position[2] + 4.5]} scale={[0.2, 30, 0.2]} />
      <Instance position={[-4, position[1], position[2] + 4.5]} scale={[0.2, 30, 0.2]} />
      <Instance position={[4, position[1], position[2] - 4.5]} scale={[0.2, 30, 0.2]} />
      <Instance position={[-4, position[1], position[2] - 4.5]} scale={[0.2, 30, 0.2]} />
    </>
  )
}
