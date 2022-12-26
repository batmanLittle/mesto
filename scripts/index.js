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

function createCard(item) {
  const card = cardTemplate.cloneNode(true);
  card.querySelector(`.place__title`).textContent = item.name;
  card.querySelector(`.place__img`).src = item.link;
  const cardDelete = card.querySelector(`.place__delete`);

  const deleteCard = () => {
    card.remove();
  };
  const imgCard = card.querySelector(`.place__img`);
  const openImgCard = () => {
    openPopup(imagePopup);
    imagePopupLink.src = item.link;
    imagePopupName.textContent = item.name;
  };
  cardDelete.addEventListener(`click`, deleteCard);
  card.querySelector(`.place__icon`).addEventListener(`click`, function (evt) {
    evt.target.classList.toggle(`place__icon_black`);
  });
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

profilePopup.querySelector(`.popup__close`).addEventListener(`click`, () => {
  closePopup(profilePopup);
});
imagePopup.querySelector(`.popup__close`).addEventListener(`click`, () => {
  closePopup(imagePopup);
});
cardPopup.querySelector(`.popup__close`).addEventListener(`click`, () => {
  closePopup(cardPopup);
});
