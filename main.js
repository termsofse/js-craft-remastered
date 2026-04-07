// #region Three.js Setup
import * as THREE from 'three';
const scene = new THREE.Scene();
const playerCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
playerCamera.position.z = 5;
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// #endregion

const sunlight = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( sunlight );

const boxGeo = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
const cubeMesh = new THREE.Mesh(boxGeo, material);
scene.add(cubeMesh);

function animate() {
    requestAnimationFrame(animate);
    cubeMesh.rotation.x += 0.01;
    cubeMesh.rotation.y += 0.01;
    cubeMesh.rotation.z += 0.01;
    renderer.render(scene, playerCamera);
}

animate();
