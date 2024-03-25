"use client";
import React, { PureComponent } from "react";

import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
} from "chart.js";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale
);
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Line,
} from "recharts";

import Chartdaw from "@/components/chart/chartdw";
import Chartnapod from "@/components/chart/chartnapod";

export default async function Dashboard() {
  return (
    <div
      className="max-w-full  max-h-full py-2 w-full h-full  bg-gray-300   
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
          <div className="grid grid-cols-1   gap-4 sm:grid-cols-3 lg:grid-cols-3s xl:grid-cols-3">
            <div className="parent">
              <div className="relative card  bg-white py-6 px-6 rounded-3xl my-4 ">
                <div className="   logo flex items-center absolute rounded-full py-4 px-4  left-4 -top-6"></div>

                <div className="mt-4">
                  <div className="w-full  text-sm flex h-300px]">
                    <div style={{ width: "100%", height: 220 }}>
                      <ResponsiveContainer>
                        <Chartnapod></Chartnapod>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  <div className="flex space-x-2 text-blue-800 text-sm my-2">
                    <p>Total Approved</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full   sm-w-full px-2 w-full">
        <div className=" items-center  px-2 justify-center">
          <div className="grid grid-cols-1   gap-4 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3">
            <div className="parent col-span-3">
              <div className="relative card rounded-3xl  bg-white py-6    ">
                <p className="font-semibold text-center align-text-bottom text-sm text-gray-500">
                  University usage:
                </p>
                <div className="w-full  text-sm flex h-300px]">
                  <div style={{ width: "100%", height: 280 }}>
                    <ResponsiveContainer>
                      <Chartdaw />
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
