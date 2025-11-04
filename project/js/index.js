    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
      // create the button
      const btn = document.createElement('button');
      btn.className = 'dismiss';
      btn.innerHTML = '×';
      section.prepend(btn); // insert it at the top of the section
    });

    document.addEventListener('click', event => {
      if (event.target.matches('.dismiss')) {
        const section = event.target.closest('section');
        section.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        section.style.opacity = 0;
        section.style.transform = 'scale(0.95)';
        setTimeout(() => section.remove(), 400);
      }
    });