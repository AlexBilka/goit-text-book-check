/*Функція checkStorage(storage, item) приймає два параметри:

storage - масив рядків, що описує доступні товари на складі
item - рядок з назвою товара, наявність якого потрібно перевірити
Доповни код функції таким чином, щоб вона перевіряла,
чи присутній такий товар в масиві storage і повертала:

рядок "<item> is available to order!",
де item - це назва товара, якщо товар було знайдено
рядок "Sorry! We are out of stock!", якщо такого товара немає в масиві
Зроби так, щоб пошук за ім'ям товару був незалежний від регістру,
тобто наприклад "plum" і "pLuM" мають бути знайдені у масиві ["apple", "plum", "pear"].

Оголошена функція checkStorage(storage, item)
Виклик checkStorage(["apple", "plum", "pear"], "plum") повертає "plum is available to order!"
Виклик checkStorage(["apple", "plum", "pear"], "pLuM") повертає "plum is available to order!"
Виклик checkStorage(["apple", "plum", "pear"], "pear") повертає "pear is available to order!"
Виклик checkStorage(["apple", "plum", "pear"], "pEAr") повертає "pear is available to order!"
Виклик checkStorage(["apple", "plum", "pear"], "orange") повертає "Sorry! We are out of stock!"
Виклик checkStorage(["apple", "plum", "pear"], "carrot") повертає "Sorry! We are out of stock!"
*/

function checkStorage(storage, item) {
  const itemNorm = item.toLowerCase();
  if (storage.includes(itemNorm)) {
    return `${itemNorm} is available to order!`;
  } else {
    return `Sorry! We are out of stock!`;
  }
}

console.log(checkStorage(["apple", "plum", "pear"], "plum")); // "plum is available to order!"
console.log(checkStorage(["apple", "plum", "pear"], "pLuM")); // "plum is available to order!"
console.log(checkStorage(["apple", "plum", "pear"], "pear")); // "plum is available to order!"
console.log(checkStorage(["apple", "plum", "pear"], "pEAr")); // "plum is available to order!"
console.log(checkStorage(["apple", "plum", "pear"], "orange")); // "plum is available to order!"
console.log(checkStorage(["apple", "plum", "pear"], "carrot")); // "plum is available to order!"
