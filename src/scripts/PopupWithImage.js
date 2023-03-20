import { Popup } from './Popup.js';

class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImg = document.querySelector('.popup__img');
        this._popupName = document.querySelector('.popup__name');
    }

    open(description, image) {
        this._popupImg.src = image;
        this._popupName.textContent = description;
        this._popupImg.alt = description;
        super.open();
    }
}

export { PopupWithImage };
