import { useState } from "react"

export function Lights() {
  const [switch0, setSwitch0] = useState(true)
  const [on1, setOn1] = useState(true)
  const [on2, setOn2] = useState(true)
  const [on3, setOn3] = useState(true)
  const [on4, setOn4] = useState(true)
  const [on5, setOn5] = useState(true)
  const [on6, setOn6] = useState(true)

  return (
    <>
      <pointLight distance={15} color='blue' position={[-12, 5, 0]} intensity={switch0 ? 2 : 0} />
      <pointLight distance={15} color='hotpink' position={[-9, 5, -9]} intensity={on1 ? 2 : 0} />
      <pointLight distance={15} color={0xfdf29f} position={[0, 5, -12]} intensity={on2 ? 2 : 0} />
      <pointLight distance={15} color='blue' position={[9, 5, -9]} intensity={on3 ? 2 : 0} />
      <pointLight distance={15} color='hotpink' position={[12, 5, 0]} intensity={on4 ? 2 : 0} />
      <pointLight distance={15} color={0xfef9d1} position={[9, 5, 9]} intensity={on5 ? 2 : 0} />
      <pointLight distance={15} color='blue' position={[0, 5, 12]} intensity={on6 ? 2 : 0} />
    </>
  )
}
