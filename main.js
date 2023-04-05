(()=>{"use strict";var t=document.querySelector(".profile__edit-button"),e=document.querySelector(".profile__add-button"),n=document.querySelector(".profile__avatar-button"),r=document.forms["profile-form"],o=document.forms["card-form"],i=r.querySelector(".popup__input_type_name"),u=r.querySelector(".popup__input_type_job"),a={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button-save",inactiveButtonClass:"popup__button-save_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"};function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,f(r.key),r)}}function s(t,e,n){return(e=f(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t){var e=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===l(e)?e:String(e)}var p=function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,"_showInputError",(function(t,e){var n=r._element.querySelector(".".concat(t.id,"-error"));t.classList.add(r._object.inputErrorClass),n.textContent=e,n.classList.add(r._object.errorClass)})),s(this,"_hideInputError",(function(t){var e=r._element.querySelector(".".concat(t.id,"-error"));t.classList.remove(r._object.inputErrorClass),e.classList.remove(r._object.errorClass),e.textContent=""})),s(this,"_checkInputValidity",(function(t){t.validity.valid?r._hideInputError(t):r._showInputError(t,t.validationMessage)})),this._object=e,this._element=n,this._buttonElement=this._element.querySelector(this._object.submitButtonSelector),this._inputList=Array.from(this._element.querySelectorAll(this._object.inputSelector))}var e,n;return e=t,(n=[{key:"_hasInvalidInput",value:function(){return Array.from(this._element.querySelectorAll(this._object.inputSelector)).some((function(t){return!t.validity.valid}))}},{key:"resetValidation",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){t._hideInputError(e)}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._object.inactiveButtonClass),this._buttonElement.setAttribute("disabled","true")):(this._buttonElement.classList.remove(this._object.inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"_setEventListeners",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"enableValidationCheck",value:function(){var t=this;this._inputList.forEach((function(e){t._setEventListeners(e)}))}}])&&c(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==m(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===m(o)?o:String(o)),r)}var o}var b=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._image=e.link,this._templateSelector=n,this._handleCardClick=r}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._elementImage=this._element.querySelector(".element__image"),this._elementName=this._element.querySelector(".element__name"),this._elementLike=this._element.querySelector(".element__like"),this._elementTrash=this._element.querySelector(".element__delete-button"),this._elementImage.src=this._image,this._elementName.textContent=this._name,this._elementImage.alt=this._name,this._setEventListeners(),this._element}},{key:"_handleDeleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_handleLike",value:function(){this._elementLike.classList.toggle("element__like_active")}},{key:"_setEventListeners",value:function(){var t=this;this._elementLike.addEventListener("click",(function(){t._handleLike()})),this._elementTrash.addEventListener("click",(function(){t._handleDeleteCard()})),this._elementImage.addEventListener("click",(function(){t._handleCardClick(t._name,t._image)}))}}])&&y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==v(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===v(o)?o:String(o)),r)}var o}var _=function(){function t(e,n){var r=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._initialItems=r,this._renderer=o,this._templateSelector=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderItems",value:function(){this._initialItems.forEach(this._renderer)}},{key:"addItem",value:function(t){this._templateSelector.prepend(t)}}])&&h(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,w(r.key),r)}}function w(t){var e=function(t,e){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===d(e)?e:String(e)}var g=function(){function t(e){var n,r,o,i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=function(t){"Escape"===t.key&&i.close()},(r=w(r="_handleEscClose"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._popupElement=document.querySelector(e)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_open"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_open"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._popupElement.addEventListener("mousedown",(function(e){(e.target.classList.contains("popup_open")||e.target.classList.contains("popup__button-close"))&&t.close()}))}}])&&S(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==j(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===j(o)?o:String(o)),r)}var o}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=P(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},k.apply(this,arguments)}function O(t,e){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},O(t,e)}function P(t){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},P(t)}var x=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&O(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=P(r);if(o){var n=P(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===j(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImg=document.querySelector(".popup__img"),e._popupName=document.querySelector(".popup__name"),e}return e=u,(n=[{key:"open",value:function(t,e){this._popupImg.src=e,this._popupName.textContent=t,this._popupImg.alt=t,k(P(u.prototype),"open",this).call(this)}}])&&E(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(g);function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function C(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==L(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===L(o)?o:String(o)),r)}var o}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=B(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},I.apply(this,arguments)}function q(t,e){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},q(t,e)}function B(t){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},B(t)}var T=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&q(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=B(r);if(o){var n=B(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===L(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n,r=e.callbackSubmitForm;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._callbackSubmitForm=r,n._popupFormElement=n._popupElement.querySelector(".popup__form"),n._inputList=Array.from(n._popupFormElement.querySelectorAll(".popup__input")),n}return e=u,(n=[{key:"_getInputValues",value:function(){var t={};return this._inputList.forEach((function(e){t[e.name]=e.value})),t}},{key:"setEventListeners",value:function(){var t=this;I(B(u.prototype),"setEventListeners",this).call(this),this._popupFormElement.addEventListener("submit",(function(e){e.preventDefault(),t._callbackSubmitForm(t._getInputValues())}))}},{key:"close",value:function(){I(B(u.prototype),"close",this).call(this),this._popupFormElement.reset()}}])&&C(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(g);function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function M(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==D(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==D(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===D(o)?o:String(o)),r)}var o}var A=function(){function t(e){var n=e.nameSelector,r=e.descriptionSelector,o=e.avatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=document.querySelector(n),this._job=document.querySelector(r),this._avatar=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,job:this._job.textContent}}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.job;this._name.textContent=e,this._job.textContent=n}},{key:"setUserAvatar",value:function(t){this._avatar.src=t}}])&&M(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function H(t){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},H(t)}function R(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==H(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==H(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===H(o)?o:String(o)),r)}var o}function V(t,e,n){return e&&R(t.prototype,e),n&&R(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}new(V((function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.url,this._headers=e.headers})))({url:"https://mesto.nomoreparties.co/v1/cohort-62",headers:{authorization:"ad4fae2f-d7ab-477d-ba24-14b2b213433b","Content-Type":"application/json"}});var G=new p(a,r),F=new p(a,o);G.enableValidationCheck(),F.enableValidationCheck();var U=new x(".popup_viewImage");U.setEventListeners();var W=function(t,e){U.open(t,e)},Y=function(t){return new b(t,"#elements-template",W).generateCard()},N=new _({items:[{name:"Пермь",link:"https://images.unsplash.com/photo-1625418972282-717fb2324e17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"},{name:"Новосибирск",link:"https://images.unsplash.com/photo-1664946614267-cbd018138cc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"},{name:"Сочи",link:"https://images.unsplash.com/photo-1614582832516-59aa97f70572?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1229&q=80"},{name:"Москва",link:"https://images.unsplash.com/photo-1631609389098-c89b2ea9852d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"},{name:"Санкт-Петербург",link:"https://images.unsplash.com/photo-1635193746404-58ff489217ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"},{name:"Казань",link:"https://images.unsplash.com/photo-1592961132324-4f09bb682ec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}],renderer:function(t){N.addItem(Y(t))}},".elements__container");N.renderItems();var z=new A({nameSelector:".profile__info-name",descriptionSelector:".profile__info-description"}),J=new T(".popup_editUserData",{callbackSubmitForm:function(t){z.setUserInfo({name:t.name,job:t.job}),J.close()}});J.setEventListeners(),t.addEventListener("click",(function(){J.open();var t=z.getUserInfo();i.setAttribute("value",t.name),u.setAttribute("value",t.job)}));var K=new T(".popup_creatingCard",{callbackSubmitForm:function(t){N.addItem(Y({name:t.name,link:t.link})),K.close()}});K.setEventListeners(),e.addEventListener("click",(function(){o.reset(),F.resetValidation(),K.open()}));var Q=new T(".popup_editUserAvatar",{callbackSubmitForm:function(t){N.addItem(Y({link:t.link})),K.close()}});Q.setEventListeners(),n.addEventListener("click",(function(){Q.open()}))})();