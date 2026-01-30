import { muvelet, muveletLetrehoz } from "./functions.js";

const input1 = document.createElement('input');
document.body.appendChild(input1);
const input2 = document.createElement('input');
document.body.appendChild(input2);
const div = document.createElement('div');
document.body.appendChild(div);
const button = document.createElement('button');
button.innerText = "Összead";
document.body.appendChild(button);
button.addEventListener('click', buttonHandler);

function buttonHandler() {
    const inValue1 = Number(input1.value);
    const inValue2 = Number(input2.value);
    const {result} = muvelet(inValue1, inValue2, muveletLetrehoz("+"));
    div.innerText = result;
}

const fv = muveletLetrehoz("+");
console.log(fv(15, 20));