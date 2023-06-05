import { RigidBody, CuboidCollider } from "@react-three/rapier"
import { Instances, Instance } from "@react-three/drei"

export function Hallway() {
  return (
    <>
      <pointLight castShadow distance={15} color='blue' position={[0, 0, 0]} intensity={0.4} />
      <pointLight castShadow distance={15} color='hotpink' position={[0, 0, -15]} intensity={0.4} />
      <pointLight castShadow distance={15} color='blue' position={[0, 0, -30]} intensity={0.4} />
      <pointLight castShadow distance={15} color='hotpink' position={[0, 0, -45]} intensity={0.4} />
      <pointLight castShadow distance={15} color='blue' position={[0, 0, -60]} intensity={0.4} />
      <pointLight castShadow distance={15} color='hotpink' position={[0, 0, -75]} intensity={0.4} />
      <pointLight castShadow distance={15} color='blue' position={[0, 0, -90]} intensity={0.4} />

      <Instances>
        <boxGeometry />
        <meshPhongMaterial shininess={0} />
        <Floor />
        <Columns position={[0, 0, 0]} />
        <Columns position={[0, 0, -15]} />
        <Columns position={[0, 0, -30]} />
        <Columns position={[0, 0, -45]} />
        <Columns position={[0, 0, -60]} />
        <Columns position={[0, 0, -75]} />
        <Columns position={[0, 0, -90]} />
        <Walls position={[0, 0, 0]} />
        <Walls position={[0, 0, -15]} />
        <Walls position={[0, 0, -30]} />
        <Walls position={[0, 0, -45]} />
        <Walls position={[0, 0, -60]} />
        <Walls position={[0, 0, -75]} />
        <Walls position={[0, 0, -90]} />
        <Roof />
        <Rail />
      </Instances>
    </>
  )
}

function Roof() {
  return (
    <>
      <Instance position={[2.9, 1.5, -45]} scale={[1, 0.1, 105]} />
      <Instance position={[-2.9, 1.5, -45]} scale={[1, 0.1, 105]} />
      <Instance position={[0, 1.5, 6.5]} scale={[5, 0.1, 2]} />
      <Instance position={[0, 1.5, -7.5]} scale={[5, 0.1, 6]} />
      <Instance position={[0, 1.5, -22.5]} scale={[5, 0.1, 6]} />
      <Instance position={[0, 1.5, -37.5]} scale={[5, 0.1, 6]} />
      <Instance position={[0, 1.5, -52.5]} scale={[5, 0.1, 6]} />
      <Instance position={[0, 1.5, -67.5]} scale={[5, 0.1, 6]} />
      <Instance position={[0, 1.5, -82.5]} scale={[5, 0.1, 6]} />
      <Instance position={[0, 1.5, -96.5]} scale={[5, 0.1, 2]} />
    </>
  )
}

function Floor() {
  return (
    <>
      <RigidBody colliders={false} type='fixed' friction={20}>
        <CuboidCollider args={[6, 0.1, 105]} position={[0, -1.5, -45]} />
      </RigidBody>
      <Instance position={[0, -1.5, -45]} scale={[6, 0.1, 105]} />
    </>
  )
}

function Rail() {
  return (
    <>
      <RigidBody colliders={false} type='fixed'>
        <CuboidCollider position={[3.2, -1, -45]} args={[0.5, 0.1, 52.5]} />
        <CuboidCollider position={[-3.2, -1, -45]} args={[0.5, 0.1, 52.5]} />
        <CuboidCollider position={[0, -1, 7.5]} args={[6.5, 0.1, 0.3]} />
      </RigidBody>
      <Instance position={[3.2, -1, -45]} scale={[0.3, 0.1, 105]} />
      <Instance position={[-3.2, -1, -45]} scale={[0.3, 0.1, 105]} />
      <Instance position={[0, -1, 7.5]} scale={[6.5, 0.1, 0.3]} />
    </>
  )
}

function Columns({ position }) {
  return (
    <>
      <Instance position={[2.9, 0, position[2] + 4.5]} scale={[0.2, 3, 0.2]} />
      <Instance position={[-2.9, 0, position[2] + 4.5]} scale={[0.2, 3, 0.2]} />
      <Instance position={[2.9, 0, position[2] - 4.5]} scale={[0.2, 3, 0.2]} />
      <Instance position={[-2.9, 0, position[2] - 4.5]} scale={[0.2, 3, 0.2]} />
    </>
  )
}

function Walls({ position, scale = [0.01, 3, 9] }) {
  return (
    <>
      <Instance position={[-2.9, 0, position[2]]} scale={scale} />
      <Instance position={[-2.9, 0, position[2]]} scale={scale} />
      <Instance position={[2.9, 0, position[2]]} scale={scale} />
      <Instance position={[-2.9, 0, position[2]]} scale={scale} />
    </>
  )
}

function Section({ Box, position = [0, 0, 0], scale = [10, 10, 10], thickness = 0.1, color }) {
  return (
    <>
      <pointLight castShadow distance={15} color={color} position={position} intensity={0.4} />
    </>
  )
}
