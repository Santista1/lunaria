import { Geometry, Base, Subtraction } from "@react-three/csg"
import { RigidBody } from "@react-three/rapier"

export function Room({
  position = [0, 0, 0],
  scale = [10, 10, 10],
  thickness = 0.1,
  cull = [1, 1, 1, 1, 0, 0],
  window = [0, 1, 0, 1, 0, 0],
  windows = [0, 3, 0, 3, 0, 0],
}) {
  const width = scale[0]
  const height = scale[1]
  const depth = scale[2]
  return (
    <>
      {cull[0] && (
        <Panel
          id='floor'
          position={[position[0], position[1] - height / 2, position[2]]}
          width={width + thickness}
          height={thickness}
          depth={depth}
          window={window[0]}
          windows={windows[0]}
        />
      )}
      {cull[1] && (
        <Panel
          id='roof'
          position={[position[0], position[1] + height / 2, position[2]]}
          width={width + thickness}
          height={thickness}
          depth={depth}
          window={window[1]}
          windows={windows[1]}
        />
      )}
      {cull[2] && (
        <Panel
          id='left'
          position={[position[0] - width / 2, position[1], position[2]]}
          width={thickness}
          height={height + thickness}
          depth={depth}
          window={window[2]}
          windows={windows[2]}
        />
      )}
      {cull[3] && (
        <Panel
          id='right'
          position={[position[0] + width / 2, position[1], position[2]]}
          width={thickness}
          height={height + thickness}
          depth={depth}
          window={window[3]}
          windows={windows[3]}
        />
      )}
      {cull[4] && <FrontWall position={position} width={width} height={height} depth={depth} thickness={thickness} />}
      {cull[5] && <BackWall position={position} width={width} height={height} depth={depth} thickness={thickness} />}
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
    <mesh receiveShadow position={position}>
      <Geometry>
        <Base>
          <boxGeometry args={[width, height, depth]} />
        </Base>
        {windowArray}
      </Geometry>
      <meshStandardMaterial color='hotpink' />
    </mesh>
  ) : (
    <mesh receiveShadow position={position}>
      <boxGeometry args={[width, height, depth]} />
      <meshStandardMaterial color='hotpink' />
    </mesh>
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
