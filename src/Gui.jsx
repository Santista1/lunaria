import { useState } from "react"
import { useAtomValue } from "jotai"
import { useThree } from "@react-three/fiber"
import { OrthographicCamera, Hud } from "@react-three/drei"
import { useChain } from "@cosmos-kit/react"

import { ui, touch, lock } from "./global"
import { Button, Wallet } from "./components/gui"

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

var audio = new Audio("https://res.cloudinary.com/dexin8o58/video/upload/v1686867889/venus_ojwdxu.mp3")
audio.volume = 0.3

function Main() {
  const { connect, status } = useChain("terra")
  const { size } = useThree()
  const controls = useAtomValue(lock)
  const [enter, setEnter] = useState(!touch)
  const [welcome, setWelcome] = useState(true)

  document.addEventListener("pointerlockchange", function () {
    document.pointerLockElement ? setEnter(false) : (setEnter(true), audio.pause())
  })

  window.addEventListener("touchstart", function () {
    setWelcome(false)
  })

  return (
    <>
      {enter && (
        <>
          <Button capsule={false} text='welcome to lunaria' position={[0, size.height / 2 - 200, 0]} size={40} />
          <Button
            onClick={() => {
              controls.lock()
              setTimeout(() => {
                setEnter(!controls.isLocked)
                if (controls.isLocked) audio.play()
              }, 50)
            }}
            text='Enter'
            position={[0, 0, 0]}
            size={40}
          />
        </>
      )}
      {touch && welcome && (
        <Button capsule={false} text='welcome to lunaria' position={[0, size.height / 2 - 250, 0]} size={30} />
      )}
      {!touch && (
        <Button
          text={status === "Disconnected" ? "Connect" : status}
          onClick={() => connect()}
          position={[size.width / 2 - 220, size.height / 2 - 60, 0]}
          size={40}
        />
      )}
      <Button text='Inventory' position={[-780, size.height / 2 - 60, 0]} size={40} />
      <Wallet onClick={() => connect()} animate position={[size.width / 2 - 40, size.height / 2 - 60, 0]} />
    </>
  )
}
