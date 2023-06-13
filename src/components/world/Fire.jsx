import * as THREE from "three"
import { useEffect } from "react"
import particleFire from "three-particle-fire"
import { useThree, useFrame } from "@react-three/fiber"

particleFire.install({ THREE: THREE })
var count = 0
var particleFireMesh0

export const Fire = () => {
  const { scene, camera } = useThree()

  useEffect(() => {
    var fireRadius = 0.6
    var fireHeight = 1
    var particleCount = 100
    var height = window.innerHeight

    var geometry0 = new particleFire.Geometry(fireRadius, fireHeight, particleCount)
    var material0 = new particleFire.Material({ color: "red" })
    material0.setPerspective(camera.fov, height)
    particleFireMesh0 = new THREE.Points(geometry0, material0)
    particleFireMesh0.position.y = -1.3
    if (count === 1) scene.add(particleFireMesh0)
    count += 1
  })

  useFrame((state, delta) => {
    particleFireMesh0.material.update(delta)
  })
}
