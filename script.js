const sliderContainer = document.querySelector(".slider-container");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const sliderDots = document.querySelector(".slider-dots");

const images = [
  "pic-1.jpg",
  "pic-2.jpg",
  "pic-3.jpg",
  "pic-4.jpg",
  "pic-5.jpg",
  "pic-6.jpg",
  "pic-7.jpg",
  "pic-8.jpg",
];

let index = 0;

function showImage() {
  sliderContainer.innerHTML = `<img src="${images[index]}" alt="Image">`;
}

showImage();

function createSliderDots() {
  for (let i = 0; i < images.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("slider-dot");
    if (i === index) {
      dot.classList.add("active");
    }
    sliderDots.appendChild(dot);
    dot.addEventListener("click", () => {
      index = i;
      showImage();
      updateSliderDots();
    });
  }
}

function updateSliderDots() {
  const dots = document.querySelectorAll(".slider-dot");
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

createSliderDots();

prevBtn.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = images.length - 1;
  }
  showImage();
  updateSliderDots();
});

nextBtn.addEventListener("click", () => {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  showImage();
  updateSliderDots();
});
