const image = document.querySelector("img");
const name = document.querySelector("h2");
const role = document.querySelector("h3");
const desc = document.querySelector("p");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");
let currentIndex = 0;
let customerInfo;

fetch("customers.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    customerInfo = data;
    showInfo(currentIndex);
  });

const showInfo = (idx) => {
  image.src = customerInfo[idx].image;
  name.textContent = customerInfo[idx].fname + " " + customerInfo[idx].lname;
  role.textContent = customerInfo[idx].role;
  desc.textContent = customerInfo[idx].desc;
};

prevBtn.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex <0) {
    currentIndex = customerInfo.length -1;
  }
  showInfo(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= customerInfo.length) {
    currentIndex = 0;
  }
  showInfo(currentIndex);
});

randomBtn.addEventListener("click", () => {
  let randomIdx = Math.floor(Math.random() * customerInfo.length);
  showInfo(randomIdx);
});
