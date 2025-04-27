// 3D Background with particles
document.addEventListener('DOMContentLoaded', function() {
    // Check if WebGL is supported
    if (!window.WebGLRenderingContext) {
        console.log('WebGL not supported');
        return;
    }

    const container = document.getElementById('bg-canvas');
    
    // Set up scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0f172a, 0.001);
    
    // Set up camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
    camera.position.z = 1000;
    
    // Set up renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    container.appendChild(renderer.domElement);
    
    // Create particles
    const particles = [];
    const particleCount = 1000;
    const particleGeometry = new THREE.BufferGeometry();
    const particleMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 2,
        transparent: true,
        opacity: 0.5
    });
    
    const positions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3] = (Math.random() - 0.5) * 2000;
        positions[i3 + 1] = (Math.random() - 0.5) * 2000;
        positions[i3 + 2] = (Math.random() - 0.5) * 2000;
        
        particles.push({
            velocity: new THREE.Vector3(
                (Math.random() - 0.5) * 0.2,
                (Math.random() - 0.5) * 0.2,
                (Math.random() - 0.5) * 0.2
            ),
            index: i3
        });
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);
    
    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        
        // Update particle positions
        particles.forEach(particle => {
            positions[particle.index] += particle.velocity.x;
            positions[particle.index + 1] += particle.velocity.y;
            positions[particle.index + 2] += particle.velocity.z;
            
            // Reset particles that move too far from center
            const distance = Math.sqrt(
                positions[particle.index] ** 2 + 
                positions[particle.index + 1] ** 2 + 
                positions[particle.index + 2] ** 2
            );
            
            if (distance > 1000) {
                positions[particle.index] = (Math.random() - 0.5) * 2000;
                positions[particle.index + 1] = (Math.random() - 0.5) * 2000;
                positions[particle.index + 2] = (Math.random() - 0.5) * 2000;
            }
        });
        
        particleGeometry.attributes.position.needsUpdate = true;
        
        // Rotate particle system slightly
        particleSystem.rotation.y += 0.0005;
        
        renderer.render(scene, camera);
    }
    
    // Handle window resize
    window.addEventListener('resize', function() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
    
    animate();
});