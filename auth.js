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

const submitBtns = document.querySelectorAll(".submitbtn");
const course = document.getElementById("course");
const valid1 = document.getElementById("valid1");
const email = document.getElementById("email");
const next = document.getElementById("loginPassword");
const name = document.getElementById("name");
const valids = document.querySelectorAll(".valid4");

course.onchange = () => {
  if (course.value === "") {
    valid1.style.display = "block";
  } else {
    valid1.style.display = "none";
  }
};

valids.forEach((valid4) => {
  email.onkeyup = () => {
    if (email.value === "" || !email.value.includes("@xonovate.com")) {
      email.style.border = "1px solid red";
      valid4.style.display = "block";
    } else {
      email.style.border = "1px solid green";
      valid4.style.display = "none";
    }
  };
});

submitBtns.forEach((submitBtn) => {
  submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (name.value === "") {
      name.style.border = "1px solid red";
    } else {
      name.style.border = "1px solid green";
    }
    valids.forEach((valid4) => {
      if (email.value === "" || !email.value.includes("@xonovate.com")) {
        email.style.border = "1px solid red";
        valid4.style.display = "block";
      } else {
        email.style.border = "1px solid green";
        valid4.style.display = "none";
      }
    });

    next.addEventListener("keyup", () => {
      if (next.value === "") {
        next.style.border = "1px solid red";
      } else {
        next.style.border = "1px solid green";
      }
    });
    if (next.value === "") {
      next.style.border = "1px solid red";
    } else {
      next.style.border = "1px solid green";
    }
    if (email.value !== "" && next.value !== "") {
      window.location.href = "index.html";
    }

    if (course.value === "") {
      valid1.style.display = "block";
    } else {
      valid1.style.display = "none";
    }

    const Input = document.getElementById("password");
    if (
      course.value !== "" &&
      Input.value.length > 5 &&
      password.value === confirmPassword.value
    ) {
      window.location.href = "index.html";
    } else {
      return false;
    }
  });

  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const valid2 = document.getElementById("valid2");
  const valid3 = document.getElementById("valid3");

  password.addEventListener("keyup", () => {
    if (password.value.length <= 5) {
      valid2.style.display = "block";
      password.style.border = "1px solid red";
    } else {
      valid2.style.display = "none";
      password.style.border = "1px solid green";
    }
  });

  confirmPassword.addEventListener("keyup", () => {
    if (confirmPassword.value === password.value) {
      valid3.style.display = "none";
      confirmPassword.style.border = "1px solid green";
    } else {
      valid3.style.display = "block";
      confirmPassword.style.border = "1px solid red";
    }
  });

});

// document.getElementById("form").addEventListener("submit", function (e) {
//     e.preventDefault();

//     // Validate email
//     if (!email.value) {
//         emailError.textContent = "Email is required";
//         emailError.style.display = "block";
//     } else {
//         emailError.style.display = "none";
//     }

//     // Validate password
//     if (passwordInput.value.length < 6) {
//         passwordError.textContent = "Password must be at least 6 characters";
//         passwordError.style.display = "block";
//     } else {
//         passwordError.style.display = "none";
//     }

//     window.location.href = "index.html";
//   });

// const form = document.getElementById("form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   window.location.href = "index.html";
// });
