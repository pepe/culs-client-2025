document.addEventListener('DOMContentLoaded', () => {
  const buildingCommands = [
  "Hide the library, it's stealing the spotlight!",
  "Main building, take a break — you’ve worked hard enough!",
  "Dorms, shh! We know you’re cozy, but not now!",
  "Canteen, stop tempting everyone with that smell!",
  "Greenhouse, go water yourself somewhere else!",
  "Faculty of AgriSciences, stop showing off those windows!",
  "Sports hall, step aside — we’re talking architecture!",
  "Rectorate, act humble, you’re too photogenic!",
  "Old barn, you’re vintage enough, take a nap!",
  "Campus lake, move over — we can’t see the buildings!"
];

  const sections = document.querySelectorAll('section');
  const removed = []; // keep removed sections here

  // add dismiss button and random title
  sections.forEach(section => {
    const btn = document.createElement('button');
    const title = buildingCommands[Math.floor(Math.random() * buildingCommands.length)] + " Be gone!" ;
    btn.className = 'dismiss';
    btn.innerHTML = title;
    section.prepend(btn);
  });

  // create Reset button in footer
  const resetBtn = document.createElement('button');
  resetBtn.textContent = 'Show buildings again';
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
