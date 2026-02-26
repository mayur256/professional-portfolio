"use client";

import { useFrame, useThree } from "@react-three/fiber";

export default function CameraController() {
  const { camera } = useThree();

  useFrame((state) => {
    camera.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
  });

  return null;
}
