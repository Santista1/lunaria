import { RigidBody } from "@react-three/rapier"

export function Ground() {
  return (
    <RigidBody type='fixed' colliders={"cuboid"}>
      <mesh receiveShadow position={[0, 0, 0]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[1000, 1000]} />
        <meshStandardMaterial color='blue' />
      </mesh>
    </RigidBody>
  )
}
