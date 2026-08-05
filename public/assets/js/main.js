(function () {
  'use strict';

  /* ── Back to top ── */
  const backTop = document.querySelector('.ev-back-top');
  if (backTop) {
    const toggle = () => {
      backTop.classList.toggle('active', window.scrollY > 120);
    };
    window.addEventListener('scroll', toggle, { passive: true });
    toggle();
  }

  /* ── Skill bars: animate width on scroll into view ── */
  const bars = document.querySelectorAll('.ev-skill-bar');
  if (bars.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          bar.style.width = bar.dataset.width || bar.style.width;
          observer.unobserve(bar);
        }
      });
    }, { threshold: 0.3 });

    bars.forEach(bar => {
      const target = bar.style.width;
      bar.dataset.width = target;
      bar.style.width = '0';
      observer.observe(bar);
    });
  }

})();
