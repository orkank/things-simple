<br />
<p align="center">
<h3 align="center">Some JavaScript Tricks</h3>
</p>
<br />
<h4>Değişken Bildirimi (Declaring variables)</h4>

```javascript
// longhand
let x;
let y = 20;

// Shorthand
let x,
  y = 20;
```

```javascript
//Birden çok değişkene değer atama

// Longhand
let a, b, c;

a = 5;
b = 8;
c = 12;

//Shorthand
let [a, b, c] = [5, 8, 12];
```

```javascript
//Ternary operator

//Longhand
let marks = 26;
let result;
if (marks >= 30) {
  result = "Pass";
} else {
  result = "Fail";
}

//Shorthand
let result = marks >= 30 ? "Pass" : "Fail";
```

```javascript
//Varsayılan değer atama

//Longhand
let imagePath;

let path = getImagePath();

if (path !== null && path !== undefined && path !== "") {
  imagePath = path;
} else {
  imagePath = "default.jpg";
}

//Shorthand
let imagePath = getImagePath() || "default.jpg";
```

```javascript
//AND(&&) operatörü kullanımı

//Longhand
if (isLoggedin) {
  goToHomepage();
}

//Shorthand
isLoggedin && goToHomepage();
```

```javascript
// İki değişkeni değiştirme (Swap two variables)

let x = "Hello",
  y = 55;

//Longhand
const temp = x;
x = y;
y = temp;

//Shorthand
[x, y] = [y, x];

// Çıktı:
// x: 55
// y: Hello
```

```javascript
// Arrow Function

//Longhand
function add(num1, num2) {
  return num1 + num2;
}

//Shorthand
const add = (num1, num2) => num1 + num2;
```

```javascript
// Template Literals

//Longhand
console.log("You got a missed call from " + number + " at " + time);

//Shorthand
console.log(`You got a missed call from ${number} at ${time}`);
```

```javascript
// Çok Satırlı Dizeler (Multi-line String)

//Longhand
console.log(
  "JavaScript, often abbreviated as JS, is a\n" +
    "programming language that conforms to the \n" +
    "ECMAScript specification. JavaScript is high-level,\n" +
    "often just-in-time compiled, and multi-paradigm."
);

//Shorthand
console.log(
  `JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm.`
);
```

```javascript
// Çoklu koşul kontrolü (Multiple condition checking)

//Longhand
if (value === 1 || value === "one" || value === 2 || value === "two") {
  // Execute some code
}

// Shorthand 1
if ([1, "one", 2, "two"].indexOf(value) >= 0) {
  // Execute some code
}

// Shorthand 2
if ([1, "one", 2, "two"].includes(value)) {
  // Execute some code
}
```

```javascript
// Nesneye değer atama (Object Property Assignment)

let firstname = "John";
let lastname = "Mark";

//Longhand
let obj = { firstname: firstname, lastname: lastname };

//Shorthand
let obj = { firstname, lastname };
```

```javascript
// Dizeleri sayılara dönüştürme

//Longhand
let total = parseInt("453");
let average = parseFloat("42.6");

//Shorthand
let total = +"453";
let average = +"42.6";
```

```javascript
// Bir dizeyi birkaç kez tekrarlama

//Longhand
let str = "";
for (let i = 0; i < 5; i++) {
  str += "Hello ";
}
console.log(str); // Hello Hello Hello Hello Hello

// Shorthand
"Hello ".repeat(5);
```

```javascript
// Üs Alma

//Longhand
const power = Math.pow(4, 3); // 64

// Shorthand
const power = 4 ** 3; // 64
```

```javascript
// Sayıları aşağıya yuvarlama

//Longhand
const floor = Math.floor(6.8); // 6

// Shorthand
const floor = ~~6.8; // 6
```

```javascript
// Dizideki maksimum ve minimum sayıları bulmak

// Shorthand
const arr = [2, 8, 15, 4];
Math.max(...arr); // 15
Math.min(...arr); // 2
```

```javascript
// For loop

let arr = [10, 20, 30, 40];

//Longhand
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//Shorthand
//for of loop
for (const val of arr) {
  console.log(val);
}

//for in loop
for (const index in arr) {
  console.log(arr[index]);
}

let obj = { x: 20, y: 50 };

for (const key in obj) {
  console.log(obj[key]);
}
```

```javascript
//Dizilerin birleştirilmesi

let arr1 = [20, 30];

//Longhand
let arr2 = arr1.concat([60, 80]); // [20, 30, 60, 80]

//Shorthand
let arr2 = [...arr1, 60, 80]; // [20, 30, 60, 80]
```

```javascript
//Dizeden karakter alma

let str = "jscurious.com";

//Longhand
str.charAt(2); // c

//Shorthand
str[2]; // c
```

```javascript
//Dinamik nesne

const dynamic = "email";

const user = {
  name: "John",
  lastname: "Doe",
  [dynamic]: "john@example.com",
};

console.log(user);

// {
//   name: "John",
//   lastname: "Doe",
//   email: "john@example.com"
// }
```
