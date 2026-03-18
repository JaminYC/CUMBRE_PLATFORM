import { redirect } from "next/navigation";
import { LoginForm } from "@/features/auth/login-form";
import { getServerSession } from "@/lib/server-session";

export default async function LoginPage() {
  const session = await getServerSession();

  if (session) {
    redirect("/dashboard");
  }

  return <LoginForm />;
}
