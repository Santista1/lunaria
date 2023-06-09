import { useState } from "react"
import { useTexture, Box, Text, Plane } from "@react-three/drei"
import { useThree } from "@react-three/fiber"

export function Poster({
  position = [0, 0, 0],
  scale = [0.01, 1.5, 1.5],
  color = "white",
  thickness = 0.01,
  map = "https://res.cloudinary.com/dexin8o58/image/upload/v1676239383/5B758959-5682-4A83-AA20-A429C53AF854_exp9da.jpg",
  owner = "-",
}) {
  const [hovered, setHover] = useState(false)
  const texture = useTexture({
    map: map,
  })
  const { camera } = useThree()

  return (
    <>
      <Text
        rotation={[0, 90 * (Math.PI / 180), 0]}
        position={[position[0] + 0.01, position[1] - 0.87, position[2]]}
        font={"./JuraBook.ttf"}
        fontSize={0.1}
        color='yellow'
        visible={hovered}
      >
        {"owner: " + owner}
      </Text>

      <Plane
        onClick={() => {
          camera.position.set(0, 0, 0)
        }}
        args={[1.5, 1.5]}
        rotation={[0, 90 * (Math.PI / 180), 0]}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        position={position}
      >
        <meshBasicMaterial {...texture} color={color} />
      </Plane>
    </>
  )
}
