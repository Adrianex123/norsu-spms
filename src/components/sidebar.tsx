import Link from "next/link";

import Image from "next/image";
import OtenNiSharleen from "../images/login-logo.png";

export default function Sidebar() {
  return (
    <div className="w-[17%] h-full  flex-col place-items-center  bg-[#17134e] py-10 px-8 gap-2  ">
      <Image src={OtenNiSharleen} className="w-full" alt="Picture of Logo" />

      <div className="flex flex-col links w-full gap-2 ">
        <Link
          href="/dashboard"
          className="box text-white text-base font-extrabold py-4 px-2 rounded-lg"
        >
          DASHBOARD
        </Link>
        <Link
          href="/request"
          className="box text-white text-base font-extrabold py-4 px-2 rounded-lg"
        >
          REQUEST
        </Link>
        <Link
          href="/queue"
          className="box text-white text-base font-extrabold py-4 px-2 rounded-lg"
        >
          QUEUE
        </Link>
        <Link
          href="/stocks"
          className="box text-white text-base font-extrabold py-4 px-2 rounded-lg"
        >
          STOCKS
        </Link>
        <Link
          href="/departments"
          className="box text-white text-base font-extrabold py-4 px-2 rounded-lg"
        >
          DEPARTMENTS
        </Link>
        <Link
          href="account_management"
          className="box text-white text-base font-extrabold py-4 px-2 rounded-lg"
        >
          ACCOUNT MANAGMENT
        </Link>
        <Link
          href="activity_logs"
          className="box text-white text-base font-extrabold py-4 px-2 rounded-lg"
        >
          ACTIVITY LOGS
        </Link>
        <Link
          href="/reports"
          className="box text-white text-base font-extrabold py-4 px-2 rounded-lg"
        >
          REPORTS
        </Link>
      </div>
    </div>
  );
}
