import { OrbitControls, CameraShake } from '@react-three/drei'
import { useControls } from 'leva'
import { useEffect, useState } from 'react'
import { Particles } from './Particles'

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

export default function App() {
  const [props, setProps] = useControls(() => ({
    focus: { value: 4.5, min: 4.5, max: 7, step: 0.01 },
    speed: { value: 0.1, min: 0.1, max: 100, step: 0.1 },
    aperture: { value: 1.8, min: 1, max: 5.6, step: 0.1 },
    fov: { value: 50, min: 0, max: 200 },
    curl: { value: 0.25, min: 0.01, max: 0.5, step: 0.01 }
  }))
  const [focusState, setFocusState] = useState(4.5)
  const [boolean, setBoolean] = useState(true)

  /*
  useEffect(() => {
    for (let i = 0; i < 100; i++) {
      setProps((prev) => ({
        ...prev,
        focus: props.focus + 0.1
      }))
    }
  }, [])

  const setFocus = (val) => {
    setProps({ focus: val })
  }

  useEffect(() => {
    const interval = setInterval(function () {
      if (boolean) {
        if (props.focus >= 7) {
          setBoolean(!boolean)
        }
        setFocus((props.focus += 0.01))
      } else {
        if (props.focus <= 4.5) {
          setBoolean(!boolean)
        }
        setFocus((props.focus -= 0.01))
      }
      console.log(boolean, props.focus)
    }, 100)
    return () => clearInterval(interval)
  }, [])
  */

  return (
    <>
      <OrbitControls enableZoom={false} makeDefault autoRotate autoRotateSpeed={0.5} zoomSpeed={0.1} />
      <CameraShake yawFrequency={1} maxYaw={0.05} pitchFrequency={1} maxPitch={0.05} rollFrequency={0.5} maxRoll={0.5} intensity={0.2} />
      <Particles {...props} />
    </>
  )
}
