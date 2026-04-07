// #region Three.js Setup
import * as THREE from 'three';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 128);
camera.position.z = 5;
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// #endregion

const sunlight = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add(sunlight);
const boxGeo = new THREE.BoxGeometry(1, 1, 1);
const mat = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const mesh = new THREE.Mesh(boxGeo, mat);
scene.add(mesh);

function animate() {
    requestAnimationFrame(animate);

    // Rotate the cube for some life
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera, sunlight);
}

animate();