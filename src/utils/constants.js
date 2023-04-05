/*массив*/
const initialCards = [
    {
        name: 'Пермь',
        link: 'https://images.unsplash.com/photo-1625418972282-717fb2324e17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80'
    },
    {
        name: 'Новосибирск',
        link: 'https://images.unsplash.com/photo-1664946614267-cbd018138cc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
    },
    {
        name: 'Сочи',
        link: 'https://images.unsplash.com/photo-1614582832516-59aa97f70572?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1229&q=80'
    },
    {
        name: 'Москва',
        link: 'https://images.unsplash.com/photo-1631609389098-c89b2ea9852d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80'
    },
    {
        name: 'Санкт-Петербург',
        link: 'https://images.unsplash.com/photo-1635193746404-58ff489217ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
    },
    {
        name: 'Казань',
        link: 'https://images.unsplash.com/photo-1592961132324-4f09bb682ec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    }
];

/*основные кнопки*/
const buttonOpenEditProfileForm = document.querySelector('.profile__edit-button');
const buttonOpenAddCardForm = document.querySelector('.profile__add-button');
const buttonOpenEditAvatarForm = document.querySelector('.profile__avatar-button');

/*формы*/
const profileForm = document.forms["profile-form"];
const cardForm = document.forms["card-form"];
const inputName = profileForm.querySelector('.popup__input_type_name');
const inputJob = profileForm.querySelector('.popup__input_type_job');

const validationConfig = ({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button-save_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active',
});

export
{   initialCards,
    validationConfig,
    buttonOpenEditProfileForm,
    buttonOpenAddCardForm,
    buttonOpenEditAvatarForm,
    profileForm,
    cardForm,
    inputName,
    inputJob
}


