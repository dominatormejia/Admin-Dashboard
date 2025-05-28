const button = document.querySelectorAll("button");

button.forEach((element) => {
  element.addEventListener("click", () => {
    window.open("secondary.html");
  });
});

const pageReturn = document.querySelector(".secondary-svg");

pageReturn.addEventListener("click", () => {
  window.open("index.html");
  window.close("secondary.html");
});
