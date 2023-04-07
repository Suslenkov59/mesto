/*основные кнопки*/
const buttonOpenEditProfileForm = document.querySelector('.profile__edit-button');
const buttonOpenAddCardForm = document.querySelector('.profile__add-button');
const buttonOpenEditAvatarForm = document.querySelector('.profile__avatar-button');

/*формы*/
const profileForm = document.forms["profile-form"];
const cardForm = document.forms["card-form"];
const avatarForm = document.forms["avatar-form"];
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
{   validationConfig,
    buttonOpenEditProfileForm,
    buttonOpenAddCardForm,
    buttonOpenEditAvatarForm,
    profileForm,
    cardForm,
    avatarForm,
    inputName,
    inputJob
}


