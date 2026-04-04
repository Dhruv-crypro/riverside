import { clerkMiddleware, requireAuth } from "@clerk/express";

export function clerkExpressMiddleware() {
  return clerkMiddleware();
}

export function clerkExpressRequireAuth() {
  return requireAuth();
}
