const button = document.querySelectorAll("button");

button.forEach((element) => {
  element.addEventListener("click", () => {
    window.open("secondary.html");
  });
});
