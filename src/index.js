import './index.scss';
import 'normalize.css';

import ItemsList from "./items-list";
import Item from "./item";
import GetJSON from './getJSON/getJSOn.js';
import Cart from './Cart/cart';
import Button from './sortButton/button';
import ModalWindow from './modalWindow/modalWindow';
import Input from './input/input';


const inputElement = Input();
document.body.appendChild(inputElement);

let catsArray;
let currentCatsArray;

const getInput = () => {
    let result = document.querySelector('#input_space').value;
    let newResult = result.toLowerCase();
    console.log(newResult);
    
    let newArr = [];
    for (let i=0; i < currentCatsArray.length; i++){
        let cat = currentCatsArray[i];
        let catName = currentCatsArray[i].name.toLowerCase();
        if (catName.includes(newResult)) {
           newArr.push(cat);
        } 
    }    
    currentCatsArray = newArr;
    console.log(newArr);    
    reloadItemsList();
    currentCatsArray = catsArray;
}
document.querySelector('#input_button').onclick = getInput;


const itemsList = ItemsList();
let cart = [];
const {cartElement, updateCart} = Cart(cart);
const modalWindowWrapper = ModalWindow();

function compareCats(cat1, cat2) {
  if ( cat1.price < cat2.price ){
    return 1;
  }
  if (cat1.price > cat2.price ){
    return -1;
  }
  return 0;
}

function compareCatsAgain (cat1, cat2){
   if ( cat1.price > cat2.price ){
    return 1;
  }
  if (cat1.price < cat2.price ){
    return -1;
  }
  return 0;
} 



const createElements = () => {
    const descSortButton = Button('Цена по убыванию' , function() {
        currentCatsArray.sort(compareCats);
      
        console.log(itemsList);
       reloadItemsList();
    });
    
    const ascSortButton = Button ('Цена по возрастанию', function(){
        currentCatsArray.sort(compareCatsAgain);
      
       reloadItemsList();
    })
    
    document.body.appendChild(ascSortButton);    
    document.body.appendChild(descSortButton); 
    document.body.appendChild(itemsList);        
    document.body.appendChild(cartElement);
}

GetJSON('https://mocki.io/v1/3d7ff510-0a93-4e3e-b83c-32e0d3d5de8c', function(err, data){    
    if (err != null) {
        console.error(err);
    } else {
        catsArray = data.cats;            
    }  
    currentCatsArray = catsArray;
    createElements();
    reloadItemsList();
    
});  

const reloadItemsList = () => {
    while (itemsList.firstChild){
           itemsList.removeChild(itemsList.firstChild);
       }
    for (let i = 0; i < currentCatsArray.length; i++) {
        
        const onAdd = () => {
            console.log('the cat №', currentCatsArray[i].id,' is added');
            cart.push(currentCatsArray[i]);
            updateCart(cart);
        }
        const itemElement = Item(currentCatsArray[i].name,currentCatsArray[i].price, currentCatsArray[i].img, onAdd);
        itemsList.appendChild(itemElement);
    }    
    
    
}

const windowButton = Button ('Корзина', function(){
    modalWindowWrapper.appendChild(cartElement);
    
   modalWindowWrapper.classList.toggle('active');
});


document.body.appendChild(windowButton);
document.body.appendChild(modalWindowWrapper);