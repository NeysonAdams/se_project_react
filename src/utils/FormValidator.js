export class FormValidator {
    constructor(options, formElement) {
      this._options = options;
      this._formElement = formElement;
      this._getViews();
    }

  
    _getViews() {
      this._inputList = Array.from(
        this._formElement.querySelectorAll(this._options.inputSelector)
      );
  
      this._buttonElement = this._formElement.querySelector(
        this._options.submitButtonSelector
      );

      this._handleInput = (event) => {
        this._checkInputValidity(event.target);
        this.toggleButtonState();
      }
    }
  
    _showInputError(inputElement, errorMessage) {
      const labelElement = document.querySelector(`label[for='${inputElement.id}']`);
      labelElement.textContent = labelElement.textContent.replace(/\s*\(.*?\)/, '');
      labelElement.textContent = `${labelElement.textContent}(${errorMessage})`;
      labelElement.classList.add(this._options.labelerrorClass);
      inputElement.classList.add(this._options.inputErrorClass);
    }
  
    forceHideInputError() {
      this._inputList.forEach((inputElement) => {
        this._hideInputError(inputElement);
      });
    }
  
    _hideInputError(inputElement) {
      const labelElement = document.querySelector(`label[for='${inputElement.id}']`);
      labelElement.textContent = labelElement.textContent.replace(/\s*\(.*?\)/, '');
      labelElement.classList.remove(this._options.labelerrorClass);
      inputElement.classList.remove(this._options.inputErrorClass);
    }
  
    _checkInputValidity(inputElement) {
      if (!inputElement.validity.valid) {
        this._showInputError(inputElement, inputElement.validationMessage);
      } else {
        this._hideInputError(inputElement);
      }
    }
    _hasInvalidInput() {
      return this._inputList.some((inputElement) => {
        return !inputElement.validity.valid;
      });
    }
  
    toggleButtonState(forceDisable = false) {
      if (this._hasInvalidInput() && !forceDisable) {
        this._buttonElement.classList.add(this._options.inactiveButtonClass);
        this._buttonElement.disabled = true;
      } else {
        this._buttonElement.classList.remove(this._options.inactiveButtonClass);
        this._buttonElement.disabled = false;
      }
    }
  
    _setEventListeners() {
      this.toggleButtonState();
      this._inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", this._handleInput);
      });
    }
  
    enableValidation() {
      this._setEventListeners();
    }

    removeValidation() {
      this._inputList.forEach((inputElement) => {
        inputElement.removeEventListener("input", this._handleInput);
      });
    }

    
    
  }
  