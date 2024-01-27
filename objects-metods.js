/*
До нас звернулася власниця крамниці зілля «У старої жаби» і замовила програму для ведення інвентарю.
Програма має додавати, видаляти, шукати та оновлювати зілля.

Оголоси об'єкт atTheOldToad з наступними властивостями:

potions — масив, де будуть зберігатися зілля. Нехай зараз він буде порожнім
getPotions() — метод, який повертає рядок "List of all available potions"
addPotion(potionName) — метод, який повертає рядок "Adding <potionName>", де potionName — це значення параметра potionName
Оголошена змінна atTheOldToad
Значення змінної atTheOldToad - це об'єкт
Значення властивості potions - це масив []
Значення властивості getPotions - це метод об'єкта
Виклик методу atTheOldToad.getPotions() повертає рядок "List of all available potions"
Значення властивості addPotion - це метод об'єкта
Виклик методу atTheOldToad.addPotion("Invisibility") повертає рядок "Adding Invisibility"
Виклик методу atTheOldToad.addPotion("Power potion") повертає рядок "Adding Power potion"
*/

/*
const atTheOldToad = {
  potions: [],
  getPotions() {
    return "List of all available potions";
  },
  addPotion(potionName) {
		return `Adding ${potions.potionName}`;
  },
}

*/

/*
Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною. Тому зараз у властивості potions буде зберігатися масив об'єктів з властивостями name та price.

Об'єкт atTheOldToad має наступні властивості:

potions — масив рядків, з назвами зілль
getPotions() — метод, який повертає значення властивості potions
addPotion() — метод, який приймає параметр об'єкт нового зілля newPotion і додає його в кінець масиву у властивості potions.
Додай метод getTotalPrice(), який має повертати загальну вартість усіх зілль з властивості potions.

Оголошена змінна atTheOldToad
Значення змінної atTheOldToad - це об'єкт
Значення властивості atTheOldToad.getPotions - це метод об'єкта
Виклик методу atTheOldToad.getPotions() повертає поточне значення властивості potions
Значення властивості atTheOldToad.addPotion - це метод об'єкта.
Після виклику методу atTheOldToad.addPotion({ name: "Invisibility", price: 620 }), в масиві potions останнім елементом буде цей об'єкт
Після виклику методу atTheOldToad.addPotion({ name: "Power potion", price: 270 }), в масиві potions останнім елементом буде цей об'єкт
Значення властивості atTheOldToad.getTotalPrice - це метод об'єкта
Виклик методу atTheOldToad.getTotalPrice() повертає загальну вартість усіх зілль з властивості potions
*/

/*
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Stone skin", price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    this.potions.push(newPotion);
  },
  getTotalPrice() {
    let totalPrice = 0;
    for (let potion of this.potions) {
      totalPrice += potion.price;
    }
    return totalPrice;
  },
};
*/
/*
function getAllPropValues(propName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  let names = [];
  for (let product of products) {
    if (product[propName]) {
      names.push(product[propName]);
    }    
  }
  return names;
}


console.log(getAllPropValues("category")); 
*/

/*
function calculateTotalPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

let totalPrice = 0;
  for (let product of products) {
    console.log(product);
    if (product.name === productName) {
      totalPrice = product.price * product.quantity;
      
      break;
    } 
  }
    if (totalPrice) {
      return totalPrice;
    } else {
      return `Product ${productName} not found!`;
    }  
  }

console.log(calculateTotalPrice("Scanner"));
*/

/*
Об'єкт atTheOldToad має наступні властивості:

potions — масив об'єктів зілль
getPotions() — метод, який повертає значення властивості potions
updatePotionName() — метод, який приймає два параметра рядків oldName і newName
Доповни метод updatePotionName(oldName, newName) таким чином,
щоб він оновлював назву зілля з oldName на newName в масиві зілля у властивості potions.

Оголошена змінна atTheOldToad
Значення змінної atTheOldToad - це об'єкт
Значення властивості atTheOldToad.potions - це масив
Значення властивості atTheOldToad.updatePotionName - це метод об'єкта
Після першого виклику методу atTheOldToad.updatePotionName("Stone skin", "Invisibility"),
у властивості potions буде масив [{ name: "Speed potion", price: 460 }, { name: "Invisibility", price: 520 } ]
Після другого виклику методу atTheOldToad.updatePotionName("Speed potion", "Polymorth"),
у властивості potions буде масив [{ name: "Polymorth", price: 460 }, { name: "Invisibility", price: 520 } ]
*/



const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Stone skin", price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  updatePotionName(oldName, newName) {
    for (let potion of this.potions) {
      if (potion.name === oldName) {
        potion.name = newName;
        break;
      }
    }
  },
  };


//atTheOldToad.updatePotionName("Stone skin", "Invisibility");

atTheOldToad.updatePotionName("Speed potion", "Polymorth");

console.log(atTheOldToad.getPotions());

//  getPotions is not defined

/*
function add(...args) {
  let arrSum = 0;
  for (const number of args) {
    arrSum += number;
  }
  return arrSum;
}

console.log(add(12, 4, 11, 48)); // повертає `75`;
*/


/*
Функція addOverNum() приймає довільну кількість аргументів чисел.

Доповни код функції таким чином, щоб вона обчислювала суму тільки тих аргументів, які більші за задане число.
Це число завжди буде передано першим аргументом.

Для вирішення цього завдання тобі потрібно зробити наступне:

Перший параметр value повинен представляти задане число,
а решта аргументів повинні бути зібрані за допомогою синтаксису (...args)
Усередині функції ініціалізуй змінну для зберігання загальної суми
Потім пройдись по кожному аргументу за допомогою циклу
Перевір, чи кожен аргумент більший за вказане число, і якщо так, додай його до загальної суми
На завершення поверни загальну суму
Оголошена функція addOverNum()
Функція addOverNum приймає наступні параметри: value, ...args
Виклик addOverNum(50, 15, 27) повертає 0
Виклик addOverNum(10, 12, 4, 11, 48, 10, 8) повертає 71
Виклик addOverNum(15, 32, 6, 13, 19, 8) повертає 51
Виклик addOverNum(20, 74, 11, 62, 46, 12, 36) повертає 218
*/


/*
function addOverNum(value, ...args) {
  let valuesSum = 0;
  for (let number of args) {
    if (number > value) {
      valuesSum += number;
    }
  }
  return valuesSum;
}

console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));
*/
/*
function getExtremeScores(scores) {
  const extremeScores = {
    best: Math.max(...scores),
    worst: Math.min(...scores),}
  return extremeScores;
}

console.log(getExtremeScores([19, 7, 4, 17, 81, 24]));
console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));
*/