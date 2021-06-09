import React, { useRef } from 'react'
import { CubeCamera, useGLTF } from '@react-three/drei'
import { useTexture } from '@react-three/drei'
import { DoubleSide } from 'three'

export default function Model(props) {
  const group = useRef()
  const { nodes } = useGLTF(process.env.PUBLIC_URL + '/yinyang.glb')
  const [blkCol, blkRough, blkNormal, wytCol, wytRough, wytNormal] = useTexture([
    process.env.PUBLIC_URL + '/Marble006_1K_Color.jpg',
    process.env.PUBLIC_URL + '/Marble006_1K_Roughness.jpg',
    process.env.PUBLIC_URL + '/Marble006_1K_Normal.jpg',
    process.env.PUBLIC_URL + '/Marble012_1K_Color.jpg',
    process.env.PUBLIC_URL + '/Marble012_1K_Roughness.jpg',
    process.env.PUBLIC_URL + '/Marble012_1K_Normal.jpg'
])

  return (
    <group ref={group} {...props} dispose={null} scale={[6,6,6]}>
      <CubeCamera
        resolution={512}
        frames={Infinity}
        near={0.1}
        far={50000}
        >
          {(cubeTex) => (
            <>
              <mesh
                geometry={nodes.yang.geometry}
              >
                <meshStandardMaterial
                  envMap={ cubeTex }
                  map={blkCol}
                  roughnessMap={blkRough}
                  normalMap={blkNormal}
                  side={ DoubleSide }
                />
              </mesh>
              <mesh
                geometry={nodes.yin.geometry}
              >
                <meshStandardMaterial
                  envMap={ cubeTex }
                  map={wytCol}
                  roughnessMap={wytRough}
                  normalMap={wytNormal}
                  side={ DoubleSide }
                />
              </mesh>
          </>
        )}
      </CubeCamera>
    </group>
  )
}

useGLTF.preload(process.env.PUBLIC_URL + '/yinyang.glb')

