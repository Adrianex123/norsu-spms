"use client";
import Link from "next/link";
import Image from "next/image";
import loginLogo from "../../images/login-logo.png";
import loginIllustration from "../../images/login-illustration.png";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { signInWithEmailAndPassword } from "../auth-server-action";

const FormSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8, {
      message: "Password is required.",
    }),
    confirm: z.string().min(8, {
      message: "Password is required.",
    }),
  })
  .refine((data) => data.confirm === data.password, {
    message: "Password did not match",
    path: ["confirm"],
  });

export default function SignUp() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
      confirm: "",
    },
  });
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const result = await signInWithEmailAndPassword(data);
    const { error } = JSON.parse(result);
    form.reset({
      email: "",
      password: "",
      confirm: "",
    });
    if (error?.message) {
      toast({
        variant: "destructive",
        title: "You submitted the following values:",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{error.message}</code>
          </pre>
        ),
      });
    } else {
      toast({
        title: "You submitted the following values:",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">Succesfully Registered</code>
          </pre>
        ),
      });
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <main className="w-screen bg-[url('../images/bg-left.png')] bg-cover bg-no-repeat h-screen grid grid-cols-2">
        <div className="w-[85%] h-full  flex flex-col justify-center place-items-center ">
          <Image src={loginLogo} alt="norsu-logo" />
          <Image src={loginIllustration} alt="login-illustration" />
          <div className="flex flex-col justify-items-center place-items-center gap-2">
            <h1 className="text-center text-white text-3xl font-bold">
              Managing Supply made easy!
            </h1>
            <p className="text-center text-white text-xl">
              This is a Capstone project of group 20
            </p>
          </div>
        </div>{" "}
        <div className="w-full h-full flex flex-col justify-center place-items-center">
          <div className="w-[50%] h-auto">
            <h1 className="text-center  text-slate-800 text-3xl font-bold">
              SignUp
            </h1>
            <Form {...form}>
              <div className="w-full py-2 flex flex-col gap-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="example@gmail.com"
                          {...field}
                          type="email"
                          onChange={field.onChange}
                          className="border-b-2 rounded-3xl  p-4"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-full py-2 flex flex-col gap-2">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="password"
                          {...field}
                          type="password"
                          onChange={field.onChange}
                          className="border-b-2 rounded-3xl  p-4"
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-full py-2 flex flex-col gap-2">
                <FormField
                  control={form.control}
                  name="confirm"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="confirm password"
                          {...field}
                          type="password"
                          onChange={field.onChange}
                          className="border-b-2 rounded-3xl  p-4"
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-full py-2 flex flex-col gap-2">
                <Button
                  type="submit"
                  className="text-lg px-10 py-2  rounded-full text-white bg-[#17134E]"
                >
                  Submit
                </Button>
              </div>
            </Form>
            <div className="text-sm px-10 py-2 text-center rounded-full text-blue-500">
              <Link href={"/SignIn"}>Gusto baka musign-in na dol??</Link>
            </div>
          </div>
        </div>
      </main>
    </form>
  );
}
