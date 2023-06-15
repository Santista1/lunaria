import { useThree } from "@react-three/fiber"
import { OrthographicCamera, Hud } from "@react-three/drei"
import { useChain } from "@cosmos-kit/react"

import { ui, touch } from "./global"
import { Button, Wallet } from "./components/gui"

// var audio = new Audio("venus.mp3")

export function Gui() {
  return (
    <Hud renderPriority={touch ? 1 : 2}>
      <OrthographicCamera makeDefault position={[0, 0, 200]} />
      <ambientLight intensity={1} />
      <pointLight position={[100, 100, 100]} intensity={2} />
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
      {!touch && (
        <Button
          text={status === "Disconnected" ? "Connect" : status}
          onClick={() => connect()}
          position={[size.width / 2 - 220, size.height / 2 - 60, 0]}
          size={40}
        />
      )}
      <Button text='Inventory' onClick={() => null} position={[-780, size.height / 2 - 60, 0]} size={40} />
      <Wallet onClick={() => connect()} animate position={[size.width / 2 - 40, size.height / 2 - 60, 0]} />
    </>
  )
}
