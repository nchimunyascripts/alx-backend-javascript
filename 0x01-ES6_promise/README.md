# 0x01. ES6 Promises

### Resources

Read or watch:

- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [JavaScript Promise: An introduction](https://developers.google.com/web/fundamentals/primers/promises)
- [Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
- [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Throw / Try](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)

### Learning Objectives

At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

- Promises (how, why, and what)
- How to use the `then`, `resolve`, `catch` methods
- How to use every method of the `Promise` object
- Throw / Try
- The `await` operator
- How to use an `async` function

### Requirements

- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All your files should end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should use the `.js` extension
- Your code will be tested using `Jest` and the command `npm run test`
- Your code will be verified against lint using `ESLint`
- All of your functions must be exported

### Setup

#### Install NodeJS 12.11.x

(in your home directory):

```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
nodejs -v
# v12.11.1
npm -v
# 6.11.3
```

#### Install Jest, Babel, and ESLint

In your project directory, install Jest, Babel, and ESLint by using the supplied `package.json` and run `npm install`.

### Configuration Files

Add the files below to your project directory

#### `package.json`

<details>
  <summary>Click to show/hide file contents</summary>
  <!-- Add your package.json contents here -->
</details>

#### `babel.config.js`

<details>
  <summary>Click to show/hide file contents</summary>
  <!-- Add your babel.config.js contents here -->
</details>

#### `utils.js`

Use when you get to tasks requiring `uploadPhoto` and `createUser`.

<details>
  <summary>Click to show/hide file contents</summary>
  <!-- Add your utils.js contents here -->
</details>

#### `.eslintrc.js`

<details>
  <summary>Click to show/hide file contents</summary>
  <!-- Add your .eslintrc.js contents here -->
</details>

And don’t forget to run:

```bash
npm install
```

### Response Data Format

- `uploadPhoto` returns a response with the format:
  ```json
  {
    "status": 200,
    "body": "photo-profile-1"
  }
  ```
- `createUser` returns a response with the format:
  ```json
  {
    "firstName": "Guillaume",
    "lastName": "Salva"
  }
  ```

### Tasks

#### 0. Keep every promise you make and only make promises you can keep

**Mandatory**

Return a Promise using this prototype:

```javascript
function getResponseFromAPI()
```

```bash
bob@dylan:~$ cat 0-main.js
import getResponseFromAPI from "./0-promise.js";

const response = getResponseFromAPI();
console.log(response instanceof Promise);

bob@dylan:~$ npm run dev 0-main.js
true
```

**Repo:**

- GitHub repository: `alx-backend-javascript`
- Directory: `0x01-ES6_promise`
- File: `0-promise.js`

#### 1. Don't make a promise...if you know you can't keep it

**Mandatory**

Using the prototype below, return a promise. The parameter is a boolean.

```javascript
function getFullResponseFromAPI(success)
```

When the argument is:

- `true`: resolve the promise by passing an object with 2 attributes:
  - `status: 200`
  - `body: 'Success'`
- `false`: reject the promise with an error object with the message `The fake API is not working currently`

```bash
bob@dylan:~$ cat 1-main.js
import getFullResponseFromAPI from './1-promise';

console.log(getFullResponseFromAPI(true));
console.log(getFullResponseFromAPI(false));

bob@dylan:~$ npm run dev 1-main.js
Promise { { status: 200, body: 'Success' } }
Promise {
  <rejected> Error: The fake API is not working currently
    ...
bob@dylan:~$
```

**Repo:**

- GitHub repository: `alx-backend-javascript`
- Directory: `0x01-ES6_promise`
- File: `1-promise.js`

#### 2. Catch me if you can!

**Mandatory**

Using the function prototype below:

```javascript
function handleResponseFromAPI(promise)
```

Append three handlers to the function:

- When the Promise resolves, return an object with the following attributes:
  - `status: 200`
  - `body: success`
- When the Promise rejects, return an empty `Error` object
- For every resolution, log `Got a response from the API` to the console

```bash
bob@dylan:~$ cat 2-main.js
import handleResponseFromAPI from "./2-then";

const promise = Promise.resolve();
handleResponseFromAPI(promise);

bob@dylan:~$ npm run dev 2-main.js
Got a response from the API
```

**Repo:**

- GitHub repository: `alx-backend-javascript`
- Directory: `0x01-ES6_promise`
- File: `2-then.js`

#### 3. Handle multiple successful promises

**Mandatory**

In this file, import `uploadPhoto` and `createUser` from `utils.js`. Knowing that the functions in `utils.js` return promises, use the prototype below to collectively resolve all promises and log `body firstName lastName` to the console.

```javascript
function handleProfileSignup()
```

In the event of an error, log `Signup system offline` to the console.

```bash
bob@dylan:~$ cat 3-main.js
import handleProfileSignup from "./3-all";

handleProfileSignup();

bob@dylan:~$ npm run dev 3-main.js
photo-profile-1 Guillaume Salva
```

**Repo:**

- GitHub repository: `alx-backend-javascript`
- Directory: `0x01-ES6_promise`
- File: `3-all.js`

#### 4. Simple promise

**Mandatory**

Using the following prototype:

```javascript
function signUpUser(firstName, lastName)
```

Return a resolved promise with this object:

```json
{
  "firstName": "value",
  "lastName": "value"
}
```

```bash
bob@dylan:~$ cat 4-main.js
import signUpUser from "./4-user-promise";

console.log(signUpUser("Bob", "Dylan"));

bob@dylan:~$ npm run dev 4-main.js
Promise { { firstName: 'Bob', lastName: 'Dylan' } }
```

**Repo:**

- GitHub repository: `alx-backend-javascript`
- Directory: `0x01-ES6_promise`
- File: `4-user-promise.js`

#### 5. Reject the promises

**Mandatory**

Write and export a function named `uploadPhoto`. It should accept one argument `fileName` (string). The function should return a Promise rejecting with an Error and the string `"$fileName cannot be processed"`.

```javascript
export default function uploadPhoto(filename)
```

```bash
bob@dylan:~$ cat 5-main.js
import uploadPhoto from './5-photo-reject';

console.log(uploadPhoto('guillaume.jpg'));

bob@dylan:~$ npm run dev 5-main.js
Promise {
  <rejected> Error: guillaume.jpg cannot be processed
}
```

**Repo:**

- GitHub repository: `alx-backend-javascript`
- Directory: `0x01-ES6_promise`
- File: `5-photo-reject.js`

#### 6. Handle multiple promises

**Mandatory**

Import `signUpUser` from `4-user-promise.js` and `uploadPhoto` from `5-photo-reject.js`. Write and export a function named `handleProfileSignup`. It should accept three arguments `firstName` (string), `lastName

`(string), and`fileName` (string). The function should call the two other functions. When the promises are all settled it should return an array with the following structure:

```json
[
  {
    "status": "status_of_the_promise",
    "value": "value or error returned by the Promise"
  }
]
```

```bash
bob@dylan:~$ cat 6-main.js
import handleProfileSignup from './6-final-user';

console.log(handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg"));

bob@dylan:~$ npm run dev 6-main.js
Promise { <pending> }
```

**Repo:**

- GitHub repository: `alx-backend-javascript`
- Directory: `0x01-ES6_promise`
- File: `6-final-user.js`

#### 7. Load balancer

**Mandatory**

Write and export a function named `loadBalancer`. It should accept two arguments `chinaDownload` (Promise) and `USDownload` (Promise). The function should return the value returned by the promise that resolved the first.

```javascript
export default function loadBalancer(chinaDownload, USDownload)
```

```bash
bob@dylan:~$ cat 7-main.js
import loadBalancer from "./7-load_balancer";

const ukSuccess = 'Downloading from UK is faster';
const frSuccess = 'Downloading from FR is faster';

const promiseUK = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, ukSuccess);
});

const promiseUKSlow = new Promise(function(resolve, reject) {
    setTimeout(resolve, 400, ukSuccess);
});

const promiseFR = new Promise(function(resolve, reject) {
    setTimeout(resolve, 200, frSuccess);
});

const test = async () => {
    console.log(await loadBalancer(promiseUK, promiseFR));
    console.log(await loadBalancer(promiseUKSlow, promiseFR));
}

test();

bob@dylan:~$ npm run dev 7-main.js
Downloading from UK is faster
Downloading from FR is faster
```

**Repo:**

- GitHub repository: `alx-backend-javascript`
- Directory: `0x01-ES6_promise`
- File: `7-load_balancer.js`

#### 8. Throw error / try catch

**Mandatory**

Write a function named `divideFunction` that will accept two arguments: `numerator` (Number) and `denominator` (Number). When the `denominator` argument is equal to `0`, the function should throw a new error with the message `cannot divide by 0`. Otherwise, it should return the numerator divided by the denominator.

```javascript
export default function divideFunction(numerator, denominator)
```

```bash
bob@dylan:~$ cat 8-main.js
import divideFunction from './8-try';

console.log(divideFunction(10, 2));
console.log(divideFunction(10, 0));

bob@dylan:~$ npm run dev 8-main.js
5
..../8-try.js:15
  throw Error('cannot divide by 0');
  ^
```

**Repo:**

- GitHub repository: `alx-backend-javascript`
- Directory: `0x01-ES6_promise`
- File: `8-try.js`

#### 9. Throw an error

**Mandatory**

Write a function named `guardrail` that will accept one argument `mathFunction` (Function). This function should create and return an array named `queue`. When the `mathFunction` function is executed, the value returned by the function should be appended to the queue. If this function throws an error, the error message should be appended to the queue. In every case, the message `Guardrail was processed` should be added to the queue.

```bash
bob@dylan:~$ cat 9-main.js
import guardrail from './9-try';
import divideFunction from './8-try';

console.log(guardrail(() => { return divideFunction(10, 2)}));
console.log(guardrail(() => { return divideFunction(10, 0)}));

bob@dylan:~$ npm run dev 9-main.js
[ 5, 'Guardrail was processed' ]
[ 'Error: cannot divide by 0', 'Guardrail was processed' ]
```

**Repo:**

- GitHub repository: `alx-backend-javascript`
- Directory: `0x01-ES6_promise`
- File: `9-try.js`
