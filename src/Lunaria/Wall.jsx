import { useState } from "react"
import { useAtomValue, useSetAtom } from "jotai"
import { Instance, CubicBezierLine } from "@react-three/drei"
import { RigidBody, CuboidCollider } from "@react-three/rapier"

import { ui, lock, audio, hud } from "@/global"
import { Button, Slider } from "@/components/gui"

export function Wall({ pos, scale = [0.01, 2, 9] }) {
  const [gui, setGui] = useState(false)
  const controls = useAtomValue(lock)
  const setSubHud = useSetAtom(hud)

  return (
    <>
      <RigidBody colliders={false} type='fixed'>
        <CuboidCollider position={[pos[0], pos[1], pos[2]]} args={[0.01, 3, 4.5]} />
      </RigidBody>
      <Instance
        position={[pos[0], pos[1], pos[2]]}
        scale={scale}
        onClick={(e) => e.which == 3 && (setSubHud(true), setGui(true), controls.unlock())}
      />
      {gui && (
        <ui.In>
          <Button text='Wall' position={[0, 0, 0]} size={40} />
          <Button
            text='X'
            onClick={() => {
              setGui(false)
              controls.lock()
              audio.play()
              setSubHud(false)
            }}
            position={[100, 100, 0]}
            size={40}
          />
          <Slider position={[-300, 100, 0]} scale={[250, 15, 5]} text={"Width: 0.01"} min={0.2} max={1} step={0.01} />
          <Slider position={[-300, 0, 0]} scale={[250, 15, 5]} text={"Height: 3"} min={0.2} max={1} step={0.01} />
          <Slider position={[-300, -100, 0]} scale={[250, 15, 5]} text={"Depth: 5"} min={0.2} max={1} step={0.01} />
          <CubicBezierLine
            start={[-70, 0, 0]}
            end={[-170, 100, 0]}
            midA={[-120, 0, 0]}
            midB={[-150, 100, 0]}
            color='yellow'
            lineWidth={3}
          />
          <CubicBezierLine
            start={[-70, 0, 0]}
            end={[-170, 0, 0]}
            midA={[-70, 0, 0]}
            midB={[-70, 0, 0]}
            color='yellow'
            lineWidth={3}
          />
          <CubicBezierLine
            start={[-70, 0, 0]}
            end={[-170, -100, 0]}
            midA={[-120, 0, 0]}
            midB={[-150, -100, 0]}
            color='yellow'
            lineWidth={3}
          />
        </ui.In>
      )}
    </>
  )
}
