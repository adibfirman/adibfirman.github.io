---
title: Kumpulan Sampah di Javascript
date: '2019-12-22'
spoiler: Kumpulan Sampah di javascript?
---

### Introduction
Pada kali ini kita akan berbicara tentang Sampah-Sampah pada Javascript, sebenarnya istilah ini disebut juga dengan **Garbage Collection** oke, selanjutnya kita panggil dengan **GC**, sebenarnya **GC** tidak hanya pada javascript bahkan di bahasa pemrograman lain pun istilah ini pasti tidak asing, cuman dijavascript ini sedikit spesial (ibarat kata beli nasi goreng ini karetnya dua), **GC** pada javascript ini bekerja secara otomatis, nah kalau pada bahasa LOW-LEVEL programming lainnta itu harus set manual atau kita harus meng-operasikan **GC** secara manual, yaaa sebenarnya ada pros dan cons juga cuman saya tidak akan membahas masalah itu.

### One Reference

notes:

- garbage collection in javascript it's all automatically on the fly, but for some reason the value cannot be remove
- create an example of gerbage collection for one reference
- and two reference too

and some summary

- GC is performed auto, we cannot force it or prevent it
- Objects are retained in memory until those reachable

notes from addy

- before you trying to figuring out why your app is slow, first open a task manager and see memory usage of your app
- using object allocation tracker in devtools if we have momory leak
  -- blue bars is meaning new object has created by memory
  -- dont care about grey bars, its like javascript clear that object
- dont trying to delete the object, cus GC in javascript cannot get a reference before just make your object null or somethink
- use object allocation tracker
