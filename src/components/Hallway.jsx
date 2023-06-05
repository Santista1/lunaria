import { RigidBody, CuboidCollider } from "@react-three/rapier"
import { Instances, Instance } from "@react-three/drei"
import { useState } from "react"

export function Hallway() {
  const [on0, setOn0] = useState(true)
  const [on1, setOn1] = useState(true)
  const [on2, setOn2] = useState(true)
  const [on3, setOn3] = useState(true)
  const [on4, setOn4] = useState(true)
  const [on5, setOn5] = useState(true)
  const [on6, setOn6] = useState(true)

  return (
    <>
      <pointLight visible={on0} castShadow distance={10} color='blue' position={[0, 0, 0]} intensity={0.4} />
      <pointLight visible={on1} castShadow distance={10} color='hotpink' position={[0, 0, -15]} intensity={0.4} />
      <pointLight visible={on2} castShadow distance={10} color='blue' position={[0, 0, -30]} intensity={0.4} />
      <pointLight visible={on3} castShadow distance={10} color='hotpink' position={[0, 0, -45]} intensity={0.4} />
      <pointLight visible={on4} castShadow distance={10} color='blue' position={[0, 0, -60]} intensity={0.4} />
      <pointLight visible={on5} castShadow distance={10} color='hotpink' position={[0, 0, -75]} intensity={0.4} />
      <pointLight visible={on6} castShadow distance={10} color='blue' position={[0, 0, -90]} intensity={0.4} />
      <Instances>
        <boxGeometry />
        <meshPhongMaterial shininess={0} />
        <Floor />
        <Roof />
        <Rail />
        <Walls position={[0, 0, 0]} />
        <Walls position={[0, 0, -15]} />
        <Walls position={[0, 0, -30]} />
        <Walls position={[0, 0, -45]} />
        <Walls position={[0, 0, -60]} />
        <Walls position={[0, 0, -75]} />
        <Walls position={[0, 0, -90]} />
        <Columns position={[0, 0, 0]} />
        <Columns position={[0, 0, -15]} />
        <Columns position={[0, 0, -30]} />
        <Columns position={[0, 0, -45]} />
        <Columns position={[0, 0, -60]} />
        <Columns position={[0, 0, -75]} />
        <Columns position={[0, 0, -90]} />
      </Instances>
      <Instances>
        <boxGeometry />
        <meshBasicMaterial shininess={0} />
        <Instance
          onClick={() => setOn0(!on0)}
          color='red'
          position={[on0 ? 2.9 : 2.92, 0, 4.3]}
          scale={[0.1, 0.05, 0.05]}
        />
        <Instance onClick={() => setOn0(!on0)} color='white' position={[2.9, 0, 4.3]} scale={[0.05, 0.1, 0.1]} />
        <Instance
          onClick={() => setOn1(!on1)}
          color='red'
          position={[on1 ? 2.9 : 2.92, 0, 4.3 - 15]}
          scale={[0.1, 0.05, 0.05]}
        />
        <Instance onClick={() => setOn1(!on1)} color='white' position={[2.9, 0, 4.3 - 15]} scale={[0.05, 0.1, 0.1]} />
        <Instance
          onClick={() => setOn2(!on2)}
          color='red'
          position={[on2 ? 2.9 : 2.92, 0, 4.3 - 30]}
          scale={[0.1, 0.05, 0.05]}
        />
        <Instance onClick={() => setOn2(!on2)} color='white' position={[2.9, 0, 4.3 - 30]} scale={[0.05, 0.1, 0.1]} />
        <Instance
          onClick={() => setOn3(!on3)}
          color='red'
          position={[on3 ? 2.9 : 2.92, 0, 4.3 - 45]}
          scale={[0.1, 0.05, 0.05]}
        />
        <Instance onClick={() => setOn3(!on3)} color='white' position={[2.9, 0, 4.3 - 45]} scale={[0.05, 0.1, 0.1]} />
        <Instance
          onClick={() => setOn4(!on4)}
          color='red'
          position={[on4 ? 2.9 : 2.92, 0, 4.3 - 60]}
          scale={[0.1, 0.05, 0.05]}
        />
        <Instance onClick={() => setOn4(!on4)} color='white' position={[2.9, 0, 4.3 - 60]} scale={[0.05, 0.1, 0.1]} />
        <Instance
          onClick={() => setOn5(!on5)}
          color='red'
          position={[on5 ? 2.9 : 2.92, 0, 4.3 - 75]}
          scale={[0.1, 0.05, 0.05]}
        />
        <Instance onClick={() => setOn5(!on5)} color='white' position={[2.9, 0, 4.3 - 75]} scale={[0.05, 0.1, 0.1]} />
        <Instance
          onClick={() => setOn6(!on6)}
          color='red'
          position={[on6 ? 2.9 : 2.92, 0, 4.3 - 90]}
          scale={[0.1, 0.05, 0.05]}
        />
        <Instance onClick={() => setOn6(!on6)} color='white' position={[2.9, 0, 4.3 - 90]} scale={[0.05, 0.1, 0.1]} />
      </Instances>
    </>
  )
}

