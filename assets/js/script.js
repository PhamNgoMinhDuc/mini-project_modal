let btnOpen = document.querySelector(".open-modal-btn");
let modal = document.querySelector(".modal");
let btnX = document.querySelector(".modal__header i");
let btnClose = document.querySelector(".modal__footer button");

function toggleModal() {
	modal.classList.toggle("hide");
}

btnOpen.addEventListener("click", toggleModal);
modal.addEventListener("click", function (e) {
	if (e.target == e.currentTarget) {
		modal.classList.toggle("hide");
	}
});
btnX.addEventListener("click", toggleModal);
btnClose.addEventListener("click", toggleModal);
