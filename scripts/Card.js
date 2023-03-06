import { handleOpenPopup } from "./index.js"
/*если убрать импорт, WS не может найти функцию handleOpenPopup*/

export default class Card {
    constructor(data, templateSelector) {
        this._name = data.name;
        this._image = data.link;
        this._templateSelector = templateSelector;
        this._handleOpenPopup = handleOpenPopup;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);

        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();

        this._elementImage = this._element.querySelector('.element__image');
        this._elementName = this._element.querySelector('.element__name');
        this._elementLike = this._element.querySelector('.element__like');
        this._elementTrash = this._element.querySelector('.element__delete-button');

        this._elementImage.src = this._image;
        this._elementName.textContent = this._name;
        this._elementImage.alt = this._name;
        this._setEventListeners();

        return this._element;
    }

    _handleDeleteCard() {
        this._element.remove();
        this._element = null;
    }

    _handleLike() {
        this._elementLike.classList.toggle('element__like_active');
    }

    _setEventListeners() {
        this._elementLike.addEventListener('click', () => {
            this._handleLike();
        });

        this._elementTrash.addEventListener('click', () => {
            this._handleDeleteCard();
        });

        this._elementImage.addEventListener('click', () =>{
            this._handleOpenPopup(this._name, this._image)
        });
    }
}