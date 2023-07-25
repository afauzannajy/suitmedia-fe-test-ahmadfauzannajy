const gambar = ["images/about-bg.jpg", "images/bg.jpg"];
const mainImg = document.querySelectorAll("#main .gambar");
const mainNav = document.querySelectorAll("#main a");
const mainTxt = document.querySelector("#main");
const mainDot = document.querySelectorAll("#main .dots");
const aboutNav = document.querySelector(".nav-about");
const homeNav = document.querySelectorAll('[href="#"]:not(#main a)');

mainNav.forEach((nav) => {
  nav.addEventListener("click", function () {
    if (nav.className.includes("prev")) {
      navImg(-1);
    } else if (nav.className.includes("next")) {
      navImg(1);
    }
  });
});

mainDot.forEach((dot) => {
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
  if (n > mainImg.length) {
    indexImg = 1;
  } else if (n < 1) {
    indexImg = mainImg.length;
  }
  for (let i = 0; i < mainImg.length; i++) {
    mainImg[i].style.display = "none";
    mainDot[i].style.backgroundColor = "#888";
  }
  mainImg[indexImg - 1].style.display = "block";
  mainDot[indexImg - 1].style.backgroundColor = "#fff";
  if (indexImg == 1) {
    mainTxt.setAttribute(
      "txt",
      "THIS IS A PLACE WHERE TECHNOLOGY & CREATIVITY FUSED INTO DIGITAL CHEMISTRY"
    );
  } else if (indexImg == 2) {
    mainTxt.setAttribute(
      "txt",
      "WE DON'T HAVE THE BEST BUT WE HAVE THE GREATEST TEAM"
    );
  }
}

/*
const homeNav = document.querySelectorAll('[href="#"]:not(#main a)');
homeNav.forEach((hn) => {
  hn.addEventListener("click", function () {
    mainImg.setAttribute("id", "home");
    mainImg.setAttribute("src", gambar[1]);
  });
});
*/
