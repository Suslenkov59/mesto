class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }

    /*проверка ответа с сервера*/
    _checkResponse(res) {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
    }

    /*инициализация карточек с сервера*/
    getInitialCards() {
        return fetch(`${this._url}cards`, {
            headers: this._headers
        })
            .then(this._checkResponse)
    }

    /*добавление новой карочки*/
    addNewUserCard({ name, link }) {
        return fetch(`${this._url}cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({ name, link })
        })
            .then(this._checkResponse)
    }

    /*удаление карточки*/
    deleteCard(cardId) {
        return fetch(`${this._url}cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then(this._checkResponse)
    }

    /*получение данных пользователя*/
    getUserInfo() {
        return fetch(`${this._url}users/me`, {
            headers: this._headers
        })
            .then(this._checkResponse)
    }

    /*отправка данных пользователя*/
    setUserInfoApi(userData) {
        return fetch(`${this._url}users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: userData.name,
                about: userData.job
            })
        })
            .then(this._checkResponse)
    }

    /*обновление аватара*/
    sendUserAvatar(data) {
        return fetch(`${this._url}users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar,
            })
        })
            .then(this._checkResponse)
    }

    /*лайк*/
    like(cardId) {
        return fetch(`${this._url}cards/${cardId}/likes`, {
            method: 'PUT',
            headers: this._headers
        })
            .then(this._checkResponse)
    }

    /*удаление лайка*/
    likeRemove(cardId) {
        return fetch(`${this._url}cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then(this._checkResponse)
    }

}

/*Api*/
export const api = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-62/',
    headers: {
        authorization: 'ad4fae2f-d7ab-477d-ba24-14b2b213433b',
        'Content-Type': 'application/json'
    }
})