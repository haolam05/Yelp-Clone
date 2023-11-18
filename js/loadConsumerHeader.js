document.getElementById('consumer-header').innerHTML = `
        <a id="yelp-logo">
          <img src="images/yelp-logo-white.png" alt="yelp-logo-white">
        </a>
        <div id="header-search-bars">
          <input class="header-search-bar" id="search-activity" type="text"
            placeholder="things to do, nail salons, plumbers">
          <input class="header-search-bar" id="search-location" type="text" placeholder="Seattle, WA 98104">
          <a id="header-search-icon">
            <svg width="24" height="24" fill="#FFFFFF">
              <path
                d="m21.853 20.355-3.444-3.443a9.428 9.428 0 1 0-16.761-6.171 9.428 9.428 0 0 0 15.348 7.586l3.443 3.442a1 1 0 1 0 1.414-1.414ZM5.82 16.245a7.429 7.429 0 1 1 5.253 2.175 7.38 7.38 0 0 1-5.253-2.176Z">
              </path>
            </svg>
          </a>
        </div>
        <div id="header-links">
          <a class="header-link" id="yelp-for-business" href="#">
            <span>Yelp for Business</span>
            <svg width="20" height="20">
              <path fill="#FFFFFF"
                d="M12 15.25a1 1 0 0 1-.7-.29l-4.58-4.5A1.011 1.011 0 0 1 8.12 9L12 12.85 15.88 9a1 1 0 1 1 1.4 1.42L12.7 15a1 1 0 0 1-.7.25Z">
              </path>
            </svg>
          </a>
          <a class="header-link" href="#">Write a review</a>
          <a class="header-link" href="#" id="sign-in">Login</a>
          <a class="header-link" href="#" id="sign-up">Sign up</a>
        </div>
`
