class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector);
    }

    open() {
        this._popupElement.classList.add('popup_open');
        document.addEventListener('keydown', this._handleEscClose)
    }

    close() {
        this._popupElement.classList.remove('popup_open');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose = (evt) => {
        if (evt.key === "Escape") {
            this.close();
        }
    }

    setEventListeners() {
        this._popupElement.addEventListener('mousedown', (evt) => {
            if ((evt.target.classList.contains('popup_open')) || (evt.target.classList.contains('popup__button-close'))) {
                this.close();
            }
        });
    }
}

export {Popup};