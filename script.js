'use strict';

//////////////////////////////////////////////////////////////////////////
//// Функции-Конструкторы и Оператор new

//const Person = function (firstName, birthYear) {
//  // Instance properties - свойства экземпляра
//  this.firstName = firstName;
//  this.birthYear = birthYear;

//  // Никогда не делать этого
//  // this.printAge = function() {
//  //   console.log(2021 - this.birthYear);
//  // };
//};

//const youra = new Person('YouRa', 1974);
//console.log(youra);

//// 1. Создаётся новый пустой объект {}
//// 2. Вызывается функция, this = {}
//// 3. {} связывается с прототипом
//// 4. Функция автоматически возвращает {}

//const mary = new Person('Mary', 2000);
//const john = new Person('John', 2003);
//console.log(mary, john);

//const jack = 'Jack';

//console.log(mary instanceof Person);
//console.log(jack instanceof Person);

//// ////////////////////////////////////////////////////////////////////////
//// // Прототипы

//console.log(Person.prototype);

//Person.prototype.printAge = function () {
//  console.log(2021 - this.birthYear);
//};

//youra.printAge();
//mary.printAge();
//john.printAge();

//console.log(youra.__proto__);
//console.log(youra.__proto__ === Person.prototype);

//console.log(Person.prototype.isPrototypeOf(mary));
//console.log(Person.prototype.isPrototypeOf(john));
//console.log(Person.prototype.isPrototypeOf(Person));
//// .prototypeOfLinkedObjects

//Person.prototype.creatureClass = 'Mammal';
//console.log(mary, john);
//console.log(mary.hasOwnProperty('birthYear'));
//console.log(mary.hasOwnProperty('creatureClass'));
//console.log(youra.hasOwnProperty('birthYear'));
//console.log(mary.creatureClass);

////////////////////////////////////////////////////////////////////////
//// Прототипное Наследование для Встроенных Объектов

//// Person.prototype
//console.log(youra.__proto__);

//// Object.prototype - верхушка цепи прототипов
//console.log(youra.__proto__.__proto__);

//// null
//console.log(youra.__proto__.__proto__.__proto__);

//console.log(Person.prototype.constructor);
//console.dir(Person.prototype.constructor);

//const numbers = [3, 4, 2, 5, 8, 8, 8, 2, 2];
//console.log(numbers.__proto__);
//console.log(Object.getPrototypeOf(numbers));
//console.log(numbers.__proto__ === Array.prototype);
//console.log(numbers.__proto__.__proto__);

//Array.prototype.uniqueElements = function () {
//  return [...new Set(this)];
//};

//console.log(numbers.uniqueElements());

//const h2 = document.querySelector('h2');
//console.dir(h2);
//console.dir(n => n * 2);

////////////////////////////////////////////////////////////////////////
//// Задание 1

//// 1. Используйте функцию-конструктор, чтобы реализовать автомобиль - Car. Автомобиль имеет свойства name и speed. Свойство speed - это текущая скорость автомобиля в км / ч.
//// 2. Реализуйте метод accelerate(), который увеличивает скорость автомобиля на 5 и записывает новую скорость в консоль.
//// 3. Реализуйте метод break(), который снижает скорость автомобиля на 5 и записывает новую скорость в консоль.
//// 4. Создайте 2 объекта Car и поэкспериментируйте с вызовами методов accelerate() и break() несколько раз для каждого из них.

//// Тестовые данные:
//// Данные для автомобиля 1: Honda едет со скоростью 120 км / ч
//// Данные для автомобиля 2: BMW едет со скоростью 150 км / ч.

//const Car = function (name, speed) {
//  this.name = name;
//  this.speed = speed;
//};

//Car.prototype.accelerate = function () {
//  this.speed += 5;
//  console.log(`${this.name} двигается со скоростью ${this.speed} км/ч.`);
//};

//Car.prototype.breake = function () {
//  this.speed -= 5;
//  console.log(`${this.name} двигается со скоростью ${this.speed} км/ч.`);
//};

//const honda = new Car('Honda', 120);
//const bmw = new Car('BMW', 150);

//honda.accelerate();
//honda.accelerate();
//honda.accelerate();
//honda.accelerate();
//honda.accelerate();
//honda.accelerate();

//bmw.breake();
//bmw.breake();
//bmw.breake();
//bmw.breake();

//////////////////////////////////////////////////////////////////////
// Классы ES6

// Class expression
// const Person = class {

// }

// Class declaration
//class Person {
//  constructor(firstName, birthYear) {
//    this.firstName = firstName;
//    this.birthYear = birthYear;
//  }

//  // Методы добавляются в свойство .prototype
//  printAge() {
//    console.log(2021 - this.birthYear);
//  }

//  greet() {
//    console.log(`Hello! My name is ${this.firstName}!`);
//  }
//}

//const jack = new Person('Jack', 2000);
//console.log(jack);
//jack.printAge();
//console.log(jack.__proto__ === Person.prototype);
//console.log(Object.getPrototypeOf(jack) === Person.prototype);

//// Person.prototype.greet = function () {
////   console.log(`Hello! My name is ${this.firstName}!`);
//// };

//jack.greet();

// 1. Классы не "поднимаются" при помощи hoisting
// 2. Классы являются "firts class citizens"
// 3. Тело класса выполняется в strict режиме

//////////////////////////////////////////////////////////////////////
// Setters & Getters

// const account = {
//   owner: 'youra',
//   transactions: [300, 500, -100, 600],

