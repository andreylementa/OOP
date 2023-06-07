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

// ////////////////////////////////////////////////////////////////////////
// // Прототипы

console.log(Person.prototype);

Person.prototype.printAge = function () {
  console.log(2021 - this.birthYear);
};

youra.printAge();
mary.printAge();
john.printAge();

console.log(youra.__proto__);
console.log(youra.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(mary));
console.log(Person.prototype.isPrototypeOf(john));
console.log(Person.prototype.isPrototypeOf(Person));
// .prototypeOfLinkedObjects

Person.prototype.creatureClass = 'Mammal';
console.log(mary, john);
console.log(mary.hasOwnProperty('birthYear'));
console.log(mary.hasOwnProperty('creatureClass'));
console.log(youra.hasOwnProperty('birthYear'));
