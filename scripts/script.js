let popup = document.querySelector(".popup");
let openPopup = document.querySelector(".profile__edit-button");
let closePopup = document.querySelector(".popup__button-close");
/*для открыть закрыть*/
let formElement = document.querySelector(".popup__form");
let nameInput  = document.querySelector(".popup__input_type_name");
let jobInput  = document.querySelector(".popup__input_type_job");
let nameProfile  = document.querySelector(".profile__info-name");
let jobProfile  = document.querySelector(".profile__info-description");
/*редактирование профиля*/

function openClosePopup () {
    popup.classList.toggle('popup_open');
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    openClosePopup();
}

closePopup.addEventListener("click", () => {
    openClosePopup();
});

openPopup.addEventListener("click", () => {
    openClosePopup();
    nameInput.value = nameProfile.textContent
    jobInput.value = jobProfile.textContent
});

formElement.addEventListener('submit', handleFormSubmit);

/*лайки*/
const like = document.querySelector('.element__like');
    like.addEventListener('click', function (event) {
        event.target.classList.toggle('element__like_active');
    });
