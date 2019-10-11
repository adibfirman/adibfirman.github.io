---
title: Kumpulan Sampah di Javascript
date: '2019-12-22'
spoiler: Kumpulan Sampah di javascript?
---

## TL;DR
Pada waktu itu saya menghadiri sebuah konferensi yaitu JSDay, dan juga ini pertama kali diadakan di Indonesia, dan waktu itu [Alex Lakatos](https://twitter.com/lakatos88) membawakan sebuah tema yaitu tentang **Hands on Performance** gitu (saya lupa :peace:) dan beliau menyinggung masalah **Garbage Collection**, dan pada kali ini saya mau menjelaskan apa itu **Garbage Collection**.

## Introduction
Pada kali ini kita akan berbicara tentang Sampah-Sampah pada JS, sebenarnya istilah ini disebut juga dengan **Garbage Collection** oke, selanjutnya kita panggil dengan **GC**, nah **GC** sendiri penjelasan cepatnya ialah **free-up memory** jadi object atau variable yang tidak dipakai akan dibersihkan oleh Javascript Engine itu sendiri, sebenarnya **GC** tidak hanya pada JS bahkan di bahasa pemrograman lain pun istilah ini pasti tidak asing, cuman pada JS sendiri, ini sedikit spesial (ibarat kata beli nasi goreng karetnya dua), **GC** pada javascript ini bekerja secara otomatis, nah kalau pada bahasa _LOW-LEVEL_ programming lainnya itu harus set manual, maksudnya adalah pada seluruh bahasa pemrograman step dasar pada sebuah memory itu

1. Meng-alokasi memory yang ingin kita pake
2. Menggunakan memory itu
3. Bersihkan memory itu

lalu bagaimana dengan JS yang notabennya adalah sebuah _high level_ nah kalau kita melihat step - step diatas, untuk point ke dua itu sudah pasti dasar dari bahasa pemrograman apapun, akan melakukan hal tersebut dan untuk bahasa yang _low level_ step nomor satu dan terakhir itu kita harus menerapkannya secara manual. Selanjutnya kita akan lihat _step by step_ diatas pada JavaScript sendiri.


### Meng-alokasi memory
Jadi pada dasarnya ketika kita men-deklarasikan sebuah variable dan beserta valuenya, JS Engine akan otomatis mengalokasikan sebuah memory sesuai dengan value apa yang kita berikan. Contohnya seperti ini;

```jsx
var abc = 123; // mengalokasi memory untuk integer
var xyz = 'adib'; // mengalokasi memory untuk string
var obj = { a: 1, b: 'adib' } // mengalokasi memory untuk Object
```

### Menggunakan memory yang telah dialokasikan
Sebenarnya ini adalah sebuah step yang sudah saya bahas diatas, yang pastinya setiap bahasa pemrograman akan melakukan sebuah _read and write_ pada memory, jadi jika kita asumsikan dibelakang layar akan melakukan sebuah _read and write_ pada sebuah string, integer ataupun sebuah object.

### Membersihkan memory
Yaa pada step kali ini adalah step yang paling major atau sangat berpengaruh pada sebuah memory yaitu step _pembersihan_ atau bisa dibilang step ini yang dinamakan **Garbage Collection** nah pada JS sendiri GC sudah dilakukan secara otomatis, jadi kapan kita tidak membutuhkan itu JS Engine akan membersihkannya sendiri tetapi karena hal ini otomatis jadi JS Engine sebenarnya hanya mengira ngira apakah ini akan dibersihkan sepenuhnya atau setengahnya saja, maksudnya apa? kita akan bahas dibawah.

## Garbage Collection
Seperti yang dijelaskan diatas, masalah umum **GC** pada JS ialah karena dia otomatis jadi bingung kapan harus **GC** dijalankan, jadi algoritma dasar dari GC adalah mengandalkan sebuah *reference* maksudnya apa?

```jsx
var a = 123

console.log(a) // jadi kita punya `reference` ke variable a
```

nah seperti kode diatas jika kita masih punya sebuah referensi data, **GC** tidak akan membersihkan data tersebut, kira-kira kasarnya seperti itu. Pada dasarnya kode diatas itu memiliki sebuah satu referensi jadi seperti yang kita sebutkan sebelumnya bahwa algoritma **GC** pada javascript ini sangat naif atau masih mengada-ada, sebagai contohnya

```jsx
/**
 * kita membuat sebuah object `x` dimana didalamnya 
 * ada sebuah object juga yaitu object `a`, maksudnya ialah
 * object `x` ini meiliki 2 `reference` pertama dari `x`-nya itu sendiri 
 * dan juga dari object `a` yanag sudah kita buat didalamnya
*/
var x = { 
  a: {
    b: 2
  }
};

/**
 * kita membuat sebuah variable yaitu 
 * variable `y` yang me-reference ke `x`
*/
var y = x;

/**
 * lalu misalkan kita overwrite `x` menjadi 1
 * tenang ini tidak berpengaruh ke variable `y`
 * karena variable `y` membuat sebuah `reference` sendiri
 * terlebih dahulu
*/
x = 1;

/**
 * lalu kita buat lagi variable baru yaitu `z`
 * dimana kita akan mereferensikan ke `y.a`
 * jadi variable kita ini ada 2 reference, yaitu
 * 1. reference ke `y.a` 
 * 2. reference ke `z` variable itu sendiri
*/
var z = y.a;

/**
 * lalu kita overwrite bariable `y`
 * dimana variable ini sebelumnya me-reference ke
 * variable `x`, karena kita ini kita overwrite maka
 * reference yang sebelumnya itu akan dibersihkan (Garbage Collected),
 * tetapi variable `z` sudah mereferensikan dirinya ke `y.a`
 * ini tidak akan dibersihkan
*/
y = 'mozilla';

/**
 * lalu kita overwrite juga variable `z`
 * nah sebelumnya yang variable `z` yang masih memilki reference
 * sekarang benar benar sudah dibersihkan dari memory
*/
z = null;
```

Nah kira-kira seperti itu tentang algoritma **GC** pada JavaScript, cuman sepertinya V8 sudah memiliki sebuah algoritma yang lebih baik lagi, kalau misalkan kita mau melihat apakah app kita memakan sebuah memory yang banyak dan kita gak tau kapan itu terjadi ada beberapa hal bisa kita lakuin.
1. Pertama kita bisa pake `performance monitor` ini bisa dibuka di `devtools -> more tools -> performance monitor`
2. atau menggunakan `Javascript Profiller` ini sama ada di `devtools -> more tools -> Javascript Profiller`

### Referensi Link
- [JSInfo: Garbage Collection](http://javascript.info/garbage-collection)
