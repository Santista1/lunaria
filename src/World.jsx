import { RigidBody, CuboidCollider } from "@react-three/rapier"
import { Instances, Instance, Html } from "@react-three/drei"
import { useState } from "react"
import { OrthographicCamera, CubicBezierLine } from "@react-three/drei"

import { Button } from "./components"
import { ui } from "./Gui"

export function World() {
  return (
    <>
      <Hallway pos={[0, 0, 0]} />
      <Ring pos={[0, -1.2, 0]} />
      {/* <Sphere position={[0, 0, 0]} />
      <pointLight distance={20} position={[0, 20, 0]} intensity={1} /> */}
    </>
  )
}

function Hallway({ pos }) {
  return (
    <>
      <Instances>
        <boxGeometry />
        <meshPhongMaterial shininess={0} />
        <Floor pos={pos} />
        <Roof position={[0, 1.5, 0]} />
        <Rail />
        <Walls position={[0, 0, 45]} />
        <Walls position={[0, 0, 30]} />
        <Walls position={[0, 0, 15]} />
        <Walls position={[0, 0, 0]} />
        <Walls position={[0, 0, -15]} />
        <Walls position={[0, 0, -30]} />
        <Walls position={[0, 0, -45]} />
        <Columns position={[0, 0, 45]} />
        <Columns position={[0, 0, 30]} />
        <Columns position={[0, 0, 15]} />
        <Columns position={[0, 0, 0]} />
        <Columns position={[0, 0, -15]} />
        <Columns position={[0, 0, -30]} />
        <Columns position={[0, 0, -45]} />
      </Instances>
      <Lights />
      <Html
        occlude
        zIndexRange={[0, 0]}
        scale={[0.12, 0.12, 1]}
        transform
        rotation-y={-90 * (Math.PI / 180)}
        position={[2.89, 0, 3]}
      >
        <iframe
          style={{ width: "500px", height: "500px", border: "0px" }}
          src='https://www.youtube.com/embed/lTHWPvVka4M?rel=0?autoplay=1'
        />
      </Html>
    </>
  )
}

function Floor({ pos, sc }) {
  const [gui, setGui] = useState(false)
  const width = 11
  return (
    <>
      <RigidBody colliders={false} type='fixed' friction={20}>
        <CuboidCollider position={[pos[0], pos[1] - 1.5, pos[2]]} args={[width / 2, 0.1, 50]} />
      </RigidBody>
      <Instance
        position={[pos[0], pos[1] - 1.5, pos[2]]}
        scale={[width, 0.1, 100]}
        onClick={(e) => e.which == 3 && setGui(true)}
        onPointerLeave={(e) => setGui(false)}
      />
      {gui && (
        <ui.In>
          <ambientLight intensity={1} />
          <OrthographicCamera makeDefault position={[0, 0, 200]} />
          <Button text='Floor' position={[0, 0, 0]} size={40} />
        </ui.In>
      )}
    </>
  )
}

function Roof({ position }) {
  return (
    <>
      <Instance position={[2.9, position[1], 0]} scale={[1.4, 0.1, 100]} />
      <Instance position={[-2.9, position[1], 0]} scale={[1.4, 0.1, 100]} />
      <Instance position={[0, position[1], -49]} scale={[6, 0.1, 2]} />
      <Instance position={[0, position[1], -37.5]} scale={[6, 0.1, 4]} />
      <Instance position={[0, position[1], -22.5]} scale={[6, 0.1, 4]} />
      <Instance position={[0, position[1], -7.5]} scale={[6, 0.1, 4]} />
      <Instance position={[0, position[1], 7.5]} scale={[6, 0.1, 4]} />
      <Instance position={[0, position[1], 22.5]} scale={[6, 0.1, 4]} />
      <Instance position={[0, position[1], 37.5]} scale={[6, 0.1, 4]} />
      <Instance position={[0, position[1], 49]} scale={[6, 0.1, 2]} />
    </>
  )
}

