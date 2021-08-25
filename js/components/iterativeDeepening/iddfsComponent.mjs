const iddfsContainer = document.createElement('div');
iddfsContainer.setAttribute('style', 'display: flex; flex-direction: row;');

const iddfsButton = document.createElement('button');
iddfsButton.setAttribute('id', 'iddfsBtn');
iddfsButton.setAttribute('style', 'margin-top: 10px; width: 60px; height: 30px;');
iddfsButton.innerHTML = 'IDDFS';

iddfsContainer.appendChild(iddfsButton);

const iddfsForm = document.createElement('form');
iddfsForm.setAttribute('action', "/");
iddfsForm.setAttribute("style", "display: flex; flex-direction: column; justify-content: space-around; height: 100px; margin: 10px 0 0 10px");

// const iddfsInputElement = document.createElement('input');
// iddfsInputElement.setAttribute("placeholder", "depth");
// iddfsInputElement.setAttribute("style", "padding: 5px;");

const iddfsSearchInputElement = document.createElement('input');
iddfsSearchInputElement.setAttribute("placeholder", "Search node...");
iddfsSearchInputElement.setAttribute("style", "padding: 5px;");

const iddfsSubmitInputElement = document.createElement('input');
iddfsSubmitInputElement.setAttribute("type", "submit")
iddfsSubmitInputElement.setAttribute("value", "Submit");
iddfsSubmitInputElement.setAttribute("style", "padding: 5px;");
iddfsSubmitInputElement.addEventListener('click', (event) => {
    event.preventDefault();
})

// iddfsForm.appendChild(iddfsInputElement);
iddfsForm.appendChild(iddfsSearchInputElement);
iddfsForm.appendChild(iddfsSubmitInputElement);

export {
    iddfsButton,
    iddfsContainer,
    iddfsForm,
    // iddfsInputElement,
    iddfsSearchInputElement,
    iddfsSubmitInputElement
}
