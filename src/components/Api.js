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

    _request(url, options) {
        return fetch(url, options).then(this._checkResponse)
    }

    /*инициализация карточек с сервера*/
    getInitialCards() {
        return this._request(`${this._url}cards`, {
            headers: this._headers
        })
    }

    /*добавление новой карочки*/
    addNewUserCard({ name, link }) {
        return this._request(`${this._url}cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({ name, link })
        })
    }

    /*удаление карточки*/
    deleteCard(cardId) {
        return this._request(`${this._url}cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers
        })
    }

    /*получение данных пользователя*/
    getUserInfo() {
        return this._request(`${this._url}users/me`, {
            headers: this._headers
        })
    }

    /*отправка данных пользователя*/
    setUserInfoApi(userData) {
        return this._request(`${this._url}users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: userData.name,
                about: userData.job
            })
        })
    }

    /*обновление аватара*/
    sendUserAvatar(data) {
        return this._request(`${this._url}users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar,
            })
        })
    }

    /*лайк*/
    like(cardId) {
        return this._request(`${this._url}cards/${cardId}/likes`, {
            method: 'PUT',
            headers: this._headers
        })
    }

    /*удаление лайка*/
    likeRemove(cardId) {
        return this._request(`${this._url}cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: this._headers
        })
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