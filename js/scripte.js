const openButtons = document.querySelectorAll("[id^=open]");
const closeButtons = document.querySelectorAll("[id^=close]");
const modalContainers = document.querySelectorAll(".modal-container");


openButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    modalContainers[index].classList.add("show");
  });
});


closeButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    modalContainers[index].classList.remove("show");
  });
});


modalContainers.forEach((modalContainer) => {
  modalContainer.addEventListener("click", (event) => {
    if (event.target === modalContainer) {
      modalContainer.classList.remove("show");
    }
  });
});
