import { Instance, Ring } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"
import { cubes } from "@/global"

export default function Hallway() {
  return (
    <>
      <cubes.In>
        <Walls />
        <Instance position={[15, 0, 4.5]} scale={[0.2, 50, 0.2]} />
        <Instance position={[15, 0, -4.5]} scale={[0.2, 50, 0.2]} />
      </cubes.In>
      <RigidBody type='fixed' friction={20}>
        <Ring rotation={[270 * (Math.PI / 180), 0, 0]} args={[6, 20, 64]} position={[0, -1.5, 0]}>
          <meshPhongMaterial shininess={0} />
        </Ring>
      </RigidBody>
    </>
  )
}

function Walls() {
  return (
    <>
      <group position={[15, 0, 0]}>
        <Instance position={[0, -3, 0]} scale={[0.01, 2, 9]} />
        <Instance position={[0, 0, 0]} scale={[0.01, 2, 9]} />
        <Instance position={[0, 3, 0]} scale={[0.01, 2, 9]} />
      </group>
      <group position={[15, 6, 0]}>
        <Instance position={[0, -3, 0]} scale={[0.01, 2, 9]} />
        <Instance position={[0, 0, 0]} scale={[0.01, 2, 9]} />
        <Instance position={[0, 3, 0]} scale={[0.01, 2, 9]} />
      </group>
    </>
  )
}
