import '../pages/index.css';

import {FormValidator} from "../components/FormValidator.js";
import Card from "../components/Card.js";
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import {initialCards, validationConfig} from "../utils/constants.js";

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

const renderCards = new Section({
    items: initialCards,
    renderer: (data) => {
        renderCards.addItem(createCard(data));
    }
}, '.elements__container');
renderCards.renderItems();

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
        renderCards.addItem(createCard({
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


