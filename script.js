const letter = document.querySelector(".letter");
const letterBottom = document.querySelector(".letter-bottom");
const letterTriangle = document.querySelector(".letter-triangle");

letter.addEventListener("click", () => {
  letter.classList.toggle("hide");
  letterTriangle.classList.toggle("open-letter");
  setTimeout(() => {
    letterBottom.classList.toggle("open-bottom");
  }, 100);
});
