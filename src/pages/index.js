import '../pages/index.css';

import {FormValidator} from "../scripts/FormValidator.js";
import Card from "../scripts/Card.js";
import { Section } from '../scripts/Section.js';
import { PopupWithImage } from '../scripts/PopupWithImage.js';
import { PopupWithForm } from '../scripts/PopupWithForm.js';
import { UserInfo } from '../scripts/UserInfo.js';
import {initialCards, validationConfig} from "../scripts/constants.js";

/*основные кнопки*/
const buttonOpenEditProfileForm = document.querySelector('.profile__edit-button');
const buttonOpenAddCardForm = document.querySelector('.profile__add-button');

/*формы*/
const profileForm = document.forms["profile-form"];
const cardForm = document.forms["card-form"];
const inputName = profileForm.querySelector('.popup__input_type_name');
const inputJob = profileForm.querySelector('.popup__input_type_job');

/*валидация*/
const profileValidation = new FormValidator(validationConfig, profileForm);
const newCardValidation = new FormValidator(validationConfig, cardForm);
profileValidation.enableValidationCheck();
newCardValidation.enableValidationCheck();

/*открытие кликом*/
const openPopupImg = new PopupWithImage('.popup_viewImage');
openPopupImg.setEventListeners();

const handleCardClick = function (name, image) {
    openPopupImg.open(name, image);
}

/*генерация карочек*/
const createCard = (data) => {
    const card = new Card(data, '#elements-template', handleCardClick);
    return card.generateCard();
};

const renderInitialCards = new Section({
    items: initialCards,
    renderer: (data) => {
        renderInitialCards.addItem(createCard(data));
    }
}, '.elements__container');
renderInitialCards.renderItems();

/*открытие и редактирование профиля*/
const userInfo = new UserInfo({
    nameSelector: '.profile__info-name',
    descriptionSelector: '.profile__info-description'
});

const popupEditeProfile = new PopupWithForm('.popup_editUserData', {
    callbackSubmitForm: (profileData) => {
        userInfo.setUserInfo({
            name: profileData.name,
            job: profileData.job
        });
        popupEditeProfile.close();
    }
});
popupEditeProfile.setEventListeners();

buttonOpenEditProfileForm.addEventListener('click', () => {
    popupEditeProfile.open();
    const actualUserInfo = userInfo.getUserInfo();
    inputName.setAttribute('value', actualUserInfo.name);
    inputJob.setAttribute('value', actualUserInfo.job);
});

/*открытие и добавление карточки*/
const popupAddCard = new PopupWithForm('.popup_creatingCard', {
    callbackSubmitForm: (formValues) => {
        renderInitialCards.addItem(createCard({
            name: formValues.name,
            link: formValues.link
        }));
        popupAddCard.close();
    }
});
popupAddCard.setEventListeners();

buttonOpenAddCardForm.addEventListener('click', () => {
    cardForm.reset();
    newCardValidation.resetValidation();
    popupAddCard.open();
});


