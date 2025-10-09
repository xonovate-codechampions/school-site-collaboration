const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


const openBtn = document.getElementById("openFormBtn");
const modal = document.getElementById("enrollModal");
const closeBtn = document.querySelector(".close");

openBtn.onclick = () => {
  modal.style.display = "flex";
};

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};