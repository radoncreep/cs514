import { outputContainer } from "../containers.mjs";

export const createNodeDisplay = (nodeValue, message='') => {
   
    const box = document.createElement('div');
    box.innerHTML = ""
    box
        .setAttribute('style', 
            'width: 40px; height: 40px; background-color: orange; text-align: center; display: flex; justify-content: center; align-items: center');

    const text1 = document.createElement('p');
    const msg = document.createElement('p');

    text1.setAttribute('style', 'color: #000; font-size: 16px; font-weight: bold;');
    text1.innerText = nodeValue ? nodeValue.toString() : null;

    msg.setAttribute('style', 'color: #000; font-size: 18px; font-weight: normal;');
    msg.innerText = message.toString();
    
    box.appendChild(text1);
    if (message !== '') outputContainer.append(msg);
    
    outputContainer.appendChild(box);
}