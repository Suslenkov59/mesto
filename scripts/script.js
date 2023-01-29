/*основные кнопки*/
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closeButton = document.querySelectorAll('.popup__button-close');

/*попапы*/
const popupCard = document.querySelector('.popup_creatingCard');
const popupProfile = document.querySelector('.popup_editUserData');
const popupImg = document.querySelector('.popup_viewImage');

/*формы*/
const formProfile = popupProfile.querySelector('.popup__form_type_profile');
const formAddCard = popupCard.querySelector('.popup__form_type_place');
const inputName = formProfile.querySelector('.popup__input_type_name');
const inputJob = formProfile.querySelector('.popup__input_type_job');

/*редактирование профиля*/
const profileName = document.querySelector('.profile__info-name');
const profileJob = document.querySelector('.profile__info-description');

/*добавление карточки*/
const inputTitle = formAddCard.querySelector('.popup__input_type_name_link');
const inputLink = formAddCard.querySelector('.popup__input_type_link');

/*просмотр фото*/
const elementPopupImg = popupImg.querySelector('.popup__img');
const elementPopupTitle = popupImg.querySelector('.popup__name');

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



/*добавляю шаблон через темплейт, лайк, удаление, открытие картинки*/
const cardsContainer = document.querySelector('.elements__container');
const cardsTemplate = document.querySelector('#elements-template').content;

const createCard = (name, link) => {
    const cardElement = cardsTemplate.cloneNode(true);

    cardElement.querySelector('.element__name').textContent = name;
    cardElement.querySelector('.element__image').src = link;
    cardElement.querySelector('.element__image').alt = name;

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

    const cardImg = cardElement.querySelector('.element__image')
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
};

/*общая для закрытия*/
const closePopup = (popupElement) => {
    popupElement.classList.remove('popup_open');
};



/*открытие и редактирование профиля*/
editButton.addEventListener('click', () => {
    openPopup(popupProfile);
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
});

/*сохранить и закрыть*/
const submitEditProfileForm = () => {
    profileJob.textContent = inputJob.value;
    profileName.textContent = inputName.value;
    closePopup(popupProfile);
};

/*работа с формой profile*/
formProfile.addEventListener('submit', (evt) => {
    evt.preventDefault();
    submitEditProfileForm();
});



/*открытие и добавление карточки*/
addButton.addEventListener('click', () => {
    openPopup(popupCard);
});

/*работа с формой для addCard*/
formAddCard.addEventListener('submit', (evt) => {
    evt.preventDefault();
    cardsContainer.prepend(createCard(inputTitle.value, inputLink.value));
    closePopup(popupImg);
    inputTitle.value = '';
    inputLink.value = '';
});



/*общая кнопка закрыть*/
closeButton.forEach((element) => {
    element.addEventListener('click', (evt) => {
        const popupItem = evt.target.closest('.popup');
        closePopup(popupItem);
    });
});

