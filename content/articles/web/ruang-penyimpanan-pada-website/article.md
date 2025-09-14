---
title: Ruang penyimpanan pada website
date: "2020-06-29"
updatedAt: "2020-06-29"
excerpt: Apa saja dan apakah ada best practice dalam menyimpan sesuatu pada website?
copyrightCover: 'Photo by <a href="https://unsplash.com/@arumvisuals?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Arum Visuals</a> on <a href="https://unsplash.com/photos/a-warehouse-filled-with-lots-of-boxes-and-pallets-VnMbc9Szs-E?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a> '
isRegional: true
---

Pada tulisan kali ini saya tidak ingin panjang lebar, ya ini adalah tulisan sederhana saja semua orang yang berkesinambungan dengan dunia web pasti tau tentang ruang penyimpanan yang ada pada web, tapi terkadang saya liat kebanyakan orang yang baru menempuh di dunia web mereka hanya berbicara tentang `localStorage` dan biasanya itu digunakan untuk menyimpan berbagai macam hal, ntah itu `access-token` dan juga terkadang menyimpan data penting lainnya, nah kali ini saya akan berbicara tentang _best practice_ atau bisa dibilang kita ngulik lah mekanisme apa sih yang terbaik ketika menggunakan ruang penyimpanan pada web?

## Macam - macam penyimpanan

