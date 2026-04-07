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

const outline = new THREE.MeshBasicMaterial({ 
    color: 0x00ff00, 
    wireframe: true 
});
const outlineMesh = new THREE.Mesh(boxGeo, outline);
scene.add(outlineMesh);

function animate() {
    requestAnimationFrame(animate);

    mesh.rotation.x += 0.01;
    outlineMesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    outlineMesh.rotation.y += 0.01;

    renderer.render(scene, camera, sunlight);
}

animate();