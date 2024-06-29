// Text animation

const textBtn = document.querySelector(".section1 .animate-btn");

const textAnimation = () => {
  let textTag = document.querySelector(".section1 h1");
  let text = textTag.textContent;
  let splittetText = text.split("");

  textTag.innerHTML = "";

  for (i = 0; i < splittetText.length; i++) {
    if (splittetText[i] == " ") {
      splittetText[i] = "&nbsp;";
    }

    textTag.innerHTML += `<span>${splittetText[i]}</span>`;
  }

  let k = 0;
  let interval = setInterval(() => {
    let spans = document.querySelectorAll("span");
    let singleSpan = spans[k];

    singleSpan.className = "fadeMove";

    k++;

    if (k === spans.length) {
      clearInterval(interval);
    }
  }, 50);
};

textBtn.addEventListener("click", () => {
  textAnimation();
});

// Border line animation

let border = document.querySelector(".border-line");

window.addEventListener("scroll", () => {
  let section2 = document.querySelector(".section2");
  let section2Height = section2.offsetHeight;
  let section2Top = section2.offsetTop;
  let scrollPosition = window.scrollY + window.innerHeight;

  let scrolledPercentage =
    ((scrollPosition - section2Top) / section2Height) * 100;

  if (scrolledPercentage >= 100) {
    scrolledPercentage = 100;
  }
  if (scrolledPercentage <= 0) {
    scrolledPercentage = 0;
  }

  border.style.width = scrolledPercentage + "%";

  imageAnimation();
});

const imageAnimation = () => {
  let sectionForAnimation = document.querySelector(".section2 .images");
  let sectionPosition = sectionForAnimation.getBoundingClientRect().top;
  let screenPosition = window.innerHeight / 1.3;

  let leftImage = document.querySelector(".slideFromLeft");
  let rightImage = document.querySelector(".slideFromRight");

  if (sectionPosition < screenPosition) {
    leftImage.classList.add("animated");
    rightImage.classList.add("animated");
  }
};
