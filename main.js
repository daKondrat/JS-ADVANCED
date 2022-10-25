const products = [
    {id: 1, title: 'Notebook', price: 2000,img:'./img/Notebook.jpg'},
    {id: 2, title: 'Mouse', price: 20,img:'img/Mouse.jpg'},
    {id: 3, title: 'Keyboard', price: 200,img:'img/Keyboard.jpg'},
    {id: 4, title: 'Gamepad', price: 50,img:'img/Gamepad.jpg'},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (product) => {
    return `<div class="product-item">
                <img src="${product.img}" width="150" height="150">
                <h3>${product.title}</h3>
                <p>${product.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
   document.querySelector('.products').innerHTML =
        (list.map(product => renderProduct(product))).join('');
};

renderPage(products);