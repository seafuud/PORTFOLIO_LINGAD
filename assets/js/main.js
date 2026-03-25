const revealItems = document.querySelectorAll(
  '.bg-container, .summary-text, .skill-group span, .education-item, .project-card, .contact .reveal, .section-title'
);

// INTERSECTION OBSERVER
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

// INITIALIZE ALL REVEAL ITEMS
revealItems.forEach(item => {
  item.style.opacity = 0;
  item.style.transform = 'translateY(40px)';
  item.style.transition = '0.8s ease-out';
  observer.observe(item);
});

// DIAGONAL GRID BACKGROUND ANIMATION
const bgSections = [
  document.getElementById('background'),
  document.getElementById('education'),
  document.getElementById('projects')
];

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  bgSections.forEach(section => {
    if (section) {
      section.style.backgroundPosition = `${scrollY * 0.3}px ${scrollY * 0.3}px`;
    }
  });
});