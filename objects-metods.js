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

