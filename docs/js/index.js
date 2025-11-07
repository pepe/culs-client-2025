// Theme toggle with system preference + localStorage
const root = document.documentElement;
const btn = document.getElementById('themeToggle');

const prefersDark = () =>
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

function setTheme(mode) {
  // mode: 'light' | 'dark' | 'system'
  root.setAttribute('data-theme', mode === 'system' ? (prefersDark() ? 'dark' : 'light') : mode);
  localStorage.setItem('giants-theme', mode);
  btn.textContent = root.getAttribute('data-theme') === 'dark' ? '🌞' : '🌗';
}

// init
setTheme(localStorage.getItem('giants-theme') || 'system');

// toggle: light <-> dark <-> system
btn.addEventListener('click', () => {
  const current = localStorage.getItem('giants-theme') || 'system';
  const next = current === 'system' ? 'dark' : current === 'dark' ? 'light' : 'system';
  setTheme(next);
});