Ya didalam browser pun ada macam - macam penyimpanan yang disediakan diantaranya adalah;
\
\
**Session Storage** ini sudah sering kita dengar, jadi jenis penyimpanan ini bisa dibilang adalah penyimpanan yang sementara dan dia ini sifatnya per-tab, maksudnya ialah contoh ketika kalian men-develop web [contoh.com](#) nah kalian mencoba menyimpan data dengan metode ini, lalu user akan mengunjuni web kalian dan fungsi untuk menyimpan data dengan metode ini ke-trigger lalu tersimpan lah pada ruang penyimpanan browser, tapi user tersebut mentutup tab-nya, yaudah alhasil data yang seharusnya tersimpan dengan motode ini telah terhapus begitu saja.
Dengan metode ini kalian hanya dibatasi sampai dengan **5MB** saja, dan juga ini sifatnya synchronous artinya ini akan memblock main thread, dan ini akan membuat web tidak performa lagi, dan metode ini tidak bisa di akses **web worker** ataupun **service worker**.
\
\
**Local Storage** nah ini dia yang sering saya jumpai pada temen - temen yang baru mempelajari ruang penyimpanan pada browser, biasanya mereka menyimpan sebuah `access_token` dengan metode ini dan itu harus dihindari, dan juga ini hanya memiliki maksimal 5MB, dan dengan metode ruang penyimpanan ini sifatnya adalah synchronous yang artinya akan mem-block main thread juga seperti **Session Storage**.
\
\
**Cookies** kalau ini biasa ada beberapa use case yang digunakan, biasanya untuk menyimpan hal - hal yang tidak begitu banyak gampangnya ini buat nyimpen hal yang tipis - tipis aja, karena ketika kalian menyimpan sesuatu yang lumayan banyak, ini akan mempengaruhi dari segi HTTP request, maksudnya cookies ini akan trus dipanggil di setiap kita melakukan sebuah request maka dari itu sifat dari cookies ini adalah synchoronous dan akan blocking rendering pada main thread.
\
\
**Native file system** metode penyimpanan ini jujur saya aja tidak pernah pakai, tetapi setelah ngulik sana sini definisi secara umumnya ialah, kita bisa akses ruang penyimpanan dalam storage disk kita dan ini layaknya sebuah native app pada desktop maupun handphone.
\
\
**WebSQL dan indexedDB** untuk metode WebSQL sendiri hal ini sudah mulai deprecated bahkan dihilangkan dari jagat per-website-an dan sebagai gantinya menggunakan indexedDB, nah indexedDB ini biasanya digunakan untuk menyimpan data yang cukup signifikan ya, contohnya misalkan menyimpan data 100rb list data.

## Rumus penyimpanan yang umum

Hal umum yang biasa digunakan untuk sebuah penyimpanan ialah seperti ini

- Untuk menyimpanan file ntah itu file JS, CSS, atau pun HTML biasanya bisa menggunakan penyimpanan cache.
- dan untuk hal hal umum ntah menyimpan data array object atau apapun itu biasanya menggunakan indexedDB

## Seberapa banyak penyimpanan yang dibolehkan?

Banyak buanget kita bisa menyimpan data - data yang kita inginkan sebanyak apapun, tetapi biasanya di setiap browser itu berbeda, diantaranya

- **Google Chrome** akan menyediakan ruang penyimpanan sekitar 60%
- **Mozilla** sekitar 2 GB dari setiap origin domain
- **Internet Explorer 10 keatas**, hanya sekitar 250MB tetapi kalian akan mendapatkan sebuah warning jika penggunaan sudah mencapai 10MB
- **Safari** hanya menyediakan sekitar 2GB, tetapi sekiranya kita melebihi 200MB atau sudah mencapai kapasitas itu, safari akan meminta izin kepada user apakah ruang penyimpanan boleh digunakan lebih dari 200MB.

kalau dulu browser biasanya hanya menyediakan sekitar 50MB lebih dari itu browser akan memberikan sebuah warning bahwa apakah user mau memperbolehkan ruang penyimpanan lebih dari 50MB, tetapi pada modern browser sekarang secara umuk browser sudah menghilangkan fitur ini, kecuali untuk safari, safari sendiri masih memberikan warning jika user sudah memakai ruang penyimpanan lebih dari sama dengan 750MB dan tentunya dengan maksimal 1.1GB, jika lebih dari ini jangan harap data kalian akan disimpan dengan baik.
\
\
Terkadang memang mengasyikan menyimpan segala sesuatu didalam browser, nah tetapi kita juga harus mengkhawatirkan ruang penyimpanan tersebut, lalu cara mengecek ruang penyimpanan yang tersedia adalah menggunakan `StorageManager` API, contohnya seperti ini

```js
if (navigator.storage && navigator.storage.estimate) {
  const quota = await navigator.storage.estimate();
  const percentageUsed = (quota.usage / quota.quota) * 100; // persentase penggunaan
  const remaining = quota.quota - quota.usage; // ini adalah sisa dari ruang penyimpanan

  // secara kasarnya seperti ini
  // quota.usage -> banyaknya data yang digunakan
  // quota.quota -> maksimum data yang bisa digunakan
}
```

Jadi dengan `StorageManager` kalian bisa mengecek berapasih kuota yang tersisa pada ruang penyimpanan yang tersedia? tetapi API `StorageManager` tidak semua browser meng-implementasikan hal ini, kalian juga harus mencegah error tersebut pada masing - masing ruang penyimpanan yang digunakan contohnya
\
\
Cara meng-handle error kapasitas berlebihan jika menggunakan indexedDB

```js
import * as idb from "idb";

const transaction = idb.transaction(["entries"], "readwrite");

transaction.onabort = function (event) {
  const error = event.target.error;
  if (error.name == "QuotaExceededError") {
    // handle kuota yang berlebihan
  }
};
```

Lalu jika pada ruang penyimpanan cache seperti ini

```js
try {
  const cache = await caches.open("my-cache");
  await cache.add(new Request("/sample1.jpg"));
} catch (err) {
  if (error.name === "QuotaExceededError") {
    // handle kuota yang berlebihan
  }
}
```

Lalu apa pentingnya sih meng-handle error kuota yang berlebihan, penting..!! dalam artian kalian sering menggunakan ruang penyimpanan browser, karena kita tidak ingin user mendapatkan error yang tidak diinginkan intinya.

## Tipe ruang penyimpanan

Tentu pada ruang penyimpanan sebuah browser ada dua tipe yaitu "Best Effort" dan "Persistance" bedanya apa? nah kalau "Best Effor" itu biasanya akan melakukan cleanup otomatis yang dilakukan oleh browser itu sendiri seperti indexedDB, cache storage, local storage dan lain sebagainya. Kalau "Persistance" itu biasaya kita harus meng-hapus secara manual biasanya kita melakukannya melalui settings browser.

## Penutup

Kalian bebas menggunakan metode ruang penyimpanan apapun tetapi best practicenya ialah adalah menggunakan **Rumus** yang sudah saya kasih tau diatas tadi, dan jika kalian penasaran dengan limit dari ruang penyimpanan browser kalian bisa berkunjung ke [sini](https://demo.agektmr.com/storage/).
\
\
Terima Kasih.
