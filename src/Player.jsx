import * as THREE from "three"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useKeyboardControls } from "@react-three/drei"
import { CapsuleCollider, RigidBody } from "@react-three/rapier"

const walk = 3
const run = 6
const speed = 5
const direction = new THREE.Vector3()
const frontVector = new THREE.Vector3()
const sideVector = new THREE.Vector3()

export function Player() {
  const ref = useRef()
  const [, get] = useKeyboardControls()

  useFrame((state) => {
    const { forward, backward, left, right, shift } = get()

    const impulse = { x: 0, y: 0, z: 0 }
    const velocity = ref.current.linvel()

    frontVector.set(0, 0, backward - forward)
    sideVector.set(left - right, 0, 0)
    direction.subVectors(frontVector, sideVector).normalize().applyEuler(state.camera.rotation)

    const max = shift ? run : walk

    if (forward && Math.abs(velocity.z) + Math.abs(velocity.x) < max) {
      impulse.z += direction.z * speed
      impulse.x += direction.x * speed
    }
    if (backward && Math.abs(velocity.z) + Math.abs(velocity.x) < max) {
      impulse.z += direction.z * speed
      impulse.x += direction.x * speed
    }
    if (left && Math.abs(velocity.z) + Math.abs(velocity.x) < max) {
      impulse.z += direction.z * speed
      impulse.x += direction.x * speed
    }
    if (right && Math.abs(velocity.z) + Math.abs(velocity.x) < max) {
      impulse.z += direction.z * speed
      impulse.x += direction.x * speed
    }

    ref.current.applyImpulse(impulse, true)

    const translation = ref.current.translation()
    state.camera.position.set(translation.x, translation.y, translation.z)
  })

  return (
    <RigidBody ref={ref} position-y={1.5} colliders={false} type='dynamic' enabledRotations={[false, false, false]}>
      <CapsuleCollider args={[0.75, 0.5]} />
    </RigidBody>
  )
}
