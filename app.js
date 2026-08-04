// Mobil-meny
const hamburger = document.querySelector('.hamburger');
const drawer = document.querySelector('.mobile-drawer');
const overlay = document.querySelector('.overlay');
const drawerClose = document.querySelector('.drawer-close');

function openDrawer(){
  drawer.classList.add('open');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeDrawer(){
  drawer.classList.remove('open');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}
hamburger && hamburger.addEventListener('click', openDrawer);
drawerClose && drawerClose.addEventListener('click', closeDrawer);
overlay && overlay.addEventListener('click', closeDrawer);
document.querySelectorAll('.mobile-drawer a').forEach(a => a.addEventListener('click', closeDrawer));

// Scroll-reveal med GSAP
window.addEventListener('load', () => {
  if (typeof gsap === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;

  document.querySelectorAll('[data-animate]').forEach(el => {
    gsap.fromTo(el, { opacity: 0, y: 26 }, {
      opacity: 1, y: 0, duration: .7, ease: 'expo.out',
      scrollTrigger: { trigger: el, start: 'top 88%' }
    });
  });

  document.querySelectorAll('[data-stagger]').forEach(group => {
    gsap.fromTo(group.children, { opacity: 0, y: 20 }, {
      opacity: 1, y: 0, duration: .5, ease: 'expo.out', stagger: .09,
      scrollTrigger: { trigger: group, start: 'top 88%' }
    });
  });
});

// Volumkalkulator-teller for flytteforespørsel-siden
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.move-request-form');
  if (!form) return;
  const success = document.querySelector('.form-success');
  form.addEventListener('submit', () => {
    setTimeout(() => {
      if (success) success.style.display = 'block';
    }, 100);
  });
});
