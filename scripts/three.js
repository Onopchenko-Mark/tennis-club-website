import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

if (window.innerWidth > 425) main();

function main() {
  // Screen size storage
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  // Scene
  const scene = new THREE.Scene();

  // Light
  const light = new THREE.PointLight(0xffffff, 500, 1000); // Color, Intensity, Distance
  light.position.set(0, 5, 5);
  scene.add(light);

  // Ambient light
  const ambientLight = new THREE.AmbientLight(0x7302c8, 1);
  scene.add(ambientLight);

  // Camera
  // FOV, aspect ratio
  const camera = new THREE.PerspectiveCamera(
    45,
    sizes.width / sizes.height,
    0.1,
    100
  );
  camera.position.z = 20;
  scene.add(camera);

  // Renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector(".webgl"),
    antialias: true,
    alpha: true,
  });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.render(scene, camera);

  // Loading Manager
  const progressBar = document.getElementById("progress-bar");

  const loadingManager = new THREE.LoadingManager();
  loadingManager.onProgress = function (url, loaded, total) {
    progressBar.value = (loaded / total) * 100;
  };

  loadingManager.onLoad = function () {
    document.querySelector(".progress-bar-container").style.display = "none";
    setSize();
  };

  // Model import
  let ballModel;
  let racketModel;
  const loader = new GLTFLoader(loadingManager);
  loader.load("models/ipad/scene.gltf", (gltf) => {
    ballModel = gltf.scene;
    scene.add(ballModel);

    loader.load("models/racket/scene.gltf", (gltf) => {
      racketModel = gltf.scene;
      scene.add(racketModel);
    });
  });

  function setSize() {
    const multiplier = sizes.width / sizes.height;
    ballModel.position.y = -(2.25 * multiplier);
    ballModel.position.x = 5 * multiplier;
    ballModel.scale.set(25 * multiplier, 25 * multiplier, 25 * multiplier);

    racketModel.position.y = -(1.5 * multiplier);
    racketModel.position.x = -(7.5 * multiplier);
    racketModel.position.z = -1;
    racketModel.scale.set(1.3 * multiplier, 1.3 * multiplier, 1.3 * multiplier);
    racketModel.rotation.x = 2;
    racketModel.rotation.y = -0.7;
  }

  // Resize
  window.addEventListener("resize", () => {
    // Update Sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    // Update Camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    if (ballModel && racketModel) setSize();
    // Update Renderer
    renderer.setSize(sizes.width, sizes.height);
  });

  const loop = () => {
    if (ballModel) {
      ballModel.rotation.x += 0.005;
      ballModel.rotation.y += 0.005;
    }
    if (racketModel) {
      racketModel.rotation.z += 0.002;
    }
    renderer.render(scene, camera);
    window.requestAnimationFrame(loop);
  };

  loop();
}
