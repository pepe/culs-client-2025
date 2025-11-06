document.addEventListener('DOMContentLoaded', () => {
  const giantCommands = [
    "Stand still, big fella!",
    "Bend down, I’m talking to you!",
    "Hold that mountain, will you?",
    "Don’t sneeze, the village’s right there!",
    "Turn your head, the sun’s in my eyes!",
    "Stop growing, you’re blocking the clouds!",
    "Catch that thunder before it hits!",
    "Walk gently, I just planted carrots!",
    "Show me where the sky begins!",
    "Wave slower, you’re causing wind warnings!"
  ];

  const sections = document.querySelectorAll('section');
  const removed = []; // keep removed sections here

  // add dismiss button and random title
  sections.forEach(section => {
    const btn = document.createElement('button');
    const title = giantCommands[Math.floor(Math.random() * giantCommands.length)] + " Be gone!" ;
    btn.className = 'dismiss';
    btn.innerHTML = title;
    section.prepend(btn);
  });

  // create Reset button in footer
  const resetBtn = document.createElement('button');
  resetBtn.textContent = 'Summon Giants again';
  resetBtn.id = 'reset';
  document.querySelector('header')?.appendChild(resetBtn);

  // dismiss handler
  document.addEventListener('click', e => {
    if (e.target.matches('.dismiss')) {
      const section = e.target.closest('section');
      removed.push(section.outerHTML); // store HTML for later restoration
      section.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      section.style.opacity = 0;
      section.style.transform = 'scale(0.95)';
      setTimeout(() => section.remove(), 400);
    }
  });

  // reset handler
  resetBtn.addEventListener('click', () => {
    if (!removed.length) return;
    const container = document.querySelector('header');
    removed.forEach(html => {
      container.insertAdjacentHTML('beforeend', html);
    });
    removed.length = 0; // clear the list
  });
});