function Rail({ position }) {
  const separation = 6
  return (
    <>
      <RigidBody colliders={false} type='fixed'>
        <CuboidCollider position={[separation, -1, 0]} args={[0.5, 0.1, 50]} />
        <CuboidCollider position={[-separation, -1, 0]} args={[0.5, 0.1, 50]} />
      </RigidBody>
      <Instance position={[separation, -1, 0]} scale={[0.3, 0.1, 100]} />
      <Instance position={[-separation, -1, 0]} scale={[0.3, 0.1, 100]} />
    </>
  )
}

function Columns({ position }) {
  return (
    <>
      <Instance position={[2.9, position[1], position[2] + 5]} scale={[0.2, 3, 0.2]} />
      <Instance position={[-2.9, position[1], position[2] + 5]} scale={[0.2, 3, 0.2]} />
      <Instance position={[2.9, position[1], position[2] - 5]} scale={[0.2, 3, 0.2]} />
      <Instance position={[-2.9, position[1], position[2] - 5]} scale={[0.2, 3, 0.2]} />
    </>
  )
}

function Walls({ position, scale = [0.01, 2, 10] }) {
  const [gui, setGui] = useState(false)
  return (
    <>
      <RigidBody colliders={false} type='fixed'>
        <CuboidCollider position={[-2.9, position[1], position[2]]} args={[0.01, 3, 5]} />
        <CuboidCollider position={[2.9, position[1], position[2]]} args={[0.01, 3, 5]} />
      </RigidBody>
      <Instance
        position={[-2.9, position[1], position[2]]}
        scale={scale}
        onClick={(e) => e.which == 3 && setGui(true)}
        onPointerLeave={(e) => setGui(false)}
      />
      <Instance
        position={[2.9, position[1], position[2]]}
        scale={scale}
        onClick={(e) => e.which == 3 && setGui(true)}
        onPointerLeave={(e) => setGui(false)}
      />
      {gui && (
        <ui.In>
          <ambientLight intensity={1} />
          <OrthographicCamera makeDefault position={[0, 0, 200]} />
          <Button text='Wall' position={[0, 0, 0]} size={40} />
          <Button text='Width: 0.01' position={[-300, 100, 0]} size={40} />
          <Button text='Height: 2' position={[-300, 0, 0]} size={40} />
          <Button text='Depth: 10' position={[-300, -100, 0]} size={40} />
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
            end={[-185, 0, 0]}
            midA={[-70, 0, 0]}
            midB={[-70, 0, 0]}
            color='yellow'
            lineWidth={3}
          />
          <CubicBezierLine
            start={[-70, 0, 0]}
            end={[-185, -100, 0]}
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

function Lights() {
  const [switch0, setSwitch0] = useState(true)
  const [on1, setOn1] = useState(true)
  const [on2, setOn2] = useState(true)
  const [on3, setOn3] = useState(true)
  const [on4, setOn4] = useState(true)
  const [on5, setOn5] = useState(true)
  const [on6, setOn6] = useState(true)

  const coverScale = [0.03, 0.12, 0.08]
  const buttonScale = [0.05, 0.03, 0.03]

  return (
    <>
      <pointLight castShadow distance={12} color='blue' position={[0, 0, 45]} intensity={switch0 ? 0.4 : 0} />
      <pointLight castShadow distance={12} color='hotpink' position={[0, 0, 30]} intensity={on1 ? 0.4 : 0} />
      <pointLight castShadow distance={12} color='blue' position={[0, 0, 15]} intensity={on2 ? 0.4 : 0} />
      <pointLight castShadow distance={12} color='hotpink' position={[0, 0, 0]} intensity={on3 ? 0.4 : 0} />
      <pointLight castShadow distance={12} color='blue' position={[0, 0, -15]} intensity={on4 ? 0.4 : 0} />
      <pointLight castShadow distance={12} color='hotpink' position={[0, 0, -30]} intensity={on5 ? 0.4 : 0} />
      <pointLight castShadow distance={12} color='blue' position={[0, 0, -45]} intensity={on6 ? 0.4 : 0} />
      <Instances>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial />
        <Instance onClick={() => setSwitch0(!switch0)} color='red' position={[2.9, 0, 4.3 + 45]} scale={buttonScale} />
        <Instance
          onClick={() => setSwitch0(!switch0)}
          color={switch0 ? "white" : "black"}
          position={[2.9, 0, 4.3 + 45]}
          scale={coverScale}
        />
        <Instance onClick={() => setOn1(!on1)} color='red' position={[2.9, 0, 4.3 + 30]} scale={buttonScale} />
        <Instance
          onClick={() => setOn1(!on1)}
          color={on1 ? "white" : "black"}
          position={[2.9, 0, 4.3 + 30]}
          scale={coverScale}
        />
        <Instance onClick={() => setOn2(!on2)} color='red' position={[2.9, 0, 4.3 + 15]} scale={buttonScale} />
        <Instance
          onClick={() => setOn2(!on2)}
          color={on2 ? "white" : "black"}
          position={[2.9, 0, 4.3 + 15]}
          scale={coverScale}
        />
        <Instance onClick={() => setOn3(!on3)} color='red' position={[2.9, 0, 4.3]} scale={buttonScale} />
        <Instance
          onClick={() => setOn3(!on3)}
          color={on3 ? "white" : "black"}
          position={[2.9, 0, 4.3]}
          scale={coverScale}
        />
        <Instance onClick={() => setOn4(!on4)} color='red' position={[2.9, 0, 4.3 - 15]} scale={buttonScale} />
        <Instance
          onClick={() => setOn4(!on4)}
          color={on4 ? "white" : "black"}
          position={[2.9, 0, 4.3 - 15]}
          scale={coverScale}
        />
        <Instance onClick={() => setOn5(!on5)} color='red' position={[2.9, 0, 4.3 - 30]} scale={buttonScale} />
        <Instance
          onClick={() => setOn5(!on5)}
          color={on5 ? "white" : "black"}
          position={[2.9, 0, 4.3 - 30]}
          scale={coverScale}
        />
        <Instance onClick={() => setOn6(!on6)} color='red' position={[2.9, 0, 4.3 - 45]} scale={buttonScale} />
        <Instance
          onClick={() => setOn6(!on6)}
          color={on6 ? "white" : "black"}
          position={[2.9, 0, 4.3 - 45]}
          scale={coverScale}
        />
      </Instances>
    </>
  )
}

function Ring({ pos }) {
  return (
    <mesh position={pos} rotation={[90 * (Math.PI / 180), 0, 0]}>
      <ringGeometry args={[1, 2, 32]} />
      <meshPhongMaterial side={2} />
    </mesh>
  )
}

function Sphere({ position, color = 0xffd83d }) {
  return (
    <>
      <group position={position}>
        <mesh castShadow>
          <sphereGeometry args={[25, 32, 2, 0, Math.PI * 2, 0, Math.PI * 0.2]} />
          <meshPhongMaterial side={2} color={color} />
        </mesh>
        <mesh castShadow rotation={[0, 0, 0]}>
          <sphereGeometry args={[25, 32, 2, 0, Math.PI * 2, Math.PI * 0.33, Math.PI * 0.15]} />
          <meshPhongMaterial side={2} color={color} />
        </mesh>
        <mesh castShadow rotation={[0, 0, 0]}>
          <sphereGeometry args={[25, 32, 2, 0, Math.PI * 2, Math.PI * 0.52, Math.PI * 0.2]} />
          <meshPhongMaterial side={2} color={color} />
        </mesh>
        <mesh castShadow>
          <sphereGeometry args={[25, 32, 2, 0, Math.PI * 2, Math.PI * 0.8, Math.PI * 0.2]} />
          <meshPhongMaterial side={2} color={color} />
        </mesh>
      </group>
    </>
  )
}