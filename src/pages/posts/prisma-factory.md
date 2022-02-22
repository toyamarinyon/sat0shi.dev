---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
  import Callout from '../../components/Callout.astro'
title: Use factory to simplify prisma seed
publishDate: 9 Dec 2021
name: toyamarinyon
description: I will introduce a generator called `prisma-factory-generator` that creates a factory from Prisma's Scheme.
---

Prisma provides the ability to seed data. Once configured, it is convenient to create a seed with the script `npx prisma db seed`.
However, when you register data with the seed script, you need to enter all the parameters, which is a tedious aspect of preparation.

Let's consider the following table as an example

```ts
model User {
  id        Int       @id @default(autoincrement())
  email     String    @unique
  userName  String    @unique
  lastName  String
  firstName String
  school    String

  @@map(name: "users")
}
```

In this case, the seed script looks like this

```typescript
// create bob
const bob = await prisma.user.create({
  create: {
    email: "bob@prisma.io",
    username: "bob",
    lastName: "curry",
    firstName: "bob",
    school: "demo",
  },
});

// create Chance
const chance = await prisma.user.create({
  create: {
    email: "chance@prisma.io",
    username: "chance",
    lastName: "weber",
    firstName: "chance",
    school: "demo",
  },
});
:
:
:
```

It may be enough, but it seemed a bit redundant to me. It is tedious to enter the parameters every time.

As a solution, I implemented the factory function using a library such as faker.js, but it's hard to maintain the factory function every time the number of tables or items increases.

So I thought that one of the ideal development flows would be to have a factory function created using `npx prisma migrate dev` or `npx prisma generate`, which is executed when a table is added or an item is added in Prisma.

Prisma has a good mechanism called generator, so I used it to create a generator called `prisma-factory-generator` that creates a factory from Prisma's Scheme.

[https://github.com/toyamarinyon/prisma-factory-generator](https://github.com/toyamarinyon/prisma-factory-generator)

Using this, we can rewrite the previous seed script to look like this.

```typescript
// For the sake of clarity, I have omitted imports
// and grammatical descriptions.
const bob = await createUser({ userName: "bob" });
const chance = await createUser({ userName: "chance" });
```

I think `Prisma-factory-generator` is useful not only for seeding but also for test code, so please try it if you like.
If you have a case where it doesn't work, please send an issue to [https://github.com/toyamarinyon/prisma-factory-generator/issues](https://github.com/toyamarinyon/prisma-factory-generator/issues).

## Special Thanks

The idea of creating a factory with Prisma generator is based on Chris Ball’s presentation at Prisma Day 2021.

discussion: [https://github.com/echobind/prisma-factory/discussions/1](https://github.com/echobind/prisma-factory/discussions/1)

presentation: [https://www.youtube.com/watch?v=a5S5thDd7Xg](https://www.youtube.com/watch?v=a5S5thDd7Xg)
