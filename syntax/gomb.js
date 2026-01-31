import { muvelet, muveletLetrehoz  } from "./functions.js";

class Gomb {
    constructor(input1, input2, muveletString, eredmenyDiv) {
        this.input1 = input1;
        this.input2 = input2;
        this.muveletString = muveletString;
        this.eredmenyDiv = eredmenyDiv;

        this.button = document.createElement('button');
        this.button.innerText = this.muveletString;
        document.body.appendChild(this.button);

        this.button.addEventListener('click', this.buttonHandler.bind(this));
    }

    buttonHandler() {
        const inValue1 = Number(this.input1.value);
        const inValue2 = Number(this.input2.value);
        const { result } = muvelet(inValue1, inValue2, muveletLetrehoz(this.muveletString));
        this.eredmenyDiv.innerText = result;
    }
}

export { Gomb };