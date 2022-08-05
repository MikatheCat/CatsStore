import './button.scss';

const Button = (name, onClick) => {
   const buttonElement = document.createElement('button');
    buttonElement.className = 'button'
    buttonElement.innerText = name;
    buttonElement.addEventListener('click', onClick);    
    return buttonElement;
    
}

export default Button;