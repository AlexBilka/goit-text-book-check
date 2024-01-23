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

const atTheOldToad = {
  potions: [],
  getPotions() {
    return "List of all available potions";
  },
  addPotion(potionName) {
		return `Adding ${potions.potionName}`;
  },
}