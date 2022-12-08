const openModalBtn = document.querySelector("#open-modal-btn");
const closeModalBtn = document.querySelector("#close-modal-btn");
const fade = document.querySelector(".fade");
const modal = document.querySelector(".modal");

const elements = [openModalBtn, closeModalBtn, fade];

elements.forEach((element) => {
  element.addEventListener("click", () => toggleModal());
});

function toggleModal() {
  [modal, fade].forEach((element) => {
    element.classList.toggle("hide");
  });
}
