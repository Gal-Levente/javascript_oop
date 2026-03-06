import { createTableHeader } from "./gomszab.min.js";
import { ViewElement } from "./viewElement.js";

class TableView extends ViewElement {
    /**@type {HTMLTableSectionElement} */
    #tbody;
    #manager;
    /**
     * @param {string} id 
     * @param {string[]} headerArray 
     * @param {*} manager 
     */
    constructor(id, headerArray, manager) {
        super(id);
        this.#manager = manager;
        const table = document.createElement("table");
        this.div.appendChild(table);
        const thead = createTableHeader(headerArray);
        table.appendChild(thead);
    }
}

export {TableView}