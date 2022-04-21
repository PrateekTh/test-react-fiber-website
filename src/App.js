import React, {useRef} from "react";
import './App.scss';

import {Canvas, useFrame} from 'react-three-fiber'

const Box = ({position, args, color}) => {
  const mesh = useRef(null);
  useFrame(()=>(mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  return(
    <mesh position={position} ref={mesh}>
      <boxBufferGeometry attach='geometry' args={args} />
      <meshStandardMaterial attach='material' color= {color} />
    </mesh>
  )
}


function App() {
  return (
    <>
      <Canvas colorManagement>
        <ambientLight intensity={.3} /> 
        <pointLight args={[1,1,1]} />
        <Box position={[0,0,0]} args={[3,2,1]} color='lightblue'/>
        <Box position={[3,1,0]} args={[1,1,1]} color='pink'/>
        <Box position={[-3,0,0]} args={[2,2,1]}color='#55E5BB'/>
      </Canvas>
    </>
  );
}

export default App;
