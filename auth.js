const inputs = document.querySelectorAll(".password");
const toggleBtns = document.querySelectorAll(".toggle-btn");

toggleBtns.forEach((toggleBtn, index) => {
  toggleBtn.addEventListener("click", (e) => {
    const input = inputs[index];
    if (input.type === "password") {
      input.type = "text";
      toggleBtn.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
    } else {
      input.type = "password";
      toggleBtn.innerHTML = `<i class="fa-solid fa-eye"></i>`;
    }
  });
});

const submitBtn = document.querySelector(".submitbtn");
const course = document.getElementById("course");
const valid1 = document.getElementById("valid1");

course.onchange = () => {
  if (course.value === "") {
    valid1.style.display = "block";
  } else {
    valid1.style.display = "none";
  }
};

submitBtn.onclick = (event) => {
  event.preventDefault();
  if (course.value === "") {
    valid1.style.display = "block";
  } else {
    valid1.style.display = "none";
  }
};

const Input = document.getElementById("password");

Input.onkeyup = () => {
  if (Input.value.length <= 5) {
    Input.style.border = "1px solid red";
    document.getElementById("valid2").style.display = "block";
    document.getElementById(
      "valid2"
    ).innerHTML = `<small>"Password must be more than 5 characters"</small>`;
  } else {
    document.getElementById("valid2").style.display = "none";
    Input.style.border = "1px solid green";
  }
};

const password = getElementById("Password");

password.onkeyup = () => {
  if (password.value === Input.value) {
    password.style.border = "1px solid green";
    document.getElementById("valid3").style.display = "none";
  } else {
    password.style.border = "1px solid red";
    document.getElementById("valid3").style.display = "block";
    document.getElementById(
      "valid3"
    ).innerHTML = `<small>"Passwords do not match"</small>`;
  }
};
