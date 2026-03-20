/**
 * @typedef {question:string, valid:boolean} QuestionType
*/
/**
 * @typedef {question:string, selected:boolean, rightAnswer:boolean} QuestionResultViewType
 */
/**
 * @callback NextQuestionCallback
 * @param {QuestionType} question
 * @returns {void}
 */
/**
 * @callback FinishCallback
 * @param {QuestionResultViewType[]} resultArray
 * @returns {void}
 */

class SelectManager {
    /**@type {number} */
    #questionNumber;
    /**@type {QuestionType[]} */
    #questions;
    /**@type {boolean[]} */
    #questionAnswers;
    /**@type {NextQuestionCallback} */
    #nextQuestionCallback;
    /**@type {FinishCallback} */
    #finishCallback;
    /**
     * @param {QuestionType[]} questions 
     */
    constructor(questions) {
        this.#questionNumber = 0;
        this.#questions.push(questions);
    }
    /**
     * @returns {void}
     */
    play() {
        this.#nextQuestionCallback(this.#questions[0]);
    }
    /**
     * @returns {void}
     */
    reset() {

    }
    /**
     * @param {boolean} answer
     * @returns {void}
     */
    nextQuestion(answer) {

    }
    /**
     * @param {NextQuestionCallback} value 
     */
    set nextQuestionCallback(value) {
        this.#nextQuestionCallback = value;
    }
    /**
     * @param {FinishCallback} value 
     */
    set finishCallback(value) {
        this.#finishCallback = value;
    }
}

export {SelectManager}