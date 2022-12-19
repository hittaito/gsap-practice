import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

window.onload = () => {
  const anime = (el: HTMLSpanElement) => {
    const rect = el.querySelector('.rect');
    const text = el.querySelector('.text');
    const tl = gsap.timeline();
    tl.set(text, { opacity: 0 });
    tl.from(rect, { x: '-101%', duration: 1, ease: 'power4.out' });
    tl.set(text, { opacity: 1 });
    tl.to(rect, { x: '101%', duration: 1, ease: 'power4.out' });
    tl.to(rect, { x: '101%', duration: 1, ease: 'power4.out' }); // pause animation
    tl.fromTo(
      rect,
      { x: '-101%' },
      { x: '0', duration: 1, ease: 'power4.out' }
    );
    tl.set(text, { opacity: 0 });
    tl.to(rect, { x: '101%', duration: 1, ease: 'power4.out' });
    return tl;
  };

  gsap.utils.toArray<HTMLSpanElement>('.container').forEach((el) => {
    console.log(el.querySelector('.rect'));

    gsap
      .timeline({
        scrollTrigger: {
          trigger: el,
          start: 'bottom bottom',
          markers: false,
          toggleActions: 'restart none none none',
          scrub: true,
          end: 'bottom top',
        },
      })
      .add(anime(el));
  });
};
