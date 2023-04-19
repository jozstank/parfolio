const close = document.querySelector(".close");
const open = document.querySelector(".open");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const ulTag = document.querySelector(".menu ul");
const homeBtn = document.querySelector("#homeBtn");
const aboutBtn = document.querySelector("#aboutBtn");
const skillBtn = document.querySelector("#skillBtn");
const projectBtn = document.querySelector("#projectBtn");
const contactBtn = document.querySelector("#contactBtn");

const home = document.querySelector("#home");
const about = document.querySelector("#about");
const skill = document.querySelector("#skill");
const project = document.querySelector("#project");
const contact = document.querySelector("#contact");
const root = document.querySelector(":root");

ScrollOut({
  targets:
    ".img,.homeTitle,.aboutTitle,.skillTitle,.projectTitle,.contactTitle",
});

// ============ hori scroll in skill section ===========
document.querySelector("#nex").onclick = () => {
  const widthitem = document.querySelector(".items").offsetWidth;
  document.querySelector(".skill .horiscroll").scrollLeft += widthitem;
};
document.querySelector("#prev").onclick = () => {
  const widthitem = document.querySelector(".items").offsetWidth;
  document.querySelector(".skill .horiscroll").scrollLeft -= widthitem;
};

// =========== Helight on nav menu =========
window.addEventListener("scroll", () => {
  const oneHelight = Array.from(
    document.querySelectorAll(`.hey[data-scroll='in']`)
  )[0];
  // console.log(oneHelight.getAttribute("class").split(" ")[0]);

  if (oneHelight.getAttribute("class").split(" ")[0] == "homeTitle") {
    homeBtn.style.color = "var(--color_a)";
    aboutBtn.style.color = "var(--color_b)";
    skillBtn.style.color = "var(--color_b)";
    projectBtn.style.color = "var(--color_b)";
    contactBtn.style.color = "var(--color_b)";
  } else if (oneHelight.getAttribute("class").split(" ")[0] == "aboutTitle") {
    aboutBtn.style.color = "var(--color_a)";
    homeBtn.style.color = "var(--color_b)";
    skillBtn.style.color = "var(--color_b)";
    projectBtn.style.color = "var(--color_b)";
    contactBtn.style.color = "var(--color_b)";
  } else if (oneHelight.getAttribute("class").split(" ")[0] == "skillTitle") {
    skillBtn.style.color = "var(--color_a)";
    homeBtn.style.color = "var(--color_b)";
    aboutBtn.style.color = "var(--color_b)";
    projectBtn.style.color = "var(--color_b)";
    contactBtn.style.color = "var(--color_b)";
  } else if (oneHelight.getAttribute("class").split(" ")[0] == "projectTitle") {
    projectBtn.style.color = "var(--color_a)";
    homeBtn.style.color = "var(--color_b)";
    aboutBtn.style.color = "var(--color_b)";
    skillBtn.style.color = "var(--color_b)";
    contactBtn.style.color = "var(--color_b)";
  } else if (oneHelight.getAttribute("class").split(" ")[0] == "contactTitle") {
    contactBtn.style.color = "var(--color_a)";
    homeBtn.style.color = "var(--color_b)";
    aboutBtn.style.color = "var(--color_b)";
    skillBtn.style.color = "var(--color_b)";
    projectBtn.style.color = "var(--color_b)";
  }
});

open.addEventListener("click", () => {
  ulTag.classList.toggle("active");
  open.classList.toggle("off");
  close.classList.toggle("off");
});
close.addEventListener("click", (e) => {
  ulTag.classList.toggle("active");
  open.classList.toggle("off");
  close.classList.toggle("off");
});

sun.addEventListener("click", () => {
  sun.style.display = "none";
  moon.style.display = "block";
  root.style.setProperty("--background", "rgb(144, 81, 207)");
});
moon.addEventListener("click", () => {
  moon.style.display = "none";
  sun.style.display = "block";
  root.style.setProperty("--background", "#2e122d");
});

// ==========  Contact form==========
const btn = document.querySelector("#btn");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const message = document.querySelector("#message");
btn.addEventListener("click", () => {
  setTimeout(() => {
    name.value = "";
    email.value = "";
    phone.value = "";
    message.value = "";
  }, 1800);
});

// ========== type text lib==========
var typed = new Typed("#element", {
  strings: [" Chit Thukha<br/>Hlaing", "Fullstack<br/>Developer"],
  typeSpeed: 120,
  backSpeed: 150,
  smartBackspace: true,
  fadeOutDelay: 100,
  loop: true,
});
// ========== Swiper==========
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  centeredSlides: false,
  slidesPerGroupSkip: 1,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    769: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
