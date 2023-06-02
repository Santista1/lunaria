import { CuboidCollider, RigidBody } from "@react-three/rapier"

export function Ground() {
  return (
    <RigidBody type='fixed' colliders={false} friction={1}>
      <CuboidCollider args={[1000, 2, 1000]} position={[0, -4, 0]} />
    </RigidBody>
  )
}
