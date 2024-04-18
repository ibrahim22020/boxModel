const myImages = Array.from(document.querySelectorAll(".container img"));
const shownImage = document.querySelector(".my-model img");
const model = document.querySelector(".my-model");
const closeBtn = document.querySelector(".fa-circle-xmark");
const leftBtn = document.querySelector(".fa-circle-arrow-left");
const rightBtn = document.querySelector(".fa-circle-arrow-right");
const modelInner = document.querySelector("#modelInner");
let currentIndex = 0;

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "ArrowRight") {
    console.log("hiii");
    slide(1);
  }
  if (e.key === "ArrowLeft") {
    slide(-1);
  }
  if (e.key === "Escape") {
    closeModel();
  }
});

for (let i = 0; i < myImages.length; i++) {
  myImages[i].addEventListener("click", function (e) {
    showModel();
    getCurrentImage(e);
  });
}
model.addEventListener("click",function(e){
    console.log(e.target)
    e.target === modelInner? closeModel():false;

})

closeBtn.addEventListener("click", function () {
  closeModel();
});

rightBtn.addEventListener("click", function () {
    slide(1);
});

leftBtn.addEventListener("click", function () {
    slide(-1);
});

function showModel() {
  model.classList.remove("d-none");
}

// function nextSlide() {
//   currentIndex++;
//   if (currentIndex >= myImages.length) currentIndex = 0;

//   shownImage.setAttribute("src", myImages[currentIndex].getAttribute("src"));
// }

// function previousSlide() {
//   currentIndex--;
//   if (currentIndex < 0) currentIndex = myImages.length - 1;

//   shownImage.setAttribute("src", myImages[currentIndex].getAttribute("src"));
// }

function getCurrentImage(eventInfo) {
  const imagePath = eventInfo.target.getAttribute("src");
  shownImage.setAttribute("src", imagePath);
  currentIndex = myImages.indexOf(eventInfo.target);
}

function closeModel() {
  model.classList.add("d-none");
}

function slide(index) {
    currentIndex+=index;
    if (currentIndex < 0) currentIndex = myImages.length - 1;
    if (currentIndex >= myImages.length) currentIndex = 0;
  
    shownImage.setAttribute("src", myImages[currentIndex].getAttribute("src"));
  }
