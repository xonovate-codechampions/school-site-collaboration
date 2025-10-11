const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const openBtn = document.getElementById("openFormBtn");
const subBtn = document.getElementById("submitBtn");
const form = document.getElementById("enrollForm");
const modal = document.getElementById("enrollModal");
const closeBtn = document.querySelector(".close");
const name = document.getElementById("name");
const email = document.getElementById("email");
const course = document.getElementById("course");

name.onkeyup = () => {
  if (name.value.length <= 5) {
    name.style.border = "1px solid red";
    document.getElementById("valid1").style.display = "block";
    document.getElementById(
      "valid1"
    ).innerHTML = `<small>"Name must be more than 5 characters"</small>`;
  } else {
    document.getElementById("valid1").style.display = "none";
    name.style.border = "1px solid green";
  }
};

form.onsubmit = (event) => {
  event.preventDefault();

  // if (name.value === "") {
  //   document.getElementById("valid1").style.display = "block";
  // } else {
  //   document.getElementById("valid1").style.display = "none";
  // }

  if (email.value === "") {
    document.getElementById("valid2").style.display = "block";
  } else {
    document.getElementById("valid2").style.display = "none";
  }
  if (course.value === "") {
    document.getElementById("valid3").style.display = "block";
  } else {
    document.getElementById("valid3").style.display = "none";
  }

  // alert(
  //   `Thank you, ${name.value}, for enrolling in the ${course.value} course! We will contact you at ${email.value}.`
  // );
  // modal.style.display = "none";

  // name.value = "";
  // email.value = "";
  // course.value = "";
};

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
