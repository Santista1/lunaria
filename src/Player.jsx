import * as THREE from "three"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useKeyboardControls } from "@react-three/drei"
import { CapsuleCollider, RigidBody } from "@react-three/rapier"

const max = 4
const speed = 5
const direction = new THREE.Vector3()
const frontVector = new THREE.Vector3()
const sideVector = new THREE.Vector3()

export function Player() {
  const ref = useRef()
  const [, get] = useKeyboardControls()

  // useFrame((state) => {
  //   const { forward, backward, left, right } = get()
  //   frontVector.set(0, 0, backward - forward)
  //   sideVector.set(left - right, 0, 0)
  //   direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(speed).applyEuler(state.camera.rotation)
  //   const velocity = ref.current.linvel()
  //   ref.current.setLinvel({ x: direction.x, y: velocity.y, z: direction.z })
  //   const translation = ref.current.translation()
  //   state.camera.position.set(translation.x, translation.y, translation.z)

  //   console.log(ref.current.translation())
  // })

  useFrame((state) => {
    const { forward, backward, left, right } = get()

    const impulse = { x: 0, y: 0, z: 0 }
    const velocity = ref.current.linvel()

    frontVector.set(0, 0, backward - forward)
    sideVector.set(left - right, 0, 0)
    direction.subVectors(frontVector, sideVector).normalize().applyEuler(state.camera.rotation)

    console.log(velocity)

    if (forward && velocity.z > -max && velocity.z < max && velocity.x > -max && velocity.x < max) {
      impulse.z += direction.z * speed
      impulse.x += direction.x * speed
    }
    if (backward && velocity.z > -max && velocity.z < max && velocity.x > -max && velocity.x < max) {
      impulse.z += direction.z * speed
      impulse.x += direction.x * speed
    }
    if (left && velocity.z > -max && velocity.z < max && velocity.x > -max && velocity.x < max) {
      impulse.z += direction.z * speed
      impulse.x += direction.x * speed
    }
    if (right && velocity.z > -max && velocity.z < max && velocity.x > -max && velocity.x < max) {
      impulse.z += direction.z * speed
      impulse.x += direction.x * speed
    }

    ref.current.applyImpulse(impulse, true)

    const translation = ref.current.translation()
    state.camera.position.set(translation.x, translation.y, translation.z)
  })

  return (
    // <RigidBody
    //   ref={ref}
    //   colliders={false}
    //   mass={1}
    //   type='dynamic'
    //   position={[0, 10, 0]}
    //   enabledRotations={[false, false, false]}
    // >
    //   <CapsuleCollider args={[0.75, 1]} />
    // </RigidBody>
    <RigidBody ref={ref} colliders={false} type='dynamic' position-y={10} enabledRotations={[false, false, false]}>
      <CapsuleCollider args={[0.75, 1]} />
    </RigidBody>
  )
}
