export function Satellite({ position = [0, 0, 0] }) {
  return (
    <mesh position={position}>
      <capsuleGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color='blue' />
    </mesh>
  )
}
