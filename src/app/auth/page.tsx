"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import Link from "next/link";
import { text } from "stream/consumers";
import Image from "next/image";
import loginLogo from "../../images/login-logo.png";
import loginIllustration from "../../images/login-illustration.png";
import { Router } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { supabaseBrowser } from "@/lib/supabase/browser";

export default function Login() {
  return (
    <form action="./application" method="">
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
            <h1 className="text-center text-slate-800 text-3xl font-bold">
              Welcome back!
            </h1>
            <div className="w-full flex flex-col  gap-8">
              <div className="w-full flex flex-col gap-2">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  className="border-b-2 rounded-3xl  p-4"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <span>Password</span>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="border-b-2 rounded-3xl  p-4"
                />
              </div>
              <div className="w-full flex justify-between place-items-center">
                <div className="flex justify-center place-items-center gap-2">
                  <input type="checkbox" />
                  <label className="text-lg">Remember me</label>
                </div>
              </div>

              <button className="  w-full flex justify-center place-items-center gap-8 text-lg px-10 py-3  rounded-lg text-white bg-[#17134E]  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  stroke-width="4"
                  stroke-linecap="butt"
                  stroke-linejoin="round"
                >
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3" />
                </svg>
                Login
              </button>

              <div className="w-full flex justify-center mt-4 gap-4">
                <p>Cant log in?</p>
                <a href="/" className="text-[#17134E] underline">
                  Contact Admin
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </form>
  );
}
