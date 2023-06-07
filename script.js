'use strict';

////////////////////////////////////////////////////////////////////////
// Функции-Конструкторы и Оператор new

const Person = function (firstName, birthYear) {
  // Instance properties - свойства экземпляра
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Никогда не делать этого
  // this.printAge = function() {
  //   console.log(2021 - this.birthYear);
  // };
};

const youra = new Person('YouRa', 1974);
console.log(youra);

// 1. Создаётся новый пустой объект {}
// 2. Вызывается функция, this = {}
// 3. {} связывается с прототипом
// 4. Функция автоматически возвращает {}

const mary = new Person('Mary', 2000);
const john = new Person('John', 2003);
console.log(mary, john);

const jack = 'Jack';

console.log(mary instanceof Person);
console.log(jack instanceof Person);
