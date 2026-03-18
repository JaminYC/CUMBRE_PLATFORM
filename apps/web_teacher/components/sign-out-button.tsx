"use client";

import { useRouter } from "next/navigation";
import { commonMessages, useAppLocale } from "@cumbre/app-runtime/client";

export function SignOutButton() {
  const router = useRouter();
  const { t } = useAppLocale();

  async function onSignOut() {
    await fetch("/api/auth/logout", {
      method: "POST"
    });

    router.replace("/login");
    router.refresh();
  }

  return (
    <button className="button button--ghost" type="button" onClick={() => void onSignOut()}>
      {t(commonMessages.signOut)}
    </button>
  );
}
