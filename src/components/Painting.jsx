import { useState } from "react"
import { useTexture, Box } from "@react-three/drei"
import { Button } from "./Button.jsx"

export function Painting({
  position = [0, 0, 0],
  scale = [5, 3, 15],
  color = "white",
  thickness = 0.01,
  map = "https://res.cloudinary.com/dexin8o58/image/upload/v1676239383/5B758959-5682-4A83-AA20-A429C53AF854_exp9da.jpg",
  owner = "-",
}) {
  const [hovered, setHover] = useState(false)
  const texture = useTexture({
    map: map,
  })
  return (
    <>
      {hovered && (
        <Button
          position={[position[0] + 0.01, position[1] - 0.9, position[2]]}
          text={"Owner: " + owner}
          size={0.1}
          rotation={[0, 90 * (Math.PI / 180), 0]}
        />
      )}

      <Box
        args={[thickness, 1.5, 1.5]}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        position={position}
      >
        <meshStandardMaterial {...texture} color={color} />
      </Box>
    </>
  )
}
