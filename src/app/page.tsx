import Image from "next/image";
import loginLogo from "../images/login-logo.png";
import loginIllustration from "../images/login-illustration.png";
import Link from "next/link";

export default function Page() {
  return (
    <form action="/login" method="">
      <main className="w-screen h-screen w-100%] h-full bg-[url('../images/bg-left.png')] bg-cover bg-no-repeat flex  justify-center place-items-center gap-14">
        <div className="container mx-auto h-full">
          <nav className="text-right  py-5">
            <a
              href="#"
              className=" nav   text-base font-extrabold  py-4 px-4 rounded-lg"
            >
              Home
            </a>
            <a
              href="#"
              className=" nav   text-base font-extrabold py-4 px-4 rounded-lg"
            >
              About
            </a>
            <a
              href="#"
              className=" nav   text-base font-extrabold py-4 px-4 rounded-lg pr-10 "
            >
              Profile
            </a>
            <button>
              <Link
                href="/login"
                className="    text-base font-extrabold mr-[-5px] ml-[-5px]  "
              >
                LOGIN
              </Link>
            </button>
          </nav>

          <div className="  flex-col  justify-center place-items-center gap-14">
            <Image src={loginLogo} alt="norsu-logo" />
            <Image src={loginIllustration} alt="login-illustration" />

            <div className="flex flex-col justify-items-center place-items-center gap-2">
              <h1 className="text-center text-white text-3xl font-bold">
                Wala koy matittle ani tabang!!!!!!!!!!!!!!!!!!!
              </h1>
              <p className="text-center text-white text-xl">
                CAPSTONE DIAY NI.
              </p>
            </div>
          </div>
        </div>
      </main>
    </form>
  );
}
