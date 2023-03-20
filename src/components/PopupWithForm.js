import {Popup} from './Popup.js';

class PopupWithForm extends Popup {
    constructor(popupSelector, {callbackSubmitForm}) {
        super(popupSelector);
        this._callbackSubmitForm = callbackSubmitForm;
        this._popupFormElement = this._popupElement.querySelector('.popup__form');
        this._inputList = Array.from(this._popupFormElement.querySelectorAll('.popup__input'));
    }

    _getInputValues() {
        const formValues = {};
        this._inputList.forEach(inputElement => {
            formValues[inputElement.name] = inputElement.value;
        });
        return formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupFormElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._callbackSubmitForm(this._getInputValues());
        });
    }

    close() {
        super.close();
        this._popupFormElement.reset();
    }
}

export {PopupWithForm};