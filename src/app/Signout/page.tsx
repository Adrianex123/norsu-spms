"use client";
import createSupabaseServer from "@/lib/supabase/server";
import { Button } from "@nextui-org/react";
import { redirect } from "next/navigation";

export default function Signout() {
  const signOut = async () => {
    "use server";
    const supabase = await createSupabaseServer();
    await supabase.auth.signOut();
    redirect("/auth-server-action/app");
  };
  return (
    <form action={signOut}>
      <Button>Signout</Button>
    </form>
  );
}
