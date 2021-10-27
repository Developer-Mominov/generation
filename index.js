var splide = new Splide(".splide", {
  type: "loop",
  perPage: 3,
  focus: "center",
});

var elms = document.getElementsByClassName("splide");

for (var i = 0; i < elms.length; i++) {
  new Splide(elms[i]).mount();
}

let mnav = document.querySelector(".mobile-nav");
let bmenu = document.querySelector(".burger-menu");
let m_li = document.querySelectorAll(".mobile-nav li");
m_li.forEach((e) => {
  e.addEventListener("click", () => {
    mnav.classList.toggle("activ");
  });
});
document.querySelector("#close").addEventListener("click", () => {
  mnav.classList.toggle("activ");
});

bmenu.addEventListener("click", () => {
  mnav.classList.toggle("activ");
});

splide.mount();

window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".loadermain").style.cssText = "opacity:0";
  }, 200);
  setTimeout(() => {
    document.querySelector(".loadermain").style.cssText = "display:none";
  }, 700);
});
let images = document.querySelectorAll(".img4");
images[0].style.cssText =
  "background-image:url('./resources/pexels-pixabay-247819.jpg')";

images[1].style.cssText =
  "background-image:url('./resources/pexels-pixabay-247819.jpg')";
images[2].style.cssText =
  "background-image:url('./resources/pexels-pixabay-247819.jpg')";
images[3].style.cssText =
  "background-image:url('./resources/pexels-pixabay-247819.jpg')";
images[4].style.cssText =
  "background-image:url('./resources/pexels-pixabay-247819.jpg')";
images[5].style.cssText =
  "background-image:url('./resources/pexels-pixabay-247819.jpg')";
images[6].style.cssText =
  "background-image:url('./resources/pexels-pixabay-247819.jpg')";
images[7].style.cssText =
  "background-image:url('./resources/pexels-pixabay-247819.jpg')";
images[8].style.cssText =
  "background-image:url('./resources/pexels-pixabay-247819.jpg')";
