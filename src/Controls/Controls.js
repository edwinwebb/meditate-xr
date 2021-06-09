import { Sphere, PointerLockControls } from '@react-three/drei'
import { useXREvent, useXRFrame, useXR, useController } from '@react-three/xr';
import { useState, useRef, useEffect } from 'react'
import { Raycaster, Matrix4, DoubleSide } from 'three'

export default function Controls(props) {
    const [skySqueeze, setSkySqueeze] = useState(false)
    const [moonSqueeze, setMoonSqueeze] = useState(false)
    const { isPresenting, player } = useXR()
    const moonTargetRef = useRef()
    const { setInclination, setMoonPosition, setMoonScale } = props.callbacks
    const rightController = useController('right')
    const leftController = useController('left')
    const raycaster = new Raycaster()
    const tempMatrix = new Matrix4()
    
    useXREvent('squeezestart', (e) => setSkySqueeze(true), {handedness: 'right'})
    useXREvent('squeezeend', (e) => setSkySqueeze(false), {handedness: 'right'})
    useXREvent('squeezestart', (e) => setMoonSqueeze(true), {handedness: 'left'})
    useXREvent('squeezeend', (e) => setMoonSqueeze(false), {handedness: 'left'})

    useEffect(()=>{
        player.children[0].position.set(0,1,0)
    })

    useXRFrame( () => {
        if(skySqueeze && isPresenting)  {
            setInclination((rightController.controller.position.y / 2) - 0.5) // not the right way
        }
        if(moonSqueeze && isPresenting) {
            tempMatrix.identity().extractRotation(leftController.controller.matrixWorld)
            raycaster.ray.origin.setFromMatrixPosition(leftController.controller.matrixWorld)
            raycaster.ray.direction.set(0, 0, -1).applyMatrix4(tempMatrix)
            setMoonPosition(raycaster.intersectObject(moonTargetRef.current)[0].point.toArray())
            setMoonScale(player.children[0].position.distanceTo(leftController.controller.position))
        }
    })

    return(<group>
        <PointerLockControls />
        <Sphere args={[380,32,32]} position={[0,0,0]} ref={moonTargetRef} visible={false}>
            <meshBasicMaterial side={DoubleSide}/>
        </Sphere>
    </group>)
}