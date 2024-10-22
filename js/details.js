window.onload = function() {
    const productData = JSON.parse(localStorage.getItem('productData'));

    if (!productData) {
        console.error('No se encontraron datos del producto');
        return;
    }

    document.getElementById('img-container').innerHTML = `<img src="${productData.img}" alt="producto" class="img-card">`;
    document.getElementById('title').innerHTML = productData.title;
    document.getElementById('price').innerHTML = productData.price;
    document.getElementById('description').innerHTML = productData.description;
};
