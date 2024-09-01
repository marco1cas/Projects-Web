(function () {
  const sliders = [...document.querySelectorAll(".slider_body")];
  const arrowNext = document.querySelector("#next");
  const arrowBefore = document.querySelector("#before");
  let currentIndex = 0;

  arrowNext.addEventListener("click", () => changePosition(1));
  arrowBefore.addEventListener("click", () => changePosition(-1));

  function changePosition(change) {
    sliders[currentIndex].classList.remove("slider_body--show");
    currentIndex += change;

    if (currentIndex < 0) {
      currentIndex = sliders.length - 1;
    } else if (currentIndex >= sliders.length) {
      currentIndex = 0;
    }

    sliders[currentIndex].classList.add("slider_body--show");
  }
})();
