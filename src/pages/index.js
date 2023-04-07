import '../pages/index.css';

import {
    validationConfig,
    buttonOpenEditProfileForm,
    buttonOpenAddCardForm,
    buttonOpenEditAvatarForm,
    profileForm,
    cardForm,
    avatarForm,
    inputName,
    inputJob
} from "../utils/constants.js";

import {FormValidator} from "../components/FormValidator.js";
import Card from "../components/Card.js";
import {Section} from '../components/Section.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {UserInfo} from '../components/UserInfo.js';
import {PopupCheckExit} from '../components/PopupCheckExit';
import {api} from '../components/Api.js'

/*данные пользователя*/
let userId;

/*открытие и редактирование профиля*/
const userInfo = new UserInfo({
    nameSelector: '.profile__info-name',
    descriptionSelector: '.profile__info-description',
    avatarSelector: '.profile__avatar'
});

/*валидация*/
const profileValidation = new FormValidator(validationConfig, profileForm);
const newCardValidation = new FormValidator(validationConfig, cardForm);
const avatarValidation = new FormValidator(validationConfig, avatarForm);
profileValidation.enableValidationCheck();
newCardValidation.enableValidationCheck();
avatarValidation.enableValidationCheck();

/*генерация карочек*/
const createCard = (data) => {
    const card = new Card(data, '#elements-template', userId, {cardId: data._id, authorId: data.owner._id,}, {
        /*открыть фото*/
        handleCardClick: (name, image) => {
            openPopupImg.open(name, image)
        },
        /*удалить фото*/
        handleCardDelete: (cardElement, cardId) => {
            popupCheckExit.open(cardElement, cardId)
        },
        /*поставить лайк*/
        handleCardLike: (cardId) => {
            api.like(cardId)
                .then((res) => {
                    card._handleLike(res);
                })
                .catch((err) => {
                    console.log(`При лайке карточки возникла ошибка, ${err}`)
                })
        },
        /*удалить оайк*/
        handleCardRemoveLike: (cardId) => {
            api.likeRemove(cardId)
                .then((res) => {
                    card._handleLike(res);
                })
                .catch((err) => {
                    console.log(`При дизлайке карточки возникла ошибка, ${err}`)
                })
        },
    });
    return card.generateCard();
}

/*генерация карточек API*/
const renderCards = new Section({
    renderer: (data) => {
        renderCards.addItem(createCard(data));
    }
}, '.elements__container');

/*промис*/
Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([userProfileData, data]) => {
        userId = userProfileData._id;
        userInfo.setUserInfo({name: userProfileData.name, job: userProfileData.about});
        renderCards.renderItems(data.reverse());
        userInfo.setUserAvatar(userProfileData.avatar);
    })
    .catch((err) => {
        console.log(`Возникла глобальная ошибка, ${err}`)
    })

/*открытие фото кликом*/
const openPopupImg = new PopupWithImage('.popup_viewImage');
openPopupImg.setEventListeners();

/*открытие и редактирование профиля*/
const popupEditeProfile = new PopupWithForm('.popup_editUserData', {
    callbackSubmitForm: (profileData) => {
        popupEditeProfile.changingSaveButton();
        api.setUserInfoApi(profileData)
            .then((res) => {
                userInfo.setUserInfo({
                    name: res.name,
                    job: res.about
                });
                popupEditeProfile.close();
            })
            .catch((err) => {
                console.log(`При редактировании профиля возникла ошибка, ${err}`)
            })
            .finally(() => {
                popupEditeProfile.setSubmitAction();
            })
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
        popupAddCard.changingSaveButton();
        api.addNewUserCard({name: formValues.name, link: formValues.link})
            .then((card) => {
                renderCards.addItem(createCard(card));
                popupAddCard.close();
            })
            .catch((err) => {
                console.log(`При добавлении новой карточки возникла ошибка, ${err}`)
            })
            .finally(() => {
                popupAddCard.setSubmitAction();
            })
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
    callbackSubmitForm: (avatarValues) => {
        popupEditeAvatar.changingSaveButton();
        api.sendUserAvatar(avatarValues)
            .then((res) => {
                userInfo.setUserAvatar(res.avatar);
                popupEditeAvatar.close();
            })
            .catch((err) => {
                console.log(`При обновлении аватара возникла ошибка, ${err}`)
            })
            .finally(() => {
                popupEditeAvatar.setSubmitAction();
            })
    }
});
popupEditeAvatar.setEventListeners();

buttonOpenEditAvatarForm.addEventListener('click', () => {
    avatarForm.reset();
    popupEditeAvatar.open();
});

/*подтвеждение удаления*/
const popupCheckExit = new PopupCheckExit(".popup_checkExit", {
    callbackCheckExit: (cardElement, cardId) => {
        api.deleteCard(cardId)
            .then(() => {
                cardElement._handleDeleteCard();
                popupCheckExit.close();
            })
            .catch((err) => {
                console.log(`При удалении карточки возникла ошибка, ${err}`)
            })
    }
});
popupCheckExit.setEventListeners();

