const popup = document.querySelector(`.popup`);
const popupProfileButton = document.querySelector(`.profile__edit-button`);
const popupCloseButton = document.querySelector(`.popup__close`);

const formElement = document.querySelector(`.popup__form`);

const nameInput = document.querySelector(`.popup__input_data_name`);
const jobInput = document.querySelector(`.popup__input_data_job`);

const profileTittle = document.querySelector(`.profile__title`);
const profileSubtittle = document.querySelector(`.profile__subtitle`);

const popupProfileButtonCard = document.querySelector(`.profile__button`);
const popupCard = document.querySelector(`.popup__сards`);
const buttonClosedCard = popupCard.querySelector(`.popup__close`);

const popupImage = document.querySelector(`.popup_image`);
const closedCard = popupImage.querySelector(`.popup__close`);

const cardContainer = document.querySelector(`.place`);

const formCards = popupCard.querySelector(`.popup__form`);
const inputTitle = popupCard.querySelector(`.popup__input_data_title`);
const inputImg = popupCard.querySelector(`.popup__input_data_img`);
const cardTemplate = document
  .querySelector(`.template`)
  .content.querySelector(`.place__item`);

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

// 1й попап
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
  popupClosed();
}

//2й попап
function popupOpenedCards() {
  popupCard.classList.add(`popup_opened`);
}

function popupClosedCard() {
  popupCard.classList.remove(`popup_opened`);
}

function addCardEventListener(card) {
  const deleteCard = card.querySelector(`.place__delete`);
  const deleteCardButton = () => {
    card.remove();
  };
  deleteCard.addEventListener(`click`, deleteCardButton);
}

//форма для 3ого попапа
//открытие попапа
function openedCardImg(card, item) {
  const openedCard = card.querySelector(`.place__img`);
  const openedCardButton = () => {
    const popupImage = document.querySelector(`.popup_image`);
    popupImage.classList.add(`popup_opened`);
    popupImage.querySelector(`.popup__zoom-image`).src = item.link;
    popupImage.querySelector(`.popup__zoom-title`).textContent = item.name;
  };
  openedCard.addEventListener(`click`, openedCardButton);
}

//форма для закрытия 3ого попапа
function closedCardImg() {
  popupImage.classList.remove(`popup_opened`);
}
//метод Template
function createCard(item) {
  const card = cardTemplate.cloneNode(true);
  card.querySelector(`.place__title`).textContent = item.name;
  card.querySelector(`.place__img`).src = item.link;
  addCardEventListener(card);
  openedCardImg(card, item);
  card.querySelector(`.place__icon`).addEventListener(`click`, function (evt) {
    evt.target.classList.toggle(`place__icon_black`);
  });
  return card;
}

//перебор массива
function renderCards() {
  initialCards.reverse().forEach((item) => {
    const cards = createCard(item);
    addCard(cards);
  });
}

//добавления карт
function addCard(card) {
  cardContainer.prepend(card);
}
// создание через форму новой карточки
function submitCards(evt) {
  evt.preventDefault();
  const imputValue = {
    name: inputTitle.value,
    link: inputImg.value,
  };

  const newCard = createCard(imputValue);
  addCard(newCard);

  popupClosedCard();
}
renderCards();
formCards.addEventListener(`submit`, submitCards);
popupProfileButtonCard.addEventListener(`click`, popupOpenedCards);
buttonClosedCard.addEventListener(`click`, popupClosedCard);
closedCard.addEventListener(`click`, closedCardImg);
popupCloseButton.addEventListener(`click`, popupClosed);
popupProfileButton.addEventListener(`click`, popupOpened);
formElement.addEventListener(`submit`, handleFormSubmit);
