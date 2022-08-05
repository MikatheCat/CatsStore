import './modalWindow.scss';

const ModalWindow = () => {
    const modalWindowWrapper = document.createElement('div');
    
    modalWindowWrapper.className = 'modal';
    const modalWindow = document.createElement('div');
    modalWindow.className = 'modal__window';
    const closeButton = document.createElement('button');
    closeButton.className = 'modal__close';
    closeButton.innerText = 'Закрыть';
    //modalWindow.innerText = 'Дратути'
    closeButton.addEventListener('click', function(){
        modalWindowWrapper.classList.remove('active')
    });
    modalWindowWrapper.appendChild(modalWindow);
    modalWindowWrapper.appendChild(closeButton);
 

    return modalWindowWrapper;
    
}

export default ModalWindow;