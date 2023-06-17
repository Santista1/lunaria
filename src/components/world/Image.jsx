import { useState } from "react"
import { useTexture, Text, Plane } from "@react-three/drei"
import { useThree } from "@react-three/fiber"

export default function Image({
  position = [0, 0, 0],
  scale = [1.5, 1.5],
  color = "white",
  map,
  owner = "-",
  rotation = [0, 90 * (Math.PI / 180), 0],
}) {
  const [hovered, setHover] = useState(false)
  const texture = useTexture({
    map: map,
  })
  const { camera } = useThree()

  return (
    <>
      {hovered && (
        <Text
          rotation={rotation}
          position={[position[0], position[1] - 0.87, position[2]]}
          font={"./JuraBook.ttf"}
          fontSize={0.1}
          color='yellow'
        >
          {"owner: " + owner}
        </Text>
      )}

      <Plane
        onClick={() => {
          camera.position.set(0, 0, 0)
        }}
        args={scale}
        rotation={rotation}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        position={position}
      >
        <meshBasicMaterial {...texture} color={color} />
      </Plane>
    </>
  )
}
