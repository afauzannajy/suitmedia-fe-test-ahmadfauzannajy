const gambar = ["images/about-bg.jpg", "images/bg.jpg"];
const mainImg = document.querySelector("#main .gambar");
const mainNav = document.querySelectorAll("#main a");
const quotesTxt = document.querySelector(".quotes p");
mainNav.forEach((nav) => {
  nav.addEventListener("click", function () {
    for (let i = 0; i < gambar.length; i++) {
      if (mainImg.getAttribute("src") == gambar[i]) {
        if (i == 0) i = gambar.length;
        mainImg.setAttribute("src", gambar[i - 1]);
        if (mainImg.getAttribute("src") == "images/about-bg.jpg") {
          mainImg.setAttribute("id", "about");
          quotesTxt.innerHTML =
            "WE DON'T HAVE THE BEST BUT WE HAVE THE GREATEST TEAM";
        } else {
          mainImg.setAttribute("id", "home");
          quotesTxt.innerHTML =
            "THIS IS A PLACE WHERE TECHNOLOGY & CREATIVITY FUSED INTO DIGITAL CHEMISTRY";
        }
      }
    }
  });
});

const aboutNav = document.querySelector(".nav-about");
aboutNav.addEventListener("click", function () {
  mainImg.setAttribute("id", "about");
  mainImg.setAttribute("src", gambar[0]);
});

const homeNav = document.querySelectorAll('[href="#"]:not(#main a)');
homeNav.forEach((hn) => {
  hn.addEventListener("click", function () {
    mainImg.setAttribute("id", "home");
    mainImg.setAttribute("src", gambar[1]);
  });
});
