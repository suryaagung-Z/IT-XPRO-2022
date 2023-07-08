//===================================================HEADER SWIPER
const headerSwiper = new Swiper(".header-swiper", {
  speed: 500,
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".header-swiper-pagination",
    clickable: true,
    renderBullet: function (idx, className) {
      return `<span class="header-pagin-custom ${className}" id="myPaginHeader">${
        idx + 1
      }</span>`;
    },
  },
});

//===================================================TESTIMONI SWIPER
const testimoniSwiper = new Swiper(".testimoni-swiper", {
  speed: 500,
  loop: true,
  spaceBetween: 80,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".testimoni-swiper-pagination",
    clickable: true,
    renderBullet: function (idx, className) {
      return `<span class="testimoni-pagin-custom ${className}"></span>`;
    },
  },
});

//===================================================VIDEO
const boxVideo = document.querySelector("main .tur .tur-1");
const video = boxVideo.querySelector("#thisvideo");
const btn_playpause = boxVideo.querySelector("#playpause");
const thumb = boxVideo.querySelector("#thumb");

const thumb_hide = () => {
  let time = 0;
  if (video.currentTime == 0) {
    if (!thumb.classList.contains("thumb-hide"))
      thumb.classList.add("thumb-hide");
    time = 300;
  }

  return time;
};

const hideBtnPlayPause = () => {
  let wait = thumb_hide();

  setTimeout(() => {
    if (video.paused) {
      video.play();
      if (!btn_playpause.classList.contains("hide"))
        btn_playpause.classList.add("hide");
    } else {
      video.pause();
      if (btn_playpause.classList.contains("hide"))
        btn_playpause.classList.remove("hide");
    }
  }, wait);
};

btn_playpause.onclick = () => {
  hideBtnPlayPause();
};

video.onclick = () => {
  hideBtnPlayPause();
};

video.onended = () => {
  video.currentTime = 0;
  if (thumb.classList.contains("thumb-hide"))
    thumb.classList.remove("thumb-hide");
  if (btn_playpause.classList.contains("hide"))
    btn_playpause.classList.remove("hide");
};

//===================================================AOS
AOS.init({
  duration: 800,
  once: true,
});
