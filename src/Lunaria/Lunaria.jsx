import { lazy, Suspense } from "react"
import { Starfield } from "@/components/world"
import Hallway from "@/Lunaria/Hallway"
const Moon = lazy(() => import("@/components/world/Moon"))
const Images = lazy(() => import("@/Lunaria/Images"))

export function Lunaria() {
  return (
    <>
      <Starfield count={4000} factor={2} />
      <Hallway pos={[0, 0, 0]} />
      <Suspense>
        <Moon scale={5} position={[40, 100, -160]} />
        <pointLight distance={70} position={[30, 80, -140]} intensity={10} />
      </Suspense>
      <Suspense>
        <Images />
      </Suspense>
    </>
  )
}
