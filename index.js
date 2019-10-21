const addBtn = document.querySelector('.add');
const options = document.querySelector('select');


const logConsole = function(event){
    event.preventDefault();
    console.log(age.value);
    console.log(options.value);
    console.log(smoker.checked);

}

const addPerson = function(event){
    event.preventDefault();

    const inputs = document.querySelectorAll('input');
    const inputsArray = Array.from(inputs)
    const age = (inputsArray[0]);
    const smoker = inputsArray[1];

    const liNode = document.createElement('li');
    const olNode = document.querySelector('ul');

    const textNode = document.createTextNode(`${age.value} - ${smoker.checked ? "Smoker" : "Non-Smoker"} - ${options.value} `)

    liNode.appendChild(textNode);
    olNode.appendChild(liNode);
}

addBtn.addEventListener('click', addPerson);















