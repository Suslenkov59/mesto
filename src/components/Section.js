class Section {
    constructor({renderer}, container) {
        this._renderer = renderer;
        this._container = document.querySelector(container);
    }

    renderItems(items) {
        items.forEach(this._renderer);
    }

    addItem(cardElement) {
        this._container.prepend(cardElement);
    }
}

export {Section};