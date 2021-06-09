import { useState } from 'react'
import { VRCanvas, Hands } from '@react-three/xr'
import Controls from './Controls/Controls'
import Sun from './Sky/Sky'
import Moon from './Moon/MoonModel'
import Platform from './Platfrom/Platform'

function App() {
  const [inclination, setInclination] = useState(0.2)
  const [moonPosition, setMoonPosition] = useState([0,0,-380])
  const [moonScale, setMoonScale] = useState(1)

  return (
    <VRCanvas camera={[{far: 150000}]}>
      <Sun inclination={inclination} />
      <Moon radius={1.737} position={moonPosition} scale={moonScale} />
      <Platform />
      <Controls callbacks={{setInclination, setMoonPosition, setMoonScale}} />
      <hemisphereLight args={[0x575c60, 0x252430, 1]} />
      <Hands />
    </VRCanvas>
  );
}

export default App;
