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

const popupButtonProfile = profilePopup.querySelector(`.popup__button`);

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
//const profileForm = profilePopup.querySelector(`.popup__form`);
const profileInputPopup = profileForm.querySelector(`.popup__input`);
// Выбираем элемент ошибки на основе уникального класса
const profileError = profileForm.querySelector(
  `.${profileInputPopup.id}-error`
);
const popupForm = document.querySelector(`.popup__form`);
const formInput = document.querySelector(`.popup__input`);
const formButton = document.querySelector(`.popup__button`);
const inputError = popupForm.querySelector(`.${formInput.id}-error`);
//Функция, которая добавляет класс с ошибкой
const showInputError = (popupForm, formInput, errorMessage) => {
  const inputError = popupForm.querySelector(`.${formInput.id}-error`);
  formInput.classList.add(`popup__input_type_error`);
  inputError.textContent = errorMessage;
  inputError.classList.add(`popup__input-error_active`);
};
//Функция, которая удаляет класс с ошибкой
const hideInputError = (popupForm, formInput) => {
  const inputError = popupForm.querySelector(`.${formInput.id}-error`);
  formInput.classList.remove(`popup__input_type_error`);
  inputError.classList.remove(`popup__input-error_active`);
  inputError.textContent = "";
};
// Функция, которая проверяет валидность поля
const isValid = (popupForm, formInput) => {
  if (!formInput.validity.valid) {
    showInputError(popupForm, formInput, formInput.validationMessage);
  } else {
    hideInputError(popupForm, formInput);
  }
};

//Функция, которая добавит обработчики сразу всем полям формы
const setEventListeners = (popupForm) => {
  const inputList = Array.from(popupForm.querySelectorAll(`.popup__input`));

  toggleButtonState(inputList, formButton);

  inputList.forEach((formInput) => {
    formInput.addEventListener("input", () => {
      isValid(popupForm, formInput);
      toggleButtonState(inputList, formButton);
    });
  });
};

//Функция, которая добавляет обработчики все формам
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(`.popup__form`));

  formList.forEach((popupForm) => {
    popupForm.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    setEventListeners(popupForm);
  });
};

popupForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
});

// Функция принимает массив полей

const hasInvalidInput = (inputList) => {
  return inputList.some((formInput) => {
    return !formInput.validity.valid;
  });
};
//Функция, которая добавляет класс кнопки
const toggleButtonState = (inputList, formButton) => {
  const buttonList = Array.from(document.querySelectorAll(`.popup__button`));
  buttonList.forEach((formButton) => {
    if (hasInvalidInput(inputList)) {
      formButton.classList.add(`popup__button_inactive`);
    } else {
      formButton.classList.remove(`popup__button_inactive`);
    }
  });
};

enableValidation();
