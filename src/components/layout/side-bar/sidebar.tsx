import Link from "next/link";
import Image from "next/image";
import Logo from "@/images/home-logo.png";
import { sideLinks } from "./links";
import { Button } from "@/components/ui/button";
import { CiLogout } from "react-icons/ci";

export default function Sidebar() {
  return (
    <div className="w-[300px] flex flex-col place-items-center bg-applicationPrimary py-8 px-8 gap-11">
      <div className="w-[70%]">
        <Image src={Logo} className="w-full" alt="Picture of Logo" />
      </div>

      <div className="w-full h-full flex flex-col justify-between gap-2">
        <div className="w-full flex flex-col gap-2">
          {sideLinks.map((link, i) => {
            const { title, href, Icon } = link;
            return (
              <Link
                href={href}
                className="w-full flex justify-start items-center gap-3 p-3 text-white hover:bg-white hover:text-black transition duration-300 rounded-xl"
                key={i}
              >
                <Icon className="text-2xl" />
                <span className="text-lg font-bold">{title}</span>
              </Link>
            );
          })}
        </div>
        <Button className="w-full flex justify-start items-center gap-3 p-3 text-white bg-transparent hover:bg-white hover:text-black transition duration-300 rounded-xl text-lg">
          <CiLogout />
          Logout
        </Button>
      </div>
    </div>
  );
}
