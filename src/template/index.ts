import gsap from 'gsap';
import * as THREE from 'three';

window.onload = () => {
  gsap.to('.box1', { x: 200, duration: 2 });
  gsap.to('.box2', { x: 200, duration: 2, ease: 'power4.out' });
  gsap.to('.box3', { x: 200, duration: 2, repeat: -1 });
  gsap.to('.box4', { x: 200, duration: 2, repeat: -1, yoyo: true });
  gsap.to('.box5', { x: 200, duration: 2, rotate: 360 });
  gsap.to('.box6', { x: 200, duration: 2, scale: 1.5 });
  gsap.to('.box7', { x: 200, duration: 2, skewX: 30 });
  gsap.to('.box8', { x: 200, duration: 2, skewY: 30 });

  gsap.to('.ease1', { x: 300, duration: 3, repeat: -1, ease: 'linear' });
  gsap.to('.ease2', { x: 300, duration: 3, repeat: -1, ease: 'sine' });
  gsap.to('.ease3', { x: 300, duration: 3, repeat: -1, ease: 'quad' });
  gsap.to('.ease4', { x: 300, duration: 3, repeat: -1, ease: 'cubic' });
  gsap.to('.ease5', { x: 300, duration: 3, repeat: -1, ease: 'quart' });
  gsap.to('.ease6', { x: 300, duration: 3, repeat: -1, ease: 'quint' });
  gsap.to('.ease7', { x: 300, duration: 3, repeat: -1, ease: 'expo' });

  gsap.from('.other1', { x: 200, duration: 2, repeat: -1 });
};

window.addEventListener('resize', () => {
  console.log('resize', THREE.GLSL3);
});
