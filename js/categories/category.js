function getCategory(img_url, text) {
  return `
    <div id="category-info">
      <img class="category-image"
        src="${img_url}">
      <p class="category-text">${text}</p>
    </div>
`
}
