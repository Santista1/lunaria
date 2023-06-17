import { Lunaria } from "./Lunaria/Lunaria"
import { Instances } from "@react-three/drei"
import { boxes } from "@/global"

function Cubes() {
  return (
    <>
      <Instances>
        <boxGeometry />
        <meshPhongMaterial shininess={0} />
        <boxes.Out />
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
