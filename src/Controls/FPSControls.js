  
import * as React from 'react'
import { ReactThreeFiber, useThree, useFrame } from '@react-three/fiber'
import { FirstPersonControls as FPSControlsImpl } from 'three-stdlib'

export const FPSControls = React.forwardRef((props, ref) => {
  const invalidate = useThree(({ invalidate }) => invalidate)
  const camera = useThree(({ camera }) => camera)
  const gl = useThree(({ gl }) => gl)
  const [controls] = React.useState(() => new FPSControlsImpl(camera, gl.domElement))

  React.useEffect(() => {
    controls?.addEventListener?.('change', invalidate)
    return () => controls?.removeEventListener?.('change', invalidate)
  }, [controls, invalidate])

  useFrame((_, delta) => controls?.update(delta))

  return controls ? <primitive ref={ref} dispose={undefined} object={controls} {...props} /> : null
})