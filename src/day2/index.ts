import gsap from 'gsap';
import * as THREE from 'three';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

window.onload = () => {
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
  tl.add(gsap.to('.box1', { x: 100, duration: 1 }));
  tl.add(gsap.to('.box1', { y: 40, duration: 1 }));
  tl.add(gsap.to('.box1', { rotate: 360, duration: 1 }));

  const tl2 = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
  tl2.to('.box2', { x: 100, duration: 1 });
  tl2.to('.box2', { y: 40, duration: 1 });
  tl2.to('.box2', { rotate: 360, duration: 1 });

  const tl3 = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
  tl3.from('.timeline1', { y: -32, opacity: 0, duration: 0.5 });
  tl3.from('.timeline2', { y: 32, opacity: 0, duration: 0.5 }, '-=.4');
  tl3.from('.timeline3', { y: -32, opacity: 0, duration: 0.5 }, '-=.4');
  tl3.from('.timeline4', { y: 32, opacity: 0, duration: 0.5 }, '-=.4');
  tl3.from('.timeline5', { y: -32, opacity: 0, duration: 0.5 }, '-=.4');

  // in out
  const tl4 = gsap.timeline({ repeat: -1 });
  tl4.from('.rect.in', { width: 0, duration: 1, ease: 'power4.in' });
  tl4.set('.rect.in', { opacity: 0 });
  tl4.to('.rect.in', { width: 0, duration: 1 });

  const tl5 = gsap.timeline({ repeat: -1 });
  tl5.set('.rect.out', { opacity: 0 });
  tl5.to('.rect.out', { duration: 1 });
  tl5.set('.rect.out', { opacity: 1, width: '100%' });
  tl5.to('.rect.out', { width: 0, right: 0, duration: 1, ease: 'power4.out' });

  const tl6 = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
  tl6.set('.sample-text', { opacity: 0 });
  tl6.from('.sample-rect', { x: '-101%', duration: 1, ease: 'power4.out' });
  tl6.set('.sample-text', { opacity: 1 });
  tl6.to('.sample-rect', { x: '101%', duration: 1, ease: 'power4.out' });
  // remove
  tl6.fromTo(
    '.sample-rect',
    { x: '-101%' },
    { x: '0', duration: 1, ease: 'power4.out' }
  );
  tl6.set('.sample-text', { opacity: 0 });
  tl6.to('.sample-rect', { x: '101%', duration: 1, ease: 'power4.out' });

  // scroll
  gsap.utils.toArray<HTMLSpanElement>('.scroll-container').forEach((el) => {
    gsap.from(el, {
      x: 128,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: el,
      },
    });
  });
};

window.addEventListener('resize', () => {
  console.log('resize', THREE.GLSL3);
});
