import {Popup} from './Popup.js';

class PopupCheckExit extends Popup {
    constructor(popupSelector, {callbackCheckExit}) {
        super(popupSelector);
        this._saveButton = this._popupElement.querySelector('.popup__form');
        this._callbackCheckExit = callbackCheckExit;
    }

    open(cardObject, cardId) {
        this._cardObject = cardObject;
        this._cardId = cardId;
        super.open();
    }

    setEventListeners() {
        this._saveButton.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._callbackCheckExit(this._cardObject, this._cardId)
        })
        super.setEventListeners();
    }
}

export {PopupCheckExit};