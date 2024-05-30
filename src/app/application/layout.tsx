import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.css";

import { cn } from "@/lib/utils";
import Sidebar from "@/components/layout/side-bar/side-bar";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import Providers from "@/redux/Provider";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import Topbar from "@/components/layout/top-bar/top-bar";
import { createClient } from "@supabase/supabase-js";
import { redirect } from "next/navigation";

const montserrat = Montserrat({
  subsets: ["cyrillic"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Generated by create next app",
};
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createSupabaseServerClient();
  const supabase2 = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!
  );
  const { data, error } = await supabase.auth.getUser();
  const result: any = !error
    ? await supabase2
        .from("employees")
        .select(
          `
        id,
        email,
        first_name,
        last_name,
        image_url,
        address,
        sectors(*),
        roles (id, role),
        created_at,
        password
      `
        )
        .eq("id", data.user.id)
    : null;
  const currentUser = result?.data[0];
  if (error || !data?.user) {
    redirect("/");
  }
  return (
    <html lang="en">
      <body className={cn("font-montserrat", montserrat.variable)}>
        <Providers>
          <div className="w-full min-h-screen hidden bg-red-800 max-lg:flex justify-center place-items-center">
            <h1 className="text-2xl text-white">
              Open the Software on a bigger screen
            </h1>
          </div>
          <div className="max-lg:hidden grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <Sidebar data={currentUser} />
            <div className="flex flex-col relative">
              <Topbar data={currentUser} />
              {children}
            </div>
          </div>
          <Sonner />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
