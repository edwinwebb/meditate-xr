import React, { Suspense, useRef } from 'react'
import { Sphere, useGLTF } from '@react-three/drei'
import Moon from './Moon'
import { useXRFrame } from '@react-three/xr';

export default function MoonModel(props) {
  const {
      radius = 1.737,
      position = [0,100,380],
      scale = 1
  } = props;
  const moonGroupRef = useRef()

  useXRFrame(()=>{
    moonGroupRef.current.position.x = position[0]
    moonGroupRef.current.position.y = position[1]
    moonGroupRef.current.position.z = position[2]
    moonGroupRef.current.scale.set((1-scale)*10,(1-scale)*10,(1-scale)*10)
  })

  return (
      <group position={[0,100,-380]} ref={moonGroupRef}>
        <Suspense fallback={<Sphere args={[radius, 32, 32]} scale={[1,1,1]}/>}>
            <Moon scale={[10,10,10]} />
        </Suspense>
    </group>
  )
}

useGLTF.preload('/moon.glb')

