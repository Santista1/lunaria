import { OrthographicCamera, Hud } from "@react-three/drei"
import { Button, Wallet } from "./components/gui"
import { useChain } from "@cosmos-kit/react"
import { useThree } from "@react-three/fiber"

import { ui } from "./tunnel"

export function Gui() {
  return (
    <Hud renderPriority={2}>
      <OrthographicCamera makeDefault position={[0, 0, 200]} />
      <ambientLight intensity={1} />
      <Main />
      <ui.Out />
    </Hud>
  )
}

function Main() {
  const { connect, status } = useChain("terra")
  const { size } = useThree()
  return (
    <>
      <Button
        text={status === "Disconnected" ? "Connect" : status}
        onClick={() => connect()}
        position={[size.width / 2 - 220, size.height / 2 - 60, 0]}
        size={40}
      />
      <Button text='Inventory' position={[-780, size.height / 2 - 60, 0]} size={40} />
      <Wallet animate position={[size.width / 2 - 40, size.height / 2 - 60, 0]} />
    </>
  )
}
