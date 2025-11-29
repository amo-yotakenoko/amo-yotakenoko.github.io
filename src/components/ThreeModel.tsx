import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { scale } from "framer-motion";
import { useFrame } from "@react-three/fiber";

function Model({
  url,
  scale,
  position,
  rotation,
}: {
  url: string;
  scale?: THREE.Vector3;
  position?: THREE.Vector3;
  rotation?: THREE.Euler;
}) {
  const { scene } = useGLTF(url);
  const groupeRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (groupeRef.current) {
      groupeRef.current.rotation.y = Math.sin(state.clock.elapsedTime / 2);
    }
  });

  return (
    <group ref={groupeRef}>
      <primitive
        object={scene}
        scele={scale}
        position={position}
        rotation={rotation}
      />
    </group>
  );
}

function ThreeModel({ url }: { url?: string }) {
  return (
    <div className="h-[500px]">
      <Canvas camera={{ position: [20, 20, 20], fov: 50 }}>
        <ambientLight intensity={2} />
        <Model
          url={url}
          scale={0.5}
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
        />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
export default ThreeModel;
