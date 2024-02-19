import React from "react";
export default function Request() {
  return (
    <div className="max-h-screen w-full  pt-2 display-flex items-center m  bg-gray-300 flex flex-col place-items-center">
      <div className="w-[97%] h-16     flex flex-col ">
        <div className=" w-50%">
          <p className="pt-2 px-2  text-2xl font-extrabold  rounded-[50px]">
            Request and Returns
          </p>
          <p className=" px-2">Main Office</p>
        </div>
      </div>

      <div className=" py-4  w-[97%]">
        <div className="grid bg-white w-full  text-gray-900 px-4 rounded-t-[15px]   py-4 grid-cols-5 gap-20  ">
          <input
            type="text"
            placeholder=" Item Code"
            className=" text-center rounded-[43px] bg-gray-400 px-12 text-black w-[247px] h-[39px]"
          ></input>
          <button className="  text-center bg bg-primary rounded-[43px] search w-[111px] h-[39px]">
            Search
          </button>
        </div>
        <div className="flex flex-col h-[550px]   bg-white  ">
          {/* <table className=" col-span-9">
            <th className="  text-center">
              <th className="px-7">Item ID</th>
              <th className="px-7">Department</th>
              <th className="px-7">Requested By</th>
              <th className="px-7">No. of Items</th>
              <th className="px-7">Action</th>
              <th className="px-7">Type</th>
              <th className="px-7"> Delivered Mode</th>
              <th className="px-7"> Status</th>
              <th className="px-7"> Sent</th>
              <th className="px-7"> Action</th>
            </th>
          </table> */}
        </div>
      </div>
    </div>
  );
}
