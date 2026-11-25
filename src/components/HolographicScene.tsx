import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { ZoomIn, ZoomOut, RotateCcw, Move3d } from 'lucide-react';

interface HolographicSceneProps {
  className?: string;
  showGlobe?: boolean;
  showWaveTube?: boolean;
  theme?: 'dark' | 'light';
}

export const HolographicScene: React.FC<HolographicSceneProps> = ({
  className = '',
  theme = 'dark',
}) => {
  const isLight = theme === 'light';
  const themeRef = useRef<'dark' | 'light'>(theme);
  const themeUpdaterRef = useRef<((nextTheme: 'dark' | 'light') => void) | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const matrixCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const [freeOrbit, setFreeOrbit] = useState(false);
  const freeOrbitRef = useRef(false);
  const controlsApiRef = useRef<{
    zoomIn: () => void;
    zoomOut: () => void;
    resetView: () => void;
  } | null>(null);

  useEffect(() => {
    themeRef.current = theme;
    themeUpdaterRef.current?.(theme);
  }, [theme]);

  useEffect(() => {
    freeOrbitRef.current = freeOrbit;
    const canvas = containerRef.current?.querySelector('#web3-globe-canvas') as HTMLCanvasElement | null;
    if (canvas) {
      canvas.style.touchAction = freeOrbit ? 'none' : 'pan-y';
    }
  }, [freeOrbit]);

  useEffect(() => {
    const container = containerRef.current;
    const matrixCanvas = matrixCanvasRef.current;
    if (!container || !matrixCanvas) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || 500;
    let isSceneVisible = true;

    // -------------------------------------------------------------
    // 1. MATRIX DIGITAL CODE RAIN
    // -------------------------------------------------------------
    const mCtx = matrixCanvas.getContext('2d');
    let matrixInterval: number | null = null;

    const resizeMatrix = () => {
      if (!matrixCanvas) return;
      matrixCanvas.width = width;
      matrixCanvas.height = height;
    };
    resizeMatrix();

    const chars = '0123456789ABCDEFGHJKLMNPQRSTUVWXYZ#$@%&*<>{}[]';
    const fontSize = 14;
    let columns = Math.floor(width / fontSize);
    let drops = Array(columns).fill(1);

    const drawMatrix = () => {
      if (!isSceneVisible || !mCtx || !matrixCanvas) return;
      const lightMode = themeRef.current === 'light';

      if (lightMode) {
        mCtx.globalCompositeOperation = 'destination-out';
        mCtx.fillStyle = 'rgba(0, 0, 0, 0.13)';
        mCtx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
        mCtx.globalCompositeOperation = 'source-over';
        mCtx.font = `600 ${fontSize}px 'JetBrains Mono', monospace`;
      } else {
        mCtx.globalCompositeOperation = 'source-over';
        mCtx.fillStyle = 'rgba(2, 5, 20, 0.12)';
        mCtx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
        mCtx.font = `${fontSize}px monospace`;
      }

      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        const rand = Math.random();

        if (lightMode) {
          if (rand > 0.91) {
            mCtx.fillStyle = '#0F172A';
          } else if (rand > 0.62) {
            mCtx.fillStyle = '#0369A1';
          } else if (rand > 0.30) {
            mCtx.fillStyle = '#2563EB';
          } else {
            mCtx.fillStyle = '#6D28D9';
          }
        } else {
          if (rand > 0.92) {
            mCtx.fillStyle = '#FFFFFF';
          } else if (rand > 0.6) {
            mCtx.fillStyle = '#00F0FF';
          } else if (rand > 0.3) {
            mCtx.fillStyle = '#2563EB';
          } else {
            mCtx.fillStyle = '#E600FF';
          }
        }

        mCtx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > matrixCanvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    matrixInterval = window.setInterval(drawMatrix, 55);

    // -------------------------------------------------------------
    // 2. THREE.JS CLEAN DIGITAL PLANET VISUALIZATION
    // -------------------------------------------------------------
    const scene = new THREE.Scene();
    const initialLight = themeRef.current === 'light';
    const sceneFog = new THREE.FogExp2(initialLight ? 0xf4f7fb : 0x020514, initialLight ? 0.0005 : 0.001);
    scene.fog = sceneFog;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    let baseCameraZ = 245;
    let targetZoom = 1;
    let currentZoom = 1;

    const getBaseCameraZ = (w: number) => {
      if (w < 480) return 305;
      if (w < 768) return 270;
      return 245;
    };

    const updateCamera = (w: number) => {
      baseCameraZ = getBaseCameraZ(w);
      camera.position.set(0, 0, baseCameraZ * currentZoom);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    updateCamera(width);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

    const planetCanvas = renderer.domElement;
    planetCanvas.id = 'web3-globe-canvas';
    planetCanvas.className = 'absolute inset-0 z-2 block w-full h-full';
    planetCanvas.style.cursor = 'grab';
    planetCanvas.style.touchAction = freeOrbitRef.current ? 'none' : 'pan-y';

    container.appendChild(planetCanvas);

    const planetGroup = new THREE.Group();
    scene.add(planetGroup);

    const radius = 68;

    // Core Esférico (Obsidiana espacial en dark, zafiro profundo elegante en light)
    const coreGeo = new THREE.SphereGeometry(radius - 0.5, 32, 32);
    const coreMat = new THREE.MeshBasicMaterial({
      color: initialLight ? 0x0b152c : 0x03081c,
      transparent: true,
      opacity: initialLight ? 0.94 : 0.96,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    planetGroup.add(coreMesh);

    // Líneas Topográficas Claras
    const contourGroup = new THREE.Group();
    planetGroup.add(contourGroup);

    const numRings = 48;
    const ringGeometries: THREE.BufferGeometry[] = [];
    const ringMaterials: THREE.LineBasicMaterial[] = [];
    const ringMeta: Array<{ mat: THREE.LineBasicMaterial; factor: number }> = [];

    for (let i = 0; i < numRings; i++) {
      const lat = -80 + (160 / numRings) * i;
      const phi = (90 - lat) * (Math.PI / 180);
      const ringRadius = radius * Math.sin(phi);
      const y = radius * Math.cos(phi);

      if (ringRadius < 1) continue;

      const segments = 72;
      const points: THREE.Vector3[] = [];

      for (let j = 0; j <= segments; j++) {
        const theta = (j / segments) * Math.PI * 2;
        const wave =
          Math.sin(theta * 6 + i * 0.4) * 0.9 +
          Math.cos(theta * 4 - i * 0.2) * 0.7;
        const r = ringRadius + wave;

        const x = r * Math.cos(theta);
        const z = r * Math.sin(theta);
        points.push(new THREE.Vector3(x, y + wave * 0.2, z));
      }

      const ringGeo = new THREE.BufferGeometry().setFromPoints(points);
      ringGeometries.push(ringGeo);

      const factor = i / numRings;
      const rColor = initialLight
        ? new THREE.Color().setHSL(0.55 + factor * 0.21, 0.9, 0.54)
        : new THREE.Color().setHSL(0.55 + factor * 0.3, 1.0, 0.6);

      const ringMat = new THREE.LineBasicMaterial({
        color: rColor,
        transparent: true,
        opacity: initialLight
          ? 0.52 + Math.sin(factor * Math.PI) * 0.34
          : 0.5 + Math.sin(factor * Math.PI) * 0.4,
        blending: initialLight ? THREE.NormalBlending : THREE.AdditiveBlending,
      });
      ringMaterials.push(ringMat);
      ringMeta.push({ mat: ringMat, factor });

      const ringLine = new THREE.Line(ringGeo, ringMat);
      contourGroup.add(ringLine);
    }

    // Malla de Partículas Superficiales
    const particleCount = 4000;
    const particlePositions: number[] = [];
    const darkParticleColors = new Float32Array(particleCount * 3);
    const lightParticleColors = new Float32Array(particleCount * 3);

    const colorCyan = new THREE.Color(0x00f0ff);
    const colorBlue = new THREE.Color(0x2563eb);
    const colorMagenta = new THREE.Color(0xe600ff);
    const colorWhite = new THREE.Color(0xffffff);

    const lightColorSky = new THREE.Color(0x38bdf8);
    const lightColorIndigo = new THREE.Color(0x6366f1);
    const lightColorViolet = new THREE.Color(0xa855f7);
    const lightColorPearl = new THREE.Color(0xf8fafc);

    for (let i = 0; i < particleCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);

      const r = radius + (Math.random() - 0.5) * 1.5;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      particlePositions.push(x, y, z);

      const normY = (y + radius) / (radius * 2);
      const isHighlight = Math.random() > 0.85;

      const colDark = new THREE.Color();
      if (isHighlight) {
        colDark.copy(colorWhite);
      } else if (normY > 0.5) {
        colDark.lerpColors(colorBlue, colorCyan, (normY - 0.5) * 2);
      } else {
        colDark.lerpColors(colorMagenta, colorBlue, normY * 2);
      }
      darkParticleColors[i * 3] = colDark.r;
      darkParticleColors[i * 3 + 1] = colDark.g;
      darkParticleColors[i * 3 + 2] = colDark.b;

      const colLight = new THREE.Color();
      if (isHighlight) {
        colLight.copy(lightColorPearl);
      } else if (normY > 0.5) {
        colLight.lerpColors(lightColorIndigo, lightColorSky, (normY - 0.5) * 2);
      } else {
        colLight.lerpColors(lightColorViolet, lightColorIndigo, normY * 2);
      }
      lightParticleColors[i * 3] = colLight.r;
      lightParticleColors[i * 3 + 1] = colLight.g;
      lightParticleColors[i * 3 + 2] = colLight.b;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(particlePositions, 3)
    );
    const particleColorBuffer = new Float32Array(
      initialLight ? lightParticleColors : darkParticleColors
    );
    const particleColorAttr = new THREE.BufferAttribute(particleColorBuffer, 3);
    particleGeo.setAttribute('color', particleColorAttr);

    const particleMat = new THREE.PointsMaterial({
      size: initialLight ? 1.5 : 1.4,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      blending: initialLight ? THREE.NormalBlending : THREE.AdditiveBlending,
    });

    const particleMesh = new THREE.Points(particleGeo, particleMat);
    planetGroup.add(particleMesh);

    // Nodos Superficiales (Sin agujas/pines verticales)
    const nodePositions: THREE.Vector3[] = [];
    const numNodes = 26;
    const nodeGeos: THREE.BufferGeometry[] = [];
    const nodeMats: THREE.MeshBasicMaterial[] = [];
    const nodeMeta: Array<{ mat: THREE.MeshBasicMaterial; isCyan: boolean }> = [];

    for (let i = 0; i < numNodes; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);

      const pos = new THREE.Vector3(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      );

      nodePositions.push(pos);

      const isCyanNode = Math.random() > 0.5;
      // Solo el punto brillante a nivel de superficie
      const nodeGeo = new THREE.SphereGeometry(1.2, 12, 12);
      nodeGeos.push(nodeGeo);

      const nodeMat = new THREE.MeshBasicMaterial({
        color: initialLight
          ? isCyanNode
            ? 0x38bdf8
            : 0xffffff
          : isCyanNode
          ? 0x00f0ff
          : 0xffffff,
        transparent: true,
        opacity: 0.95,
        blending: initialLight ? THREE.NormalBlending : THREE.AdditiveBlending,
      });
      nodeMats.push(nodeMat);
      nodeMeta.push({ mat: nodeMat, isCyan: isCyanNode });

      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.copy(pos);
      planetGroup.add(nodeMesh);
    }

    // Arcos de Conexión y Transmisión de Datos
    const connectionsGroup = new THREE.Group();
    planetGroup.add(connectionsGroup);

    interface DataPacketItem {
      curve: THREE.QuadraticBezierCurve3;
      packet: THREE.Mesh;
      progress: number;
      speed: number;
    }
    const dataPackets: DataPacketItem[] = [];
    const arcGeos: THREE.BufferGeometry[] = [];
    const arcMats: THREE.LineBasicMaterial[] = [];
    const arcMeta: Array<{ mat: THREE.LineBasicMaterial; isCyan: boolean }> = [];

    const packetGeo = new THREE.SphereGeometry(1.3, 8, 8);
    const packetMat = new THREE.MeshBasicMaterial({
      color: initialLight ? 0x0ea5e9 : 0xffffff,
      transparent: true,
      opacity: 1,
      blending: initialLight ? THREE.NormalBlending : THREE.AdditiveBlending,
    });

    const createArcConnection = (p1: THREE.Vector3, p2: THREE.Vector3) => {
      const distance = p1.distanceTo(p2);
      const mid = p1.clone().add(p2).multiplyScalar(0.5);
      const midLength = mid.length();
      mid.normalize().multiplyScalar(midLength + distance * 0.28);

      const curve = new THREE.QuadraticBezierCurve3(p1, mid, p2);
      const curvePoints = curve.getPoints(50);

      const lineGeo = new THREE.BufferGeometry().setFromPoints(curvePoints);
      arcGeos.push(lineGeo);

      const isCyan = Math.random() > 0.5;
      const lineMat = new THREE.LineBasicMaterial({
        color: initialLight
          ? isCyan
            ? 0x0284c7
            : 0x7c3aed
          : isCyan
          ? 0x00f0ff
          : 0xe600ff,
        transparent: true,
        opacity: initialLight ? 0.65 : 0.45,
        blending: initialLight ? THREE.NormalBlending : THREE.AdditiveBlending,
      });
      arcMats.push(lineMat);
      arcMeta.push({ mat: lineMat, isCyan });

      const line = new THREE.Line(lineGeo, lineMat);
      connectionsGroup.add(line);

      // Pulso luminoso de transmisión
      const packet = new THREE.Mesh(packetGeo, packetMat);
      connectionsGroup.add(packet);

      dataPackets.push({
        curve,
        packet,
        progress: Math.random(),
        speed: 0.005 + Math.random() * 0.007,
      });
    };

    for (let i = 0; i < nodePositions.length; i++) {
      for (let j = i + 1; j < nodePositions.length; j++) {
        if (Math.random() > 0.72) {
          createArcConnection(nodePositions[i], nodePositions[j]);
        }
      }
    }

    // Atmósfera con Resplandor Dual
    const atmosphereGeo = new THREE.SphereGeometry(radius + 12, 32, 32);
    const atmosphereMat = new THREE.ShaderMaterial({
      uniforms: {
        uIsLight: { value: initialLight ? 1.0 : 0.0 },
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vWorldPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uIsLight;
        varying vec3 vNormal;
        varying vec3 vWorldPosition;
        void main() {
          float intensity = pow(0.68 - dot(vNormal, vec3(0, 0, 1.0)), 2.6);
          float mixFactor = clamp((vWorldPosition.y - vWorldPosition.x) / 120.0 + 0.5, 0.0, 1.0);
          
          if (uIsLight > 0.5) {
            vec3 lightAzure = vec3(0.02, 0.52, 0.85);
            vec3 lightViolet = vec3(0.45, 0.25, 0.92);
            vec3 glowColor = mix(lightViolet, lightAzure, mixFactor);
            gl_FragColor = vec4(glowColor, clamp(intensity * 0.45, 0.0, 0.36));
          } else {
            vec3 cyan = vec3(0.0, 0.94, 1.0);
            vec3 magenta = vec3(0.9, 0.0, 1.0);
            vec3 glowColor = mix(magenta, cyan, mixFactor);
            gl_FragColor = vec4(glowColor, 1.0) * intensity * 1.6;
          }
        }
      `,
      blending: initialLight ? THREE.NormalBlending : THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
    });
    const atmosphereMesh = new THREE.Mesh(atmosphereGeo, atmosphereMat);
    scene.add(atmosphereMesh);

    themeUpdaterRef.current = (nextTheme: 'dark' | 'light') => {
      const lightMode = nextTheme === 'light';
      if (mCtx && matrixCanvas) {
        mCtx.clearRect(0, 0, matrixCanvas.width, matrixCanvas.height);
      }

      sceneFog.color.setHex(lightMode ? 0xf4f7fb : 0x020514);
      sceneFog.density = lightMode ? 0.0005 : 0.001;

      coreMat.color.setHex(lightMode ? 0x0b152c : 0x03081c);
      coreMat.opacity = lightMode ? 0.94 : 0.96;

      ringMeta.forEach(({ mat, factor }) => {
        if (lightMode) {
          mat.color.setHSL(0.55 + factor * 0.21, 0.9, 0.54);
          mat.opacity = 0.52 + Math.sin(factor * Math.PI) * 0.34;
          mat.blending = THREE.NormalBlending;
        } else {
          mat.color.setHSL(0.55 + factor * 0.3, 1.0, 0.6);
          mat.opacity = 0.5 + Math.sin(factor * Math.PI) * 0.4;
          mat.blending = THREE.AdditiveBlending;
        }
        mat.needsUpdate = true;
      });

      const targetArray = lightMode ? lightParticleColors : darkParticleColors;
      (particleColorAttr.array as Float32Array).set(targetArray);
      particleColorAttr.needsUpdate = true;
      particleMat.size = lightMode ? 1.5 : 1.4;
      particleMat.blending = lightMode ? THREE.NormalBlending : THREE.AdditiveBlending;
      particleMat.needsUpdate = true;

      nodeMeta.forEach(({ mat, isCyan }) => {
        mat.color.setHex(
          lightMode ? (isCyan ? 0x38bdf8 : 0xffffff) : isCyan ? 0x00f0ff : 0xffffff
        );
        mat.blending = lightMode ? THREE.NormalBlending : THREE.AdditiveBlending;
        mat.needsUpdate = true;
      });

      arcMeta.forEach(({ mat, isCyan }) => {
        mat.color.setHex(
          lightMode ? (isCyan ? 0x0284c7 : 0x7c3aed) : isCyan ? 0x00f0ff : 0xe600ff
        );
        mat.opacity = lightMode ? 0.65 : 0.45;
        mat.blending = lightMode ? THREE.NormalBlending : THREE.AdditiveBlending;
        mat.needsUpdate = true;
      });

      packetMat.color.setHex(lightMode ? 0x0ea5e9 : 0xffffff);
      packetMat.blending = lightMode ? THREE.NormalBlending : THREE.AdditiveBlending;
      packetMat.needsUpdate = true;

      atmosphereMat.uniforms.uIsLight.value = lightMode ? 1.0 : 0.0;
      atmosphereMat.blending = lightMode ? THREE.NormalBlending : THREE.AdditiveBlending;
      atmosphereMat.needsUpdate = true;
    };

    // Esfera invisible de detección de impactos táctiles / clics (amplia para fácil agarre)
    const hitTargetGeo = new THREE.SphereGeometry(radius + 22, 24, 24);
    const hitTargetMat = new THREE.MeshBasicMaterial({ visible: false });
    const hitTargetMesh = new THREE.Mesh(hitTargetGeo, hitTargetMat);
    planetGroup.add(hitTargetMesh);

    // Raycaster para verificar si el toque o clic ocurre sobre el planeta
    const raycaster = new THREE.Raycaster();
    const mouseVector = new THREE.Vector2();

    const isTouchingPlanet = (clientX: number, clientY: number): boolean => {
      if (!planetCanvas) return false;
      const rect = planetCanvas.getBoundingClientRect();
      if (
        clientX < rect.left ||
        clientX > rect.right ||
        clientY < rect.top ||
        clientY > rect.bottom
      ) {
        return false;
      }
      mouseVector.x = ((clientX - rect.left) / rect.width) * 2 - 1;
      mouseVector.y = -((clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(mouseVector, camera);
      const intersects = raycaster.intersectObject(hitTargetMesh, false);
      return intersects.length > 0;
    };

    // Control de Arrastre con Inercia / Momentum Suave y Pinch-to-Zoom
    let isDragging = false;
    let hasDragged = false;
    let previousMousePosition = { x: 0, y: 0 };
    let velocityX = 0; // Rotación en Y (horizontal)
    let velocityY = 0; // Rotación en X (vertical)
    let pinchStartDist = 0;
    let pinchStartZoom = 1;

    const clampZoom = (z: number) => Math.max(0.62, Math.min(1.38, z));
    const clampPitch = (x: number) => Math.max(-1.15, Math.min(1.15, x));

    controlsApiRef.current = {
      zoomIn: () => {
        targetZoom = clampZoom(targetZoom - 0.16);
      },
      zoomOut: () => {
        targetZoom = clampZoom(targetZoom + 0.16);
      },
      resetView: () => {
        targetZoom = 1;
        velocityX = 0;
        velocityY = 0;
        planetGroup.rotation.x = 0.25;
        planetGroup.rotation.z = -0.35;
      },
    };

    // Detección de cursor al pasar sobre el planeta (Desktop)
    const onCanvasMouseMove = (e: MouseEvent) => {
      if (isDragging) return;
      if (freeOrbitRef.current || isTouchingPlanet(e.clientX, e.clientY)) {
        planetCanvas.style.cursor = 'grab';
      } else {
        planetCanvas.style.cursor = 'default';
      }
    };

    const onMouseDown = (e: MouseEvent) => {
      if (e.button !== 0) return;
      if (!freeOrbitRef.current && !isTouchingPlanet(e.clientX, e.clientY)) {
        return;
      }
      isDragging = true;
      hasDragged = false;
      velocityX = 0;
      velocityY = 0;
      previousMousePosition = { x: e.clientX, y: e.clientY };
      planetCanvas.style.cursor = 'grabbing';
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;
      if (Math.abs(deltaX) > 0 || Math.abs(deltaY) > 0) {
        hasDragged = true;
      }

      const rotStepY = deltaX * 0.0055;
      const rotStepX = deltaY * 0.0045;

      planetGroup.rotation.y += rotStepY;
      planetGroup.rotation.x = clampPitch(planetGroup.rotation.x + rotStepX);

      // Guardar velocidad para inercia fluida al soltar
      velocityX = rotStepY * 0.85;
      velocityY = rotStepX * 0.85;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      if (isDragging || hasDragged) {
        isDragging = false;
        hasDragged = false;
        planetCanvas.style.cursor = 'grab';
      }
    };

    // Zoom con rueda cuando está activo el modo 360° o presionando Ctrl (sin atrapar el scroll normal)
    const onWheel = (e: WheelEvent) => {
      if (!freeOrbitRef.current && !e.ctrlKey) return;
      e.preventDefault();
      targetZoom = clampZoom(targetZoom + e.deltaY * 0.0012);
    };

    // Soporte táctil fluido (incluye rotación con inercia + pinch-to-zoom con 2 dedos)
    const getTouchDist = (t1: Touch, t2: Touch) => {
      const dx = t1.clientX - t2.clientX;
      const dy = t1.clientY - t2.clientY;
      return Math.hypot(dx, dy);
    };

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        isDragging = false;
        hasDragged = false;
        pinchStartDist = getTouchDist(e.touches[0], e.touches[1]);
        pinchStartZoom = targetZoom;
        return;
      }
      if (e.touches.length === 1) {
        const touch = e.touches[0];
        if (freeOrbitRef.current || isTouchingPlanet(touch.clientX, touch.clientY)) {
          isDragging = true;
          hasDragged = false;
          velocityX = 0;
          velocityY = 0;
          previousMousePosition = { x: touch.clientX, y: touch.clientY };
          planetCanvas.style.cursor = 'grabbing';
        } else {
          isDragging = false;
          hasDragged = false;
        }
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 2 && pinchStartDist > 0) {
        const dist = getTouchDist(e.touches[0], e.touches[1]);
        const scale = pinchStartDist / Math.max(dist, 1);
        targetZoom = clampZoom(pinchStartZoom * scale);
        return;
      }

      if (!isDragging || e.touches.length !== 1) {
        return;
      }

      const touch = e.touches[0];
      const deltaX = touch.clientX - previousMousePosition.x;
      const deltaY = touch.clientY - previousMousePosition.y;

      // En modo 360° explora libremente en ambos ejes; en modo normal prioriza fluidez de scroll vertical
      if (freeOrbitRef.current || Math.abs(deltaX) > Math.abs(deltaY) * 0.85) {
        if (Math.abs(deltaX) > 0 || Math.abs(deltaY) > 0) {
          hasDragged = true;
        }
        const rotStepY = deltaX * 0.0068;
        const rotStepX = deltaY * 0.0052;

        planetGroup.rotation.y += rotStepY;
        planetGroup.rotation.x = clampPitch(planetGroup.rotation.x + rotStepX);

        velocityX = rotStepY * 0.85;
        velocityY = rotStepX * 0.85;

        previousMousePosition = { x: touch.clientX, y: touch.clientY };
      } else {
        isDragging = false;
        hasDragged = false;
        planetCanvas.style.cursor = 'default';
      }
    };

    const onTouchEnd = () => {
      isDragging = false;
      hasDragged = false;
      pinchStartDist = 0;
      planetCanvas.style.cursor = 'grab';
    };

    planetCanvas.addEventListener('mousemove', onCanvasMouseMove);
    planetCanvas.addEventListener('mousedown', onMouseDown);
    planetCanvas.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('blur', onMouseUp);
    document.addEventListener('mouseleave', onMouseUp);

    planetCanvas.addEventListener('touchstart', onTouchStart, { passive: true });
    planetCanvas.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);
    window.addEventListener('touchcancel', onTouchEnd);

    const onResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || 500;
      resizeMatrix();
      columns = Math.floor(width / fontSize);
      drops = Array(columns).fill(1);
      updateCamera(width);
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', onResize);

    planetGroup.rotation.z = -0.35;
    planetGroup.rotation.x = 0.25;

    // Loop de Animación Continuo con Inercia y Zoom Suave (nunca se detiene)
    let animationFrameId: number = 0;
    let observer: IntersectionObserver | null = null;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Suavizado de cámara (zoom fluido)
      if (Math.abs(targetZoom - currentZoom) > 0.0005) {
        currentZoom += (targetZoom - currentZoom) * 0.12;
        camera.position.z = baseCameraZ * currentZoom;
      }

      // Rotación continua constante + inercia suave sin detenerse nunca
      if (!isDragging || !hasDragged) {
        planetGroup.rotation.y += 0.002 + velocityX;
        if (Math.abs(velocityY) > 0.0001) {
          planetGroup.rotation.x = clampPitch(planetGroup.rotation.x + velocityY);
          velocityY *= 0.935;
        } else {
          velocityY = 0;
        }
        if (Math.abs(velocityX) > 0.0001) {
          velocityX *= 0.935;
        } else {
          velocityX = 0;
        }
      }

      // Mover pulsos de datos sobre los arcos reutilizando el vector de posición (cero asignación de memoria / cero GC)
      for (let i = 0; i < dataPackets.length; i++) {
        const p = dataPackets[i];
        p.progress += p.speed;
        if (p.progress > 1) p.progress = 0;
        p.curve.getPoint(p.progress, p.packet.position);
      }

      renderer.render(scene, camera);
    };

    if ('IntersectionObserver' in window && container) {
      observer = new IntersectionObserver(
        (entries) => {
          isSceneVisible = entries[0].isIntersecting;
        },
        { rootMargin: '250px', threshold: 0.01 }
      );
      observer.observe(container);
    }
    animate();

    return () => {
      themeUpdaterRef.current = null;
      if (observer) observer.disconnect();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (matrixInterval) clearInterval(matrixInterval);

      planetCanvas.removeEventListener('mousemove', onCanvasMouseMove);
      planetCanvas.removeEventListener('mousedown', onMouseDown);
      planetCanvas.removeEventListener('wheel', onWheel);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('blur', onMouseUp);
      document.removeEventListener('mouseleave', onMouseUp);

      planetCanvas.removeEventListener('touchstart', onTouchStart);
      planetCanvas.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('touchcancel', onTouchEnd);

      window.removeEventListener('resize', onResize);

      hitTargetGeo.dispose();
      hitTargetMat.dispose();

      coreGeo.dispose();
      coreMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      packetGeo.dispose();
      packetMat.dispose();
      atmosphereGeo.dispose();
      atmosphereMat.dispose();

      nodeGeos.forEach((g) => g.dispose());
      nodeMats.forEach((m) => m.dispose());
      ringGeometries.forEach((g) => g.dispose());
      ringMaterials.forEach((m) => m.dispose());
      arcGeos.forEach((g) => g.dispose());
      arcMats.forEach((m) => m.dispose());

      renderer.dispose();

      if (container.contains(planetCanvas)) {
        container.removeChild(planetCanvas);
      }
    };
  }, []);

  return (
    <div className={`globe-stage relative w-full overflow-hidden rounded-3xl ${className}`}>
      {/* 3D Canvas Container */}
      <div
        ref={containerRef}
        className="relative w-full h-[380px] sm:h-[500px] lg:h-[600px] overflow-hidden select-none"
      >
        {/* Capa de Lluvia Matrix de Fondo */}
        <canvas
          ref={matrixCanvasRef}
          id="matrix-canvas"
          className={`absolute inset-0 z-1 pointer-events-none ${
            isLight ? 'opacity-40 sm:opacity-50' : 'opacity-30 sm:opacity-35'
          }`}
          style={
            isLight
              ? {
                  maskImage:
                    'radial-gradient(ellipse at center, rgba(0,0,0,0.95) 45%, transparent 94%)',
                  WebkitMaskImage:
                    'radial-gradient(ellipse at center, rgba(0,0,0,0.95) 45%, transparent 94%)',
                }
              : undefined
          }
        />

        {/* Resplandor Neón Dual */}
        <div
          className="absolute inset-0 pointer-events-none z-1"
          style={{
            background: isLight
              ? 'radial-gradient(circle at 50% 50%, rgba(15, 23, 42, 0.08) 0%, rgba(2, 132, 199, 0.09) 34%, transparent 64%), radial-gradient(circle at 30% 25%, rgba(14, 165, 233, 0.12) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(109, 40, 217, 0.09) 0%, transparent 55%)'
              : 'radial-gradient(circle at 35% 30%, rgba(0, 240, 255, 0.25) 0%, rgba(2, 5, 20, 0) 50%), radial-gradient(circle at 75% 75%, rgba(230, 0, 255, 0.22) 0%, rgba(2, 5, 20, 0) 55%)',
          }}
        />

        {/* Controles flotantes de exploración 3D */}
        <div
          className={`absolute bottom-14 sm:bottom-[72px] lg:bottom-20 right-3 sm:right-6 z-20 flex items-center gap-1 backdrop-blur-md p-1 rounded-xl border ${
            isLight
              ? 'bg-white/95 border-slate-300/90 shadow-[0_8px_24px_rgba(15,23,42,0.14)]'
              : 'bg-[#040A1C]/90 border-cyan-400/45 shadow-[0_4px_20px_rgba(0,240,255,0.22)]'
          }`}
        >
          <button
            type="button"
            onClick={() => setFreeOrbit((prev) => !prev)}
            className={`px-2 py-1 rounded-lg text-[10px] sm:text-[11px] font-mono font-semibold flex items-center gap-1 transition cursor-pointer ${
              freeOrbit
                ? isLight
                  ? 'bg-sky-600 text-[#FFFFFF] shadow-[0_0_10px_rgba(2,132,199,0.35)]'
                  : 'bg-cyan-500 text-slate-950 shadow-[0_0_10px_rgba(0,240,255,0.55)]'
                : isLight
                ? 'text-sky-700 hover:bg-sky-50'
                : 'text-cyan-300 hover:bg-white/10'
            }`}
            title="Activar exploración libre 360° sin mover la página"
          >
            <Move3d className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>360°</span>
          </button>
          <button
            type="button"
            onClick={() => controlsApiRef.current?.zoomIn()}
            className={`p-1 sm:p-1.5 rounded-lg transition cursor-pointer ${
              isLight
                ? 'text-slate-700 hover:text-sky-600 hover:bg-sky-50'
                : 'text-slate-200 hover:text-cyan-300 hover:bg-white/10'
            }`}
            aria-label="Acercar planeta"
            title="Acercar"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={() => controlsApiRef.current?.zoomOut()}
            className={`p-1 sm:p-1.5 rounded-lg transition cursor-pointer ${
              isLight
                ? 'text-slate-700 hover:text-sky-600 hover:bg-sky-50'
                : 'text-slate-200 hover:text-cyan-300 hover:bg-white/10'
            }`}
            aria-label="Alejar planeta"
            title="Alejar"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={() => controlsApiRef.current?.resetView()}
            className={`p-1 sm:p-1.5 rounded-lg transition cursor-pointer ${
              isLight
                ? 'text-slate-700 hover:text-violet-600 hover:bg-violet-50'
                : 'text-slate-200 hover:text-pink-400 hover:bg-white/10'
            }`}
            aria-label="Restablecer vista del planeta"
            title="Restablecer vista"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Indicador minimalista inferior */}
        <div
          className={`absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 text-[10px] sm:text-[11px] tracking-[2px] uppercase pointer-events-none px-4 py-1.5 sm:py-2 rounded-full border backdrop-blur-md select-none z-10 whitespace-nowrap ${
            isLight
              ? 'text-sky-700 bg-white/90 border-sky-500/30 shadow-[0_6px_20px_rgba(15,23,42,0.1)]'
              : 'text-cyan-400 bg-[#040A1C]/75 border-cyan-400/30 shadow-[0_0_20px_rgba(0,240,255,0.2)]'
          }`}
        >
          ✦ Arrastra para explorar el planeta en 360° ✦
        </div>
      </div>
    </div>
  );
};
