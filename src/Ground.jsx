import { CuboidCollider, RigidBody } from "@react-three/rapier"

export function Ground() {
  return (
    <RigidBody type='fixed' colliders={false} friction={2}>
      <CuboidCollider args={[1000, 2, 1000]} position={[0, -50, 0]} />
    </RigidBody>
  )
}
