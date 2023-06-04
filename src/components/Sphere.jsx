export function Sphere({ args, position = [0, 0, 0] }) {
  return (
    <mesh castShadow position={position}>
      <sphereGeometry args={args} />
      <meshStandardMaterial side={2} color={0xffd83d} />
    </mesh>
  )
}
