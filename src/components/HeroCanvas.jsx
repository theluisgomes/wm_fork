import { useEffect, useRef } from 'react';

export default function HeroCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return undefined;

    let cleanup = () => {};
    let cancelled = false;
    let raf = 0;

    import('three').then((THREE) => {
      if (cancelled) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
    camera.position.set(0, 0, 18);

    const grid = 56;
    const gap = 0.55;
    const positions = new Float32Array(grid * grid * 3);
    let k = 0;
    for (let ix = 0; ix < grid; ix += 1) {
      for (let iy = 0; iy < grid; iy += 1) {
        const x = (ix - grid / 2) * gap;
        const y = (iy - grid / 2) * gap;
        const r = Math.hypot(x, y);
        positions[k * 3] = x;
        positions[k * 3 + 1] = y;
        positions[k * 3 + 2] = -r * 0.04;
        k += 1;
      }
    }

    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const uniforms = {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uSize: { value: 2.2 * (window.devicePixelRatio || 1) },
      uAccent: { value: new THREE.Color('#1db5a3') },
      uFg: { value: new THREE.Color('#ece7dc') },
    };
    const mat = new THREE.ShaderMaterial({
      uniforms,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexShader: `
        uniform float uTime;
        uniform vec2 uMouse;
        uniform float uSize;
        varying float vDist;
        varying float vWave;
        void main(){
          vec3 p = position;
          float w = sin(p.x * 0.35 + uTime * 0.6) * 0.35 + cos(p.y * 0.45 - uTime * 0.5) * 0.35;
          p.z += w;
          vWave = w;
          vec2 toMouse = uMouse - p.xy;
          float d = length(toMouse);
          float influence = smoothstep(6.0, 0.0, d);
          p.xy -= normalize(toMouse + 1e-6) * influence * 0.9;
          p.z += influence * 1.4;
          vDist = d;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = uSize * (1.0 + influence * 1.6) * (20.0 / -mv.z);
        }
      `,
      fragmentShader: `
        uniform vec3 uAccent;
        uniform vec3 uFg;
        varying float vDist;
        varying float vWave;
        void main(){
          vec2 uv = gl_PointCoord - 0.5;
          float r = length(uv);
          if(r > 0.5) discard;
          float a = smoothstep(0.5, 0.0, r);
          float mixFactor = smoothstep(4.5, 0.0, vDist) * 0.9 + smoothstep(0.2, 0.6, vWave) * 0.3;
          vec3 col = mix(uFg * 0.35, uAccent, clamp(mixFactor, 0.0, 1.0));
          gl_FragColor = vec4(col, a * 0.85);
        }
      `,
    });

    const points = new THREE.Points(geom, mat);
    points.rotation.x = -0.35;
    scene.add(points);
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mouseTarget = new THREE.Vector2(0, 0);
    const mouse = new THREE.Vector2(0, 0);
    const clock = new THREE.Clock();

    const resize = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    const move = (event) => {
      const rect = canvas.getBoundingClientRect();
      const nx = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
      mouseTarget.set(nx * 10, ny * 6);
    };
    const leave = () => mouseTarget.set(0, 0);
    const tick = () => {
      raf = requestAnimationFrame(tick);
      const t = clock.getElapsedTime();
      if (!reduced) {
        uniforms.uTime.value = t;
        mouse.lerp(mouseTarget, 0.08);
        uniforms.uMouse.value.copy(mouse);
        points.rotation.z = Math.sin(t * 0.05) * 0.08;
      }
      renderer.render(scene, camera);
    };

    resize();
    tick();
    canvas.parentElement?.addEventListener('mousemove', move);
    canvas.parentElement?.addEventListener('mouseleave', leave);
    window.addEventListener('resize', resize);
      cleanup = () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      canvas.parentElement?.removeEventListener('mousemove', move);
      canvas.parentElement?.removeEventListener('mouseleave', leave);
      geom.dispose();
      mat.dispose();
      renderer.dispose();
    };
    });

    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  return <canvas id="sphere-canvas" ref={ref} aria-hidden="true" />;
}
