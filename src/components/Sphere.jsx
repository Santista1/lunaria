export function Sphere({ args, position = [0, 0, 0] }) {
  return (
    <mesh castShadow position={position}>
      <sphereGeometry args={args} />
      <meshStandardMaterial color='hotpink' />
    </mesh>
  )
}
