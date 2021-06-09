import { Suspense } from 'react'
import { Cylinder } from '@react-three/drei'
import Yinyang from './Yinyang'

export default function Platform(props) {
    return( <Suspense fallback={<Cylinder args={[1, 1, 32, 32]} scale={[1,0.01,1]} />}>
        <Yinyang scale={[0.1,0.1,0.1]} />
    </Suspense>)
}