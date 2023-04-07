import {Popup} from './Popup.js';

class PopupWithForm extends Popup {
    constructor(popupSelector, {callbackSubmitForm}) {
        super(popupSelector);
        this._callbackSubmitForm = callbackSubmitForm;
        this._popupFormElement = this._popupElement.querySelector('.popup__form');
        this._inputList = Array.from(this._popupFormElement.querySelectorAll('.popup__input'));
        this._saveButton = this._popupElement.querySelector('.popup__button-save');
        this._saveButtonText = this._saveButton.textContent;
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

    /*Изменяю кнопку сохранить*/
    changingSaveButton() {
        this._saveButton.textContent = 'Сохранение...';
    }

    /*возвращаю к прежнему состоянию*/
    setSubmitAction() {
        this._saveButton.textContent = this._saveButtonText;
    }

    close() {
        super.close();
        this._popupFormElement.reset();
    }
}

export {PopupWithForm};