import { createTableCell, tbodyRenderColspan, createTable, createInputField, createForm, tbodyRenderRowspan } from "./functions.js";

/**
 * @import {HeaderArrayType, ColspanType, RowspanType} from "./functions.js"
 */

/**
 * @callback CallbackType
 * @param {ColspanType | RowspanType} element Az új elem, amit hozzáadtak a listához.
 * @returns {void}
 */


class Manager {
    /**@type {ColspanType[] | RowspanType[]} */
    #list;
    /**@type {CallbackType} */
    #callback
    constructor(array, callback) {
        this.#list = array;
        this.#callback = callback;
    }
    /**@param {ColspanType | RowspanType} element */
    add(element) {
        this.#list.push(element);
        this.#callback(element);
    }
    get list() {
        return this.#list;
    }
}

class Table {
    /**@type {HTMLTableSectionElement} */
    #tbody;
    /**@type {Manager} */
    #callback;
    /**
     * 
     * @param {HTMLElement} parent
     * @param {HeaderArrayType} headerArray
     * @param {Manager} manager
     */
    constructor(parent, headerCallback, callback) {
        this.#tbody = createTable(parent, headerCallback);
        this.#callback = callback;
    }
    render(data) {
        for (const element of data) {
            this.#callback(this.#tbody, element);
        }
    }
}