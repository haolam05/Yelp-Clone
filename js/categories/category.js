function getCategory(img_url, text) {
  return `
    <div class="category">
      <img class="category-image"
        src="${img_url}">
      <p class="category-text">${text}</p>
    </div>
`
}
