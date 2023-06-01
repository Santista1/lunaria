export function Bench({ position = [0, 0, 0], scale = [5, 3, 10], thickness = 0.1 }) {
  return (
    <mesh castShadow position={position}>
      <boxGeometry args={[0.6, thickness, 10]} />
      <meshStandardMaterial color='hotpink' />
    </mesh>
  )
}
