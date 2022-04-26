import React, {useRef} from "react";
import './App.scss';

import { OrbitControls } from "@react-three/drei";
import {Canvas, useFrame} from 'react-three-fiber'
import Header from "./Header";


import { Suspense } from "react";
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'



const Model = () => {
  const gltf = useLoader(GLTFLoader, "../public/car.gltf")
  return (
      <>
          <primitive position={[30, 30, 30]} object={gltf.scene} scale={1} />
      </>
  );
};

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
      <Header/>
      
      <Canvas colorManagement>
      <Suspense>
        <Model/>
      </Suspense>
        <ambientLight intensity={0.3} /> 

        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />

        <Box position={[0,0,0]} args={[3,2,1]} color='lightblue'/>
        <Box position={[3,1,0]} args={[1,1,1]} color='pink'/>
        <Box position={[-3,0,0]} args={[2,2,1]}color='#55E5BB'/>
        <OrbitControls/>
      </Canvas>
    </>
  );
}

export default App;
