let popup = document.querySelector(".popup");
let popupButton = document.querySelector(".profile__edit-button");
let popupClose = document.querySelector(".popup__close");
let popupSave = document.querySelector(".popup__button");

// popupButton.onclick = function(){
//     popup.style.display='flex'
// }
// popupClose.onclick = function(){
//     popup.style.display='flex'
//     popup.style.display='none'
// }
popupButton.addEventListener("click", (event) => {
  event.preventDefault();
  popup.classList.add("popup_opened");
});
popupClose.addEventListener("click", () => {
  popup.classList.remove("popup_opened");
});
popupSave.addEventListener("click", () => {
  popup.classList.remove("popup_opened");
});

let formElement = document.querySelector(".popup__container");
// Находим поля формы в DOM
let nameInput = document.querySelector(".popup__name");
let jobInput = document.querySelector(".popup__job");

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

  // Получите значение полей jobInput и nameInput из свойства value
  let name = nameInput.value;
  let job = jobInput.value;
  // Выберите элементы, куда должны быть вставлены значения полей
  let profileTittle = document.querySelector(".profile__title");
  let profileSubtittle = document.querySelector(".profile__subtitle");

  // Вставьте новые значения с помощью textContent
  profileTittle.textContent = name;
  profileSubtittle.textContent = job;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener("submit", handleFormSubmit);
