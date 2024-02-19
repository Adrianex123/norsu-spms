import Link from "next/link";

import Image from "next/image";
import loginLogo from "../../images/login-logo.png";
import loginIllustration from "../../images/login-illustration.png";

export default function Home() {
  return (
    <form action="./dashboard" method="post">
      <main className="w-screen h-screen flex">
        <div className="w-[85%] h-full bg-[url('../images/bg-left.png')] bg-cover bg-no-repeat flex flex-col justify-center place-items-center gap-14">
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
          <div className="card w-[50%] h-auto">
            <h1 className="text-center text-slate-800 text-3xl font-bold">
              Welcome back!
            </h1>
            <div className="w-full flex flex-col gap-8">
              <div className="w-full flex flex-col gap-2">
                <span>Email</span>
                <input
                  type="text"
                  placeholder="example@gmail.com"
                  className="border-b-2 p-4"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <span>Password</span>
                <input
                  type="password"
                  placeholder="Password"
                  className="border-b-2 p-4"
                />
              </div>
              <div className="w-full flex justify-between place-items-center">
                <div className="flex justify-center place-items-center gap-2">
                  <input type="checkbox" />
                  <label className="text-lg">Remember me</label>
                </div>
                <Link
                  href={"/application"}
                  className="text-lg px-10 py-3 rounded-full text-white bg-[#17134E]"
                >
                  Login
                </Link>
              </div>
              <div className="w-full flex justify-center mt-4 gap-4">
                <p>Cant log in?</p>{" "}
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
