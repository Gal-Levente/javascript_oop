/**
 * @import {FormFieldType, HeaderArrayType, ColspanType, RowspanType} from "./functions.js"
 */

import { Manager } from "./manager.js";

class Table {
    /**@type {HTMLTableSectionElement} */
    #tbody;
    /**@type {Manager} */
    #manager;

    /**
     * @param {HeaderArrayType} headerArray 
     * @param {Manager} manager 
     */
    constructor(headerArray, manager) {
        const table = document.createElement('table');
        document.body.appendChild(table);

        const thead = document.createElement('thead');
        table.appendChild(thead);

        const trHeader = document.createElement('tr');
        thead.appendChild(trHeader);

        for(const a of headerArray) {
            const th = document.createElement('th');
            th.innerText = a.name;
            if(a.colspan) th.colSpan = a.colspan;
            thead.appendChild(th);
        }

        const tbody = document.createElement('tbody');
        table.appendChild(tbody);
        this.#tbody = tbody;
    }
}

export {Table}