---
title: Framework Baru dan AI?
date: "2025-09-21"
updatedAt: "2025-09-21"
excerpt: "Di tengah AI generation sekarang, malah ada framework baru lagi? Apa yang perlu di pelajari dari seorang Web Dev, sebuah pandangan pribadi di tengah hiruk pikuk AI dan Kemunculan Framework baru di Web Ecosystem"
copyrightCover: 'Photo by <a href="https://unsplash.com/@miteneva?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Maria Teneva</a> on <a href="https://unsplash.com/photos/a-large-group-of-multicolored-squares-of-varying-sizes-7FmSYQ3Z7fg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>'
isRegional: true
---

Beberapa minggu lalu sempat lihat sebuah [postingan dari Dominic](https://x.com/trueadm/status/1961163656810353057), dimana beliau drop a new web framework
dengan nama _Ripple_ saya mau coba melihat pandangan saya di zaman AI sekarang yang notaben-nya
"biasanya" seorang atau mungkin sekelompok group tertentu publish _a new something with AI_,
sedangkan beliau malah publish sebuah framework baru untuk web.
\
\
Mungkin sebagian dari kita melihat dan juga menyaksikan sebelum AI ini mulai berkembang
setiap minggu kita pasti akan di suguhkan framework JS baru di web ecosystem ini.

![source image: https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.enterspeed.com%2Fblog%2Fwe-measured-the-ssr-performance-of-6-js-frameworks-heres-what-we-found&psig=AOvVaw0G-v4nLsAgf8912rj6krGh&ust=1758512401640000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCKC6p6v36I8DFQAAAAAdAAAAABAK](./new-javascript-framework.png)

Saya tentu saja bukan orang yang skeptis dengan hal framework baru, justru menurut saya
ini seperti angin segar di tengah AI sekarang, oleh karena itu saya coba akan menjabarkan
kenapa khusus nya orang orang FE di Web penting untuk memahami sebuah "fundamental" dalam
menghadapi ini.

# RipleJS

Sebelum saya bahas sampai ke sesi pendapat saya tentang "fundamental"
saya mau coba bagikan sedikit tentang pengalaman penggunaan framework ini. Kalau
kita mencoba liat code nya pada [website-nya](https://www.ripplejs.com/) terlintas,
code-nya mirip mirip dengan gabungan React, Svelte, dan VueJS. (code di ambil langsung dari
official website-nya)

```ts
 import { Button } from './Button.ripple';
 import { track } from 'ripple';

 export component TodoList({ todos, addTodo }: Props) {
   <div class="container">
     <h2>{'Todo List'}</h2>
     <ul>
       for (const todo of todos) {
         <li>{todo.text}</li>
       }
     </ul>

     if (todos.length > 0) {
       <p>{todos.length} {"items"}</p>
     }

     <Button onClick={addTodo} label={"Add Todo"} />
   </div>

   <style>
     .container {
       text-align: center;
       font-family: "Arial", sans-serif;
     }
   </style>
 }

 export component Counter() {
   let count = track(0);
   let double = track(() => @count * 2);

   <div class='counter'>
     <h2>{'Counter'}</h2>
     <p>{"Count: "}{@count}</p>
     <p>{"Double: "}{@double}</p>

     <Button onClick={() => @count++} label={'Increment'} />
     <Button onClick={() => @count = 0} label={'Reset'} />
   </div>
 }
```

Mungkin dari kita sudah mencoba beberapa framework yang di sebutkan di atas, terkesan Ripple
ini menggabungkan beberapa gaya syntax ke dalam-nya. Saya tidak ingin mendetail kan tentang
framework baru ini, yang saya mau highlight disini apapun framework yang sudah ada sekarang,
yang akan datang ataupun yang lampau, tetap yang paling penting itu adalah "fundamental" dan
mari kita bahas kenapa ini begitu penting.

# Apa Itu Fundamental, Kenapa Penting?

Seperti yang sudah saya mention di atas, memang tidak heran jika ada framework baru apalagi
di tengah AI sekarang, mulai dari code yang di hasilkan semakin membaik
bahkan bisa masukan berdasarkan gambar / screnshot dari sebuah UI, atau
menggunakan context model dari figma ke code, dll.
\
\
Saya akan bagikan sedikit, kenapa harus balik lagi ke "fundamental" dan kenapa ini penting.
Fundamental sendiri ialah, bisa dibilang seperti "tiang" atau "bahan dasar", karena saya seorang web dev, saya akan share beberapa fundamental penting dan definisi nya.

## HTML

Sudah pasti ini yang utama ya, apakah sebuah web itu di serve dari server atau client, tetep yang
utama adalah HTML untuk membangun kerangka sebuah website. Ada beberapa yang memang menurut saya
yang perlu di perhatikan diantaranya:

- Gimana membuat HTML nya menjadi semantic
- Structure dari HTML nya sendiri supaya screen reader lebih accessible

## CSS

Kegunaan-nya ya untuk styling di web, kalau hal dasar dari CSS tidak di pahami kadang akan
susah untuk melompat ke framework CSS juga. Kenapa penting ya untuk menghindari muncul sebuah
pertanyaan kenapa button ini kok gak di tengah? lalu kok layout ini berantakan, kok section A ini
seperti ketiban section B, etc.

## DOM & Browser API

Ini tidak kalah penting, kalau kita sudah menggunakan framework terkenal diluar
sana mereka biasa nya akan menyediakan _"two way data binding"_ features,
yang notaben nya, untuk melakukan change text pada sebuah element cukup panjang cara-nya:

```js
const eleDOM = document.getElementById("section");
eleDOM.innerText = "Hello World";
```

Ketika kita menggunakan framework contoh nya React, seperti ini

```js
const [number, setNumber] = useState(0);

return (
  <div>
    <span>{number}</span>
    <button onClick={() => setNumber((prevNum) => prevNum + 1)}>
      click me
    </button>
  </div>
);
```

Kita tidak perlu lagi mengakses DOM element HTML nya, secara teknis kita tinggal
menggunakan function yang sudah di sediakan oleh framework tersebut, problem-nya ialah
terkadang tidak semua framework itu cara nya "sama" untuk melakukan state manipulation,
contoh seperti Ripple di atas yang sudah kita check example code nya. Jadi, supaya mengerti proses
dibalik layar seperti apa pada sebuah framework, untuk memahami dan mempelajari
DOM ini sangat penting.
\
\
Juga untuk browser API, seperti fetch, storage, observer, akses API device etc. Terkadang kita
terlalu asal dalam menggunakan browser API, padahal ada beberapa features API yang tidak di
sediakan dalam beberapa browser version.

## JavaScript Core

Core of the core dari web dev menurut saya, dimana kita ngatur logic, interaction dari sebuah data
pada sebuah API, etc. Untuk ini beberapa hal fundamental yang penting biasa nya ada dibagian:

- Closure
- async/await
- Cara bikin event loop yang gak bikin CPU usage nya jadi high
- Scope dari sebuah variable

## Data Manipulation dan Algorithms

Sebenarnya, ini bukan kasus web dev saja ya, ini sangat menjadi penting karena, kalau pun memang
berpindah pindah bahasa hal ini akan sangat digunakan, seperti array, object, map, set, proses
sorting dan searching, etc.

## HTTP & Networking

Kalau kita mengakses sebuah website, sudah pasti akan ada interaction protocol dari server
dan client, ini sangat perlu dipahami diantaranya:

- Status Code
- Caching dan Headers
- Security, seperti kenapa bisa terjadi CORS, CSRF, dll.

## Performance

Ini tidak kalah penting, perlu kita perhatikan juga terkait performa nya juga, mulai dari
seberapa banyak assets yang perlu kita load, atau LCP, CLS, FID. Mungkin bisa di pertimbangkan
juga untuk menggunakan beberapa teknik seperti Lazy Loading, etc. Kenapa penting ada beberapa
faktor yang bisa di pertimbangkan:

- SEO
- CRP (Critical Rendering Path)
- UX yang buruk pada saat load di inisialisasi pertama kali

## Accessibility (a11y)

Mungkin di Indonesia ini menjadi hal yang sedikit tidak lumrah atau jarang di pertimbangkan,
padahal beberapa negara lain ini sudah menjadi pertimbangan dari pemerintah, agar supaya
web yang sudah kita buat, ramah dari beberapa penyandang disabilitas, misalkan dari [UK](https://www.gov.uk/guidance/accessibility-requirements-for-public-sector-websites-and-apps)

# Penutup

Untuk penutup, yang perlu saya tegaskan ialah penting untuk memahami sebuah "fundamental".
Terlepas apakah itu ada framework baru, atau di tengah gebrakan AI sekarang, kita tidak tau
apakah ada framework yang mungkin lebih bagus diluar sana dan bahkan secanggih apapun
AI kalau dari kita tidak pintar pintar dalam membuat prompt nya hasil-nya akan sama saja
tidak sesuai apa yang kita mau, bahkan akan menjadi bom waktu yang mana code yang di
hasilkan menjadi code-smell.
