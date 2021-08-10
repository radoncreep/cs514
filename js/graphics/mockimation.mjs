import { outputContainer } from "../containers.mjs";

export const createNodeDisplay = (nodeValue) => {
   
    const box = document.createElement('div');
    box.innerHTML = ""
    box
        .setAttribute('style', 
            'width: 40px; height: 40px; background-color: orange; text-align: center; display: flex; justify-content: center; align-items: center');

    const text = document.createElement('p');
    text.setAttribute('style', 'color: #000; font-size: 16px; font-weight: bold;');
    text.innerText = nodeValue.toString();

    box.appendChild(text);

    outputContainer.appendChild(box);
}