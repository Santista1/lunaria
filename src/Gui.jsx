import { OrthographicCamera, Hud, OrbitControls, Instances, Instance } from "@react-three/drei"
import { Button, Wallet } from "./components/gui"

import tunnel from "tunnel-rat"
export const ui = tunnel()

export function Gui() {
  return (
    <Hud renderPriority={2}>
      <OrthographicCamera makeDefault position={[0, 0, 200]} />
      <ambientLight intensity={1} />
      <OrbitControls />
      <Main />
      <ui.Out />
    </Hud>
  )
}

function Main() {
  return (
    <>
      <Button text='Connect' position={[740, 430, 0]} size={40} />
      <Button text='Inventory' position={[-780, 430, 0]} size={40} />
      <Wallet animate position={[890, 430, 0]} />
    </>
  )
}
