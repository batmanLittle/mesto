let popup = document.querySelector(`.popup`);
let popupProfileButton = document.querySelector(`.profile__edit-button`);
let popupCloseButton = document.querySelector(`.popup__close`);

let formElement = document.querySelector(`.popup__form`);

let nameInput = document.querySelector(`.popup__input_data_name`);
let jobInput = document.querySelector(`.popup__input_data_job`);

let profileTittle = document.querySelector(`.profile__title`);
let profileSubtittle = document.querySelector(`.profile__subtitle`);

//Форма для открытия карточек
let popupProfileButtonCard = document.querySelector(`.profile__button`);
let popupCard = document.querySelector(`.popup__сards`);

function popupOpenedCards() {
  popupCard.classList.add(`popup_opened`);
}
popupProfileButtonCard.addEventListener(`click`, popupOpenedCards);
//Форма для закрытия карточек
let buttonClosedCard = popupCard.querySelector(`.popup__close`);

function popupClosedCard() {
  popupCard.classList.remove(`popup_opened`);
}

buttonClosedCard.addEventListener(`click`, () => {
  popupClosedCard();
});
//

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

popupCloseButton.addEventListener(`click`, () => {
  popupClosed();
});

popupProfileButton.addEventListener(`click`, popupOpened);

formElement.addEventListener(`submit`, handleFormSubmit);

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

const cardContainer = document.querySelector(`.place`);
const cardTemplate = document
  .querySelector(`.template`)
  .content.querySelector(`.place__item`);

//метод Template
function createCard(item) {
  const card = cardTemplate.cloneNode(true);
  card.querySelector(`.place__title`).textContent = item.name;
  card.querySelector(`.place__img`).src = item.link;

  const deleteCard = card.querySelector(`.place__delete`);
  const deleteCardButton = () => {
    card.remove();
  };

  deleteCard.addEventListener(`click`, deleteCardButton);

  return card;
}
//перебор массива
function renderCards() {
  initialCards.reverse().forEach((item) => {
    const cards = createCard(item);
    addCard(cards);
  });
}
renderCards();

let popupCards = document.querySelector(`.popup__сards`);
let formCards = popupCards.querySelector(`.popup__form`);
let inputTitle = popupCards.querySelector(`.popup__input_data_title`);
let inputImg = popupCards.querySelector(`.popup__input_data_img`);
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

formCards.addEventListener(`submit`, submitCards);
