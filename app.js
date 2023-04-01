const image = document.querySelector("img");
const name = document.querySelector("h2");
const role = document.querySelector("h3");
const desc = document.querySelector("p");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let customerInfo;

fetch("customers.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    customerInfo = data;
    image.src = customerInfo[0].image;
    name.textContent = customerInfo[0].fname + " " + customerInfo[0].lname;
    role.textContent = customerInfo[0].role;
    desc.textContent = customerInfo[0].desc;
  });

const showInfo = (idx) => {
  image.src = customerInfo[idx].image;
  name.textContent = customerInfo[idx].fname + " " + customerInfo[idx].lname;
  role.textContent = customerInfo[idx].role;
  desc.textContent = customerInfo[idx].desc;
};

let currentIndex = 0;

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + customerInfo.length) % customerInfo.length;
  showInfo(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % customerInfo.length;
  showInfo(currentIndex);
});

randomBtn.addEventListener("click", () => {
  let randomIdx = Math.floor(Math.random() * customerInfo.length);
  showInfo(randomIdx);
});
