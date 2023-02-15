//SEARCH

const searchEl = document.querySelector(".search");
const searchElInput = searchEl.querySelector("input");
const searchSpan = searchEl.querySelector("span");

let isFocused = false;

searchEl.style = "cursor: pointer";
searchEl.addEventListener("click", () => {
  if (isFocused) {
    searchElInput.focus();
    isFocused = false;
  } else {
    searchElInput.blur();
    isFocused = true;
  }
});

searchElInput.addEventListener("focus", () => {
  searchElInput.setAttribute("placeholder", "통합검색");
});

searchElInput.addEventListener("blur", () => {
  searchElInput.setAttribute("placeholder", "");
});
