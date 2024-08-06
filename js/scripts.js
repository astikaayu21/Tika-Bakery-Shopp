function saveProduct(productName, productPrice, productImage) {
    sessionStorage.setItem('selectedProduct', productName);
    sessionStorage.setItem('selectedPrice', productPrice);
    sessionStorage.setItem('selectedImage', productImage);
    window.location.href = 'transaksi.html';
}

function loadProduct() {
    const selectedProduct = sessionStorage.getItem('selectedProduct');
    const selectedPrice = sessionStorage.getItem('selectedPrice');
    const selectedImage = sessionStorage.getItem('selectedImage');
    if (selectedProduct && selectedPrice && selectedImage) {
        document.getElementById('produk').value = selectedProduct.replace('_', ' ');
        document.getElementById('harga').value = selectedPrice;
        const productImage = document.getElementById('product-image');
        productImage.src = selectedImage;
        productImage.style.display = 'block';
    }
}

function calculateTotal() {
    const price = parseFloat(document.getElementById('harga').value);
    const quantity = parseInt(document.getElementById('jumlah').value);
    const total = price * quantity;
    document.getElementById('total').value = total;
}

function submitForm() {
    const nama = document.getElementById('nama').value;
    const alamat = document.getElementById('alamat').value;
    const produk = document.getElementById('produk').value;
    const harga = document.getElementById('harga').value;
    const jumlah = document.getElementById('jumlah').value;
    const total = document.getElementById('total').value;
    const image = sessionStorage.getItem('selectedImage');

    const queryParams = new URLSearchParams({
        nama,
        alamat,
        produk,
        harga,
        jumlah,
        total,
        image
    });

    window.location.href = 'invoice.html?' + queryParams.toString();
    return false; n
}


window.onload = function() {
    if (document.getElementById('produk')) {
        loadProduct();
    }
    document.getElementById('jumlah').addEventListener('input', calculateTotal);
};