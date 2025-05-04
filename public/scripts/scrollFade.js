/* global document */
/* global window */

export function initScrollFadeObservers() {
  if (typeof document === 'undefined') return; // SSR guard

  document.querySelectorAll('.scroll-fade-wrapper').forEach((wrapper) => {
    const scrollEl = wrapper.querySelector('.scroll-fade-target');
    const fadeTop = wrapper.querySelector('.fade-top');
    const fadeBottom = wrapper.querySelector('.fade-bottom');

    function updateFades() {
      const { scrollTop, scrollHeight, clientHeight } = scrollEl;
      fadeTop?.classList.toggle('fade-hidden', scrollTop === 0);
      fadeBottom?.classList.toggle('fade-hidden', scrollTop + clientHeight >= scrollHeight - 1);
    }

    scrollEl.addEventListener('scroll', updateFades);
    updateFades();
  });
}

// ✅ Only run on the client, and only if desktop or larger
if (typeof window !== 'undefined' && window.innerWidth >= 768) {
  initScrollFadeObservers();
}
