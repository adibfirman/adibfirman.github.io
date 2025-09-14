---
title: Fungsi anonymous, musuhmu ketika development..!!
date: "2020-06-14"
updatedAt: "2020-06-14"
excerpt: Jangan pernah menulis fungsi anonymous di JavaScript
copyrightCover: 'Photo by <a href="https://unsplash.com/@cbpsc1?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Clint Patterson</a> on <a href="https://unsplash.com/photos/man-siting-facing-laptop-dYEuFB8KQJk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>'
isRegional: true
---

Anonymous sendiri sudah tidak asing ditelinga kita yaitu seseorang yang kita tidak ketahui siapa identitas asli sebenarnya, lalu apa hubungannya dengan JavaScript? dan apa hubungannya dengan development kita?

---

Penggunaan _function_ pada JavaScript sudah biasa sekali kita gunakan ntah itu mulai dari `a + b` atau meng-handle side-effect sekalipun, namun terkadang kita masih suka - suka kita dengan penulisan kode tersebut, nah pada JavaScript sendiri penulisan _function_ ada beberapa type yaitu;

- Function sebagai declaration
- Function sebagai expression
- Function sebagai constructor

Saya tidak akan menjelaskan apa perbedaan dari jenis - jenis _function_ diatas, yang saya tegaskan disini adalah penyalahgunaan pada fungsi diatas yang bersifat _anonymous_ contoh seperti ini

```js
(function () {
  throw new Error("disini");
})();
```

contoh diatas saya menggunakan [IIFE (Immediately Invoked Function Expression)](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) jadi ketika browser menjalankan fungsi itu maka akan keluar error seperti ini

![error syntax in dev tools](./image-2.png)

bayangkan _code_ kalian sudah banyak dan memiliki 1001 fungsi yang harus dijalan lalu terdapat error yang tidak inginkan pada fungsi ke 1000 misalkan, karena kita menuliskan fungsinya _anonymous_ jadi kita tidak tau nama fungsinya apa dan errornya dimana, ini akan menjadi sulit untuk kita debug.
Ini dia yang saya bilang bahwa fungsi _anonymous_ itu bahkan bisa jadi musuh ketika _development_ maksudnya ialah, ketika kita sedang development tentu pasti ada saja error yang tidak dinginkan entah itu a, b atau c kalau itu kode yang buat adalah kita yaa it's no problem gitu nah lain cerita ketika kita mempunyai sebuah tim yang besar dan ada error tiba - tiba yang bahkan bukan kita yang membuat? hayoo mau ngapain kita? tapi lain cerita jika kita memberikan sebuah nama

```js
(function iniFungsiKita() {
  throw new Error("disini");
})();
```

lalu ketika kita intip _dev tools_ akan seperti ini

![](./image-3.png)

jadi itu bisa dibilang bahasa keren-nya _named function_ yang artinya _fungsi yang bernama_ \*lol, jadi jika kita melihat devtools akan memperlihatkan sebuah error yang kita tahu fungsi apa yang membuatnya error, jadi jelas bukan? tidak peru menebak - nebak error yang terjadi ada dimana bukan? **"ahh mas kita kan kalau pake module bundler macam webpack gitu jarang nulis function IIFE gitu"** bukan masalah pake module bundler atau gaknya tapi gimana caranya kita konsisten untuk tidak pernah nulis _function_ yang sifatnya _anonymous_ itu paham?

## Kasus lainnya

Oke ini adalah kasus yang menarik, jadi gini terkadang ntah di group atau dikerjaan kita, kita pernah melihat contoh kode yang sifatnya _anonymous_ kalau pada React sendiri contohnya akan seperti ini

```jsx
import React from "react";

export default () => {
  return <h1>Halo dunia</h1>;
};
```

diatas adalah contoh sebuah component yang sifatnya _anonymous_ oke sekarang mari kita coba membuat component tersebut error

```jsx
import React from "react";

export default () => {
  setTimeout(() => {
    console.error("ehh error disini");
  }, 3000);

  return <h1>Halo dunia</h1>;
};
```

dan setelah tiga detik seharusnya kita sudah bisa melihat error yang kita buat, lalu kita liat _stack trace_-nya

![](./image-4.png)

lihat _stack trace_ yang ada pada sebelah kiri kita tidak tau dimana fungsi kita yang barusan kita buat error kan? ini karena kita membuat contohnya hanya bermain pada satu file saja yaitu `App.js` makanya itu akan terlihat di _stack trace_ disisi sebelah kanan, lah seperti yang saya bilang kalau itu error yang mana kodenya bukan punya kita bagaimana ceritanya? mau ngubah ngeri ngeri sedap juga kan? dan kita juga harus meraba - raba, oke kita coba untuk memberikan sebuah nama

```jsx
import React from "react";

export default function IniAdalahAppKita() {
  setTimeout(() => {
    console.error("ehh error disini");
  }, 3000);

  return <h1>Halo dunia</h1>;
}
```

lalu kita coba cek console browser kembali

![](./image-5.png)

ya kan terlihat lebih mudah? jadi kita bisa memastikan juga error ini ada pada fungsi apa, dan tidak meraba sana sani.

## Recap

Jadi ada untuk React sendiri usahakan benar - benar memberikan fungsi itu sebuah nama gak ada ruginya kok, malah untung cotohnya;

- Tidak akan muncul sebagai _Anonymous_ lagi pada _stack trace_ console browser
- Biasanya pada component _dev tools_ React itu tidak akan muncul sebagai _Unknown component_

dan untungnya ada _plugin eslint_ yang membantu kita untuk memeriksa itu semua dan ini dia librarynya [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-anonymous-default-export.md).

\
\
Terima kasih, stay with named function 😎
