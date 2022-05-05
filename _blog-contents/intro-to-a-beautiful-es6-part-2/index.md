---
title: Introduction to a beautiful ES6 part 2
date: "2018-10-23"
spoiler: Introduction EcmaScript (ES6) Part 2 out of 2
---

In the previous part ([link](/blog/intro-to-a-beautiful-es6-part-1)) we already learned ES6 and also some functions in ES6, and in this part, we want to more digging about ES6, let's gooo.

## 1. Template Literal

In my opinion, this is a very useful feature in the ES6, because we usually did a _concatenate_ string with a number, combined any kind of variable into the new one, etc, using `+` sign right? for instance

```jsx
const a = 10;
const b = 10;

console.log("Result from a + b = " + (a + b)); // Result from a + b = 20
```

As you can see I thought this is kinda terrible in some cases to read that code, if you were in the big team this is not a proper code that can be maintained by another person but, with the _template literal_ ES6 we can change it to be like this

```jsx
const a = 10;
const b = 10;

console.log(`Result from a + b = ${a + b}`); // Result from a + b = 20
```

It's easy to read it, isn't it? if you spot it in the code, we change it on the some parts

- We should use back-tick _" `...` "_
- And if you wanna combine it within the template literal you should use _dolar-sign_ and wrap it using curly-bracket

And also this method can create a new line, for instance

```jsx
const a = 10;
const b = 10;

console.log(`Result from
  a + b = ${a + b}`);
/*
  Result from
  a + b = 20
*/
```

With new entered new space within our code, we can automatically create a _Line Feed (\n)._

## 2. From commonJS into ES6 modules

Actually, in ES6 there is a new system called _module pattern_ –– before I will explain it furthermore, let's talk about modules pattern in JavaScript first, let's say if we have a file that a bunch of helpers and these helpers gonna be used on another file, for instances.

```jsx
var sqrt = Math.sqrt;
function square(x) {
  return x * x;
}

function diag(x, y) {
  return sqrt(square(x) + square(y));
}
module.exports = { sqrt: sqrt, square: square, diag: diag };
```

Here's we import that code on another file.

```jsx
var square = require("lib").square;
var diag = require("lib").diag;

console.log(square(11)); // 121
console.log(diag(4, 3)); // 5
```

There's also another alternative, basically, we just create a single variable, and then the rest of it we can directly get from that variable.

```jsx
var lib = require("lib");
console.log(lib.square(11)); // 121
console.log(lib.diag(4, 3)); // 5
```

Those are an example of ES5 module patterns, then how do we use them under the ES6 feature?

```jsx
// ------ file-1.js ------
import * as lib from "lib"; // (A)

console.log(lib.square(11)); // 121
console.log(lib.diag(4, 3)); // 5

// ------ file-2.js ------
import { square, diag } from "lib"; // (A)

console.log(square(11)); // 121
console.log(diag(4, 3)); // 5
```

The differences are in file `file-1.js` we import all of the exported variable/function under file `lib` it's the same as we put a single variable using ES5.

In a second way, we import it separated using [_Destructuring_](https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/).

## Conclusion

For now, I've just explained it in a bit from ES6 features –– actually, there are so many features under it, but it will take a long time to write it ("sorry :(").

In case, if you wanna want to know more about the ES6 feature this article will so much helpful. Check this out
"[ES6 In Depth](https://hacks.mozilla.org/category/es6-in-depth/) by **Mozilla**"

Thank you.
