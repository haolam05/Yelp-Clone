const parent = document.getElementById('footer-wrapper');
const about = document.createElement('div');
about.setAttribute('id', 'footer-about')
about.innerHTML = [
  '<span class="footer-title">About</span>',
  '<a>About Yelp</a>',
  '<a>Careers</a>',
  '<a>Press</a>',
  '<a>Investor Relations</a>',
  '<a>Trust & Safety</a>',
  '<a>Content Guidelines</a>',
  '<a>Accessibility Statement</a>',
  '<a>Terms of Service</a>',
  '<a>Privacy Policy</a>',
  '<a>Ad Choices</a>',
  '<a>Your Privacy Choices</a>'
].join('')
parent.append(about);

const discover = document.createElement('div');
discover.setAttribute('id', 'footer-discover')
discover.innerHTML = [
  '<span class="footer-title">Discover</span>',
  '<a>Yelp Project Cost Guides</a>',
  '<a>Collections</a>',
  '<a>Talk</a>',
  '<a>Events</a>',
  '<a>Yelp Blog</a>',
  '<a>Support</a>',
  '<a>Yelp Mobile</a>',
  '<a>Developers</a>',
  '<a>RSS</a>'
].join('')
parent.append(discover);

const business = document.createElement('div');
business.setAttribute('id', 'footer-business')
business.innerHTML = [
  '<span class="footer-title">Yelp for Business</span>',
  '<a>Yelp for Business</a>',
  '<a>Business Owner Login</a>',
  '<a>Claim your Business Page</a>',
  '<a>Advertise on Yelp</a>',
  '<a>Yelp for Restaurant Owners</a>',
  '<a>Table Management</a>',
  '<a>Business Success Stories</a>',
  '<a>Business Support</a>',
  '<a>Yelp Blog for Business</a>'
].join('')
parent.append(business);

const locations = document.createElement('div');
locations.setAttribute('id', 'footer-locations')
locations.innerHTML = [
  `
  <div id="footer-languages-menu">
    <span class="footer-title">Languages</span>
    <div>
      <a href="#" class="languages-menu">English</a>
      <svg width="16" height="16">
        <path fill="rgb(169, 169, 169)"
          d="M12 15.25a1 1 0 0 1-.7-.29l-4.58-4.5A1.011 1.011 0 0 1 8.12 9L12 12.85 15.88 9a1 1 0 1 1 1.4 1.42L12.7 15a1 1 0 0 1-.7.25Z">
        </path>
      </svg>
    </div>
    <div class="footer-buttons hidden" id="languages-menu">
      <button class="footer-button">Bahasa Malaysia</button>
      <button class="footer-button">Čeština (Česká republika)</button>
      <button class="footer-button">(Malaysia)</button>
      <button class="footer-button">Deutsch (Deutschiland)</button>
      <button class="footer-button">Deustch (Osterreich)</button>
      <button class="footer-button">Deutsch (Schweiz)</button>
      <button class="footer-button">English (Australia)</button>
      <button class="footer-button">English(Belgium)</button>
      <button class="footer-button">English (Canada)</button>
      <button class="footer-button">English (Hong Kong)</button>
      <button class="footer-button">English (Malaysia)</button>
      <button class="footer-button">English (Singapore)</button>
      <button class="footer-button">English (Switzerland)</button>
    </div>
  </div>
  <div id="footer-countries-menu">
    <span class="footer-title">Countries</span>
    <div>
      <a href="#" class="countries-menu">United States</a>
      <svg width="16" height="16">
        <path fill="rgb(169, 169, 169)"
          d="M12 15.25a1 1 0 0 1-.7-.29l-4.58-4.5A1.011 1.011 0 0 1 8.12 9L12 12.85 15.88 9a1 1 0 1 1 1.4 1.42L12.7 15a1 1 0 0 1-.7.25Z">
        </path>
      </svg>
    </div>
    <div class="footer-buttons hidden" id="countries-menu">
      <button class="footer-button">Argentina</button>
      <button class="footer-button">Australia</button>
      <button class="footer-button">Austria</button>
      <button class="footer-button">Belgium</button>
      <button class="footer-button">Brazil</button>
      <button class="footer-button">Canada</button>
      <button class="footer-button">Chile</button>
      <button class="footer-button">Czech Republic</button>
      <button class="footer-button">Denmark</button>
      <button class="footer-button">Finland</button>
      <button class="footer-button">France</button>
      <button class="footer-button">Germany</button>
      <button class="footer-button">Hongkong</button>
    </div>
  </div>
  `
].join('')
parent.append(locations);
