import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { AxesHelper } from "three";
import { useStore } from "./store";
import { Leva, useControls } from "leva";

export default function App() {
  const setInputValue = useStore((state) => state.setInputValue);
  const inputValue = useStore((state) => state.inputValue);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Leva />

      <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <directionalLight position={[-5, 3, -5]} intensity={0.5} castShadow />
        <primitive object={new AxesHelper(5)} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="red" />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
