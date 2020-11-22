---
title: React Native Navigation Is Sexy Navigation
date: "2018-10-29"
spoiler: Merasakan navigasi seperti native navigasi di React Native
---

Pada tahap ini saya akan melakukan cara instalasi pada _React Native Navigation WIX_, karena sering sekali gosip yang mencerikan kalau RNN ini susah sekali untuk di instal pada app kita, padahal ini semua sudah lengkap di kitab onlen RNN [(dokumentasinya)](https://wix.github.io/react-native-navigation/#/), sebelum tahap klimaks-nya saya akan menjelaskan jenis navigasi yang disediakan oleh **React Native**, yaitu:

- **Default Navigation**, \
  sebuah navigation yang disediakan default oleh RN itu sendiri, contoh-nya:
  - [Android](https://facebook.github.io/react-native/docs/navigator), ini sudah dihapus dari core RN itu semenjak versi ^0.45
  - [IOS](https://facebook.github.io/react-native/docs/navigatorios#docsNav), kabar baiknya ini masih di support sampai sekarang.
- **JS Navigation**
  sebuah navigation yang memang berjalan pada JS Core pada sebuah device, ini sebuah navigasi yang sering saya gunakan, contoh-nya:
  - [React Navigation](https://reactnavigation.org/)
  - [React Native Router Flux](https://github.com/RNRF/react-native-router-flux)
  - [React Native Simple](https://www.npmjs.com/package/react-native-simple-router)
- **Native Navigation Modules**
  navigasi yang memang memanfaatkan native thread itu sendiri, ada beberapa contoh yang bisa digunakan, contoh-nya:
  - [React Native Navigation Wix](https://wix.github.io/react-native-navigation/#/)
  - [Native Navigation (AirBnb)](https://github.com/airbnb/native-navigation/issues/114), seperti yang kita ketahui AirBnb sudah tidak menggunakan React Native lagi, soo package ini juga sudah depracated atau sudah _IS DEAD_ berikut [_Github Thread_](https://github.com/airbnb/native-navigation/issues/114)-nya.

nah pada sesi kali ini kita fokus ke **React Native Navigation Wix**, sebuah navigasi yang sering juga digunakan selain **React Navigation.**
\
\
Kenapa gak pake React Navigation aja, kenapa harus pake React Native Navigation Wix, apa perbedaannya?
\
\
pertanyaan ini yang sering menghantui saya sebelum pindah ke **React Native Navigation Wix**, yaa pertama ini karena jalan di Native Thread, jadi menurut saya ini akan membuat perform App kita akan semakin joss juga. Ada juga yang bertanya di Stackoverflow [Ini Thread](https://stackoverflow.com/questions/44147766/react-navigation-vs-react-native-navigation)-nya, jadi **React Navigation** itu gak masalah cuman untuk App skala besar pasti akan terasa performanya berkurang, dilihat dari banyak-nya JS yang di eksekusi itu akan memenuhi JS thread pada device user, jika user-nya low-end device maka ini akan menjadi masalah besar untuk kita. Langsung aja kita Capcusss…
\
\
Disini saya menggunakan **react-native-cli** _(bukan EXPO)_ untuk create project baru

```bash
react-native init TestingRNN --version="0.56.0"
```

kenapa saya pakai versi **0.56.0**? karena ini versi yang menurut saya minim bug, saya pernah coba install yang terbaru sekarang **0.57.4** ada error seperti ini

![](./image-1.jpg)

kalau sudah selesai langsung kita tambahkan package **react-native-navigation**, dengan perintah seperti ini

```bash
npm add react-native-navigation
```

setelah sudah ditambahkan, kita akan melihat versinya yaitu versi **1._._**, loh kenapa versi satu? bukannya sudah ada versi 2? karena versi 2 belum stable jadi kita cari aman aja 🙊. Setelah itu kita akan running app kita di emulator untuk memastikan app kita berjalan dengan lancar, disini saya menggunakan IOS simulator iPhone 6.

```bash
react-native run-ios --simulator="iPhone 6"
```

dan pastikan semua berjalan dengan normal

![](./image-2.png)

setelah semua berjalan dengan normal, lanjut kita akan configurasi pada masinng-masing platform.

## IOS

pertama kita buka xcode kita, lalu klik _open another project_

![](./image-3.png)

ketika sudah terbuka, kita cari repo app kita menuju ke folder IOS dan cari file yang berformar _.xcodeproj_

![](./image-4.png)

dan akan pastikan semua berjalan dengan normal

![](./image-5.png)

lalu lanjut klik kanan pada folder **Libraries**, dan klik **Add Files To “….”**
