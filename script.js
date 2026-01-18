// Matt Levine - Page Transitions

document.addEventListener('DOMContentLoaded', function() {
  // Get all navigation links
  const navLinks = document.querySelectorAll('.nav-link, .external-link:not([target="_blank"])');
  const backLink = document.querySelector('.back-link');

  // Handle navigation link clicks
  navLinks.forEach(link => {
    if (link.getAttribute('href') && !link.getAttribute('href').startsWith('http')) {
      link.addEventListener('click', handleLinkClick);
    }
  });

  // Handle back link
  if (backLink && !backLink.getAttribute('href').startsWith('http')) {
    backLink.addEventListener('click', handleLinkClick);
  }

  function handleLinkClick(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const pageWrapper = document.querySelector('.page-wrapper');

    // Add exit animation class
    pageWrapper.classList.add('page-exit');

    // Navigate after animation completes
    setTimeout(() => {
      window.location.href = href;
    }, 500);
  }
});
