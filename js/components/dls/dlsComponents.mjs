// DLS
let dlsContainer = document.createElement('div');
dlsContainer.setAttribute('style', 'display: flex; flex-direction: row;');

let depthLimitedButton = document.createElement('button');
depthLimitedButton.setAttribute('id', 'dlsBtn');
depthLimitedButton.setAttribute('style', 'margin-top: 10px; width: 60px; height: 30px;');
depthLimitedButton.innerHTML = 'DLS';

dlsContainer.appendChild(depthLimitedButton);


let dlsForm = document.createElement('form');
dlsForm.setAttribute('action', "/");
dlsForm.setAttribute("style", "display: flex; flex-direction: column; justify-content: space-around; height: 100px; margin: 10px 0 0 10px");

let depthInputElement = document.createElement('input');
depthInputElement.setAttribute("placeholder", "depth");
depthInputElement.setAttribute("style", "padding: 5px;");

let dlsSearchInputElement = document.createElement('input');
dlsSearchInputElement.setAttribute("placeholder", "Search node...");
dlsSearchInputElement.setAttribute("style", "padding: 5px;");

let dlsSubmitInputElement = document.createElement('input');
dlsSubmitInputElement.setAttribute("type", "submit")
dlsSubmitInputElement.setAttribute("value", "Submit");
dlsSubmitInputElement.setAttribute("style", "padding: 5px;");
dlsSubmitInputElement.addEventListener('click', (event) => {
    event.preventDefault()
})

dlsForm.appendChild(depthInputElement);
dlsForm.appendChild(dlsSearchInputElement);
dlsForm.appendChild(dlsSubmitInputElement);

export {
    dlsContainer,
    depthLimitedButton,
    dlsForm,
    depthInputElement,
    dlsSearchInputElement,
    dlsSubmitInputElement
}