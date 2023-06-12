import { useState, useRef } from "react"
import { useCursor, useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useThree } from "@react-three/fiber"

export const Moon = ({ route = "/", ...props }) => {
  const [hovered, hover] = useState(false)
  const texture = useTexture({
    map: "https://res.cloudinary.com/dexin8o58/image/upload/v1684959064/moon_s8cjwu.jpg",
    // bumpMap: "https://res.cloudinary.com/dexin8o58/image/upload/v1684959161/WAC_GLD100_E000N1800_016P_u5nn36.jpg",
  })
  useCursor(hovered)
  const mesh = useRef()
  const { invalidate } = useThree()
  const { gl } = useThree()
  useFrame((state, delta) => {
    invalidate()
    mesh.current.rotation.y += delta * 0.1
  })

  return (
    <mesh
      ref={mesh}
      onUpdate={() => (gl.autoClear = false)}
      onClick={() => {}}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      {...props}
    >
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial {...texture} bumpScale={0.03} color={hovered ? "hotpink" : "white"} />
    </mesh>
  )
}
