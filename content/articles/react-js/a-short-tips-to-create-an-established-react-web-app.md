---
title: A Short Tips to Create an Established React Web App
date: "2024-01-01"
updatedAt: "2024-01-01"
excerpt: Practical tips and some of my thoughts on how to create a maintainable React web app.
copyrightCover: 'Photo by <a href="https://unsplash.com/@sam_truong?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Sam Dan Truong</a> on <a href="https://unsplash.com/photos/clear-glass-jar--rF4kuvgHhU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>'
---

Hi there, so nowadays (in 2023) React is still the main library working to create a web app (at least for me)
even according to the [Stack Overflow survey in 2023](https://survey.stackoverflow.co/2023/#technology-most-popular-technologies) React is still the most popular web technology no. 2 after Node.JS

React has gained substantial attention from the web developers out there such as community support, a variation of the UI library, a custom component like Datepicker, etc. But somehow, the particular person that new to working with React, is often shrouded in complexity for the first time learning it.

Do you feel like if you just init a new project with React that does not have a pattern to write it whether you put the logic there, or like put the UI or component in a separate file? then, at the end, you have a spaghetti code in your app.

Then, here we go I wanted to share how I'm mostly separating the concerns of my app so buckle up and get ready to embrace.

# The Project

So I'm trying to check on the dribble that already has a design that we need to develop and I found this (Thanks David Framepong. [Source](https://dribbble.com/shots/23336149-Cart-Page-Bluefall-Shopify-Theme))

![Designed by David Framepong. Source: https://dribbble.com/shots/23336149-Cart-Page-Bluefall-Shopify-Theme](./image-1.png)

So let's say, you as a developer need to build this what's the step that you need to do? or do you just go to your text editor and then develop it? According to the above design, let's say we have a user story like this

1. A user can see a list of the products.
2. A user can update the quantity of each product.
3. A user can see the subtotal of selected products along with the quantity.
4. A user can see the shipping and the tax.
5. Last, a user can go to the checkout page.

So after we have those user stories, then here are the simple tips that might you consider to develop it on your app.

# Step No.1 (It's okay)

First, you just create a single file in the route `/checkout`

```bash
src/
├── routes/
│   ├── checkout/
│   │   └── index.tsx
│   └── ...
└── ...
```

_It's okay tho_ that you write all the functions, the components such as Product Item, all the logic, etc in a single file.

Why? Because if the first thing that comes into your mind is

> Where do I need to put this in this component?  
> whether as a global component? or as a global helper?

you will waste your time, creating first and then optimizing later.

# Step No.2 (The Remote Data)

Then next is the remote data, like using a pure fetch from the browser API or any library out there for example:

```typescript
import { useListProduct } from "@/routes/Checkout/remote-data";
import { useSubmitCheckout } from "@/routes/Checkout/remote-data";

export default function Checkout() {
  const { status, loading, products } = useListProduct()
  const { onClickCheckout } = useSubmitCheckout()

  return ...
}
```

In the example code above as you can see, we separated the remote data for the list product this also covered our user story for _"A user can see a list of the products"._

Then here's the take a look at the folder structure:

```typescript
src/
├── routes/
│   ├── checkout/
│   │   ├── remote-data/
│   │   │   ├── index.ts
│   │   │   ├── use-list-product/
│   │   │   │   ├── constants.ts
│   │   │   │   └── index.ts
│   │   │   └── use-submit-checkout/
│   │   │       ├── constants.ts
│   │   │       └── index.ts
│   │   └── index.tsx
│   └── ...
└── ...
```

This is just a preference for the file under the `use-list-product` you can put whatever you want in there, but the point is in this step you just need to separate the remote data first.

# Step No.2 (The Component)

We in the interesting step, because somehow when we do this step, there are several questions come into our mind like

> Which part that need to be separated?  
> The section product will be in single component?  
> Or the title of the product will be in single component too?

It's facing me too in the first place learning frontend, if you too, you are not alone :). Anyway so here's the reference to separate the components.

![](./image-2.webp)

So, why do we need to separate into two types of components? a container and a presentation.

## Container

There are two containers that according to the design

1. Cart Body
2. summary Body

Usually, in my case, the container will contain

1. The remote data
2. The tracking part
3. The web browser API
4. etc

This means this is like a "brain" of the modules or routes itself.

```typescript
import { ProductList, Summary } from "@/routes/Checkout/containers";

export default function Checkout() {
  return (
    <Fragment>
      <ProductList />
      <Summary />
    </Fragment>
  )
}
```

Because we already separate the containers then, we also move the remote data of the product list into the `ProductList` brain.

```typescript
import { useListProduct } from "@/routes/Checkout/remote-data";

export default function ProductList() {
  const { status, loading, products } = useListProduct()

  return ...
}
```

And here's a sneak peek of the `Summary`too.

```typescript
import { useCheckout } from "@/routes/Checkout/remote-data";

export default function Summary() {
  const { onClickCheckout } = useCheckout()

  return ...
}
```

## Presentations

So because we already separate the containers, in this section we want to separate the pure-function (read: pure-component) that just accepts the props and has a standalone state to make a directive component. According to the sketch that we wrote, there are three components that need to be built.

1. The Product Item
2. The Product Options
3. The Summary Item

Maybe I just put the structure directory something like this

```typescript
src/
├── routes/
│   ├── checkout/
│   │   ├── presentations/
│   │   │   ├── ProductItem <-
│   │   │   ├── ProductActions <-
│   │   │   ├── SummaryLabel <-
│   │   │   └── index.ts
│   │   ├── containers/
│   │   │   ├── ProductList
│   │   │   ├── Summary
│   │   │   └── index.ts
│   │   ├── remote-data/
│   │   │   └── ...
│   │   └── index.tsx
│   └── ...
└── ...
```

Have you noticed this?

> There are several types of the label in Summary containers, why we just have a single presentations components?

Yap, because presentations only just have props and a standalone state to make them interactive that's why we just wrote it to be a single presentation component, here's the sneak peek.

```typescript
export default function SummaryLabel({ withInfo = false, total, title }: props) {
  if (withInfo) return ...

  return ...
}
```

After that, you just put the Lego block in each of the containers

```typescript
import { useCheckout } from "@/routes/Checkout/remote-data";
import { SummaryLabel } from "@/routes/Checkout/presentations";

export default function Summary() {
  const { onClickCheckout } = useCheckout()

  return (
    <div className="some-fancy-style">
      <SummaryLabel total={0} title="Subtotal" />
      <SummaryLabel total={0} title="Shipping" withInfo="Desc of shipping" />
      <SummaryLabel total={0} title="Tax" withInfo="Desc of tax" />
      <hr />
      <SummaryLabel total={0} title="Estimated Total" />
    </div>
  )
}
```

You can apply the same thing to the product list containers.

# Step No. 3 (Business Needs)

Glad that you are still with me until these final steps, so here are the final steps. This is where the business logic is created from the product needed, which is coming from the user story that we already wrote above. So let's move to the folder structure.

```typescript
src/
├── routes/
│   ├── checkout/
│   │   ├── presentations/
│   │   │   └── ...
│   │   ├── containers/
│   │   │   └── ...
│   │   ├── remote-data/
│   │   │   └── ...
│   │   ├── business-models/ <-
│   │   │   ├── constants.ts <-
│   │   │   ├── types.d.ts <-
│   │   │   └── functions/ <-
│   │   │       └── ...
│   │   └── index.tsx
│   └── ...
└── ...
```

As you can see, we created a new folder called `business-models` (again, this is just a preference) there are three types of it

1. constants.ts
2. types.d.ts (if you use TypeScript)
3. functions

let's take a look one by one.

## constants.ts

In this file, we want to collect all the hardcoded-business-needed in out `Checkout` modules, as you know maybe there's a request from the product like

> "Hey I wanted to multiplier by 10% for the tax for each product and then we show this 10% too on the summary section"

Like, you might have noticed that we need to write the "10%" on the containers `ProductList` and `Summary` so instead of copy-paste this, it is better to put it in a single folder `business-models` to make sure this is the product needed.

## types.d.ts (optional)

This is optional (if you use TypeScript), anyway. In this file actually the same like `constants.ts` file we collect all the same types that might be used in the containers the presentations or the remote data.

## functions (a folder)

This is an important folder under the `business-logic` folder. Here we collect several functions like calculating the tax, a condition to show several components, etc. Here's a sneak peek of the folder structure.

```typescript
src/
├── routes/
│   ├── checkout/
│   │   ├── presentations/
│   │   │   └── ...
│   │   ├── containers/
│   │   │   └── ...
│   │   ├── remote-data/
│   │   │   └── ...
│   │   ├── business-models/
│   │   │   ├── constants.ts
│   │   │   ├── types.d.ts
│   │   │   └── functions /
│   │   │       ├── createTotalTax.ts <-
│   │   │       ├── getTotalShipping.ts <-
│   │   │       ├── isUserAllowedToCheckout.ts <-
│   │   │       └── ...
│   │   └── index.tsx
│   └── ...
└── ...
```

The important things of each of the functions should be _pure_ which is wherever you import it and use it the value will remain the same.

# Step No.4 (Tidy up)

Here we go in the final steps, where we want to collect all those steps from No.1-3 and then combine them in our containers here I want to create an example from `ProductList` container.

```javascript
import { useListProduct } from "@/routes/Checkout/remote-data";
import { ProductItem, ProductActions } from "@/routes/Checkout/presentation";
import { isUserCanChangeQuantity } from "@/routes/Checkout/business-models/functions/isUserCanChangeQuantity";

export default function ProductList() {
  const { status, products } = useListProduct();

  if (status === "failed") return <div>failed</div>;
  if (status === "loading") return <div>loading...</div>;

  return (
    <div className="some-fancy-style">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
        >
          <ProductActions
            qty={product.qty}
            disableChangeQty={isUserCanChangeQuantity({
              stock: product.stock,
              qty: product.qty,
            })}
          />
        </ProductItem>
      ))}
    </div>
  );
}
```

It's kinda legit right 😊? anyway, the key points here we want to make sure that our `ProductList` not accept any business model conditions or remote data, whereas the presentations are building the block of the UI.

# Conclusion

Thank you for reading after this section, again I want to tell you all the folder structure, code convention, and how to separate the things are just my preferences, which means if you have a better idea or another better way to create an established React Web App let us know to comment below.

Thank you.
