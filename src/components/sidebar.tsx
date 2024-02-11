import Image from "next/image";
import OtenNiSharleen from "../images/login-logo.png";

export default function Sidebar() {
  return (
    <div className="w-[17%] h-full flex flex-col place-items-center bg-[#17134e] py-10 px-8 gap-20">
      <Image src={OtenNiSharleen} className="w-full" alt="Picture of Logo" />

      <div className="flex flex-col links w-full gap-2">
        <a
          href="#"
          className="text-white text-base font-extrabold py-4 px-2 rounded-lg"
        >
          DASHBOARD
        </a>
        <a
          href="#"
          className=" text-white text-base font-extrabold py-4 px-2 rounded-lg"
        >
          REQUESTS
        </a>
        <a
          href="#"
          className=" text-white text-base font-extrabold py-4 px-2 rounded-lg"
        >
          QUEUE
        </a>
        <a
          href="#"
          className=" text-white text-base font-extrabold py-4 px-2 rounded-lg"
        >
          STOCKS
        </a>
        <a
          href="#"
          className=" text-white text-base font-extrabold py-4 px-2 rounded-lg"
        >
          DEPARTMENTS
        </a>
        <a
          href="#"
          className=" text-white text-base font-extrabold py-4 px-2 rounded-lg"
        >
          ACCOUNT MANAGMENT
        </a>
        <a
          href="#"
          className=" text-white text-base font-extrabold py-4 px-2 rounded-lg"
        >
          ACTIVITY LOGS
        </a>
        <a
          href="#"
          className=" text-white text-base font-extrabold py-4 px-2 rounded-lg"
        >
          REPORTS
        </a>
      </div>
    </div>
  );
}
