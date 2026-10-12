import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Sculpture({ reduced }) {
  const group = useRef(),
    core = useRef();
  const drag = useRef({ active: false, x: 0, y: 0, rx: 0, ry: 0 });
  useEffect(() => {
    const up = () => (drag.current.active = false);
    window.addEventListener("pointerup", up);
    return () => window.removeEventListener("pointerup", up);
  }, []);
  useFrame(({ clock, pointer }) => {
    if (!group.current) return;
    const t = clock.elapsedTime;
    const d = drag.current;
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      0.24 + d.rx + (reduced ? 0 : pointer.y * 0.15),
      0.04,
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      -0.4 + d.ry + (reduced ? 0 : Math.sin(t * 0.18) * 0.3 + pointer.x * 0.2),
      0.04,
    );
    group.current.position.y = reduced ? 0 : Math.sin(t * 0.65) * 0.07;
    if (core.current && !reduced) core.current.rotation.y = t * 0.2;
  });
  return (
    <group
      ref={group}
      onPointerDown={(e) => {
        e.stopPropagation();
        drag.current = {
          ...drag.current,
          active: true,
          x: e.clientX,
          y: e.clientY,
        };
      }}
      onPointerMove={(e) => {
        const d = drag.current;
        if (d.active) {
          d.ry += (e.clientX - d.x) * 0.008;
          d.rx += (e.clientY - d.y) * 0.008;
          d.x = e.clientX;
          d.y = e.clientY;
        }
      }}
    >
      {[0, 1, 2].map((n) => (
        <group key={n} rotation={[n * 0.9, n * 1.05, n * 0.64]}>
          <mesh castShadow>
            <torusGeometry args={[1.57, 0.27, 24, 120]} />
            <meshPhysicalMaterial
              color={n === 1 ? "#B9F34C" : "#8dc72e"}
              metalness={0.38}
              roughness={0.2}
              clearcoat={1}
              clearcoatRoughness={0.15}
            />
          </mesh>
          <mesh rotation={[0, 0, 0.1]}>
            <torusGeometry args={[1.57, 0.285, 8, 80]} />
            <meshBasicMaterial
              color="#174B3A"
              wireframe
              transparent
              opacity={0.1}
            />
          </mesh>
        </group>
      ))}
      <group ref={core}>
        <mesh rotation={[0.5, 0.5, 0.4]}>
          <icosahedronGeometry args={[0.67, 0]} />
          <meshPhysicalMaterial
            color="#174B3A"
            metalness={0.65}
            roughness={0.27}
          />
        </mesh>
        <mesh>
          <icosahedronGeometry args={[0.91, 1]} />
          <meshBasicMaterial
            color="#174B3A"
            wireframe
            transparent
            opacity={0.35}
          />
        </mesh>
      </group>
    </group>
  );
}
export default function CodeCore() {
  const [visible, setVisible] = useState(true);
  const host = useRef();
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setVisible(entry.isIntersecting),
    );
    observer.observe(host.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      className="core-canvas"
      ref={host}
      role="img"
      aria-label="Interactive Code Core: three interlocking lime architectural loops surrounding a forest-green geometric core"
    >
      <Canvas
        camera={{ position: [0, 0, 7], fov: 38 }}
        dpr={[1, 1.5]}
        frameloop={visible ? "always" : "never"}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.6} />
        <directionalLight position={[3, 5, 5]} intensity={4} color="#ffffff" />
        <directionalLight position={[-4, 1, 2]} intensity={2} color="#B9F34C" />
        <directionalLight position={[0, -3, -2]} intensity={2} />
        <Sculpture reduced={reduced} />
      </Canvas>
    </div>
  );
}
