let popup = document.querySelector(`.popup`);
let popupProfileButton = document.querySelector(`.profile__edit-button`);
let popupClose = document.querySelector(`.popup__close`);
let popupSave = document.querySelector(`.popup__button`);

let formElement = document.querySelector(`.popup__form`);

let nameInput = document.querySelector(`.popup__input_data_name`);
let jobInput = document.querySelector(`.popup__input_data_job`);

let profileTittle = document.querySelector(`.profile__title`);
let profileSubtittle = document.querySelector(`.profile__subtitle`);

// popupButton.onclick = function(){
//     popup.style.display='flex'
// }
// popupClose.onclick = function(){
//     popup.style.display='flex'
//     popup.style.display='none'
// }

popupClose.addEventListener(`click`, () => {
  popup.classList.remove(`popup_opened`);
});

popupSave.addEventListener(`click`, () => {
  popupClose();
});

popupProfileButton.addEventListener(`click`, (event) => {
  event.preventDefault();
  popup.classList.add(`popup_opened`);
});

function handleFormSubmit(evt) {
  evt.preventDefault();

  let name = nameInput.value;
  let job = jobInput.value;

  profileTittle.textContent = name;
  profileSubtittle.textContent = job;
}

formElement.addEventListener(`submit`, handleFormSubmit);
