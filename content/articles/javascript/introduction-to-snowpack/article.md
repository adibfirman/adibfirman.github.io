---
title: Introduction to Module Bundler Snowpack
date: "2021-01-24"
updatedAt: "2021-01-24"
excerpt: Learn about what it's and how the Snowpack bundler work
copyrightCover: 'Photo by <a href="https://unsplash.com/@lureofadventure?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ali Kazal</a> on <a href="https://unsplash.com/photos/a-person-with-a-red-backpack-walking-in-the-snow-wLezcMA-JCg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>'
---

<Admonition type="warning">
  Since (April 20, 2022) Snowpack will no longer be actively maintained by their core team [source](https://www.snowpack.dev/). I just wanted to learn about this, don’t take this seriously.
</Admonition>

Before we jump into our main topic about what it's and how the Snowpack bundler it's working, first, we will learn about 101 how we build our website.

Basically, web was made with three pilars inside it, HTML, CSS and JAVASCRIPT, looks these are the basic pilars that can build our website, looks easy right?

Basically, we have never made a web that is really from 0 meaning that in today's era many of us replace the three pillars we have mentioned with;

- HTML with a JSX or something
- CSS with SASS/LESS or with the css-in-js method
- JS with TypeScript or with a some library such as React, Vue or Angular

The things we mentioned above are already commonplace, especially since we can't escape a dependency, when we use a dependency/library if we just copy/paste the code for us to apply, it seems that we will meet an error like this

![require error example](./image-1.png)

Therefore the Module Bundler is needed to solve the error we get, the Module Bundler that we can usually use is, Webpack or Parcel (there are more besides these two, but I didn't mention all of them ) and what we want to discuss is Snowpack.

## What it's Snowpack

Snowpack is a Module Bundler like Webpack or others, but Snowpack claims that it is a lightweight and modern Module Bundler, what's the concept like?

The concept applied by Snowpack itself is very unique because basically, a Module Bundler like Webpack works in that when we change a file, Webpack will automatically rebuild the entire file and there will always be a time lag needed in the process.

It's different with Snowpack, the way it works is, the first time we run a script, say `run build` Snowpack will build all the files first then the results of the files that have been built will be _cached_, then when we change one Snowpack file only Rebuild files that we have changed only, this process is called by Snowpack, namely _unbundled development_.

![process snowpack](./image-2.png)

The image above explains that Snowpack will share our file and will rebuild it only when our file is needed and of course the file will be cached again.

## _Bundled_ vs _Unbundled development_

_Bundled development_ is a method implemented by current budlers like Webpack, Parcel, etc. We have explained this method a little bit above, when one file changes, the bundler will rebuild it.

Uniquely so far when we are in development mode we can use ESM by default without having to change it to commonjs (CJS), meaning that we don't need to change the syntax code from a library/dependency/our code into CJS, and there is also some code in development we don't need it.

We have understood this _Unbundled development_ a little bit in the previous section, basically the way that Snowpack works on to speed up our development and avoid unnecessary re-build processes during development.

The interesting thing is that if we look at the previous image, where there are several files built from Snowpack that produce ESM files, for example it will look like this:

```bash
node_modules/react/**/*     -> http://localhost:3000/web_modules/react.js
node_modules/react-dom/**/* -> http://localhost:3000/web_modules/react-dom.js
```

Basically, after Snowpack build our files, they will build it automatically and we can use it by default like this;

```html
<body>
  <script type="module">
    import React from "react";
    console.log(React);
  </script>
</body>
```

Interesting, isn't it?

## Example of usage

Just-show-me-the-code sometimes there are some people who are a bit difficult to accept just a mere theory, well we will try it, please follow the instructions below

```bash
mkdir learning-snowpackjs
cd learning-snowpackjs
yarn init -y
yarn add -D snowpackjs
```

And then, we will create `index.html` for running and make sure that Snowpack will running as well,

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Starter Snowpack App" />
    <title>Starter Snowpack App</title>
  </head>
  <body>
    <h1>Welcome to Snowpack!</h1>
  </body>
</html>
```

And don't forget to create script `start` at file `package.json`

```json
{
  ...
  "scripts": {
    "start": "snowpack dev",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  ...
}
```

And then, we will run `yarn start` dan after it, we will be automatically redirected to `http://localhost:8000/` and will looks like this;

![result snowpack](./image-3.png)

Next we will create the `index.js` and `hello-world.js` files, first we will fill the `hello-world.js` file like this,

```js
// hello-world.js
export function helloWorld() {
  console.log("Hello World!");
}
```

And on our `index.js` file;

```js
// index.js
import { helloWorld } from "./hello-world";

helloWorld();
```

And then, on our file `index.html` don't foget to apply our file `index.js` like this;

```html{11}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Starter Snowpack App" />
    <title>Starter Snowpack App</title>
  </head>
  <body>
    <h1>Welcome to Snowpack!</h1>
    <script type="module" src="/index.js"></script>
  </body>
</html>
```

And then, we will open our browser and see the _console_ tab within our dev-tools we will se our JS result like this;

![](./image-4.png)

Yep, interesting isn't it? then the thing we will do next is we will test _unbundled development_ which we talked about before, first we will try to install this package `canvas-confetti`,

```bash
yarn add canvas-confetti
```

And then, we will change the `index.js` file to be like this;

```js{5-8}
import { helloWorld } from "./hello-world";
import confetti from "canvas-confetti";

helloWorld();
confetti.create(document.getElementById("canvas"), {
  resize: true,
  useWorker: true
})({ particleCount: 200, spread: 200 });
```

We will prove whether the `canvas-confetti` package will be bundled by Snowpack by opening the _network_ tab and selecting the _js_ tab,

![](./image-5.png)

You see? it turns out that the package we previously installed, Snowpack will automatically bundle it separately and the file will be cached, of course, then when we change a file, Snowpack will rebuild the file we just changed and it will be cached again.

## Conclusion

Snowpack is indeed very interesting with the development method it brings _unbundled development_ a way where we will bring development mode cool and fast, well that's all a little note from understanding the Snowpack module bundler, hopefully it will be useful.

Thank you.
