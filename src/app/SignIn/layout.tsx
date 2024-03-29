import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.css";
import { readUserSession } from "@/lib/actions";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const montserrat = Montserrat({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Login",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase.auth.getUser();
  if (data?.user) {
    redirect("/application");
  }
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
