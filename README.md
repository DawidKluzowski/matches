# Hello!

Welcome to my repository.
This app is a simple simulation of football matches. It has been created using React.js, TypeScript, MobX and TailwindCSS. Hopefully you will find this good enough.

## How to run this project

It has been deployed to Vercel, you can access it here: [https://matches-dawidkluzowski.vercel.app/](https://matches-dawidkluzowski.vercel.app/)

Or if you wish to run it locally

```bash
pnpm install
```

And then

```bash
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

## Tests

I used Vitest as a test runner. If you want to execute all unit tests in the projects, type in the following command:

```bash
pnpm run test
```

## Additional info

While covering functionalities with unit tests I had a problem with function getRandomGoal because it uses Math.random so each time I executed the same test it would output different result.