import '../pages/index.css';

import {
    initialCards,
    validationConfig,
    buttonOpenEditProfileForm,
    buttonOpenAddCardForm,
    buttonOpenEditAvatarForm,
    profileForm,
    cardForm,
    inputName,
    inputJob
} from "../utils/constants.js";

import {FormValidator} from "../components/FormValidator.js";
import Card from "../components/Card.js";
import {Section} from '../components/Section.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {UserInfo} from '../components/UserInfo.js';
import Api from '../components/Api'

/*Api*/
const api = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-62',
    headers: {
        authorization: 'ad4fae2f-d7ab-477d-ba24-14b2b213433b',
        'Content-Type': 'application/json'
    }
})

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

/*открытие и редактирование аватара*/
const popupEditeAvatar = new PopupWithForm('.popup_editUserAvatar', {
    /*callbackSubmitForm: () => {
        userInfo.setUserAvatar({
        });
        popupEditeAvatar.close();
    }*/
});
popupEditeAvatar.setEventListeners();

buttonOpenEditAvatarForm.addEventListener('click', () => {
    popupEditeAvatar.open();
});

