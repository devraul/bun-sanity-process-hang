# bun-sanity-client-hang

This project is a sandbox to demo the problem when running a sanity script with Bun.

## Reproduction

This is an integration problem, so it'll demand a bit effort.

First step, you'll need to create a sanity project to be able to reproduce.

I won't dive deep on how to do that, so please follow to https://www.sanity.io/ or run `bun create sanity@latest`. If you already have an account, you can simply create a dummy project with some sample data.

All you'll need from this sanity project is the `projectId`.

With the sanity project in place, now we can do the following:

1. install the dependencies using bun
   ```bash
   bun install
   ```
1. create a .env file:

   ```bash
   cp .env.sample .env
   ```

1. open the `.env` file and fill `SANITY_PROJECT_ID`
1. run the entry script using bun:

   ```bash
   bun run index.ts
   ```

   You'll see the process never complete.

1. Now, quite the current process and run the same script with `tsx`
   ```bash
   bun tsx index.ts
   ```
   You'll see we have the console we expect
