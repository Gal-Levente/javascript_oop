/**
 * @import {FormFieldType, HeaderArrayType, ColspanType, RowspanType} from "./functions.js"
 */
import { Manager } from "./manager.js";

class Table {
    /** @type {HTMLTableSectionElement} */
    #tbody;
    /** @type {Manager} */
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

        for(const header of headerArray) {
            const th = document.createElement('th');
            th.innerText = header.name;
            if(header.colspan) th.colSpan = header.colspan;
            trHeader.appendChild(th);
        }

        const tbody = document.createElement('tbody');
        table.appendChild(tbody);

        this.#tbody = tbody;
        this.#manager = manager;

        /** @param {ColspanType | RowspanType} element */
        this.#manager.addCallback = (element) => {
            const tr = document.createElement('tr');
            for (const key in element) {
                const td = document.createElement('td');
                td.innerText = element[key];
                tr.appendChild(td);
            }
            this.#tbody.appendChild(tr);
        };
    }
}

export { Table };