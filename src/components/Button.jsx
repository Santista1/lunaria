import { useState } from "react"
import { Text } from "@react-three/drei"

export function Button({ position = [0, 0, 0], onClick, text, size = 0.2, rotation = [0, 0, 0], visible }) {
  const [hovered, setHover] = useState(false)
  const [width, setWidth] = useState(0)

  return (
    <group visible={visible}>
      <Text
        rotation={rotation}
        position={position}
        font={"./JuraBook.ttf"}
        fontSize={size}
        color='yellow'
        onSync={(text) => setWidth(text.geometry.boundingBox.max.x * 2)}
      >
        {text}
      </Text>
      <mesh
        position={[position[0], position[1], position[2]]}
        onClick={() => onClick && onClick()}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        rotation={[rotation[0], rotation[1], rotation[2] + 90 * (Math.PI / 180)]}
      >
        <capsuleGeometry args={[size * 0.7, width, 10, 10]} />
        <meshStandardMaterial color='blue' transparent='true' opacity={hovered ? 0.1 : 0.2} depthWrite={false} />
      </mesh>
    </group>
  )
}
