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

  if (n < 0) {
    image.classList.add("prev-animation");
    setTimeout(() => {
      image.classList.remove("prev-animation");
    }, 1000);
  }

  if (n > 0) {
    image.classList.add("next-animation");
    setTimeout(() => {
      image.classList.remove("next-animation");
    }, 1000);
  }

  setTimeout(() => {
    image.src = "img/" + images[i] + ".jpg";
    image.classList.remove("show");
  }, 400);
}
