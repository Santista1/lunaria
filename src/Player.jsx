import * as THREE from "three"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useKeyboardControls } from "@react-three/drei"
import { CapsuleCollider, RigidBody } from "@react-three/rapier"

const speed = 5
const direction = new THREE.Vector3()
const frontVector = new THREE.Vector3()
const sideVector = new THREE.Vector3()

export function Player() {
  const ref = useRef()
  const [, get] = useKeyboardControls()

  useFrame((state) => {
    const { forward, backward, left, right } = get()
    const velocity = ref.current.linvel()
    const translation = ref.current.translation()
    state.camera.position.set(translation.x, translation.y, translation.z)
    frontVector.set(0, 0, backward - forward)
    sideVector.set(left - right, 0, 0)
    direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(speed).applyEuler(state.camera.rotation)
    ref.current.setLinvel({ x: direction.x, y: velocity.y, z: direction.z })
  })

  return (
    <RigidBody
      ref={ref}
      colliders={false}
      mass={1}
      type='dynamic'
      position={[0, 1, 0]}
      enabledRotations={[false, false, false]}
    >
      <CapsuleCollider args={[0.75, 1]} />
    </RigidBody>
  )
}
