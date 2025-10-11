const input = document.querySelector(".password");
const toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.addEventListener("click", () => {
  if (input.type === "password") {
    input.type = "text";
    toggleBtn.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
  } else {
    input.type = "password";
    toggleBtn.innerHTML = `<i class="fa-solid fa-eye"></i>`;
  }
});

const Input = document.querySelector(".Password");
const ToggleBtn = document.querySelector(".Toggle-btn");

ToggleBtn.addEventListener("click", () => {
  if (Input.type === "password") {
    Input.type = "text";
    ToggleBtn.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
  } else {
    Input.type = "password";
    ToggleBtn.innerHTML = `<i class="fa-solid fa-eye"></i>`;
  }
});

const submitBtn = document.querySelector(".submitbtn");
const course = document.getElementById("course");
const valid1 = document.getElementById("valid1");

submitBtn.onclick = (event) => {
  event.preventDefault();
  if (course.value === "") {
    valid1.style.display = "block";
  } else {
    valid1.style.display = "none";
  }
};

input.onkeyup = () => {
  if (input.value.length <= 5) {
    input.style.border = "1px solid red";
    document.getElementById("valid2").style.display = "block";
    document.getElementById(
      "valid2"
    ).innerHTML = `<small>"Password must be more than 5 characters"</small>`;
  } else {
    document.getElementById("valid2").style.display = "none";
    input.style.border = "1px solid green";
  }
};

Input.onkeyup = () => {
  if (Input.value === input.value) {
    Input.style.border = "1px solid green";
    document.getElementById("valid3").style.display = "none";
  } else {
    Input.style.border = "1px solid red";
    document.getElementById("valid3").style.display = "block";
    document.getElementById(
      "valid3"
    ).innerHTML = `<small>"Passwords do not match"</small>`;
  }
};
