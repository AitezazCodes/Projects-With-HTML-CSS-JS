const eyeOpen = document.querySelector("#open_eye");
const eyeClose = document.querySelector("#close_eye");
const input = document.querySelector("#pass");

function toggleIcons() {
  eyeOpen.style.display = input.type === "password" ? "block" : "none";
  eyeClose.style.display = input.type === "password" ? "none" : "block";

  // Adjust the opacity based on whether the input has a value
  const isInputEmpty = input.value.trim() === "";
  eyeOpen.style.opacity = isInputEmpty ? 0.6 : 1;
  eyeClose.style.opacity = isInputEmpty ? 0.6 : 1;
}

// Initial check for input value on page load
toggleIcons();

input.addEventListener("input", function () {
  toggleIcons();
});

eyeOpen.addEventListener("click", function () {
  if (input.value.trim() !== "") {
    input.type = "text";
    toggleIcons();
  }
});

eyeClose.addEventListener("click", function () {
  input.type = "password";
  toggleIcons();
});
