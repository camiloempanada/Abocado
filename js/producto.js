document.querySelectorAll('.a-btn').forEach(button => {
    button.addEventListener('click', function(event) {
        const card = this.closest('.content-card');
        const img = card.querySelector('.image-product').src;
        const title = card.querySelector('.text-product').innerHTML;
        const price = card.querySelector('.precio').innerHTML;
        const description = card.querySelector('.p-product').innerHTML;

        const productData = {
            img: img,
            title: title,
            price: price,
            description: description
        };

        localStorage.setItem('productData', JSON.stringify(productData));
    });
});