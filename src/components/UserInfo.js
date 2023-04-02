class UserInfo {
    constructor({nameSelector, descriptionSelector, avatarSelector}) {
        this._name = document.querySelector(nameSelector);
        this._job = document.querySelector(descriptionSelector);
        this._avatar = document.querySelector(avatarSelector);
    }

    getUserInfo() {
        return {
            name: this._name.textContent,
            job: this._job.textContent
        };
    }

    setUserInfo({name, job}) {
        this._name.textContent = name;
        this._job.textContent = job;
    }

    setUserAvatar(avatar) {
        this._avatar.src = avatar;
    }
}

export {UserInfo};