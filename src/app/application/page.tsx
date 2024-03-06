"use client";
import React from "react";
import type { Metadata } from "next";
import Reacts, { PureComponent } from "react";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Line,
} from "recharts";

import dynamic from "next/dynamic";
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function Dashboard() {
  return (
    <div
      className="max-w-full  max-h-full py-2 w-full h-full   bg-gray-700   
    flex-col place-items-center"
    >
      <div>
        <p className="font-extrabold text-2xl px-4  rounded-[15px]">
          Dashboard
        </p>
        <p className=" px-4 rounded-[15px]"> Main</p>
      </div>
      <div className="h-full    sm-w-full px-2 w-full">
        <div className=" items-center  px-2 justify-center">
          <div className="grid grid-cols-1   gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            <div className="parent">
              <div className="relative card  bg-white py-6 px-6  my-4 ">
                <div className=" text-indigo-950 logo flex items-center absolute rounded-full py-4 px-4  left-4 -top-6"></div>
                <div className="w-12 h-12  bg-[url('../images/req.png')] bg-cover bg-no-repeat"></div>
                <div className="mt-4">
                  <p className="text-xl font-semibold my-2">45 </p>

                  <div className="flex space-x-2 text-gray-400 text-sm my-3">
                    <p>Total Approved this Month.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="parent">
              <div className="relative card bg-white py-6 px-6 rounded-3xl my-4 ">
                <div className=" text-white  logo flex items-center absolute rounded-full py-4 px-4  left-4 -top-6"></div>
                <div className="w-12 h-12  bg-[url('../images/approve.png')] bg-cover bg-no-repeat"></div>{" "}
                <div className="mt-4">
                  <p className="text-xl font-semibold my-2">45 / 45</p>

                  <div className="flex space-x-2  text-blue-800 text-sm my-3">
                    <p>Total Approved this Month.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="parent">
              <div className="relative card bg-white py-6 px-6 rounded-3xl my-4 ">
                <div className=" text-white logo flex items-center absolute rounded-full py-4 px-4  left-4 -top-6"></div>
                <div className="w-12 h-12   bg-[url('../images/rejected.png')] bg-cover bg-no-repeat"></div>{" "}
                <div className="mt-4">
                  <p className="text-xl font-semibold my-2">0 </p>

                  <div className="flex space-x-2 text-blue-800 text-sm my-3">
                    <p>Total Declined this Month.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full  text-gray-800   w-full">
        <div className="flex items-center px-2 justify-center">
          <div className="grid grid-cols-1  gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            <div className="relative col-span-2  bg-slate-200 py-4 px-4 rounded-3xl my-4 ">
              <div className="justify-center flex">
                <div className="w-full pt-4  flex h-[350px]">
                  <ResponsiveContainer>
                    <ComposedChart
                      width={400}
                      height={400}
                      data={data}
                      margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                      }}
                    >
                      <CartesianGrid stroke="#f5f5f5" />
                      <XAxis dataKey="name" scale="band" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="uv" barSize={40} fill="#413ea0" />
                      <Line type="natural" dataKey="uv" stroke="#ff7300" />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <p className="font-semibold text-center align-text-bottom text-sm text-gray-500">
                University usage:
              </p>
            </div>
            <div className="relative w-[350px] h-[full] bg-white py-4  rounded-3xl my-4 ">
              <div className=" text-black flex items-center absolute rounded-full     left-4 ">
                <a href="../../application/activity_logs">Activity Logs</a>
              </div>

              <p className="text-xl font-semibold my-2"></p>

              <div className="flex space-x-2 text-gray-400 text-sm my-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
