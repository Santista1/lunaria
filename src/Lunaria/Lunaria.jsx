import { lazy, Suspense } from "react"

import { Starfield } from "@/components/world"
import Hallway from "@/Lunaria/Hallway"
const Moon = lazy(() => import("@/components/world/Moon"))
import { Lights } from "@/Lunaria/Lights"
import { Instances } from "@react-three/drei"
import { cubes } from "@/global"
import { Physics } from "@react-three/rapier"
import Images from "@/Lunaria/Html"
import { Player } from "@/Player"

export function Lunaria() {
  return (
    <>
      <Starfield count={4000} factor={2} />
      <Physics gravity={[0, -3, 0]}>
        <Hallway pos={[0, 0, 0]} />
        <Cubes />
        <Player />
      </Physics>
      <Suspense>
        <Moon scale={5} position={[40, 100, -160]} />
        <pointLight distance={70} position={[30, 80, -140]} intensity={10} />
      </Suspense>
      <Lights />
      <Images />
    </>
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
