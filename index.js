// modal hero button

const button = document.querySelector(".btn-modal");
const backdrop = document.querySelector(".modal-backdrop");

button.addEventListener("click", toggleModal);

backdrop.addEventListener("click", (e) => {
  const target = e.target.closest(".btn-close-modal");

  if (!target) {
    return;
  }
  toggleModal();
});

function toggleModal() {
  backdrop.classList.toggle("is-open");
}

// burger menu mobile

const burgerButton = document.querySelector(".btn-burger-modal");
const burgerBackdrop = document.querySelector(".burger_menu");

burgerButton.addEventListener("click", toggleBurgerModal);

burgerBackdrop.addEventListener("click", (e) => {
  const target = e.target.closest(".burger_menu_btn-close-modal");

  if (!target) {
    return;
  }
  toggleBurgerModal();
});

function toggleBurgerModal() {
  burgerBackdrop.classList.toggle("is-burger-open");
}

