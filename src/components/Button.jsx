import { useState } from "react"
import { Text } from "@react-three/drei"

export function Button({ position = [0, 0, 0], model, route, onClick, text = "button", size = 0.2 }) {
  const [hovered, setHover] = useState(false)
  const [width, setWidth] = useState(0)

  return (
    <>
      <Text
        position={[position[0], position[1], position[2] + 0.01]}
        font={"./FuturaStdBook.otf"}
        fontSize={size}
        color='yellow'
        onSync={(text) => setWidth(text.geometry.boundingBox.max.x * 2)}
      >
        {text}
      </Text>
      {model && model}

      <mesh
        position={position}
        onClick={() => onClick && onClick()}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        rotation={[0, 0, 90 * (Math.PI / 180)]}
      >
        <capsuleGeometry args={[size * 0.7, width, 10, 10]} />
        <meshStandardMaterial color='blue' transparent='true' opacity={hovered ? 0.1 : 0.2} depthWrite={false} />
      </mesh>
    </>
  )
}
