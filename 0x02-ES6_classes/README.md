# 0x02. ES6 Classes

## Resources

### Read or watch:

- [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Metaprogramming](https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/#symbolspecies)

## Overview

This project covers the concepts of Object-Oriented Programming (OOP) using ES6 classes in JavaScript. By the end of this project, you should be able to explain and implement the following concepts:

- How to define a class
- How to add methods to a class
- Why and how to add static methods to a class
- How to extend a class from another class
- Metaprogramming and symbols

## Learning Objectives

- Define a class in JavaScript using ES6 syntax.
- Add instance methods and static methods to a class.
- Extend a class from a parent class.
- Utilize metaprogramming techniques and symbols in JavaScript.

## Requirements

- All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x.
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`.
- All files should end with a new line.
- A `README.md` file, at the root of the folder of the project, is mandatory.
- Your code should use the `.js` extension.
- Your code will be tested using `Jest` and the command `npm run test`.
- Your code will be verified against lint using `ESLint`.
- Your code needs to pass all the tests and lint. You can verify the entire project running `npm run full-test`.

## Setup

### Install NodeJS 12.11.x

In your home directory:

```sh
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

Verify installation:

```sh
nodejs -v
# v12.11.1
npm -v
# 6.11.3
```

### Install Jest, Babel, and ESLint

In your project directory, install Jest, Babel, and ESLint by using the supplied `package.json` and run:

```sh
npm install
```

### Configuration Files

Add the following files to your project directory:

#### `package.json`

<details>
<summary>Click to show/hide file contents</summary>
```json
{
  // package.json content
}
```
</details>

#### `babel.config.js`

<details>
<summary>Click to show/hide file contents</summary>
```js
module.exports = {
  presets: [
    '@babel/preset-env',
  ],
};
```
</details>

#### `.eslintrc.js`

<details>
<summary>Click to show/hide file contents</summary>
```js
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
  },
};
```
</details>

Remember to run `npm install` when you have the `package.json`.

## Tasks

### 0. You used to attend a place like this at some point

**File:** `0-classroom.js`

Implement a class named `ClassRoom`:

- Prototype: `export default class ClassRoom`
- Accepts one attribute named `maxStudentsSize` (Number) and assigns it to `_maxStudentsSize`.

**Example:**

```js
import ClassRoom from './0-classroom.js';

const room = new ClassRoom(10);
console.log(room._maxStudentsSize); // 10
```

### 1. Let's make some classrooms

**File:** `1-make_classrooms.js`

Import the `ClassRoom` class from `0-classroom.js`.

Implement a function named `initializeRooms`:

- Returns an array of 3 `ClassRoom` objects with the sizes 19, 20, and 34 (in this order).

**Example:**

```js
import initializeRooms from './1-make_classrooms.js';

console.log(initializeRooms());
// [
//   ClassRoom { _maxStudentsSize: 19 },
//   ClassRoom { _maxStudentsSize: 20 },
//   ClassRoom { _maxStudentsSize: 34 }
// ]
```

### 2. A Course, Getters, and Setters

**File:** `2-hbtn_course.js`

Implement a class named `HolbertonCourse`:

- Constructor attributes: `name` (String), `length` (Number), `students` (Array of Strings).
- Verify the type of attributes during object creation.
- Store each attribute in an underscore attribute version (e.g., `name` is stored in `_name`).
- Implement a getter and setter for each attribute.

**Example:**

```js
import HolbertonCourse from './2-hbtn_course.js';

const c1 = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);
console.log(c1.name); // ES6
c1.name = 'Python 101';
console.log(c1);

try {
  c1.name = 12;
} catch (err) {
  console.log(err); // TypeError: Name must be a string
}

try {
  const c2 = new HolbertonCourse('ES6', '1', ['Bob', 'Jane']);
} catch (err) {
  console.log(err); // TypeError: Length must be a number
}
```

### 3. Methods, static methods, computed methods names..... MONEY

**File:** `3-currency.js`

Implement a class named `Currency`:

- Constructor attributes: `code` (String), `name` (String).
- Store each attribute in an underscore attribute version (e.g., `name` is stored in `_name`).
- Implement a getter and setter for each attribute.
- Implement a method named `displayFullCurrency` that returns the attributes in the format `name (code)`.

**Example:**

```js
import Currency from './3-currency.js';

const dollar = new Currency('$', 'Dollars');
console.log(dollar.displayFullCurrency()); // Dollars ($)
```

### 4. Pricing

**File:** `4-pricing.js`

Import the class `Currency` from `3-currency.js`.

Implement a class named `Pricing`:

- Constructor attributes: `amount` (Number), `currency` (Currency).
- Store each attribute in an underscore attribute version (e.g., `name` is stored in `_name`).
- Implement a getter and setter for each attribute.
- Implement a method named `displayFullPrice` that returns the attributes in the format `amount currency_name (currency_code)`.
- Implement a static method named `convertPrice` that accepts two arguments: `amount` (Number), `conversionRate` (Number). The function should return the amount multiplied by the conversion rate.

**Example:**

```js
import Pricing from './4-pricing.js';
import Currency from './3-currency.js';

const p = new Pricing(100, new Currency('EUR', 'Euro'));
console.log(p);
console.log(p.displayFullPrice()); // 100 Euro (EUR)
```

### 5. A Building

**File:** `5-building.js`

Implement a class named `Building`:

- Constructor attributes: `sqft` (Number).
- Store each attribute in an underscore attribute version (e.g., `name` is stored in `_name`).
- Implement a getter for each attribute.
- Consider this class as an abstract class. Ensure that any class that extends from it implements a method named `evacuationWarningMessage`. If a class that extends from it does not have an `evacuationWarningMessage` method, throw an error with the message `Class extending Building must override evacuationWarningMessage`.

**Example:**

```js
import Building from './5-building.js';

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {}

try {
  new TestBuilding(200);
} catch (err) {
  console.log(err); // Error: Class extending Building must override evacuationWarningMessage
}
```

### 6. Inheritance

**File:** `6-sky_high.js`

Import `Building` from `5-building.js`.

Implement a class named `SkyHighBuilding` that extends from `Building`:

- Constructor attributes: `sqft` (Number) (must be assigned to the parent class `Building`), `floors` (Number).
- Store each attribute in an underscore attribute version (e.g., `name` is stored in `_name`).
- Implement a getter for each attribute.
- Override the method named `evacuationWarningMessage` and return the string `Evacuate slowly the NUMBER_OF_FLOORS floors`.

**Example:**

```js
import SkyHighBuilding from './6-sky_high.js';

const building = new SkyHighBuilding(140, 60);
console.log(building.sqft); // 140
console.log(building.floors); // 60
console.log(building.evacuationWarningMessage()); // Evacuate slowly the 60 floors
```

### 7. Airport

**File:** `7-airport.js`

Implement a class named `Airport`:

- Constructor attributes: `name` (String), `code` (String).
- Store each attribute in an underscore attribute version (e.g., `name` is stored in `_name`).
- The default string description of the class should return the airport code.

**Example:**

```js
import Airport from './7-airport.js';

const airportSF = new Airport('San Francisco Airport', 'SFO');
console.log(airportSF);
console.log(airportSF.toString()); // [object SFO]
```

### 8. Primitive - Holberton Class

**File:** `8-hbtn_class.js`

Implement a class named `HolbertonClass`:

- Constructor attributes: `size` (Number), `location` (String).
- Store each attribute in an underscore attribute version (e.g., `name` is stored in `_name`).
- When the class is cast into a Number, it should return the size.
- When the class is cast into a String, it should return the location.

**Example:**

```js
import HolbertonClass from './8-hbtn_class.js';

const hb = new HolbertonClass(12, 'San Francisco');
console.log(hb);
console.log(Number(hb)); // 12
console.log(String(hb)); // San Francisco
```

### 9. Hoisting

**File:** `9-hoisting.js`

Fix the code so that it works correctly. The code is meant to create two classes: `Car` and `Boat`.

**Example:**

```js
const c = new Car('Toyota', 'Camry');
const b = new Boat('Sea Ray', '230');

console.log(c);
console.log(b);
```

**Initial code to fix:**

```js
export class Car {
  constructor(brand, model) {
    this._brand = brand;
    this._model = model;
  }

  get brand() {
    return this._brand;
  }

  get model() {
    return this._model;
  }
}

class Boat {
  constructor(brand, model) {
    this._brand = brand;
    this._model = model;
  }

  get brand() {
    return this._brand;
  }

  get model() {
    return this._model;
  }
}

export default Boat;
```

### 10. Vroom

**File:** `10-car.js`

Implement a class named `Car`:

- Constructor attributes: `brand` (String), `motor` (String), `color` (String).
- Store each attribute in an underscore attribute version (e.g., `name` is stored in `_name`).
- Implement a method named `cloneCar`. This method should return a new object of the class.

**Example:**

```js
import Car from './10-car.js';

const car1 = new Car('Toyota', 'Camry', 'Red');
const car2 = car1.cloneCar();
console.log(car1); // Car { _brand: 'Toyota', _motor: 'Camry', _color: 'Red' }
console.log(car2); // Car { _brand: 'Toyota', _motor: 'Camry', _color: 'Red' }
```

### 11. EVCar

**File:** `100-evcar.js`

Import the class `Car` from `10-car.js`.

Implement a class named `EVCar` that extends from `Car`:

- Constructor attributes: `brand` (String), `motor` (String), `color` (String), `range` (String).
- Store each attribute in an underscore attribute version (e.g., `name` is stored in `_name`).
- Implement a method named `cloneCar`. This method should return a new object of the class.

**Example:**

```js
import EVCar from './100-evcar.js';

const evCar = new EVCar('Tesla', 'Model S', 'White', '300 miles');
const evCar2 = evCar.cloneCar();
console.log(evCar); // EVCar { _brand: 'Tesla', _motor: 'Model S', _color: 'White', _range: '300 miles' }
console.log(evCar2); // EVCar { _brand: 'Tesla', _motor: 'Model S', _color: 'White', _range: '300 miles' }
```

## Usage

- Ensure your code passes all tests by running `npm run test`.
- Verify your code quality by running `npm run lint`.
- Full project verification: `npm run full-test`.

This document provides a comprehensive guide to the tasks, requirements, and examples needed for the `0x02. ES6 Classes` project. Ensure to follow the guidelines closely and test your implementation thoroughly.
