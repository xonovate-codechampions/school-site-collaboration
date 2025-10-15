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
    ).innerHTML = `<small>Name must be more than 5 characters</small>`;
  } else {
    document.getElementById("valid1").style.display = "none";
    name.style.border = "1px solid green";
  }
};

form.onsubmit = (event) => {
  event.preventDefault();

  if (name.value === "") {
    document.getElementById("valid1").style.display = "block";
  } else {
    document.getElementById("valid1").style.display = "none";
  }

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

<<<<<<< Updated upstream
  name.value = "";
  email.value = "";
  course.value = "";
=======
  
>>>>>>> Stashed changes
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



const alertBox = document.getElementById("customAlert");
const alertMessage = document.getElementById("alertMessage");
const closeAlert = document.getElementById("closeAlert");

form.addEventListener("submit", (e) => {
  e.preventDefault(); 

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const course = document.getElementById("course").value;

  
  alertMessage.innerHTML = `
    Hello <strong>${name}</strong>! <br>
    You have successfully enrolled in <strong>${course}</strong>.<br>
    A confirmation email will be sent to <strong>${email}</strong>.
  `;
<<<<<<< Updated upstream
=======
   

>>>>>>> Stashed changes

  alertBox.style.display = "flex";
});

closeAlert.onclick = () => {
  alertBox.style.display = "none";
<<<<<<< Updated upstream
  form.reset();
=======
  name.value = "";
  email.value = "";
  course.value = "";
>>>>>>> Stashed changes
};