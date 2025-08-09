document.addEventListener('DOMContentLoaded', () => {
  const barsIcon = document.querySelector('.bars-icon');
  const siteNav = document.querySelector('.sitenav');

  if (barsIcon && siteNav) {
    barsIcon.addEventListener('click', () => {
      siteNav.classList.toggle('menu-open');
    });
  }
});

