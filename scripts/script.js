let popup = document.querySelector(`.popup`);
let popupProfileButton = document.querySelector(`.profile__edit-button`);
let popupCloseButton = document.querySelector(`.popup__close`);
let popupSaveButton = document.querySelector(`.popup__button`);

let formElement = document.querySelector(`.popup__form`);

let nameInput = document.querySelector(`.popup__input_data_name`);
let jobInput = document.querySelector(`.popup__input_data_job`);

let profileTittle = document.querySelector(`.profile__title`);
let profileSubtittle = document.querySelector(`.profile__subtitle`);

function popupOpened() {
  popup.classList.add(`popup_opened`);
  nameInput.value = profileTittle.textContent;
  jobInput.value = profileSubtittle.textContent;
}

function popupClosed() {
  popup.classList.remove(`popup_opened`);
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTittle.textContent = nameInput.value;
  profileSubtittle.textContent = jobInput.value;
}

popupCloseButton.addEventListener(`click`, () => {
  popupClosed();
});

popupSaveButton.addEventListener(`click`, () => {
  popupClosed();
});

popupProfileButton.addEventListener(`click`, (event) => {
  event.preventDefault();
  popupOpened();
});

formElement.addEventListener(`submit`, handleFormSubmit);
