import { Suspense } from "react";
import { RecuperarForm } from "@/features/auth/recuperar-form";

export default function RecuperarPage() {
  return (
    <Suspense>
      <RecuperarForm />
    </Suspense>
  );
}
