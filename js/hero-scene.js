/**
 * ============================================================================
 * DAVID — 3D HERO WEBGL EXPERIENCE
 * Architecture: Three.js Interactive Sculptural Environment
 * Materials: Smoked Glass, Burnished Bronze, Warm Copper & Charcoal Space
 * ============================================================================
 */

(function () {
  'use strict';

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const container = document.getElementById('hero-3d-canvas-container');
  const fallbackEl = document.getElementById('hero-fallback-geometry');

  if (!container || prefersReducedMotion || typeof THREE === 'undefined') {
    if (fallbackEl) fallbackEl.classList.add('active');
    return;
  }

  // WebGL Availability Check
  function isWebGLAvailable() {
    try {
      const canvas = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch (e) {
      return false;
    }
  }

  if (!isWebGLAvailable()) {
    if (fallbackEl) fallbackEl.classList.add('active');
    return;
  }

  // Scene Configuration
  let scene, camera, renderer;
  let sculptureGroup, mainSculpture, glassPlates = [], particles;
  let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
  let scrollY = 0;
  let isVisible = true;
  let animationFrameId;

  function updateSculptureLayout() {
    if (!sculptureGroup) return;
    const width = window.innerWidth;

    if (width > 1024) {
      // Widescreen / Desktop: Positioned to the right of editorial content
      sculptureGroup.position.set(1.5, 0.15, 0);
      sculptureGroup.scale.set(1.0, 1.0, 1.0);
    } else if (width > 768) {
      // Laptop / Tablet: Receded slightly into depth
      sculptureGroup.position.set(1.0, 0.4, -1.0);
      sculptureGroup.scale.set(0.85, 0.85, 0.85);
    } else {
      // Mobile: Receded deeper into space behind content with smaller scale
      sculptureGroup.position.set(0, 0.5, -2.4);
      sculptureGroup.scale.set(0.72, 0.72, 0.72);
    }
  }

  function init() {
    // 1. Scene & Camera
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x08080a, 0.09);

    const aspect = container.clientWidth / container.clientHeight;
    camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    // 2. WebGL Renderer
    renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // 3. Lighting System (Warm Studio Illumination)
    const ambientLight = new THREE.AmbientLight(0x141418, 1.4);
    scene.add(ambientLight);

    // Key Light: Warm Ivory
    const keyLight = new THREE.DirectionalLight(0xf5f3ef, 2.4);
    keyLight.position.set(5, 6, 4);
    scene.add(keyLight);

    // Rim Light: Burnished Bronze / Copper
    const copperRimLight = new THREE.PointLight(0xd98a5e, 3.6, 16);
    copperRimLight.position.set(-4, -2, 2);
    scene.add(copperRimLight);

    // Accent Top Light
    const topAccentLight = new THREE.PointLight(0xc87a52, 2.2, 12);
    topAccentLight.position.set(2, 4, -1);
    scene.add(topAccentLight);

    // 4. Group for all 3D Objects
    sculptureGroup = new THREE.Group();
    updateSculptureLayout();
    scene.add(sculptureGroup);

    // 5. Main Architectural Sculpture (Metallic Copper / Bronze Torus Knot)
    const sculptureGeo = new THREE.TorusKnotGeometry(1.35, 0.38, 128, 24, 2, 3);
    const sculptureMat = new THREE.MeshStandardMaterial({
      color: 0x1f1612,
      roughness: 0.26,
      metalness: 0.84,
      emissive: 0x0f0805,
      wireframe: false
    });
    mainSculpture = new THREE.Mesh(sculptureGeo, sculptureMat);
    sculptureGroup.add(mainSculpture);

    // Fine wireframe overlay for mathematical precision aesthetic
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0xe8a87c,
      wireframe: true,
      transparent: true,
      opacity: 0.10
    });
    const wireframeMesh = new THREE.Mesh(sculptureGeo, wireframeMat);
    wireframeMesh.scale.set(1.002, 1.002, 1.002);
    sculptureGroup.add(wireframeMesh);

    // 6. Smoked Glass Floating Planes
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x121218,
      roughness: 0.15,
      metalness: 0.1,
      transparent: true,
      opacity: 0.28,
      transmission: 0.72,
      ior: 1.45,
      clearcoat: 0.8
    });

    const plateGeometries = [
      new THREE.BoxGeometry(2.4, 1.4, 0.04),
      new THREE.BoxGeometry(1.8, 2.0, 0.04),
      new THREE.CylinderGeometry(1.2, 1.2, 0.03, 32)
    ];

    const plateTransforms = [
      { pos: [-1.6, 1.2, -1.0], rot: [0.3, 0.4, 0.2] },
      { pos: [1.8, -1.4, -0.8], rot: [-0.4, 0.5, -0.2] },
      { pos: [0.2, -1.8, 1.2], rot: [0.8, -0.2, 0.4] }
    ];

    plateGeometries.forEach((geo, idx) => {
      const plate = new THREE.Mesh(geo, glassMat);
      const t = plateTransforms[idx];
      plate.position.set(t.pos[0], t.pos[1], t.pos[2]);
      plate.rotation.set(t.rot[0], t.rot[1], t.rot[2]);
      sculptureGroup.add(plate);
      glassPlates.push({ mesh: plate, baseRot: t.rot });
    });

    // 7. Ambient Floating Dust Motes (Warm Amber Particles)
    const particleCount = 65;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 14;
      particlePositions[i + 1] = (Math.random() - 0.5) * 10;
      particlePositions[i + 2] = (Math.random() - 0.5) * 8;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xd98a5e,
      size: 0.035,
      transparent: true,
      opacity: 0.40,
      blending: THREE.AdditiveBlending
    });
    particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 8. Event Listeners
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onWindowResize, { passive: true });

    // 9. Intersection Observer (pause render loop when hero is off-screen)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        isVisible = entry.isIntersecting;
      });
    }, { threshold: 0.05 });

    observer.observe(document.getElementById('hero'));

    // Start Animation Loop
    animate();
  }

  function onMouseMove(event) {
    const halfW = window.innerWidth / 2;
    const halfH = window.innerHeight / 2;
    mouse.targetX = (event.clientX - halfW) / halfW;
    mouse.targetY = (event.clientY - halfH) / halfH;
  }

  function onScroll() {
    scrollY = window.pageYOffset || document.documentElement.scrollTop;
  }

  function onWindowResize() {
    if (!container || !renderer || !camera) return;
    const width = container.clientWidth;
    const height = container.clientHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);

    updateSculptureLayout();
  }

  function animate() {
    animationFrameId = requestAnimationFrame(animate);
    if (!isVisible) return;

    // Smooth Lerp for Parallax
    mouse.x += (mouse.targetX - mouse.x) * 0.035;
    mouse.y += (mouse.targetY - mouse.y) * 0.035;

    // Continuous Subtle Rotation of Main Sculpture
    if (mainSculpture) {
      mainSculpture.rotation.x += 0.0025;
      mainSculpture.rotation.y += 0.0040;
      mainSculpture.rotation.z += 0.0008;
    }

    // Gentle Floating Motion for Glass Planes
    const time = Date.now() * 0.001;
    glassPlates.forEach((item, i) => {
      item.mesh.rotation.x = item.baseRot[0] + Math.sin(time + i) * 0.06;
      item.mesh.rotation.y = item.baseRot[1] + Math.cos(time + i * 1.5) * 0.06;
      item.mesh.position.y += Math.sin(time * 0.7 + i) * 0.0012;
    });

    // Particle Drift
    if (particles) {
      particles.rotation.y += 0.0003;
      particles.rotation.x += 0.00015;
    }

    // Scroll Effect: Move Sculpture deeper into space as user scrolls
    const scrollFactor = Math.min(scrollY / 800, 1.2);
    if (window.innerWidth > 960) {
      sculptureGroup.position.z = -scrollFactor * 2.2;
      sculptureGroup.position.y = 0.15 - (scrollFactor * 0.7);
    } else {
      sculptureGroup.position.z = -2.4 - (scrollFactor * 2.0);
    }

    // Parallax Camera Offset (restrained, mature motion)
    camera.position.x = mouse.x * 0.40;
    camera.position.y = -mouse.y * 0.32;
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
  }

  // Initialize on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
