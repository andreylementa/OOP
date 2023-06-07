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
console.log(mary.creatureClass);

//////////////////////////////////////////////////////////////////////
// Прототипное Наследование для Встроенных Объектов

// Person.prototype
console.log(youra.__proto__);

// Object.prototype - верхушка цепи прототипов
console.log(youra.__proto__.__proto__);

// null
console.log(youra.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);

const numbers = [3, 4, 2, 5, 8, 8, 8, 2, 2];
console.log(numbers.__proto__);
console.log(Object.getPrototypeOf(numbers));
console.log(numbers.__proto__ === Array.prototype);
console.log(numbers.__proto__.__proto__);

Array.prototype.uniqueElements = function () {
  return [...new Set(this)];
};

console.log(numbers.uniqueElements());

const h2 = document.querySelector('h2');
console.dir(h2);
console.dir(n => n * 2);

//////////////////////////////////////////////////////////////////////
// Задание 1

// 1. Используйте функцию-конструктор, чтобы реализовать автомобиль - Car. Автомобиль имеет свойства name и speed. Свойство speed - это текущая скорость автомобиля в км / ч.
// 2. Реализуйте метод accelerate(), который увеличивает скорость автомобиля на 5 и записывает новую скорость в консоль.
// 3. Реализуйте метод break(), который снижает скорость автомобиля на 5 и записывает новую скорость в консоль.
// 4. Создайте 2 объекта Car и поэкспериментируйте с вызовами методов accelerate() и break() несколько раз для каждого из них.

// Тестовые данные:
// Данные для автомобиля 1: Honda едет со скоростью 120 км / ч
// Данные для автомобиля 2: BMW едет со скоростью 150 км / ч.

const Car = function (name, speed) {
  this.name = name;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 5;
  console.log(`${this.name} двигается со скоростью ${this.speed} км/ч.`);
};

Car.prototype.breake = function () {
  this.speed -= 5;
  console.log(`${this.name} двигается со скоростью ${this.speed} км/ч.`);
};

const honda = new Car('Honda', 120);
const bmw = new Car('BMW', 150);

honda.accelerate();
honda.accelerate();
honda.accelerate();
honda.accelerate();
honda.accelerate();
honda.accelerate();

bmw.breake();
bmw.breake();
bmw.breake();
bmw.breake();
