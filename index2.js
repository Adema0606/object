const expenses = [
  { title: 'Обед', category: 'еда', amount: 350 },
  { title: 'Автобус', category: 'транспорт', amount: 45 },
  { title: 'Хлеб', category: 'еда', amount: 80 }
];

const searchCategory = 'еда';

let total = 0;

expenses.forEach((expense) => {
  if (expense.category === searchCategory) {
    total = total + expense.amount;
  }
});

console.log('Итог: ' + total + ' рублей');