import { useGLTF } from "@react-three/drei"

export function Cactus({ position, scale }) {
  const cactus = useGLTF("./cactus.gltf")

  return <primitive position={position} scale={scale} object={cactus.scene} />
}
