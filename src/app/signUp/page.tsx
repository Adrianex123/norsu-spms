"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import Link from "next/link";

import Image from "next/image";
import loginLogo from "../../images/login-logo.png";
import loginIllustration from "../../images/login-illustration.png";
import { Router } from "lucide-react";

import { useRouter } from "next/navigation";
import { text } from "stream/consumers";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: "${location.origin}/callback" },
    });
    router.refresh();
    setEmail("");
    setPassword("");
  };

  return (
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
      </div>
      <div className="w-full h-full flex flex-col justify-center place-items-center">
        <div className="w-[50%] h-auto">
          <h1 className="text-center  text-slate-800 text-3xl font-bold">
            SignUp
          </h1>

          <div className="w-full py-2 flex flex-col gap-2">
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              className="border-b-2 rounded-3xl  p-4"
            />
          </div>
          <div className="w-full py-2 flex flex-col gap-2">
            <input
              type="password"
              placeholder="Password"
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="border-b-2 rounded-3xl  p-4"
            />
          </div>
          <div className="w-full py-2 flex flex-col gap-2">
            <button
              onClick={handleSignUp}
              className="text-lg px-10 py-2  rounded-full text-white bg-[#17134E]"
            >
              Submit
            </button>
          </div>
          <div className="w-full py-2 flex flex-col gap-2">
            <button className="text-lg px-10 py-2 rounded-full text-white bg-[#17134E]">
              <a href="./login"> Do you want to Login?</a>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
