/* =========================================================
   Mobile nav (hamburger)
========================================================= */
const hamburgerBtn = document.getElementById('hamburgerBtn');
const siteNav = document.getElementById('siteNav');
const navOverlay = document.getElementById('navOverlay');

function closeNav(){
  siteNav.classList.remove('open');
  navOverlay.classList.remove('open');
  hamburgerBtn.setAttribute('aria-expanded', 'false');
}
function toggleNav(){
  const isOpen = siteNav.classList.toggle('open');
  navOverlay.classList.toggle('open', isOpen);
  hamburgerBtn.setAttribute('aria-expanded', isOpen);
}
hamburgerBtn.addEventListener('click', toggleNav);
navOverlay.addEventListener('click', closeNav);
siteNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeNav));

/* =========================================================
   Task 3 — Toggle: light / dark theme
========================================================= */
const themeToggle = document.getElementById('themeToggle');

function setTheme(dark){
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  themeToggle.setAttribute('aria-checked', dark);
}

// Respect system preference on first load
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
setTheme(prefersDark);

themeToggle.addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  setTheme(!isDark);
});

/* =========================================================
   Task 3 — Buttons + basic interaction: skill filters
========================================================= */
const filterRow = document.getElementById('skillFilters');
const skillCards = document.querySelectorAll('.skill-card');
const filterStatus = document.getElementById('filterStatus');

const filterLabels = {
  all: 'Showing all 3 categories',
  ai: 'Showing AI & Machine Learning',
  frontend: 'Showing Frontend Development',
  leadership: 'Showing Leadership & Growth'
};

filterRow.addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-pill');
  if(!btn) return;

  filterRow.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');

  const choice = btn.dataset.filter;
  skillCards.forEach(card => {
    const match = choice === 'all' || card.dataset.category === choice;
    card.classList.toggle('is-hidden', !match);
  });

  // Task 3: dynamic content update
  filterStatus.textContent = filterLabels[choice] || 'Showing all 3 categories';
});

/* =========================================================
   Task 3 — Dynamic content update: rotating hero tagline
========================================================= */
const taglines = [
  'AI Engineer · Frontend Developer',
  'Builder of on-device ML tools',
  'BS Artificial Intelligence, Class of 2026',
  'Frontend Intern @ Decodelabs',
  'Open to AI/ML & Frontend roles'
];
let taglineIndex = 0;
const taglineText = document.getElementById('taglineText');
const shuffleBtn = document.getElementById('shuffleBtn');

shuffleBtn.addEventListener('click', () => {
  taglineIndex = (taglineIndex + 1) % taglines.length;
  taglineText.textContent = taglines[taglineIndex];
});
