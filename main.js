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

const edges = new THREE.EdgesGeometry(boxGeo);
const lineMaterial = new THREE.LineBasicMaterial({ color: 0x00ff00 });
const outline = new THREE.LineSegments(edges, lineMaterial);
scene.add(outline);

const speedInput = document.getElementById('speedInput');
let increment = 1;
speedInput.addEventListener('input', () => {
    increment = parseFloat(speedInput.value) || 0; 
});
let hue = 0;

function animate() {
    requestAnimationFrame(animate);

    hue += increment;

    if (hue > 360) hue = 0;
    lineMaterial.color.setHSL(hue / 360, 1.0, 0.5);
    mat.color.setHSL(hue / 360, 1.0, 0.5);

    mesh.rotation.x += 0.01;
    outline.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    outline.rotation.y += 0.01;

    renderer.render(scene, camera, sunlight);
}

animate();