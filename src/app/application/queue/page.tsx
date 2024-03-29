import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Queue",
  description: "Generated by create next app",
};

export default function Queue() {
  return (
    <div className="container h-screen py-2 bg-gray-300  mx-auto">
      <div>
        <p className="font-extrabold text-2xl px-4  rounded-[15px]">Queue</p>
        <p className=" px-4 rounded-[15px]"> Main</p>
      </div>
      <div className="container py-2 mx-auto">
        <div className=" items-center px-4 justify-center"></div>
      </div>
    </div>
  );
}
