import { Suspense } from "react";
import { RestablecerForm } from "@/features/auth/restablecer-form";

export default function RestablecerPage() {
  return (
    <Suspense>
      <RestablecerForm />
    </Suspense>
  );
}
