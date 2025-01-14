import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Text } from "@react-three/drei";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const Avatar = ({ isMobile }) => {
  const { scene } = useGLTF("model/6785f2fa79cc930a9c854013.glb");
  const [mixer, setMixer] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Load the animation after model is loaded
    const loader = new FBXLoader();
    loader.load(
      "animation/Typing.fbx", // Use a relative path if you're in a development environment
      (fbx) => {
        console.log("FBX loaded successfully:", fbx);

        // Ensure the animation is applied to the correct model
        const newMixer = new THREE.AnimationMixer(scene);
        const action = newMixer.clipAction(fbx.animations[0]);
        action.play();
        setMixer(newMixer); // Save the mixer to update the animation loop
      },
      undefined,
      (err) => {
        console.error("Error loading FBX file:", err);
        setError("Failed to load FBX animation. Check the console for errors.");
      }
    );
  }, [scene]);

  useEffect(() => {
    if (mixer) {
      const clock = new THREE.Clock();
      const animate = () => {
        requestAnimationFrame(animate);
        mixer.update(clock.getDelta()); // Update the animation
      };
      animate();
    }
  }, [mixer]);

  return (
    <mesh>
      {error && (
        <Text fontSize={1} color="red" position={[0, 2, 0]}>
          {error}
        </Text>
      )}
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[0, 90, 10]}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight position={[0, 2, 3]} intensity={0.5} />
      <pointLight position={[-5, 5, -5]} intensity={0.3} />

      <primitive
        object={scene}
        scale={isMobile ? 2 : 3}
        position={isMobile ? [0, -3, 0] : [0, -3.25, 0]}
        rotation={[0, Math.PI, 0]} // Avatar faces the camera
      />
    </mesh>
  );
};

const AvatarCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      style={{ height: "180vh", width: "100%", padding: "200px" }}
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{
        position: [-70, 8, -105],
        fov: 45,
        near: 0.5,
        far: 1000,
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={true}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
          maxDistance={10}
          minDistance={2}
        />
        <Avatar isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default AvatarCanvas;
