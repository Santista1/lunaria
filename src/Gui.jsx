import { OrthographicCamera, Hud } from "@react-three/drei"
import { Button } from "./components"

import tunnel from "tunnel-rat"
export const ui = tunnel()

export function Gui() {
  return (
    <Hud renderPriority={2}>
      <ambientLight intensity={1} />
      <OrthographicCamera makeDefault position={[0, 0, 200]} />
      <Button text='Connect' position={[780, 430, 0]} size={40} />
      <Button text='Inventory' position={[-780, 430, 0]} size={40} />
      <ui.Out />
    </Hud>
  )
}