function Roof() {
  return (
    <>
      <Instance position={[2.9, 1.5, -45]} scale={[2, 0.1, 105]} />
      <Instance position={[-2.9, 1.5, -45]} scale={[2, 0.1, 105]} />
      <Instance position={[0, 1.5, 6.5]} scale={[5, 0.1, 2]} />
      <Instance position={[0, 1.5, -7.5]} scale={[5, 0.1, 6]} />
      <Instance position={[0, 1.5, -22.5]} scale={[5, 0.1, 6]} />
      <Instance position={[0, 1.5, -37.5]} scale={[5, 0.1, 6]} />
      <Instance position={[0, 1.5, -52.5]} scale={[5, 0.1, 6]} />
      <Instance position={[0, 1.5, -67.5]} scale={[5, 0.1, 6]} />
      <Instance position={[0, 1.5, -62.5]} scale={[5, 0.1, 6]} />
      <Instance position={[0, 1.5, -96.5]} scale={[5, 0.1, 2]} />
    </>
  )
}

function Floor() {
  return (
    <>
      <RigidBody colliders={false} type='fixed' friction={20}>
        <CuboidCollider position={[0, -1.5, -45]} args={[8, 0.1, 105]} />
      </RigidBody>
      <Instance position={[0, -1.5, -45]} scale={[8, 0.1, 105]} />
    </>
  )
}

function Rail() {
  return (
    <>
      <RigidBody colliders={false} type='fixed'>
        <CuboidCollider position={[3.3, -1, -45]} args={[0.5, 0.1, 52.5]} />
        <CuboidCollider position={[-3.3, -1, -45]} args={[0.5, 0.1, 52.5]} />
        <CuboidCollider position={[0, -1, 7.5]} args={[6.5, 0.1, 0.3]} />
      </RigidBody>
      <Instance position={[3.3, -1, -45]} scale={[0.3, 0.1, 105]} />
      <Instance position={[-3.3, -1, -45]} scale={[0.3, 0.1, 105]} />
      <Instance position={[0, -1, 7.5]} scale={[6.5, 0.1, 0.3]} />
    </>
  )
}

function Columns({ position }) {
  return (
    <>
      <Instance position={[2.9, 0, position[2] + 5]} scale={[0.2, 3, 0.2]} />
      <Instance position={[-2.9, 0, position[2] + 5]} scale={[0.2, 3, 0.2]} />
      <Instance position={[2.9, 0, position[2] - 5]} scale={[0.2, 3, 0.2]} />
      <Instance position={[-2.9, 0, position[2] - 5]} scale={[0.2, 3, 0.2]} />
    </>
  )
}

function Walls({ position, scale = [0.01, 3, 10] }) {
  return (
    <>
      {/* <RigidBody colliders={false} type='fixed'>
        <CuboidCollider position={[-2.9, 0, position[2]]} args={[0.01, 3, 5]} />
        <CuboidCollider position={[-2.9, 0, position[2]]} args={[0.01, 3, 5]} />
        <CuboidCollider position={[2.9, 0, position[2]]} args={[0.01, 3, 5]} />
        <CuboidCollider position={[-2.9, 0, position[2]]} args={[0.01, 3, 5]} />
      </RigidBody> */}
      <Instance position={[-2.9, 0, position[2]]} scale={scale} />
      <Instance position={[-2.9, 0, position[2]]} scale={scale} />
      <Instance position={[2.9, 0, position[2]]} scale={scale} />
      <Instance position={[-2.9, 0, position[2]]} scale={scale} />
    </>
  )
}

function Section({ Box, position = [0, 0, 0], scale = [10, 10, 10], thickness = 0.1, color }) {
  return (
    <>
      <pointLight castShadow distance={15} color={color} position={position} intensity={0.4} />
    </>
  )
}
