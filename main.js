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
const basicMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const basicMesh = new THREE.Mesh(boxGeo, basicMaterial);
basicMesh.position.x = 5;
scene.add(basicMesh);

const depthMaterial = new THREE.MeshDepthMaterial({ color: 0x00ff00 });
const depthMesh = new THREE.Mesh(boxGeo, depthMaterial);
depthMesh.position.x = 4;
scene.add(depthMesh);

const distanceMaterial = new THREE.MeshDistanceMaterial({ color: 0x00ff00 });
const distanceMesh = new THREE.Mesh(boxGeo, distanceMaterial);
distanceMesh.position.x = 3;
scene.add(distanceMesh);

const lambertMaterial = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
const lambertMesh = new THREE.Mesh(boxGeo, lambertMaterial);
lambertMesh.position.x = 2;
scene.add(lambertMesh);

const matcapMaterial = new THREE.MeshMatcapMaterial({ color: 0x00ff00 });
const matcapMesh = new THREE.Mesh(boxGeo, matcapMaterial);
matcapMesh.position.x = 1;
scene.add(matcapMesh);

const normalMaterial = new THREE.MeshNormalMaterial({ color: 0x00ff00 });
const normalMesh = new THREE.Mesh(boxGeo, normalMaterial);
normalMesh.position.x = 0;
scene.add(normalMesh);

const phongMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
const phongMesh = new THREE.Mesh(boxGeo, phongMaterial);
phongMesh.position.x = 5;
scene.add(phongMesh);

const physicalMaterial = new THREE.MeshPhysicalMaterial({ color: 0x00ff00 });
const physicalMesh = new THREE.Mesh(boxGeo, physicalMaterial);
physicalMesh.position.x = -1;
scene.add(physicalMesh);

const standardMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const standardMesh = new THREE.Mesh(boxGeo, standardMaterial);
standardMesh.position.x = -2;
scene.add(standardMesh);

const toonMaterial = new THREE.MeshToonMaterial({ color: 0x00ff00 });
const toonMesh = new THREE.Mesh(boxGeo, toonMaterial);
toonMesh.position.x = -3;
scene.add(toonMesh);