document.addEventListener('DOMContentLoaded', () => {

    const cart = document.getElementById('cart');
    const cartItems = document.getElementById('cart-items');
    const clearCartButton = document.getElementById('clear-cart');
    const toggleCartButton = document.getElementById('toggle-cart');
    const addToCartButtons = document.querySelectorAll('.btn-favorito');

    let cartData = JSON.parse(localStorage.getItem('cart')) || [];

    const renderCartItems = () => {
        cartItems.innerHTML = '';
        cartData.forEach((item, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <img src="${item.image}" alt="Producto">
                <h4 class="name"><strong>${item.name}</strong></h4>
                <span>ㅤ</span>
                <h4 class="price"><strong>${item.price}</strong></h4>
                <span>ㅤ</span>
                <button class="remove-item" data-index="${index}"><strong>Emilinar</strong></button>
                <button class="buy-item"><strong>Comprar</strong></button>
            `;
            cartItems.appendChild(li);
        });

        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', removeItem);
        });

        document.querySelectorAll('.buy-item').forEach(button => {
            button.addEventListener('click', buyItem);
        });
    };

    const addToCart = (item) => {    
        const existingItemIndex = cartData.findIndex(cartItem => cartItem.name === item.name);
        if (existingItemIndex === -1) {
            cartData.push(item);
            localStorage.setItem('cart', JSON.stringify(cartData));
            renderCartItems();
        }
    }
    
    const removeItem = (event) => {
        const index = event.target.dataset.index;
        cartData.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cartData));
        renderCartItems();
    };

    const buyItem = () => {
            window.location.href = '';
    };

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productCard = button.closest('.content-card'); 
            const productName = productCard.querySelector('.text-product').innerText;
            const productImage = productCard.querySelector('.image-product').src;
            const productPrice = productCard.querySelector('.precio').innerText;
            addToCart({ name: productName, image: productImage, price: productPrice });
        });
    });

    clearCartButton.addEventListener('click', () => {
        cartData = [];
        localStorage.setItem('cart', JSON.stringify(cartData));
        renderCartItems();
    });

    //Boton al hacer click cambiar o reemplazar textos.
    toggleCartButton.addEventListener('click', () => {
        if (cart.classList.contains('hidden')) {
            cart.classList.remove('hidden');
            toggleCartButton.innerText = 'Ocultar Carrito';
        } else {
            cart.classList.add('hidden');
            toggleCartButton.innerText = 'Mostrar Carrito';
        }
    });

    renderCartItems();
});