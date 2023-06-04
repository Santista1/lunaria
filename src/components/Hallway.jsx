import { Geometry, Base, Subtraction } from "@react-three/csg"
import { RigidBody } from "@react-three/rapier"
import { Merged } from "@react-three/drei"

function Hallway() {
  return (
    <Merged castShadow receiveShadow meshes={meshes}>
      {(models) => <Room2 models={models} />}
    </Merged>
  )
}

export function Section({ position = [0, 0, 0], scale = [10, 10, 10], thickness = 0.1, color }) {
  const width = scale[0]
  const height = scale[1]
  const depth = scale[2]

  const floor = (
    <RigidBody colliders='cuboid' type='fixed' friction={20}>
      <mesh receiveShadow position={[position[0], position[1] - height / 2, position[2]]}>
        <boxGeometry args={[width + thickness, thickness, depth]} />
        <meshStandardMaterial color='white' />
      </mesh>
    </RigidBody>
  )

  const roof = (
    <RigidBody colliders='cuboid' type='fixed' friction={20}>
      <mesh receiveShadow position={[position[0], position[1] + height / 2, position[2]]}>
        <Geometry>
          <Base>
            <boxGeometry args={[width + thickness, thickness, depth]} />
          </Base>
          <Subtraction position={[0, 0, 0]}>
            <boxGeometry args={[width * 0.7, thickness, depth * 0.9]} />
          </Subtraction>
        </Geometry>
        <meshStandardMaterial color='white' />
      </mesh>
    </RigidBody>
  )

  const left = (
    <RigidBody colliders='cuboid' type='fixed' friction={20}>
      <mesh receiveShadow position={[position[0] - width / 2, position[1], position[2]]}>
        <boxGeometry args={[thickness, height / 1.6 + thickness, depth / 1.75]} />
        <meshStandardMaterial color='white' />
      </mesh>
    </RigidBody>
  )

  const column = ({ position }) => (
    <mesh receiveShadow position={position}>
      <cylinderGeometry args={[0.2, 0.2, 3]} />
      <meshStandardMaterial color='white' />
    </mesh>
  )

  return (
    <>
      {floor}
      {roof}
      {left}

      <RigidBody colliders='cuboid' type='fixed' friction={20}>
        <mesh receiveShadow position={[position[0] + width / 2, position[1], position[2]]}>
          <boxGeometry args={[thickness, height / 2 + thickness, depth / 1.75]} />
          <meshStandardMaterial color='white' />
        </mesh>
      </RigidBody>

      {column({ position: [position[0] + 2.9, position[1], position[2] - 4.5] })}
      {column({ position: [position[0] - 2.9, position[1], position[2] - 4.5] })}
      {column({ position: [position[0] + 2.9, position[1], position[2] + 4.5] })}
      {column({ position: [position[0] - 2.9, position[1], position[2] + 4.5] })}
      <pointLight castShadow distance={15} color={color} position={position} intensity={0.4} />

      <RigidBody colliders='cuboid' type='fixed'>
        <mesh castShadow position={[position[0] + 2.9, position[1] - 1, position[2] - 6]}>
          <boxGeometry args={[0.4, thickness, 3]} />
          <meshStandardMaterial color='hotpink' />
        </mesh>
      </RigidBody>

      <RigidBody colliders='cuboid' type='fixed'>
        <mesh castShadow position={[position[0] + 2.9, position[1] - 1, position[2] + 6]}>
          <boxGeometry args={[0.4, thickness, 3]} />
          <meshStandardMaterial color='hotpink' />
        </mesh>
      </RigidBody>

      <RigidBody colliders='cuboid' type='fixed'>
        <mesh castShadow position={[position[0] - 2.9, position[1] - 1, position[2] - 6]}>
          <boxGeometry args={[0.4, thickness, 3]} />
          <meshStandardMaterial color='hotpink' />
        </mesh>
      </RigidBody>

      <RigidBody colliders='cuboid' type='fixed'>
        <mesh castShadow position={[position[0] - 2.9, position[1] - 1, position[2] + 6]}>
          <boxGeometry args={[0.4, thickness, 3]} />
          <meshStandardMaterial color='hotpink' />
        </mesh>
      </RigidBody>

      {/* <Merged castShadow receiveShadow meshes={meshes}>
        {(models) => (

        )}
      </Merged> */}

      {/* <Panel
        id='right'
        position={[position[0] + width / 2, position[1], position[2]]}
        width={thickness}
        height={height + thickness}
        depth={depth}
        window={window[3]}
        windows={windows[3]}
      /> */}
    </>
  )
}

function Panel({ id, position, width, height, depth, window, windows }) {
  const windowArray = []
  if (window) {
    switch (id) {
      case "floor":
      case "roof":
        for (let i = 0; i < windows; i++) {
          windowArray.push(
            <Subtraction
              key={i}
              position={[
                0,
                0,
                (depth / (windows * 2)) * i + depth / (windows * 4) - depth / 4 + 5 * i - (5 * (windows - 1)) / 2,
              ]}
            >
              <boxGeometry args={[width / 2, height, depth / (windows * 2)]} />
            </Subtraction>
          )
        }
        break
      case "left":
      case "right":
        for (let i = 0; i < windows; i++) {
          windowArray.push(
            <Subtraction
              key={i}
              position={[
                0,
                0,
                (depth / (windows * 2)) * i + depth / (windows * 4) - depth / 4 + 5 * i - (5 * (windows - 1)) / 2,
              ]}
            >
              <boxGeometry args={[width, height / 2, depth / (windows * 2)]} />
            </Subtraction>
          )
        }
        break
      case "front":
      case "back":
        for (let i = 0; i < windows; i++) {
          windowArray.push(
            <Subtraction key={i} position={[0, 0, 0]}>
              <boxGeometry args={[width / 2, height / 2, depth]} />
            </Subtraction>
          )
        }
        break
    }
  }

  return window ? (
    <RigidBody colliders='cuboid' type='fixed'>
      <mesh receiveShadow position={position}>
        <Geometry>
          <Base>
            <boxGeometry args={[width, height, depth]} />
          </Base>
          {windowArray}
        </Geometry>
        <meshStandardMaterial color='hotpink' />
      </mesh>
    </RigidBody>
  ) : (
    <RigidBody colliders='cuboid' type='fixed' friction={20}>
      <mesh receiveShadow position={position}>
        <boxGeometry args={[width, height, depth]} />
        <meshStandardMaterial color='hotpink' />
      </mesh>
    </RigidBody>
  )
}

function RightWall({ position, width, height, depth, thickness }) {
  return (
    <mesh receiveShadow position={[position[0] + width / 2, position[1], position[2]]}>
      <Geometry>
        <Base>
          <boxGeometry args={[thickness, height + thickness, depth]} />
        </Base>
        <Subtraction>
          <boxGeometry args={[thickness, height / 4, depth / 2]} />
        </Subtraction>
      </Geometry>
      <meshStandardMaterial color='hotpink' />
    </mesh>
  )
}

function FrontWall({ position, width, height, depth, thickness }) {
  return (
    <mesh receiveShadow position={[position[0], position[1], position[2] - depth / 2]}>
      <boxGeometry args={[width, height + thickness, thickness]} />
      <meshStandardMaterial color='hotpink' />
    </mesh>
  )
}

function BackWall({ position, width, height, depth, thickness }) {
  return (
    <mesh receiveShadow position={[position[0], position[1], position[0] + depth / 2]}>
      <boxGeometry args={[width, height + thickness, thickness]} />
      <meshStandardMaterial color='hotpink' />
    </mesh>
  )
}
