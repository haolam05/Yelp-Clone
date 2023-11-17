function getCard1(n, title, name, review, colors) {
  return `
    <div class="card-header">
      <img src="images/avatars/${n}.jpg" alt="avatar">
      <div class="card-user-info">
        <a class="card-user-info-${n}" href="#">${name}</a>
        <span class="card-user-action">Wrote a review</span>
      </div>
    </div>
    <div class="post-img">
      <img src="images/posts/${n}.jpg" alt="post-photo">
    </div>
    <a class="card-title card-title-${n}">${title}</a>
    <div class="stars-container">
      <span class="stars star-1" style="background-color: ${colors[0]}"><i class="fa-solid fa-star" style="color: #ffffff;"></i></span>
      <span class="stars star-2" style="background-color: ${colors[1]}"><i class="fa-solid fa-star" style="color: #ffffff;"></i></span>
      <span class="stars star-3" style="background-color: ${colors[2]}"><i class="fa-solid fa-star" style="color: #ffffff;"></i></span>
      <span class="stars star-4" style="background-color: ${colors[3]}"><i class="fa-solid fa-star" style="color: #ffffff;"></i></span>
      <span class="stars star-5" style="background-color: ${colors[4]}"><i class="fa-solid fa-star" style="color: #ffffff;"></i></span>
    </div>
    <div class="card-review">
      <p class="card-user-review-${n}">${review}</p>
      <a href="#">Continue reading</a>
    </div>
    <div class="card-emojis">
      <span class="card-emoji"><i class="fa-regular fa-lightbulb fa-lightbulb-${n}"></i></span>
      <span class="card-emoji"><i class="fa-regular fa-face-laugh fa-face-laugh-${n}"></i></span>
      <span class="card-emoji"><i class="fa-regular fa-face-grin-stars fa-face-grin-stars-${n}"></i></span>
    </div>
    <div class="msg-container">
      <span class="hidden" id="fa-lightbulb-${n}">
        <i class="msg-useful fa-solid fa-message fa-rotate-180 fa-2xl"></i>
        <p class="msg-text-useful">Useful</p>
      </span>
      <span class="hidden" id="fa-face-laugh-${n}">
        <i class="msg-funny fa-solid fa-message fa-rotate-180 fa-2xl"></i>
        <p class="msg-text-funny">Funny</p>
      </span>
      <span class="hidden" id="fa-face-grin-stars-${n}">
        <i class="msg-cool fa-solid fa-message fa-rotate-180 fa-2xl"></i>
        <p class="msg-text-cool">Cool</p>
      </span>
    </div>
`
}
