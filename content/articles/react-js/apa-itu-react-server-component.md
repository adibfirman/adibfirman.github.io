---
title: Apa itu React Server Component..?
date: "2021-01-17"
updatedAt: "2021-01-17"
excerpt: Sebuah rangkuman pembelajaran mengenai React Server Component
isRegional: true
copyrightCover: 'Photo by <a href="https://unsplash.com/@floriankrumm?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Florian Krumm</a> on <a href="https://unsplash.com/photos/a-close-up-of-a-computer-motherboard-with-wires-yLDabpoCL3s?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a> '
---

Pada akhir tahun 2020 kemarin, _core team_ dari ReactJS telah mengeluarkan sebuah berita tentang _React Server Component_ tentu saja ini belum compatible dengan production yaa.. sekilas dari nama yang diberikan kita akan menyimpulkan secara tidak langsung ini adalah component yang berjalan pada server, ya betul kalian bisa melihat lengkap-nya ada [disini](https://reactjs.org/blog/2020/12/21/data-fetching-with-react-server-components.html).
\
\
Mungkin setelah menonton presentasi dari _core team_ ReactJS, mungkin ini akan terlihat seperti _SSR (Server Side Rendering)_, tetapi ini adalah dua hal yang berbeda, SSR akan mengembalikan sebuah string dan kita harus meng-execute script JS yang sudah diberikan oleh server.
\
\
Berbeda dengan _React Server Componennt (RSC)_ metode ini memang akan di eksekusi di dalam server tetapi cara kerja dari RSC ini ialah dia seperti men-_stream_ atau bisa dibilang _re-render_ jika ada _network request_ yang dibuat dan ini akan mengembalikan bukan sebuah string melainkan hal yang berbeda seperti ini

![Result from React Server Component](./image-1.png)

Tetapi ingat, jangan mentang - mentang ini sebuah "React Component" kalian akan bisa menggunakan seperti _side-effect_ atau pun sebuah _state_ tentu saja **_tidak bisa_** karena server component hanya berencana untuk menyelesaikan permasalahan dengan _bundle size_ dan tentunya masalah perfomance pada sebuah component.
\
\
Hal yang paling menarik dari RSC ini ialah, ada 3 tipe file yang bisa kalian gunakan,

- .server.js
- .client.js
- .js [shared]

## .client.js

Yak, extension / tambahan `.client.js` tidak akan memberikan kesan yang spesial karena file ini sering kita gunakan seperti sekarang tetapi ingat pada file ini kita tidak bisa meng-import file `.server.js` dan terakhir kita bisa meng-konsumsi data dari server component (penjelasan ada dibawah).

## .server.js

Berikut adalah contoh file-nya:

```jsx
// Note.server.js - Server Component

import db from "db.server";

function Note(props) {
  const { id, isEditing } = props;
  const note = db.posts.get(id); // ini ada proses mengambil data langsung dari database

  return (
    <div>
      <h1>{note.title}</h1>
      <section>{note.body}</section>
    </div>
  );
}
```

Pada file `.server.js` ini kalian bisa langsung mengakses sebuah database atau apapun yang bisa dikerjakan oleh dari sisi server, bahkan ketika kita meng-_import_ sebuah depedency kita akan menhasilkan sebuah component dengan _zero-bundle size file_ maksudnya seperti dibawah ini:

```jsx
// NoteWithMarkdown.js
// NOTE: *sebelum* kita tambahkan ".server.js"

import marked from 'marked'; // 35.9K (11.2K gzipped)
import sanitizeHtml from 'sanitize-html'; // 206K (63.3K gzipped)

function NoteWithMarkdown({text}) {
  const html = sanitizeHtml(marked(text));
  return (/* render */);
}
```

Hal diatas ialah sebuah metode yang sering kita gunakan ketika menggunakan react, apapun aplikasi yang kita buat, pasti seenggaknya kita akan mengimport sebuah _depedency / library_, hal ini akan membuat user harus mendownload file - file itu dan mengakibatkan user akan menunggu sampai dengan selesai. Bagaimana jika kita mengubah-nya jadi `.server.js` apa yang terjadi?

```jsx
// NoteWithMarkdown.server.js
// NOTE: *sesudah* kita tambahkan ".server.js"

import marked from 'marked'; // 0K atau zero-bundle size
import sanitizeHtml from 'sanitize-html'; // 0K atau zero-bundle size

function NoteWithMarkdown({text}) {
  const html = sanitizeHtml(marked(text));
  return (/* render */);
}
```

Lihat kan..?? kita akan benar - benar memberikan kenyamanan kepada user dimana mereka tidak akan disuguhi lagi untuk mendownload _depedency / library_ yang kita gunakan.
\
\
Sisi baik-nya lagi kita bisa meng-import file `.client.js` pada server component kita dan seperti biasa kita kirimkan dengan menggunakan `props`

```jsx
// NoteWithMarkdown.server.js
// NOTE: *sesudah* kita tambahkan ".server.js"

import marked from "marked"; // 0K atau zero-bundle size
import sanitizeHtml from "sanitize-html"; // 0K atau zero-bundle size

import NoteEditor from "./NoteEditor.client";

function NoteWithMarkdown({ text }) {
  const html = sanitizeHtml(marked(text));
  return <NoteEditor html={html} />;
}
```

Memang, pada file `.server.js` user akan disuguhi _zero-bundle size_ tetapi, ketika kita meng-import file dengan `.client.js` file tersebut akan tetap ter-download oleh user.

## .js (shared)

Ekstensi file ini adalah yang sering kita gunakan, tetapi ketika nanti RSC sudah rilis di production file ini akan menjadi otomatis terbaca menjadi server file, maksudnya secara otomatis akan dibaca menjadi `.server.js` file.
\
\
Yaa, terima kasih sudah berkunjung, saya harap saya membuat anda penasaran dengan apa yang saya pelajari 😅.
\
\
Referensi terkait:

- [server-components.md](https://github.com/josephsavona/rfcs/blob/server-components/text/0000-server-components.md)
- [react-server-component.html](https://reactjs.org/blog/2020/12/21/data-fetching-with-react-server-components.html)
