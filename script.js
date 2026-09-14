// Public service endpoints live here so navigation stays consistent.
const services = {
  mastodon: 'https://social.riverwood.town',
  matrix: 'https://chat.riverwood.town',
  signup: 'https://social.riverwood.town/auth/sign_up'
};
document.querySelectorAll('[data-service]').forEach(link => {
  link.href = services[link.dataset.service];
});
const root = document.documentElement;
const preference = window.matchMedia('(prefers-color-scheme: dark)');
const toggle = document.querySelector('.theme-toggle');
function syncTheme() {
  const dark = root.dataset.theme ? root.dataset.theme === 'dark' : preference.matches;
  root.classList.toggle('night', dark);
  toggle.setAttribute('aria-label', `Switch to ${dark ? 'day' : 'night'} mode`);
  toggle.setAttribute('aria-checked', String(dark));
  toggle.title = `Switch to ${dark ? 'day' : 'night'} mode`;
  document.querySelector('meta[name="theme-color"]').content = dark ? '#0d1b2e' : '#f3dfb8';
}
toggle.addEventListener('click', () => {
  root.dataset.theme = root.classList.contains('night') ? 'light' : 'dark';
  try { localStorage.setItem('riverwood-theme', root.dataset.theme); } catch (_) {}
  syncTheme();
});
preference.addEventListener('change', syncTheme);
syncTheme();
