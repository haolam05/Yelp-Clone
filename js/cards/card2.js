function getCard2(n, title, name, numPhotos) {
  return `
    <div class="card-header">
      <img src="images/avatars/${n}.jpg" alt="avatar">
      <div class="card-user-info">
        <a class="card-user-info-${n}" href="#">${name}</a>
        <span class="card-user-action">Added ${numPhotos} photo${numPhotos > 1 ? 's' : ''}</span>
      </div>
    </div>
    <a class="card-title card-title-${n}">${title}</a>
    <div class="${numPhotos > 1 ? 'post-img-2-many-photos' : 'post-img-2-one-photo'}">
      <div class="img-container" style="${numPhotos > 1 ? 'border: 1px solid rgb(235, 235, 235);' : ''}">
        <img src="images/posts/${n}-1.jpg" alt="post-photo">
        <span class="card2-emoji"><i class="fa-regular fa-thumbs-up fa-2xl" style="color: #000000;"></i></span>
      </div>
    ${numPhotos > 1 ?
      `
      <div class="img-container" style="${numPhotos > 1 ? 'border: 1px solid rgb(235, 235, 235);' : ''}">
        <img src="images/posts/${n}-2.jpg" alt="post-photo">
        <span class="card2-emoji"><i class="fa-regular fa-thumbs-up fa-2xl" style="color: #000000;"></i></span>
      </div>
        `
      :
      ''
    }
    </div>
    ${numPhotos > 2 ?
      `
    <div class='num-photos'>
      <a>Show ${numPhotos} photos</a>
    </div>
    `
      :
      ''
    }
`
}
