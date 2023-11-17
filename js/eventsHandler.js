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
