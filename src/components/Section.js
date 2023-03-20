class Section {
    constructor({items, renderer}, templateSelector) {
        this._initialItems = items;
        this._renderer = renderer;
        this._templateSelector = document.querySelector(templateSelector);
    }

    renderItems() {
        this._initialItems.forEach(this._renderer);
    }

    addItem(cardElement) {
        this._templateSelector.prepend(cardElement);
    }
}

export {Section};