//   lastTransaction() {
//     return this.transactions.slice(-1).pop();
//   },
// };

// console.log(account.lastTransaction());

//const account = {
//  owner: 'youra',
//  transactions: [300, 500, -100, 600],

//  get lastTransaction() {
//    return this.transactions.slice(-1).pop();
//  },

//  set lastTransaction(trans) {
//    this.transactions.push(trans);
//  },
//};

//console.log(account.lastTransaction);
//account.lastTransaction = 100;
//console.log(account.transactions);

//class Person {
//  constructor(fullName, birthYear) {
//    this.fullName = fullName;
//    this.birthYear = birthYear;
//  }

//  // Методы добавляются в свойство .prototype
//  printAge() {
//    console.log(2021 - this.birthYear);
//  }

//  greet() {
//    console.log(`Hello! My name is ${this.fullName}!`);
//  }

//  get age() {
//    return 2021 - this.birthYear;
//  }

//  // Установить значение в уже существующее свойство
//  set fullName(personName) {
//    console.log(personName);
//    if (personName.includes(' ')) {
//      this._fullName = personName;
//    } else {
//      alert(`Полное имя должно состоять из имени и фамилии!`);
//    }
//  }

//  get fullName() {
//    return this._fullName;
//  }
//}

//const jack = new Person('Jack White', 2000);
//console.log(jack);
//const jane = new Person('Jane Red', 2000);
//console.log(jane.fullName);

//////////////////////////////////////////////////////////////////////
// Статические Методы

// const Person = function (firstName, birthYear) {
//   // Instance properties - свойства экземпляра
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Никогда не делать этого
//   // this.printAge = function() {
//   //   console.log(2021 - this.birthYear);
//   // };
// };

// Person.highFive = function () {
//   console.log('High five!');
// };

// Person.prototype.highFive = function () {
//   console.log('High five!');
// };

//class Person {
//  constructor(firstName, birthYear) {
//    this.firstName = firstName;
//    this.birthYear = birthYear;
//  }

//  // Методы добавляются в свойство .prototype
//  printAge() {
//    console.log(2021 - this.birthYear);
//  }

//  greet() {
//    console.log(`Hello! My name is ${this.firstName}!`);
//  }

//  // Статический метод
//  static highFive() {
//    console.log('High five!');
//  }
//}

//Person.highFive();

//const jack = new Person('Jack', 1999);
//// jack.highFive();

//////////////////////////////////////////////////////////////////////
// Object.create()

//const PersonProto = {
//  printAge() {
//    console.log(2021 - this.birthYear);
//  },

//  initPerson(firstName, birthYear) {
//    this.firstName = firstName;
//    this.birthYear = birthYear;
//  },
//};

//const jack = Object.create(PersonProto);
//console.log(jack);

//jack.name = 'Jack';
//jack.birthYear = 2000;

//jack.printAge();

//console.log(Object.getPrototypeOf(jack) === PersonProto);

//const jane = Object.create(PersonProto);
//jane.initPerson('Jane', 2002);
//jane.printAge();

//////////////////////////////////////////////////////////////////////
// Задание 2

// 1.Решите Задание 1, но теперь с использованием класса ES6
// 2. Добавьте геттер speedMph, который возвращает текущую скорость в милях в час (разделите
// на 1,6)
// 3. Добавьте cеттер speedMph, который устанавливает текущую скорость в милях в час (но
// преобразует его в км / ч перед сохранением значения, умножая ввод на 1,6)
// 4. Создайте новый автомобиль и поэкспериментируйте с методами accelerate() и break(), а также с геттером и сеттером.

//class Car {
//  constructor(name, speed) {
//    this.name = name;
//    this.speed = speed;
//  }

//  accelerate() {
//    this.speed += 5;
//    console.log(`${this.name} двигается со скоростью ${this.speed} км/ч.`);
//  }

//  breake() {
//    this.speed -= 5;
//    console.log(`${this.name} двигается со скоростью ${this.speed} км/ч.`);
//  }

//  get speedMph() {
//    return this.speed / 1.6;
//  }

//  set speedMph(speed) {
//    this.speed = speed * 1.6;
//  }
//}

//const honda = new Car('Honda', 120);
//const bmw = new Car('BMW', 150);

//honda.accelerate();
//honda.accelerate();
//honda.accelerate();
//honda.accelerate();
//honda.accelerate();
//honda.accelerate();

//bmw.breake();
//bmw.breake();
//bmw.breake();
//bmw.breake();

//console.log(honda.speedMph);

//honda.breake();
//honda.speedMph = 20;
//console.log(honda.speed);

//////////////////////////////////////////////////////////////////////

// Наследование "Классов". Функции-Конструкторы

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.printAge = function () {
  console.log(2021 - this.birthYear);
};

const Student = function (firstName, birthYear, dept) {
  Person.call(this, firstName, birthYear);
  this.dept = dept;
};

// Связываем прототипы
Student.prototype = Object.create(Person.prototype);

// Student.prototype = Person.prototype;

Student.prototype.introduce = function () {
  console.log(
    `My name is ${this.firstName} and I study at the "${this.dept}" department.`
  );
};

const jack = new Student('Jack', 2000, 'Programming');
console.log(jack);
jack.introduce();
jack.printAge();

// console.log(jack.__proto__);
console.log(Object.getPrototypeOf(jack));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(jack)));

console.log(jack instanceof Student);
console.log(jack instanceof Person);
console.log(jack instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
