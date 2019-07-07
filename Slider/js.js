const btn = [...document.querySelectorAll(".slider__btn")];
const sliders = [...document.querySelectorAll(".comments__element")];
let transitionTime = "2.6s";
let positionLeft, positionMid, positionRight;
let i = 0;

sliders[0].classList.add("comments__element--position-mid");
sliders[1].classList.add("comments__element--position-right");
btn[0].style.backgroundColor = "#ccc";
sliders[2].classList.add("comments__element--position-left");

const timeSlide = () => {
  i++;
  if (i > sliders.length - 1) {
    i = 0;
  }

  positionMid = i % 3;
  positionRight = (i + 1) % 3;
  positionLeft = (i + 2) % 3;

  clearClass();
  changeColorDot();

  sliders[positionMid].style.transition = transitionTime;
  sliders[positionLeft].style.transition = transitionTime;
  sliders[positionMid].classList.add("comments__element--position-mid");
  sliders[positionRight].classList.add("comments__element--position-right");
  sliders[positionLeft].classList.add("comments__element--position-left");
};

clearClass = () => {
  sliders.forEach(element => {
    element.classList.remove(
      "comments__element--position-mid",
      "comments__element--position-right",
      "comments__element--position-left"
    );
    element.style.transition = "0s";
  });
};

btn.forEach((clickDot, indexDot) => {
  clickDot.addEventListener("click", () => {
    stopInterval();
    // console.log(indexDot); // why return clicks button -> 'indexDot'?

    i = indexDot;

    positionMid = i % 3;
    positionRight = (i + 1) % 3;
    positionLeft = (i + 2) % 3;

    let translateValueX = window
      .getComputedStyle(sliders[i])
      .getPropertyValue("transform")
      .match(/(-?[0-9\.]+)/g)[4];

    clearClass();
    changeColorDot();

    if (translateValueX < -278) {
      sliders[positionMid].style.transition = transitionTime;
      sliders[positionRight].style.transition = transitionTime;
    } else {
      sliders[positionMid].style.transition = transitionTime;
      sliders[positionLeft].style.transition = transitionTime;
    }

    sliders[positionMid].classList.add("comments__element--position-mid");
    sliders[positionRight].classList.add("comments__element--position-right");
    sliders[positionLeft].classList.add("comments__element--position-left");

    return startInterval(timeSlide, 4000);
  });
});

const startInterval = function(nameInterval, timeSlide) {
  ider = setInterval(nameInterval, timeSlide);
};

const stopInterval = function() {
  clearInterval(ider);
};

const changeColorDot = function() {
  btn.forEach(oneBtn => {
    oneBtn.style.backgroundColor = "#fff";
  });
  btn[positionMid].style.backgroundColor = "#ccc ";
};

startInterval(timeSlide, 4000);
