const images = [
  "bridge1",
  "bridge2",
  "bridge3",
  "bungee_general1",
  "bungee_general2",
  "canyon1",
  "canyon2",
  "canyon3",
  "tower1",
  "tower2",
  "ultra-bungee-hero",
];

var image = document.getElementById("images");
let i = 0;

function MoveSlides(n) {
  i += n;
  if (i >= images.length) {
    i = 0;
  }
  if (i < 0) {
    i = images.length - 1;
  }

  image.classList.remove("prev-animation");
  image.classList.remove("next-animation");

  if (n < 0) {
    setTimeout(() => {
      image.classList.add("prev-animation");
    }, 50);
    setTimeout(() => {
      image.classList.remove("prev-animation");
    }, 1050);
  }

  if (n > 0) {
    setTimeout(() => {
      image.classList.add("next-animation");
    }, 50);
    setTimeout(() => {
      image.classList.remove("next-animation");
    }, 1050);
  }

  setTimeout(() => {
    image.src = "img/" + images[i] + ".jpg";
    image.classList.remove("show");
  }, 375);
}
