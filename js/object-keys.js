/*
Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of.
Запиши у змінну keys масив ключів властивостей об'єкта apartment,
і додай в масив values всі значення його властивостей.

Оголошена змінна apartment.
Значення змінної apartment - це об'єкт.
Оголошена змінна keys.
Значення змінної keys - це масив ["descr", "rating", "price"].
Значення змінної keys отримане за допомогою методу Object.keys().
Оголошена змінна values.
Значення змінної values - це масив ["Spacious apartment in the city center", 4, 2153].
Значення змінної values отримане за допомогою циклу for...of.
*/

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
const keys = Object.keys(apartment);
for (let key of keys) {
  values.push(apartment[key]);
}

console.log(keys);
console.log(values);

/*
function countProps(object) {
  let propCount = 0;

  /*
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }
  */
 /*
const keys = Object.keys(object);
  for (const key of keys) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }

  
  return propCount;
}
*/
