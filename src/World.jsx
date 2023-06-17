import { Lunaria } from "./Lunaria/Lunaria"
import { Instances } from "@react-three/drei"
import { cubes } from "@/global"

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

export default function World() {
  return (
    <>
      <Cubes />
      <Lunaria />
    </>
  )
}
