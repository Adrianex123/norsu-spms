"use client";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import Tasks from "./data/tasks.json";

export default function Transactions() {
  return (
    <div className="h-full  overflow-auto sm-w-full px-2 w-full">
      <div className=" items-center  px-2 justify-center">
        <div className="parent col-span-3">
          <div className="relative card rounded-3xl  bg-white py-6    ">
            <div className="w-full h-full flex">
              <DataTable columns={columns} data={Tasks} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
