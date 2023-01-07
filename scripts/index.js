const profilePopupButton = document.querySelector(`.profile__edit-button`);
const profilePopup = document.querySelector(`.popup_type_profile`);
const profileForm = profilePopup.querySelector(`.popup__form`);
const nameInput = document.querySelector(`.popup__input_data_name`);
const jobInput = document.querySelector(`.popup__input_data_job`);

const profileTittle = document.querySelector(`.profile__title`);
const profileSubtittle = document.querySelector(`.profile__subtitle`);

const cardPopupButton = document.querySelector(`.profile__button`);
const cardPopup = document.querySelector(`.popup_type_card`);
const cardForm = cardPopup.querySelector(`.popup__form`);

const imagePopup = document.querySelector(`.popup_type_image`);

const cardContainer = document.querySelector(`.places`);

const inputTitle = cardPopup.querySelector(`.popup__input_data_title`);
const inputImg = cardPopup.querySelector(`.popup__input_data_img`);

const imagePopupLink = imagePopup.querySelector(`.popup__zoom-image`);
const imagePopupName = imagePopup.querySelector(`.popup__zoom-title`);

const profilePopupClose = profilePopup.querySelector(`.popup__close`);
const imagePopupClose = imagePopup.querySelector(`.popup__close`);
const cardPopupClose = cardPopup.querySelector(`.popup__close`);

const cardTemplate = document
  .querySelector(`.template`)
  .content.querySelector(`.place`);

function openPopup(item) {
  item.classList.add(`popup_opened`);
}

function closePopup(item) {
  item.classList.remove(`popup_opened`);
}

function handleSubmitProfileForm(evt) {
  evt.preventDefault();
  profileTittle.textContent = nameInput.value;
  profileSubtittle.textContent = jobInput.value;
  closePopup(profilePopup);
}

const handleDeleteCard = (event) => {
  event.target.closest(".place").remove();
};
function likeCard(evt) {
  evt.target.classList.toggle(`place__icon_black`);
}
function createCard(item) {
  const card = cardTemplate.cloneNode(true);
  card.querySelector(`.place__title`).textContent = item.name;
  card.querySelector(`.place__img`).src = item.link;
  card.querySelector(`.place__img`).alt = item.name;
  const cardDelete = card.querySelector(`.place__delete`);
  const imgCard = card.querySelector(`.place__img`);

  const openImgCard = () => {
    imagePopupLink.src = item.link;
    imagePopupName.textContent = item.name;
    openPopup(imagePopup);
  };

  cardDelete.addEventListener(`click`, handleDeleteCard);
  card.querySelector(`.place__icon`).addEventListener(`click`, likeCard);
  imgCard.addEventListener(`click`, openImgCard);

  return card;
}

function renderCards() {
  initialCards.reverse().forEach((item) => {
    const cards = createCard(item);
    addCard(cards);
  });
}

function addCard(card) {
  cardContainer.prepend(card);
}

function handleSubmitCardsForm(evt) {
  evt.preventDefault();
  const imputValue = {
    name: inputTitle.value,
    link: inputImg.value,
  };

  const newCard = createCard(imputValue);
  addCard(newCard);

  closePopup(cardPopup);
}

renderCards();

cardForm.addEventListener(`submit`, handleSubmitCardsForm);
profileForm.addEventListener(`submit`, handleSubmitProfileForm);

cardPopupButton.addEventListener(`click`, () => {
  openPopup(cardPopup);
});
profilePopupButton.addEventListener(`click`, () => {
  openPopup(profilePopup);
  nameInput.value = profileTittle.textContent;
  jobInput.value = profileSubtittle.textContent;
});

profilePopupClose.addEventListener(`click`, () => {
  closePopup(profilePopup);
});
imagePopupClose.addEventListener(`click`, () => {
  closePopup(imagePopup);
});
cardPopupClose.addEventListener(`click`, () => {
  closePopup(cardPopup);
});
// const profilePopup = document.querySelector(`.popup_type_profile`);
const profileInputPopup = profilePopup.querySelector(`.popup__input`);
// Выбираем элемент ошибки на основе уникального класса
const profileError = profilePopup.querySelector(
  `.${profileInputPopup.id}-error`
);

// Функция, которая добавляет класс с ошибкой
const showProfileInputError = (element) => {
  element.classList.add(`popup__input_type_error`);
  // Показываем сообщение об ошибке
  profileError.classList.add("popup__input-error_active");
};
// Функция, которая удаляет класс с ошибкой
const hideProfileInputError = (element) => {
  element.classList.remove(`popup__input_type_error`);
  profileError.classList.remove("popup__input-error_active");
};
// Функция, которая проверяет валидность поля
const isValid = () => {
  if (!profileInputPopup.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    showProfileInputError(profileInputPopup);
  } else {
    // Если проходит, скроем
    hideProfileInputError(profileInputPopup);
  }
};
// Вызовем функцию isValid на каждый ввод символа
profileInputPopup.addEventListener("input", isValid);
