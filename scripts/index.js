import {FormValidator} from "./FormValidator.js";
import Card from "./Card.js";
import {initialCards, validationConfig} from "./constants.js";

/*основные кнопки*/
const buttonOpenEditProfileForm = document.querySelector('.profile__edit-button');
const buttonOpenAddCardForm = document.querySelector('.profile__add-button');

/*попапы*/
const popupProfile = document.querySelector('.popup_editUserData');
const popupCard = document.querySelector('.popup_creatingCard');
const popupImg = document.querySelector('.popup_viewImage');

/*формы*/
const profileForm = document.forms["profile-form"];
const cardForm = document.forms["card-form"];
const inputName = profileForm.querySelector('.popup__input_type_name');
const inputJob = profileForm.querySelector('.popup__input_type_job');

/*редактирование профиля*/
const profileName = document.querySelector('.profile__info-name');
const profileJob = document.querySelector('.profile__info-description');

/*добавление карточки*/
const inputTitle = cardForm.querySelector('.popup__input_type_name-link');
const inputLink = cardForm.querySelector('.popup__input_type_link');

/*просмотр фото*/
const elementPopupImg = popupImg.querySelector('.popup__img');
const elementPopupTitle = popupImg.querySelector('.popup__name');

/*добавляю шаблон через темплейт, лайк, удаление, открытие картинки*/
const cardsContainer = document.querySelector('.elements__container');

/*валидация*/
const profileValidation = new FormValidator(validationConfig, profileForm);
const newCardValidation = new FormValidator(validationConfig, cardForm);
profileValidation.enableValidationCheck();
newCardValidation.enableValidationCheck();

/*открытие карочек*/
const createCard = (data) => {
    const card = new Card(data, '#elements-template', handleOpenPopup);
    return card.generateCard();
};

/*пробежался по массиву*/
initialCards.forEach((element) => {
    cardsContainer.append(createCard(element));
});

/*общая для открытия*/
const openPopup = (popupElement) => {
    popupElement.classList.add('popup_open');
    document.addEventListener('keydown', closeByEscape)
};

/*общая для закрытия*/
const closePopup = (popupElement) => {
    popupElement.classList.remove('popup_open');
    document.removeEventListener('keydown', closeByEscape)
};

/*закрытие Esc*/
function closeByEscape(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_open')
        closePopup(openedPopup)
    }
}

const popups = document.querySelectorAll('.popup')

popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if ((evt.target.classList.contains('popup_open')) || (evt.target.classList.contains('popup__button-close'))) {
            closePopup(popup);
        }
    })
})

/*открытие и редактирование профиля*/
buttonOpenEditProfileForm.addEventListener('click', () => {
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
    openPopup(popupProfile);
    profileValidation.resetValidation();
});

/*сохранить и закрыть*/
const submitEditProfileForm = () => {
    profileJob.textContent = inputJob.value;
    profileName.textContent = inputName.value;
    closePopup(popupProfile);
};

/*работа с формой profile*/
profileForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    submitEditProfileForm();
});

/*открытие и добавление карточки*/
buttonOpenAddCardForm.addEventListener('click', () => {
    cardForm.reset();
    newCardValidation.resetValidation();
    openPopup(popupCard);
});

/*работа с формой для addCard*/
cardForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    cardsContainer.prepend(createCard(
        {
            name: inputTitle.value,
            link: inputLink.value,
        }
    ));
    closePopup(popupCard);
});

function handleOpenPopup(name, image) {
    elementPopupImg.src = image;
    elementPopupImg.alt = name;
    elementPopupTitle.textContent = name;

    openPopup(popupImg);
}