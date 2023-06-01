import { useTexture } from "@react-three/drei"

export function Painting({
  position = [0, 0, 0],
  scale = [5, 3, 15],
  thickness = 0.01,
  map = "https://res.cloudinary.com/dexin8o58/image/upload/v1676239383/5B758959-5682-4A83-AA20-A429C53AF854_exp9da.jpg",
}) {
  const texture = useTexture({
    map: map,
  })
  return (
    <mesh castShadow position={position}>
      <boxGeometry args={[thickness, 1.5, 1.5]} />
      <meshStandardMaterial {...texture} color='hotpink' />
    </mesh>
  )
}
