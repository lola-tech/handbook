# ![alt Lola-Logo](https://github.com/lolaent/lola-ui-starter/blob/main/public/logoText.svg)

A strongly opinionated TypeScript fronted boilerplate with Next.js and Typescript based on [this repo](https://github.com/jpedroschmitz/typescript-nextjs-starter): 🔥

## 🚀 Getting started

The best way to start with this template is using `create-next-app`.

```console
yarn create next-app AwesomeLolaUi -e https://github.com/lolaent/lola-ui-starter
```

If you prefer you can clone this repository and run the following commands inside the project folder:

1. `yarn`;
2. `yarn dev`;

To view the project open `http://localhost:3000`.

## 🚀 Features

- This project [was bootstrapped](https://github.com/lolaent/lola-ui-starter/commit/0a3d680b7b2b8edb91ef6f62eb5ea6971a655376) with:

  - `node v14.17.6` (latest [`lts/*`](https://github.com/lolaent/lola-ui-starter/commit/24b897c0d2365273c5bcde4e18db6678bacdd75a) at the time)
  - `yarn create next-app lola-ui-starter --typescript --example https://github.com/jpedroschmitz/typescript-nextjs-starter`
  - so [all of this goodness](https://github.com/jpedroschmitz/typescript-nextjs-starter/blob/9fb4d2a1292c3b9ac18f32feaac76075bddb682e/README.md) is included as well.

- `.vscode`:

  - [format on save and prettier enabled](https://github.com/lolaent/lola-ui-starter/commit/d63cf0537f73969688ad45fe747c7d503c18bfbf#diff-a5de3e5871ffcc383a2294845bd3df25d3eeff6c29ad46e3a396577c413bf357)
  - [extension recommendations](https://github.com/lolaent/lola-ui-starter/commit/d63cf0537f73969688ad45fe747c7d503c18bfbf#diff-c16655a98a3ee89a7636a59c59a72b0e93649e3a1e947327cfc43a1336b4e912)

- [a skeleton `chakra` ui](https://github.com/lolaent/lola-ui-starter/commit/9eab6dd01effa73b4a80e9148eaf284286bf0833)

- [loripsum.net used](https://github.com/lolaent/lola-ui-starter/blob/9eab6dd01effa73b4a80e9148eaf284286bf0833/src/lib/api.ts#L2) for a simple dynamic site

- [renovatebot is set to automerge its own successful PRs](https://github.com/lolaent/lola-ui-starter/commit/31ebb7d5153535f47c7dca6330a9f462f4ee5749)

## 📄 Env variables
In order to use the environment variables, first you must store them in a `.env.local` file.
If you want to expose the values inside the env expose them with the `NEXT_PUBLIC` prefix
eg: NEXT_PUBLIC_GOOGLE_API_KEY = '12345'
You can also use `.env.development` (development environment), and `.env.production` (production environment).
[Read more about NextJS environment variables](https://nextjs.org/docs/basic-features/environment-variables)

