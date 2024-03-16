"use client";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import Tasks from "./data/tasks.json";

export default function Transactions() {
  return (
    <div className="relative  overflow-auto card rounded-3xl px-4 bg-white pt-14  w-full    ">
      <div className="w-full h-full flex">
        <DataTable columns={columns} data={Tasks} />
      </div>
    </div>
  );
}
