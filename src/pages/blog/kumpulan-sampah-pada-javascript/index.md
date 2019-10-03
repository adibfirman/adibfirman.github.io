---
title: Kumpulan Sampah di Javascript
date: '2019-12-22'
spoiler: Kumpulan Sampah di javascript?
---

notes:
- garbage collection in javascript it's all automatically on the fly, but for some reason the value cannot be remove
- create an example of gerbage collection for one reference

notes from addy
- before you trying to figuring out why your app is slow, first open a task manager and see memory usage of your app
- using object allocation tracker in devtools if we have momory leak
-- blue bars is meaning new object has created by memory
-- dont care about grey bars, its like javascript clear that object
- dont trying to delete the object, cus GC in javascript cannot get a reference before just make your object null or somethink
- use object allocation tracker
