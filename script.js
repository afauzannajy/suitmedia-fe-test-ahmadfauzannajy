const gambar = ["images/about-bg.jpg", "images/bg.jpg"];
const heroImg = document.querySelectorAll("#hero .gambar");
const heroNav = document.querySelectorAll("#hero a");
const heroTxt = document.querySelector("#hero");
const heroDot = document.querySelectorAll("#hero .dots");
const aboutNav = document.querySelector(".nav-about");
const homeNav = document.querySelectorAll('[href="#"]:not(#hero a)');

heroNav.forEach((nav) => {
  nav.addEventListener("click", function () {
    if (nav.className.includes("prev")) {
      navImg(-1);
    } else if (nav.className.includes("next")) {
      navImg(1);
    }
  });
});

heroDot.forEach((dot) => {
  dot.addEventListener("click", function () {
    if (dot.className.includes("dot-1")) {
      dotsImg(1);
    } else if (dot.className.includes("dot-2")) {
      dotsImg(2);
    }
  });
});

homeNav.forEach((hn) => {
  hn.addEventListener("click", function () {
    dotsImg(1);
  });
});

aboutNav.addEventListener("click", function () {
  dotsImg(2);
});

let indexImg = 1;
showImg(indexImg);

function navImg(n) {
  showImg((indexImg = indexImg + n));
}

function dotsImg(n) {
  showImg((indexImg = n));
}

function showImg(n) {
  if (n > heroImg.length) {
    indexImg = 1;
  } else if (n < 1) {
    indexImg = heroImg.length;
  }
  for (let i = 0; i < heroImg.length; i++) {
    heroImg[i].style.display = "none";
    heroDot[i].style.backgroundColor = "#888";
  }
  heroImg[indexImg - 1].style.display = "block";
  heroDot[indexImg - 1].style.backgroundColor = "#fff";
  if (indexImg == 1) {
    heroTxt.setAttribute(
      "txt",
      "THIS IS A PLACE WHERE TECHNOLOGY & CREATIVITY FUSED INTO DIGITAL CHEMISTRY"
    );
  } else if (indexImg == 2) {
    heroTxt.setAttribute(
      "txt",
      "WE DON'T HAVE THE BEST BUT WE HAVE THE GREATEST TEAM"
    );
  }
}
