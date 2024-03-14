"use client";
import Image from "next/image";
import loginLogo from "../images/login-logo.png";
import loginIllustration from "../images/login-illustration.png";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [isClick, setisClick] = useState(false);
  const togglenav = (): void => {
    setisClick(!isClick);
  };
  return (
    <main className="w-screen h-screen  bg-[url('../images/wth4.jpg')] bg-cover bg-no-repeat flex  ">
      <div className="container  mx-auto h-full">
        <div className="flex flex-col justify-items-center place-items-center gap-2"></div>
      </div>
    </main>
  );
}
