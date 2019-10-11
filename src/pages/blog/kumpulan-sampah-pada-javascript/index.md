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
Yaa pada step kali ini adalah step yang paling major atau sangat berpengaruh pada sebuah memory




notes from addy

- before you trying to figuring out why your app is slow, first open a task manager and see memory usage of your app
- using object allocation tracker in devtools if we have momory leak
  -- blue bars is meaning new object has created by memory
  -- dont care about grey bars, its like javascript clear that object
- dont trying to delete the object, cus GC in javascript cannot get a reference before just make your object null or somethink
- use object allocation tracker
