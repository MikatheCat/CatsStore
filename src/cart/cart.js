import './cart.scss';


const Cart = (cart) => {
    const cartElement = document.createElement('div');
    const itemsCountElement = document.createElement('span');
    const priceElement = document.createElement('span');
    itemsCountElement.innerText = `Количество товаров: ${cart.length}`;
    priceElement.innerText = `Цена: 0`;
    cartElement.className = 'cart';
    itemsCountElement.className = 'cart__count';
    priceElement.className = 'cart__price';
    cartElement.appendChild(itemsCountElement);
    cartElement.appendChild(priceElement);
    
    const updateCart = (newCart) => {
       itemsCountElement.innerText = `Количество товаров: ${newCart.length}`; 
        const sumPrice = newCart.reduce((sum, item) => sum + Number(item.price), 0);
        priceElement.innerText = `Цена: ${sumPrice}`;
        console.log(sumPrice);
    }
    
    return {cartElement, updateCart};  
};


export default Cart;