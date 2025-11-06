
document.addEventListener('DOMContentLoaded', () => {
  // Fixed labels for section buttons
  const labels = [
    "Hide the Boss!",
    "Hide the Temptation!",
    "Hide the Evidence!",
  ];

  const sections = document.querySelectorAll('section');

  // --- Create Reset Button at the END of the page (not in footer) ---
  let resetBtn = document.querySelector('#reset');
  if (!resetBtn) {
    resetBtn = document.createElement('button');
    resetBtn.id = 'reset';
    resetBtn.textContent = 'Round Two!';
    // Insert before the footer, at the very bottom of main content
    const footer = document.querySelector('footer');
    footer?.insertAdjacentElement('beforebegin', resetBtn);
  }

  // Add a Hide button to each section
  sections.forEach((section, i) => {
    if (section.querySelector('.dismiss')) return;

    const btn = document.createElement('button');
    btn.className = 'dismiss';
    btn.type = 'button';
    btn.textContent = labels[i % labels.length];
    section.prepend(btn);
  });

  // Hide handler (hide full section)
  document.addEventListener('click', (e) => {
    const dismiss = e.target.closest('.dismiss');
    if (!dismiss) return;

    const section = dismiss.closest('section');
    if (!section) return;

    section.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    section.style.opacity = 0;
    section.style.transform = 'scale(0.98)';

    setTimeout(() => {
      section.setAttribute('hidden', '');
      section.classList.add('is-hidden');
      section.style.transition = '';
      section.style.opacity = '';
      section.style.transform = '';
    }, 300);
  });

  // Summon handler (show hidden sections again)
  resetBtn.addEventListener('click', () => {
    document.querySelectorAll('section.is-hidden[hidden]').forEach((section) => {
      section.removeAttribute('hidden');
      section.style.opacity = 0;

      requestAnimationFrame(() => {
        section.style.transition = 'opacity 0.25s ease';
        section.style.opacity = 1;
        setTimeout(() => {
          section.classList.remove('is-hidden');
          section.style.transition = '';
          section.style.opacity = '';
        }, 250);
      });
    });
  });
});

