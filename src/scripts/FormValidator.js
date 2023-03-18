class FormValidator {
    constructor(objectList, elementValidation) {
        this._object = objectList;
        this._element = elementValidation;
        this._buttonElement = this._element.querySelector(this._object.submitButtonSelector);
        this._inputList = Array.from(this._element.querySelectorAll(this._object.inputSelector));
    }

    _showInputError = (inputElement, errorMessage) => {
        const errorElement = this._element.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._object.inputErrorClass);
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

    _hasInvalidInput() {
        return Array.from(this._element.querySelectorAll(this._object.inputSelector)).some((inputItem) => {
            return !inputItem.validity.valid;
        });
    }

    resetValidation() {
        this._toggleButtonState();

        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement)
        });

    }

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

    _setEventListeners() {
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            });
        });
    }

    enableValidationCheck() {
        this._inputList.forEach((formItem) => {
            this._setEventListeners(formItem);
        });
    }
}


export { FormValidator };
