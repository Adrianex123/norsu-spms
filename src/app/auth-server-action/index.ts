"use server";

import { redirect } from "next/navigation";
import createSupabaseServer from "@/lib/supabase/server";
import { unstable_noStore as noStore } from "next/cache";

export async function readUserSession() {
  noStore();
  const supabsae = await createSupabaseServer();
  return await supabsae.auth.getSession();
}

export const signOut = async () => {
  "use server";
  const supabase = await createSupabaseServer();

  await supabase.auth.signOut();
  redirect("/SignIn");
};

export async function signInWithEmailAndPassword(data: {
  email: string;
  password: string;
}) {
  const supabase = await createSupabaseServer();
  const result = await supabase.auth.signInWithPassword(data);
  return JSON.stringify(result);
}
