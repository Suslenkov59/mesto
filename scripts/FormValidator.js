import {validationConfig} from "./constants.js";

class FormValidator {
    constructor(objectList, elementValidation) {
        this._object = objectList;
        this._element = elementValidation;
        this._buttonElement = this._element.querySelector(this._object.submitButtonSelector);
    }

    _showInputError = (inputElement, errorMessage) => {
        const errorElement = this._element.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(validationConfig.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._object.errorClass);
    };

    _hideInputError = (inputElement) => {
        const errorElement = this._element.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._object.inputErrorClass);
        errorElement.classList.remove(this._object.errorClass);
        errorElement.textContent = '';
    };

    _checkInputValidity = (inputElement) => {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    };

    _setEventListeners() {
        const inputList = Array.from(this._element.querySelectorAll(this._object.inputSelector));
        this._toggleButtonState();
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            });
        });
    }

    _hasInvalidInput() {
        return Array.from(this._element.querySelectorAll(this._object.inputSelector)).some((inputItem) => {
            return !inputItem.validity.valid;
        });
    }

    enableValidationCheck() {
        const formList = Array.from(document.querySelectorAll(this._object.formSelector));
        formList.forEach((formItem) => {
            this._setEventListeners(formItem);
        });
    }

    /*_addResetEventListener() {
        this._element.addEventListener('reset', () => {
            setTimeout(() => {
                this._toggleButtonState();
            }, 0);
        })
    }*/

    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            // Отключаем кнопку при ошибке валидации
            this._buttonElement.classList.add(this._object.inactiveButtonClass);
            this._buttonElement.setAttribute('disabled', 'true');
        } else {
            // Включаем кнопку при ошибке валидации
            this._buttonElement.classList.remove(this._object.inactiveButtonClass);
            this._buttonElement.removeAttribute("disabled");
        }
    }
}


export { FormValidator };
