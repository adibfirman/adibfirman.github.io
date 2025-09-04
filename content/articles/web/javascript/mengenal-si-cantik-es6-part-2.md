---
title: Mengenal Si-Cantik ES6 (Part 2)
date: "2018-10-23"
updatedAt: "2018-10-23"
excerpt: Pengenalan EcmaScript (ES6) bagian 2/2
copyrightCover: 'Photo by <a href="https://unsplash.com/@growtika?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Growtika</a> on <a href="https://unsplash.com/photos/a-computer-screen-with-a-keyboard-and-a-box-with-a-logo-YOEHA0Ou8ZY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a> '
isRegional: true
---

Pada part [sebelumnya](/articles/mengenal-si-cantik-es6-part-1) kita sudah berkenalan dengan ES6 dan juga beberapa fungsi pada ES6 contohnya pendeklarasian variabel, lalu pada part kali ini kita akan mengupas tuntaskan tentang si-cantik ES6 ini, langsung saja beeraaanggkaattt….

---

## 1. Template Literal (Template String)

ini adalah salah satu fungsi pada **ES6** yang menurut saya, ini yang sangat membuat kodingan kita menjadi rapih, maksudnya apa sih? pada saat kita ingin menyambungkan antara string dengan integer atau apapun itu, biasanya kita menggunakan syntax **ES5** yang biasa disebut juga `concatenate`, contohnya seperti ini

```jsx
const a = 10;
const b = 10;

console.log("Hasil dari a + b = " + (a + b)); // Hasil dari a + b = 20
```

dan ini yang menurut saya kadang ribet (menjelimet) untuk membaca sebuah kode (apalagi jika kita berada dalam sebuah tim, kita tidak ingin membuat tim kita kerepotan membaca kode kita bukan?). Dengan template literal-nya **ES6** maka kita akan mengubahnya seperti ini

```jsx
const a = 10;
const b = 10;

console.log(`Hasil dari a + b = ${a + b}`); // Hasil dari a + b = 20
```

mudah dibaca bukan? tetapi kode kita ada beberapa perubahan yaitu

- Kita harus menggunakan sebuah back-tick `` `...` ``
- Penggabungan antara `dolar-sign` dan juga sebuah buka tutup kurung kurawal, seperti ini `${…}`

dan juga enaknya menggunakan template literal ini kita bisa membuat baris baru pada kode kita contohnya seperti ini

```jsx
const a = 10;
const b = 10;

console.log(`Hasil dari
  a + b = ${a + b}`);
/*
  Hasil dari
  a + b = 20
*/
```

dengan kita membuat sebuah baris baru pada kode kita maka otomatis akan membuat sebuah **Line Feed (\n)**.

## 2. Dari CommonJs modules menjadi ES6 Modules

Sebenarnya di **ES5** sendiri sistem menggunakan `module pattern` udah jalan sih, sebelum itu saya menjelaskan yang saya pahami tentang module pattern di javascript itu yaitu, jadi kita punya list code yang banyak dan kita buat didalam satu file, untuk menampung list code - code tersebut, langsung saja contohnya

```jsx
var sqrt = Math.sqrt;
function square(x) {
  return x * x;
}

function diag(x, y) {
  return sqrt(square(x) + square(y));
}
module.exports = { sqrt: sqrt, square: square, diag: diag };
```

nah cara import di tempat lain seperti ini

```jsx
var square = require("lib").square;
var diag = require("lib").diag;

console.log(square(11)); // 121
console.log(diag(4, 3)); // 5
```

ada juga alternatifnya, bisa kita buat satu variable dan nanti variable ini akan jadi sebuah object untuk mengakses fungsi yang ada di `lib.js`

```jsx
var lib = require("lib");
console.log(lib.square(11)); // 121
console.log(lib.diag(4, 3)); // 5
```

contoh diatas ialah salah contoh dari **ES5**, nah bagaimana `module pattern` pada **ES6**

```jsx
export const sqrt = Math.sqrt;
export function square(x) {
  return x * x;
}

export function diag(x, y) {
  return sqrt(square(x) + square(y));
}
```

kunci dari sintax diatas ialah kita bisa langsung export fungsi kita `export function blahblah` dan untuk mendapatkan datanya ada dua cara yaitu, yaitu

```jsx
// ------ file-1.js ------
import * as lib from "lib"; // (A)

console.log(lib.square(11)); // 121
console.log(lib.diag(4, 3)); // 5

// ------ file-2.js ------
import { square, diag } from "lib"; // (A)

console.log(square(11)); // 121
console.log(diag(4, 3)); // 5
```

bedanya pada file `file-1.js` kita import semua fungsi dan dijadikan sebuah satu object yaitu `lib` dan pada `file-2.js` kita meng-extractnya dengan cara [`Destructuring`](https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/)

Untuk sekarang saya hanya membuat beberapa example dari **ES6**, yang sebenarnya banyak sekali fitur yang disediakan oleh **ES6**, jika kalian memang masih belum kenyang, banyak sih resource atau sumber balajar salah satu yang bisa saya berikan ialah [ES6 In Depth](https://hacks.mozilla.org/category/es6-in-depth/) by **Mozilla**
