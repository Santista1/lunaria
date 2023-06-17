import { useState } from "react"
import { Instances, Instance } from "@react-three/drei"

export function Lights() {
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
      <pointLight distance={12} color='blue' position={[0, 0, 45]} intensity={switch0 ? 0.4 : 0} />
      <pointLight distance={12} color='hotpink' position={[0, 0, 30]} intensity={on1 ? 0.4 : 0} />
      <pointLight distance={12} color={0xfdf29f} position={[0, 0, 15]} intensity={on2 ? 0.4 : 0} />
      <pointLight distance={12} color='blue' position={[0, 0, 0]} intensity={on3 ? 0.4 : 0} />
      <pointLight distance={12} color='hotpink' position={[0, 0, -15]} intensity={on4 ? 0.4 : 0} />
      <pointLight distance={12} color={0xfef9d1} position={[0, 0, -30]} intensity={on5 ? 0.4 : 0} />
      <pointLight distance={12} color='blue' position={[0, 0, -45]} intensity={on6 ? 0.4 : 0} />
      <Instances>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial />
        <Instance onClick={() => setSwitch0(!switch0)} color='red' position={[2.8, 0, 4.5 + 45]} scale={buttonScale} />
        <Instance
          onClick={() => setSwitch0(!switch0)}
          color={switch0 ? "white" : "black"}
          position={[2.8, 0, 4.5 + 45]}
          scale={coverScale}
        />
        <Instance onClick={() => setOn1(!on1)} color='red' position={[2.8, 0, 4.5 + 30]} scale={buttonScale} />
        <Instance
          onClick={() => setOn1(!on1)}
          color={on1 ? "white" : "black"}
          position={[2.8, 0, 4.5 + 30]}
          scale={coverScale}
        />
        <Instance onClick={() => setOn2(!on2)} color='red' position={[2.8, 0, 4.5 + 15]} scale={buttonScale} />
        <Instance
          onClick={() => setOn2(!on2)}
          color={on2 ? "white" : "black"}
          position={[2.8, 0, 4.5 + 15]}
          scale={coverScale}
        />
        <Instance onClick={() => setOn3(!on3)} color='red' position={[2.8, 0, 4.5]} scale={buttonScale} />
        <Instance
          onClick={() => setOn3(!on3)}
          color={on3 ? "white" : "black"}
          position={[2.8, 0, 4.5]}
          scale={coverScale}
        />
        <Instance onClick={() => setOn4(!on4)} color='red' position={[2.8, 0, 4.5 - 15]} scale={buttonScale} />
        <Instance
          onClick={() => setOn4(!on4)}
          color={on4 ? "white" : "black"}
          position={[2.8, 0, 4.5 - 15]}
          scale={coverScale}
        />
        <Instance onClick={() => setOn5(!on5)} color='red' position={[2.8, 0, 4.5 - 30]} scale={buttonScale} />
        <Instance
          onClick={() => setOn5(!on5)}
          color={on5 ? "white" : "black"}
          position={[2.8, 0, 4.5 - 30]}
          scale={coverScale}
        />
        <Instance onClick={() => setOn6(!on6)} color='red' position={[2.8, 0, 4.5 - 45]} scale={buttonScale} />
        <Instance
          onClick={() => setOn6(!on6)}
          color={on6 ? "white" : "black"}
          position={[2.8, 0, 4.5 - 45]}
          scale={coverScale}
        />
      </Instances>
    </>
  )
}
