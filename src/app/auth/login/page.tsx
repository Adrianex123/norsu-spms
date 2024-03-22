"use client";
import Image from "next/image";
import loginLogo from "@/images/login-logo.png";
import loginIllustration from "@/images/login-illustration.png";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { redirect } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
// import { signInWithEmailAndPassword } from "@/lib/actions";
import { useTransition } from "react";
import { cn } from "@/lib/utils";

const loginSchema = z.object({
  email: z.string().email({ message: "Must be a valid email" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});
export default function Login() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  });

  async function onSubmit(data: z.infer<typeof loginSchema>) {
    startTransition(async () => {
      // const result = await signInWithEmailAndPassword(data);

      // const { error } = JSON.parse(result);
      // if (error?.message) {
      //   console.log(error);
      //   toast({
      //     variant: "destructive",
      //     title: "Error",
      //     description: error.message,
      //   });
      //   return;
      // }

      toast({
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">Login Successful</code>
          </pre>
        ),
      });
      return redirect("/application");
    });
  }
  return (
    <div className="w-full h-screen flex">
      <div className="w-full h-full bg-[url('../images/bg-left.png')] bg-no-repeat bg-cover flex flex-col justify-center place-items-center gap-12">
        <Image className="w-[35%]" src={loginLogo} alt="norsu-logo" />
        <Image
          className="w-[40%]"
          src={loginIllustration}
          alt="login-illustration"
        />
        <div className="w-full flex flex-col justify-center place-items-center gap-3">
          <h1 className="text-white text-2xl font-bold">
            Managing Supply and Property made easy!
          </h1>
          <p className="text-white text-lg font-regular">
            This is a Capstone project of group ni Sharleen
          </p>
        </div>
      </div>
      <div className="w-full h-full flex justify-center place-items-center">
        <div className="w-[45%] h-auto flex flex-col justify-start place-items-center gap-4">
          <h3 className="text-[1.5rem] font-bold">Welcome back! 👋</h3>
          <Form {...form}>
            <form
              className="flex flex-col w-full gap-6"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <div className="flex flex-col w-full gap-6">
                <div className="flex flex-col w-full gap-3">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs">Email</FormLabel>
                        <FormControl>
                          <input
                            title="email"
                            type="text"
                            placeholder="Enter your email"
                            className="w-full text-sm px-5 py-2.5 rounded-md bg-foregroundBg text-black border border-lightBorder "
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col w-full gap-3">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs">Password</FormLabel>
                        <FormControl>
                          <input
                            type="password"
                            placeholder="••••••••••"
                            className="w-full text-sm px-5 py-2.5 rounded-md bg-foregroundBg text-black border border-lightBorder "
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="w-full flex gap-4 text-white text-sm px-5 py-2.5 text-center bg-[#17134E] hover:bg-[#17134E]/70 font-bold rounded-lg transition-all duration-300 "
              >
                <span className={cn({ hidden: isPending })}>Login</span>
                <AiOutlineLoading3Quarters
                  className={cn(" animate-spin", { hidden: !isPending })}
                />
              </Button>
            </form>
          </Form>
          <h2 className="text-xs">
            Can’t Login?{" "}
            <span className="font-bold underline"> Contact Admin</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
