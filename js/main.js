const burger = document.querySelector("[data-burger]");
const row = document.querySelector("[data-header__row]");
const body = document.body;
const rowItems = document.querySelectorAll("a");
const qualificationButton = document.querySelector("[data-qualification-button]");
const modalQualification = document.querySelector("[data-qualification-modal]")
const closeQualificationModal = document.querySelector("[data-close-qualification-modal]")
const modalFeedback = document.querySelector("[data-feedback-modal]")
const feedbackButtons = document.querySelectorAll("[data-feedback-button]")
const closeFeedbackModal = document.querySelector("[data-close-feedback-modal]")
const heroButton = document.querySelector(".hero__button");
const closeModalWindowBtn = document.querySelector(".modal-close")
const modalWindow = document.querySelector(".modal");
burger.addEventListener("click", () =>{
    body.classList.toggle("stop-scroll")
    burger.classList.toggle("burger--active")
    row.classList.toggle("header__row--visible")
})

rowItems.forEach(element => {
    element.addEventListener("click", () => {
        body.classList.remove("stop-scroll")
        burger.classList.remove("burger--active")
        row.classList.remove("header__row--visible")
    })
})

qualificationButton.addEventListener("click", () => {
    modalQualification.classList.toggle("modal--open");
    body.classList.toggle("modal--open-body");
})

closeQualificationModal.addEventListener("click", () => {
    modalQualification.classList.toggle("modal--open")
    body.classList.toggle("modal--open-body")
})




modalWindow.addEventListener("close", returnScroll)

heroButton.addEventListener("click", () => {
    modalWindow.showModal();
    document.body.classList.add("scroll-lock")
})

closeModalWindowBtn.addEventListener("click", () => {
    modalWindow.close();
})

function returnScroll() {
    document.body.classList.remove("scroll-lock")
}

