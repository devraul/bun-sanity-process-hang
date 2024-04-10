# bun-sanity-client-hang

This project is a sandbox to demo the problem when running a sanity script with Bun.

## Reproduction

1. install the dependencies using bun
   ```bash
   bun install
   ```
1. create a .env file:

   ```bash
   cp .env.sample .env
   ```

1. fill both `SANITY_PROJECT_ID` and `SANITY_TOKEN`
1. run the entry script using bun:

   ```bash
   bun run index.ts
   ```

   You'll see the process hang

1. Now, run the same script with `tsx`
   ```bash
   bun tsx index.ts
   ```
