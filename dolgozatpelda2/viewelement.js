import { SelectManager } from "./selectmanager.js";

class ViewElement {
    /**@type {SelectManager} */
    #manager;
    /**@type {HTMLDivElement} */
    #container;
    /**
     * @param {SelectManager} manager 
     */
    constructor(manager) {

    }
    /**
     * @param {HTMLElement} parent 
     */
    appendTo(parent) {
        this.#container.appendChild(parent);
    }
}

export {ViewElement}