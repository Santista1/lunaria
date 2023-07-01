import { lazy, Suspense } from "react"
import { Starfield } from "@/components/world"
import Hallway from "@/Lunaria/Hallway"
const Moon = lazy(() => import("@/components/world/Moon"))
import { Lights } from "@/Lunaria/Lights"
import { Instances } from "@react-three/drei"
import { cubes } from "@/global"
import { Physics } from "@react-three/rapier"
import { Player } from "@/Player"
import { Ring } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"

export function Lunaria() {
  return (
    <>
      <Starfield count={4000} factor={2} />
      <Physics gravity={[0, -3, 0]}>
        <RigidBody type='fixed' friction={20}>
          <Floor />
        </RigidBody>
        <Player />
      </Physics>
      <Suspense>
        <Moon scale={5} />
        <pointLight color='hotpink' distance={20} position={[0, -10, 0]} intensity={2} />
      </Suspense>
      <Cubes />
      <Hallway />
      <Lights />
    </>
  )
}

function Floor() {
  return (
    <Ring rotation={[270 * (Math.PI / 180), 0, 0]} args={[6, 20, 64]} position={[0, -1.5, 0]}>
      <meshPhongMaterial shininess={0} />
    </Ring>
  )
}
function Cubes() {
  return (
    <>
      <Instances>
        <boxGeometry />
        <meshPhongMaterial shininess={0} />
        <cubes.Out />
      </Instances>
    </>
  )
}
