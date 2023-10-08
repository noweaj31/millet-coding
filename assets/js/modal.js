const likeBtns = document.querySelectorAll(".item-1 .millet img");
const modalWrap = document.querySelector(".modal-wrap");
const popupWrap = document.querySelector(".popup-wrap");
const closeBtn = document.querySelector(".cancel");
const checkBtn = document.querySelector(".confirm");

console.log(modalWrap);
likeBtns.forEach((likeBtn) => {
  likeBtn.addEventListener("click", () => {
    likeBtn.style.backgroundcolor = "#ccc";
    modalWrap.style.display = "flex";
    popupWrap.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modalWrap.style.display = "none";
  popupWrap.style.display = "none";
});

checkBtn.addEventListener("click", () => {
  modalWrap.style.display = "none";
  popupWrap.style.display = "none";
});
