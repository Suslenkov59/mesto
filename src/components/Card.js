export default class Card {
    constructor(data, templateSelector, userId, authorData, actions) {
        this._card = data;
        this._name = data.name;
        this._image = data.link;
        this._templateSelector = templateSelector;

        this._userId = userId;
        this._cardId = authorData.cardId;
        this._authorId = authorData.authorId;

        this._handleCardClick = actions.handleCardClick;
        this._handleCardDelete = actions.handleCardDelete;
        this._handleCardLike = actions.handleCardLike;
        this._handleCardRemoveLike = actions.handleCardRemoveLike;
    }

    /*работа с темплейтом*/
    _getTemplate() {
        return document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);
    }

    /*создание карточки*/
    generateCard() {
        this._element = this._getTemplate();

        this._elementImage = this._element.querySelector('.element__image');
        this._elementName = this._element.querySelector('.element__name');
        this._elementLike = this._element.querySelector('.element__like');
        this._elementTrash = this._element.querySelector('.element__delete-button');
        this.elementLikeCounter = this._element.querySelector('.element__like-counter');

        this._elementImage.src = this._image;
        this._elementName.textContent = this._name;
        this._elementImage.alt = this._name;
        this.handleLike(this._card);
        this._setEventListeners();

        return this._element;
    }

    /*удаление карточки*/
    handleDeleteCard() {
        this._element.remove();
        this._element = null;
    }

    /*общий метод работы с лайками*/
    handleLike(card) {
        this._likeArea = card.likes;
        (this._likeArea.length === 0) ? this.elementLikeCounter.textContent = '' : this.elementLikeCounter.textContent = this._likeArea.length;
        (this._checkLike()) ? this._elementLike.classList.add('element__like_active') : this._elementLike.classList.remove('element__like_active');
    }

    /*проверка лайка на фото*/
    _checkLike() {
        return this._likeArea.find((userLike) => userLike._id === this._userId);
    }

    /*обработка добвления/снятия лайка*/
    _addDelLike() {
        if (this._checkLike()) {
            this._handleCardRemoveLike(this._cardId);
        } else {
            this._handleCardLike(this._cardId);
        }
    }

    /*обработчик*/
    _setEventListeners = () => {
        this._elementLike.addEventListener('click', () =>
            this._addDelLike())
        if (this._userId === this._authorId) {
            this._elementTrash.addEventListener('click', () => this._handleCardDelete(this, this._cardId));
        } else {
            this._elementTrash.remove();
        }
        this._elementImage.addEventListener('click', () =>
            this._handleCardClick(this._name, this._image));
    }
}