const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// const header = document.querySelector("h1");
// header.classList.add("animate-on-load");

// const setScrollVar = () => {
//   const htmlElement = document.documentElement;
//   const percentOfScreenHeightScrolled =
//     htmlElement.scrollTop / htmlElement.clientHeight;
//   htmlElement.style.setProperty(
//     "--scroll",
//     Math.min(percentOfScreenHeightScrolled * 100, 100)
//   );
// };

// window.addEventListener("scroll", setScrollVar);
// window.addEventListener("resize", setScrollVar);
// setScrollVar();
