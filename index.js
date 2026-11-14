const product = {
  title: 'Блокнот',
  price: 150,
  stock: 4
};

function sell(quantity) {
  if (quantity <= product.stock) {
    const cost = quantity * product.price;
    product.stock = product.stock - quantity;
    console.log('Стоимость: ' + cost + ' рублей');
    console.log('Новый остаток: ' + product.stock);
  } else {
    console.log('Товара недостаточно');
  }
}

sell(3); // Стоимость 450, остаток 1
sell(2); // Товара недостаточно, остаток так и остался 1