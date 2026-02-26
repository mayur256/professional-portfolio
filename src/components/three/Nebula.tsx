"use client";

import { useMemo } from "react";
import * as THREE from "three";

export default function Nebula() {
  const texture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext("2d")!;

    const gradient = ctx.createRadialGradient(256, 256, 0, 256, 256, 256);
    gradient.addColorStop(0, "rgba(139, 92, 246, 0.3)");
    gradient.addColorStop(0.4, "rgba(59, 130, 246, 0.2)");
    gradient.addColorStop(0.7, "rgba(16, 16, 32, 0.1)");
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 512, 512);

    return new THREE.CanvasTexture(canvas);
  }, []);

  return (
    <mesh>
      <sphereGeometry args={[100, 64, 64]} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} transparent />
    </mesh>
  );
}
