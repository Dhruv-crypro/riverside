import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@riverside/db";

export default async function HomePage() {
  const { userId } = await auth();

  const dbNow = await prisma.$queryRawUnsafe("SELECT NOW()::text as now");
  const dbTime = Array.isArray(dbNow) && dbNow[0] ? (dbNow[0] as { now?: string }).now : "unknown";

  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold">Riverside Turborepo</h1>
      <p className="mt-2 text-gray-600">Next.js App Router + Clerk + Prisma + Express</p>

      <div className="mt-8 space-y-3 rounded-lg border p-6">
        <p>Signed in user: {userId ?? "Not signed in"}</p>
        <p>DB time from Prisma: {dbTime}</p>
        <div className="flex gap-4">
          <Link className="underline" href="/sign-in">
            Go to sign in
          </Link>
          <Link className="underline" href="/sign-up">
            Go to sign up
          </Link>
        </div>
      </div>
    </main>
  );
}
