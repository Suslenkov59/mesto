class Section {
    constructor({renderer}, templateSelector) {
        this._renderer = renderer;
        this._templateSelector = document.querySelector(templateSelector);
    }

    renderItems(res) {
        res.forEach(this._renderer);
    }

    addItem(cardElement) {
        this._templateSelector.prepend(cardElement);
    }
}

export {Section};