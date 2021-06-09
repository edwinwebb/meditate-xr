import { Sky } from '@react-three/drei'
import { useRef } from 'react'

function SkyGroup(props) {
  const skyMesh = useRef()
  const { inclination = 0.2 } = props
  const minMaxInclination = Math.min(Math.max(inclination, -0.4), 1)

  return(<group>
    <directionalLight args={[0xfdfbd3, 0.7]} position={[10000,minMaxInclination*1000,0]} />
    <Sky ref={ skyMesh } sunPosition={[1,minMaxInclination,0]} distance={150000} />
  </group>)
}

export default SkyGroup