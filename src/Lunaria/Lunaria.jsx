import { lazy, Suspense } from "react"
import { Starfield } from "@/components/world"
import Hallway from "@/Lunaria/Hallway"
const Moon = lazy(() => import("@/components/world/Moon"))
import { Lights } from "@/Lunaria/Lights"
import { Physics } from "@react-three/rapier"
import { Player } from "@/Player"
import { Ring, Extrude } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"

export function Lunaria() {
  return (
    <>
      <Starfield count={4000} factor={2} />
      <Physics gravity={[0, -3, 0]}>
        <RigidBody type='fixed' friction={20}>
          <Ring rotation={[270 * (Math.PI / 180), 0, 0]} args={[10, 15, 64]} position={[0, -1.5, 0]}>
            <meshPhongMaterial shininess={0} />
          </Ring>
        </RigidBody>
        <Player />
      </Physics>
      <Suspense>
        <Moon scale={5} />
        <pointLight color='hotpink' distance={20} position={[0, -10, 0]} intensity={2} />
      </Suspense>
      <Hallway />
      <Lights />
      {/* <Extrude rotation={[-Math.PI / 2, 0, 0]} args={[shapeLine, extrudeSettings]} DoubleSide={false}>
        <meshPhysicalMaterial />
      </Extrude> */}
      <Ring rotation={[270 * (Math.PI / 180), 0, 0]} args={[15.8, 16, 64]} position={[0, -1, 0]}>
        <meshPhongMaterial shininess={0} />
      </Ring>
      <Ring rotation={[270 * (Math.PI / 180), 0, 0]} args={[8.8, 9 , 64]} position={[0, -1, 0]}>
        <meshPhongMaterial shininess={0} />
      </Ring>
    </>
  )
}
