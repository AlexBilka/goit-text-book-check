/* Функція calculateTotalPrice(order) приймає один параметр order - масив чисел.
Доповни функцію так, щоб вона повертала загальну суму елементів з масиву order.

Оголошена функція calculateTotalPrice(order)
Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
Виклик функції calculateTotalPrice() з випадковим масивом повертає правильне значення
*/

function calculateTotalPrice(order) {
  let totalPrice = 0;
  for (let element = 0; element < order.length; element += 1) {
    totalPrice += order[element];
  }
  return totalPrice;
}

console.log(calculateTotalPrice([12, 85, 37, 4])); // 138
console.log(calculateTotalPrice([164, 48, 291])); // 503
console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116
console.log(calculateTotalPrice([164, 48, 291])); // з випадковим масивом повертає правильне значення