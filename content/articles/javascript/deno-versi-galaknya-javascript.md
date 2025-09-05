---
title: Deno-saurus versi galaknya JavaScript?
date: "2020-05-17"
updatedAt: "2020-05-17"
excerpt: Bermain dengan Deno, a secure runtime untuk JavaScript dan TypeScript
copyrightCover: 'Photo by <a href="https://unsplash.com/@proskurovskiy?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Volodymyr Proskurovskyi</a> on <a href="https://unsplash.com/photos/a-blurry-photo-of-a-subway-train-p6K8ar-gCf8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a> '
isRegional: true
---

Beberapa hari lalu deno akhirnya release dengan versi stablenya **v1.0.0** dan deno sendiri sudah di mention tahun lalu oleh mas **Ryan Dahl** seseorang yang super jenius yang membuat NodeJS juga. Secara garis besar ketika kita melihat halaman dokumentasi resminya deno, deno sendiri bisa di dibilang seperti ini.

> "Deno is a JavaScript/TypeScript runtime with secure defaults and a great developer experience."

yang artinya ketika mendevelop JavaScript/TypeScript sebenarnya keduanya tidak secure secara runtime, maksudnya apa? apa kalian tidak asing dengan ini?

![error not defined](./img-1.png)

ya error diatas sering kita jumpai ketika kita develop dengan JavaScript lalu ketika sudah live ada saja yang hal yang tidak diinginkan muncul, dengan deno dia akan menjamin bahwa kita sebenarnya tidak akan menjumpai lagi hal hal yang seperti itu lagi.

---

Ada beberapa features yang di highlight pada halaman deno, yaitu

- Secure secara default, tidak ada akses file, internet dan lain sebagainya.
- menggunakan TypeScript secara default.
- Menggunakan ES6+

ketika kita melihat hal diatas, ada iming iming TypeScript (kedepannya kita panggil TS), TS sendiri memang secure dan dia akan menjamin tidak ada error pada saat compile time saja, tidak secara runtime karena, TS sendiri akan di compile ke JavaScript juga ujung ujungnya.

## Permainan dimulai

Oke selanjutnya kita akan mencoba hanya membuat `Hello World` seperti biasa, untuk kalian yang belum meng-install deno, coba lihat dokumentasi resminya [disini](https://deno.land/manual/getting_started/installation), ketika sudah menginstal buat sebuah file dengan nama `main.ts` dengan isi seperti ini

```ts
console.log("Hello World");
```

lalu jalankan dengan cara

```sh
deno run main.ts
```

ketika sudah dijalankan kita akan melihat console dengan result seperti ini

```sh
Compile file:///dir/bla/bla/main.ts
Hello World
```

codenya tidak ada bedanya dengan JS yang biasa kita gunakan, tetapi karena diawal kita sudah mention **tidak ada akses internet dan file** hmm maksudnya apa? nah coba kita tulis code untuk fetch sebuah API

```ts
const apiURL = "https://jsonplaceholder.typicode.com/posts/1";
const fetchAPI = await fetch(apiURL);
const resultPost = await fetchAPI.json();

console.log(resultPost);
```

lalu jalankan lagi, lalu liat console maka hasilnya akan seperti ini

```sh-result
Compile file:///bla/bla/main.ts
error: Uncaught PermissionDenied: network access to "https://jsonplaceholder.typicode.com/posts/1", run again with the --allow-net flag
```

jadi ketika kita mencoba akses sebuah API deno melarang kita untuk menggunakan akses internet, lalu ketika kita mencoba menambahkan flag sesuai dengan alert errornya

```sh
deno run --allow-net main.ts
```

dan ketika melihat console baru kita akan melihat result dari API tersebut

```sh-result
Compile file:///bla/bla/main.ts
{
 userId: 1,
 id: 1,
 title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
 body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas..."
}
```

lalu menariknya deno menggunakan ES6 dan pastinya ada ES Modules nah, maksudnya apa sih? lihat code dibawah

```ts
import * as base64 from "https://denopkg.com/chiefbiiko/base64/mod.ts";

const myPass: string = base64.fromUint8Array(
  new TextEncoder().encode("password 123"),
);

console.log(myPass);
```

contoh diatas saya mencoba menggunakan library untuk convert ke base64, ternyata dengan deno kita bisa import hanya dengan URL saja, memang tujuan deno adalah _single executing file_ yang berarti kita hanya meng-eksekusi file satu, tanpa harus compile dengan babel, webpack dan lain sebagainya tetapi, ketika import seperti itu secara default kita akan error pada saat compile time di editor kita, kita harus menginstall extension untuk menghindari error tersebut langsung saja ke [sini](https://deno.land/manual/getting_started/setup_your_environment#editors-and-ides) dan sesuaikan dengan editor kita, lalu ada beberapa hal yang kita pikirkan seperti

- Bagaimana jika domain deno sendiri mati?

santai saja, karena ketika kita mencoba meng-import sebuah file dari package deno (seperti halnya diatas), deno akan membuat cache file tersebut di director deno kita sendiri yang ada di `bla/bla/.deno/bin/deno` (jika di unix system)

- Bagimana jika si author library tersebut sering mengalamai perubahan file?

sekali lagi, santai saja karena deno sendiri ada fitur `lock` juga seperti yang kita jumpai kayak `package-lock.json` atau `yarn.lock` nah deno sendiri ada yang namanya `lock.json` dengan menjalankan perintah dibawah ini.

```sh
deno run --lock=lock.json --lock-write main.ts
```

- Lalu bagimana kita hanya ingin meng-import sesuai version yang kita mau?

tidak masalah hanya dengan menambahkan version dibelakang nama packagenya kita sudah mendapatkan package sesuai dengan versi yang kita inginkan, seperti ini

```ts
import { serve } from "https://deno.land/std@0.50.0/http/server.ts";
```

lihat mudahnya bukan? bahkan kita juga bisa membuat sebuah file `custom.ts` contoh coba buat file dengan nama `utils.ts`

```ts
// utils.ts
export const PORT = 3000;
```

lalu pada file `main.ts` kita, kita hanya mengimport file seperti ini

```ts{3}
import { serve } from "https://deno.land/std@0.50.0/http/server.ts";

import { PORT } from "./utils.ts";

const serveLocally = serve({ port: PORT });
console.log(`http://localhost:${PORT}`);

for await (const req of serveLocally) {
  req.respond({ body: "Hello World\n" });
}
```

sekali lagi ini mudah bukan?

## Sedikit catatan

Memang deno adalah versi galaknya JavaScript tetapi bukan berarti kita tidak belajar dulu apa itu NodeJS, karena untuk kasus sekarang NodeJS lebih populer dan banyak yang menggunakan, jadi saran saya NodeJS apa Deno, yaa keduanya dan lebih baik NodeJS baru ke Deno.

\
\
Terima kasih.
