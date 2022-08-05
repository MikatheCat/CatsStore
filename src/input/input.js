import './input.scss'

const Input = () => {
    const inputElement = document.createElement('div');
    const inputSpace = document.createElement('input');
    inputSpace.setAttribute('type', 'text');
    inputSpace.id = 'input_space';
    inputSpace.className = 'input';
   const inputButton = document.createElement('button');
    inputButton.innerText = 'поиск';
    inputButton.id = 'input_button';
    
    inputElement.appendChild(inputSpace);
    inputElement.appendChild(inputButton);
    
    return inputElement;
    
}

export default Input;