import Image from "next/image";
import loginLogo from "../images/login-logo.png";
import loginIllustration from "../images/login-illustration.png";

export default function Page() {
  return (
    <form action="/home" method="">
      <main className="w-screen h-screen w-100%] h-full bg-[url('../images/bg-left.png')] bg-cover bg-no-repeat flex  justify-center place-items-center gap-14">
        <div className="container mx-auto h-full">
          <nav className="text-right  py-5">
            <a
              href="#"
              className=" nav   text-base font-extrabold  py-4 px-4 rounded-lg"
            >
              TEXT HERE
            </a>
            <a
              href="#"
              className=" nav   text-base font-extrabold py-4 px-4 rounded-lg"
            >
              TEXT HERE
            </a>
            <a
              href="#"
              className=" nav   text-base font-extrabold py-4 px-4 rounded-lg pr-10 "
            >
              TEXT HERE
            </a>
            <button className="">
              <a
                href="#"
                className="  py-23 text-3xl text-base font-extrabold py-5 px-5  "
              >
                LOGIN
              </a>
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
