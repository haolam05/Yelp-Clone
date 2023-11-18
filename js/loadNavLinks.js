document.getElementById('nav-links').innerHTML =
  ['Restaurants', 'Home Services', 'Auto Services', 'More'].reduce((str, link) =>
    str + `
    <a class="nav-link">
      <span>${link}</span>
      <svg width="20" height="20">
        <path fill="#FFFFFF"
          d="M12 15.25a1 1 0 0 1-.7-.29l-4.58-4.5A1.011 1.011 0 0 1 8.12 9L12 12.85 15.88 9a1 1 0 1 1 1.4 1.42L12.7 15a1 1 0 0 1-.7.25Z">
        </path>
      </svg>
    </a>
  `
    , '')
