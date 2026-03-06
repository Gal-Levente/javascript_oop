import { ViewElement } from "./viewElement.js";

class FormController extends ViewElement {
    constructor(id) {
        super(id);
        this.div.innerText = "Form"
    }
}

export {FormController}