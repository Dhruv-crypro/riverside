# Riverside Turborepo Starter

A JavaScript/TypeScript Turborepo with:

- **Frontend**: Next.js App Router (`apps/web`)
- **Backend**: Express API (`apps/api`)
- **DB layer**: Prisma package (`packages/db`)
- **Auth**: Clerk (`packages/auth`, Next.js `proxy.ts`)

## Quick start

```bash
pnpm install
cp .env.example .env
pnpm dev
```

> Clerk runs in **keyless mode** by default. You can run immediately without setting Clerk keys.

## Clerk setup (App Router)

- `apps/web/proxy.ts` uses `clerkMiddleware()` from `@clerk/nextjs/server`.
- `apps/web/app/layout.tsx` puts `<ClerkProvider>` inside `<body>`.
- Auth UI uses `<Show>`, `<SignInButton>`, `<SignUpButton>`, and `<UserButton>` from `@clerk/nextjs`.


## Environment variables

Required:
- `DATABASE_URL`

Optional:
- `API_PORT` (defaults to `3001`)
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY`
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`

## Prisma setup

The shared db package uses Prisma with PostgreSQL.

```bash
pnpm --filter @riverside/db prisma:generate
pnpm --filter @riverside/db prisma:migrate
```

## App URLs

- Web: http://localhost:3000
- API: http://localhost:3001

## Monorepo structure

```txt
apps/
  web/        # Next.js App Router + Clerk
  api/        # Express API
packages/
  db/         # Prisma schema and client
  auth/       # Clerk middleware wrappers for Express/Next
```
