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
  '<span class="footer-title">Languages</span>',
].join('')
parent.append(locations);
