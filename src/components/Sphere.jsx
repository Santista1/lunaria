export function Sphere({ position, color = 0xffd83d }) {
  return (
    <>
      <group position={position}>
        {/* rotation={[0, 90 * (Math.PI / 180), 16 * (Math.PI / 180)]} */}
        {/* <mesh castShadow>
          <sphereGeometry args={[50, 32, 3, 0, Math.PI * 2, 0, Math.PI * 0.2]} />
          <meshPhongMaterial side={2} color={color} />
        </mesh> */}
        <mesh castShadow rotation={[0, 0, 0]}>
          <sphereGeometry args={[50, 32, 3, 0, Math.PI * 2, Math.PI * 0.34, Math.PI * 0.15]} />
          <meshPhongMaterial side={2} color={color} />
        </mesh>
        <mesh castShadow rotation={[0, 0, 0]}>
          <sphereGeometry args={[50, 32, 3, 0, Math.PI * 2, Math.PI * 0.51, Math.PI * 0.2]} />
          <meshPhongMaterial side={2} color={color} />
        </mesh>
        {/* <mesh castShadow>
          <sphereGeometry args={[50, 32, 3, 0, Math.PI * 2, Math.PI * 0.8, Math.PI * 0.2]} />
          <meshPhongMaterial side={2} color={color} />
        </mesh> */}
      </group>
    </>
  )
}
