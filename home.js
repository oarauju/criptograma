


/*
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Material para as linhas
const material = new THREE.LineBasicMaterial({ color: 0xffffff });

// Definição correta dos vértices sem sobreposição
const points = [
    new THREE.Vector3(-1, 1, 0),  // Topo esquerdo
    new THREE.Vector3(1, 1, 0),   // Topo direito
    new THREE.Vector3(0, 0, 0),   // Centro
    new THREE.Vector3(-1, 1, 0),  // Fechando triângulo superior (removido ponto extra)

    new THREE.Vector3(-1, -1, 0), // Base esquerda
    new THREE.Vector3(1, -1, 0),  // Base direita
    new THREE.Vector3(0, 0, 0),   // Centro
    new THREE.Vector3(-1, -1, 0), // Fechando triângulo inferior (removido ponto extra)
];

// Criando a geometria sem a linha errada
const geometry = new THREE.BufferGeometry().setFromPoints(points);
const line = new THREE.Line(geometry, material);
scene.add(line);

camera.position.z = 5;

// Animação
function animate() {
    requestAnimationFrame(animate);
    line.rotation.y += 0.01;
    line.rotation.x += 0.005;
    renderer.render(scene, camera);
}
animate();
*/