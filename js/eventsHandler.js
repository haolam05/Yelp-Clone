function iconsHoverEffect(id) {
  window.addEventListener('mouseover', function (e) {
    const expected = [`fa-lightbulb-${id}`, `fa-face-laugh-${id}`, `fa-face-grin-stars-${id}`]
    const classes = e.target.classList;
    const foundClass = classes[classes.length - 1];

    if (expected.includes(foundClass)) {
      this.document.querySelector('#' + foundClass).classList.remove('hidden');
    } else {
      const lightbulb = this.document.querySelector(`#fa-lightbulb-${id}`);
      const faceLaugh = this.document.querySelector(`#fa-face-laugh-${id}`);
      const faceGrinStar = this.document.querySelector(`#fa-face-grin-stars-${id}`);

      lightbulb.classList.add('hidden')
      faceLaugh.classList.add('hidden')
      faceGrinStar.classList.add('hidden')
    }
  })
}
iconsHoverEffect(1);
iconsHoverEffect(4);
iconsHoverEffect(6);
iconsHoverEffect(7);
iconsHoverEffect(8);
iconsHoverEffect(11);


function openMenuEffect(targetID) {
  window.addEventListener("click", e => {
    e.preventDefault();
    const id = e.target.classList[0]
    if (id == targetID) {
      document.getElementById(targetID).classList.remove('hidden')
    } else {
      document.getElementById(targetID).classList.add('hidden')
    }
  })
}
openMenuEffect("countries-menu");
openMenuEffect("languages-menu");


function showHideSeeMoreEffect(targetID) {
  window.addEventListener("click", e => {
    e.preventDefault();
    const el = document.getElementById(targetID);
    const parent = e.target.closest('#category-8');

    if (parent) {
      if (el.classList.contains('clicked')) {
        el.classList.add('hidden');
        el.classList.remove('clicked')
        parent.setAttribute('style', 'background-color: white')
      } else {
        parent.setAttribute('style', 'background-color: rgb(235, 235, 235)')
        el.classList.remove('hidden');
        el.classList.add('clicked');
      }
    }
  })
}
showHideSeeMoreEffect('see-mores-container');


function onFocusEffect(focusId, targetId) {
  const el = document.getElementById(focusId);
  el.addEventListener('focusin', e => {
    document.getElementById(targetId).classList.remove('hidden')
  })
  el.addEventListener('focusout', e => {
    document.getElementById(targetId).classList.add('hidden')
  })
}
onFocusEffect('search-location', 'header-locations');
onFocusEffect('search-activity', 'header-activities');
