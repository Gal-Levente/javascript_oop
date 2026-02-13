/**
 * @import {FormFieldType, HeaderArrayType, ColspanType, RowspanType} from "./functions.js"
 */

class FormController {
    /**@type {Manager} */
    #manager;
    /**@type {FormField[]} */
    #formFieldElemList;
    /**
     * 
     * @param {FormFieldType[]} formFields 
     * @param {Manager} manager 
     */
    constructor(formFields, manager) {
        this.#manager = manager;
        const form = document.createElement('form');
        document.body.appendChild(form);
        this.#formFieldElemList = [];
        for(const formField of formFields) {
            const formFieldElem = new FormField(formField.id, formField.label, formField.name, formField.required, form);
            this.#formFieldElemList.push(formFieldElem);
        }

        const submitButton = document.createElement('button');
        submitButton.innerText = "Hozzáadás";
        form.appendChild(submitButton);
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // létrehozunk egy változót, elkérjük a beviteli mezők alapján, utána hozzadjuk a managerhez
            const elem = this.#createElem();
            this.#manager.addElement(elem)
        });
    }
    /**
     * @returns {ColspanType | RowspanType}
     */
    #createElem() {
        let result = {};
        for(const formInput of this.#formFieldElemList) {
            result[formInput.name] = formInput.value;

            /**
             * result: {neve:input tartalma, kor:input tartalma, ...}
             */
        }

        return result;
    }
}

class FormField {
    /**@type {HTMLInputElement} */
    #input;
    /**@type {string} */
    #name;
    /**@type {HTMLDivElement} */
    #errorDiv
    get value() {
        return this.#input.value ? this.#input.value : undefined;
    }
    get name() {
        return this.#name;
    }
    /**
     * 
     * @param {string} id 
     * @param {string} label 
     * @param {string} name 
     * @param {boolean} required 
     * @param {HTMLFormElement} parent 
     */
    constructor(id, label, name, required, parent) {
        const div = document.createElement('div');
        parent.appendChild(div);

        const inputLabel = document.createElement('label');
        inputLabel.innerText = label;
        div.appendChild(inputLabel);
        const br = document.createElement('br');
        div.appendChild(br);

        const input = document.createElement('input');
        input.id = id;
        input.name = name;
        div.appendChild(input);
        this.#input = input;
        this.#name = name;

        const errorDiv = document.createElement('div');
        errorDiv.classList.add('error');
        div.appendChild(errorDiv);
        this.#errorDiv = errorDiv;
    }
}

export {FormController}