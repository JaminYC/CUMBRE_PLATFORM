"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthSession } from "@/features/auth/auth-session";

export function useRequireSession() {
  const router = useRouter();
  const auth = useAuthSession();

  useEffect(() => {
    if (auth.isHydrated && !auth.session) {
      router.replace("/login");
    }
  }, [auth.isHydrated, auth.session, router]);

  return auth;
}
