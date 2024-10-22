document.getElementById('tel').addEventListener('input', function (e) {
    let input = e.target;
    let value = input.value.replace(/\D/g, ''); // Elimina cualquier cosa que no sea un dígito

    // Limitar el número de dígitos a 10
    if (value.length > 10) {
        value = value.slice(0, 10);
    }

    if (value.length > 6) {
        value = value.replace(/(\d{3})(\d{3})(\d+)/, '$1-$2-$3');
    } else if (value.length > 3) {
        value = value.replace(/(\d{3})(\d+)/, '$1-$2');
    }

    input.value = value;
});