const defaultStarBackgroundColor = `rgb(187, 186, 192, .5)`;
const yellow = `rgb(255, 204, 75)`;
const yellowOrange = `rgb(255, 174, 66)`
const orange = `rgb(255, 135, 66)`;
const orangeRed = `rgb(255, 100, 61)`;
const red = `rgb(251, 67, 60)`;
const oneStar = [yellow, defaultStarBackgroundColor, defaultStarBackgroundColor, defaultStarBackgroundColor, defaultStarBackgroundColor]
const twoStars = [yellowOrange, yellowOrange, defaultStarBackgroundColor, defaultStarBackgroundColor, defaultStarBackgroundColor]
const threeStars = [orange, orange, orange, defaultStarBackgroundColor, defaultStarBackgroundColor];
const fourStars = [orangeRed, orangeRed, orangeRed, orangeRed, defaultStarBackgroundColor];
const fiveStars = [red, red, red, red, red]

document.getElementById('card-1').innerHTML = getCard1(
  1,
  'All Service Moving',
  'Floris R.',
  `I had a horrible moving experience with All Service Moving last summer and it...`,
  oneStar
);
document.getElementById('card-2').innerHTML = getCard2(
  2,
  'Fusion India',
  'Vipula N.',
  10
);
document.getElementById('card-3').innerHTML = getCard2(
  3,
  'Cafe Turko',
  '	Shantala A.',
  2
);
document.getElementById('card-4').innerHTML = getCard1(
  4,
  'Haymaker',
  'Katherine C.',
  'Great place! The staff was friendly and informative. Let us know that there...',
  threeStars
);
document.getElementById('card-5').innerHTML = getCard2(
  5,
  'Le Fournil Bakery & Catering',
  'Roxanna D.',
  1
);
document.getElementById('card-6').innerHTML = getCard1(
  6,
  'Calypso Edmonds',
  'Miss Mel D.',
  'Tonight was 10 out of 10! Everything was top notch. The Rasta Pasta had...',
  fiveStars
);
document.getElementById('card-7').innerHTML = getCard1(
  7,
  'Indian Spice Bistro',
  'Kate B.',
  'We absolutely loved this place. The garlic and plain naan, chicken tikka...',
  fiveStars

);
document.getElementById('card-8').innerHTML = getCard1(
  8,
  'Mr. West Cafe Bar',
  'ParisAnne D.',
  'Was a fairly busy place on a Saturday morning. Waited about ten minutes in...',
  fourStars

);
document.getElementById('card-9').innerHTML = getCard2(
  9,
  'Biang Biang Noodles',
  'Ana Z.',
  1
);
document.getElementById('card-10').innerHTML = getCard2(
  10,
  'Haymaker',
  'Catherine C.',
  9
);
document.getElementById('card-11').innerHTML = getCard1(
  11,
  'Semicolon Cafe',
  'Sunny H.',
  'Long line. Subpar service. Cute ambiance. They were out of bingsoo...',
  twoStars
);
document.getElementById('card-12').innerHTML = getCard2(
  12,
  'Amy Hair & Nails Spa',
  'Donnie N.',
  2
);
