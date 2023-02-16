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
const cardsTemplate = document.querySelector('#elements-template').content;

/*кнопки*/
const addCardButtonEditUserData = popupProfile.querySelector('.popup__button-save');
const addCardButtonCreatingCard = popupCard.querySelector('.popup__button-save');

const createCard = (name, link) => {
    const cardElement = cardsTemplate.cloneNode(true);
    const cardImg = cardElement.querySelector('.element__image')

    cardElement.querySelector('.element__name').textContent = name;
    cardImg.src = link;
    cardImg.alt = name;

    const likeButton = cardElement.querySelector('.element__like');
    const handleLikeButton = (evt) => {
        evt.target.classList.toggle('element__like_active');
    };

    likeButton.addEventListener('click', handleLikeButton);

    const deleteButton = cardElement.querySelector('.element__delete-button');
    const handleDeleteCard = (evt) => {
        evt.target.closest('.element').remove();
    };

    deleteButton.addEventListener('click', handleDeleteCard);

    cardImg.addEventListener('click', () => {
        openPopup(popupImg);
        elementPopupImg.src = link;
        elementPopupImg.alt = name;
        elementPopupTitle.textContent = name;
    });

    return cardElement;
};

/*вставка всех карточек*/
const renderCard = (name, link) => {
    cardsContainer.append(createCard(name, link));
};

/*пробежался по массиву*/
initialCards.forEach((item) => {
    renderCard(item.name, item.link);
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
        if (evt.target.classList.contains('popup_open')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('popup__button-close')) {
            closePopup(popup)
        }
    })
})

/*открытие и редактирование профиля*/
buttonOpenEditProfileForm.addEventListener('click', () => {
    openPopup(popupProfile);
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
    addCardButtonEditUserData.classList.add(validationConfig.inactiveButtonClass);
    addCardButtonEditUserData.setAttribute('disabled', '')
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
    openPopup(popupCard);
});

/*работа с формой для addCard*/
cardForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    cardsContainer.prepend(createCard(inputTitle.value, inputLink.value));
    closePopup(popupCard);
    evt.target.reset();
    addCardButtonCreatingCard.classList.add(validationConfig.inactiveButtonClass);
    addCardButtonCreatingCard.setAttribute('disabled', '')
});