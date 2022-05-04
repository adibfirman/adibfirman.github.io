---
title: Introduction to a beautiful ES6 part 1
date: "2018-05-17"
spoiler: Introduction EcmaScript (ES6) Part 1 out of 2
---

Actually, the title of this post it's kinda ambiguous, but there's a fact that why _this_ we call a lovely part from JavaScript, okay let's dig into this part.

---

## 1. About the beauty of this

**ES^** stands for ECMAScript 6, which is some kind of evolution from JavaScript that was developed by TC39 (Ecma Technical Committee 39), actually why I call this part is a _beauty of JavaScript_ because, this part is make us as a developer maintain, and develop our feature easier, as far as I know when I'm first time working with JavaScript it's kinda hard to read it (or it's just me), but what's the purpose about this?

## 2. Purpose of the beauty of ES6

Let's make a question about this first, what's the actual purpose of this? isn't vanilla JavaScript (basic JavaScript) it's kinda enough? indeed, but before the ES6 when we write a JavaScript code it's kinda aged right? that's why the ES6 coming into our path to improve our code to more readable. for instance:

1. Class
2. Modules
3. Parameter name of a function
4. etc

Without further ado, let's talk about ES6.

## 3. Say "Hi" to the beauty

In this section, we want to know further about ES6 itself, the features of ES6 we can easily adapt directly, if you wanna try it, just directly open your developer tools on your browser, in this case, I'm using a Google Chrome which is you just directly hit the button on your keyboard with `ctrl + shift + i` and it will look like this.

![Demo of exhaustive-deps lint rule](./devtools.png)

---

## 1. Migration from `var` to `let` or `const`

Usually, we declare our variable using `var` but in this case within ES6 we have an option to do that, either using `let` or `const`. But what's the difference between that? first, let's talk about `var` thru this code below

```jsx
var x = 3;
function func(getRandomNum) {
  if (getRandomNum) {
    var x = 10;
  }

  return x;
}

console.log(func(false)); // undefined
```

why the browser can treat that as `undefined`? –– because variable `var` it's just a scope of function let's say it's a _function-scope_ it's a difference if we declare it like this

```jsx{4}
var x = 3;
function func(getRandomNum) {
  if (getRandomNum) {
    x = 10; // replace 'var'
  }

  return x;
}

console.log(func(false)); // 3
```

Indeed the return of that variable it's `3` but –– `var x` was declared as a _global-scope_ which means, if the `var x` was declared again after function `func` then the previous declaration of variable `x` will be replaced with the new one, this one it's _not recommended_ from me –– ok then, let's talk about `let` –– we will using the same function but we just replace it from `var` to `let`

```jsx
let x = 3;
function func(getRandomNum) {
  if (getRandomNum) {
    let x = 10; // remove 'var'
  }

  return x;
}
```

when we replace it with `let` we can directly see the return of the `x` still persists with the value `3` it's a difference when we declared it using `var` which is it's returning `undefined` instead, why this happened? because `let` it's scoped between curly-bracket `{ ... }` or it's name is _block-scope_ which means the scope of that it blocks itself, and then how about we declare variable `let x` again after function `func` called?

```jsx
let x = 3;
function func(getRandomNum) {
  if (getRandomNum) {
    let x = 10;
  }

  return x;
}

let x = 10;

console.log(func(false)); // Error: indentifier 'x' has alread been
```

As you can see, we got an error, which means we already declared variable `x` on the same scope, let's say this method cannot be declared twice at the same scope. Let's try `const`

```jsx
const x = 3;
function func(getRandomNum) {
  if (getRandomNum) {
    const x = 10;
  }

  return x;
}

console.log(func(false)); // 3
```

Actually `const` and `let` don't have a big gap, but keep in mind this method should fulfill the value of the variable, what's that mean?

```jsx
const abc; // Error: Missing initializer in const declaration
```

As you can see, we got an error which means we cannot let the variable `abc` have an empty default value, not like `let` and `var` which we can set as `undefined` or empty for the default value, and also we cannot re-defined the same variable that we already declare it before, for instance

```jsx
const abc = 123;
abc = 321; // Error: Assignment to constant variable
```

It's clear, isn't it? so the value of `const` should be persisted which means we cannot replace it with the new one.

## Conclusion

After we talked about the part of ES6 above, we got a conclusion

- Choose `const` if the value doesn't change.
- Choose `let` if you have wanna replace it with the new one.
- Avoid `var`

That's all from me guys, let's talk about ES6 again in the next part, Thank you.
