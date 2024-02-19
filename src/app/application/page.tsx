export default function Dashboard() {
  return (
    <div className="w-full h-full pt-4 bg-gray-300   flex-direction-row flex flex-col place-items-center">
      <div className="w-[97%] h-16 text-2xl font-extrabold   flex-col ">
        <div>
          <p className="py-2 px-2 rounded-[50px]">Welcome to Dashboard.</p>
        </div>
      </div>

      <div className="h-[20%] py-4 px-2 w-[97%] ">
        <div className="grid grid-cols-3 gap-4 ">
          <div className="bg-[#FFFFFF] rounded-[15px] h-[181px] p-4">
            <div className="w-12 h-12  bg-[url('../images/req.png')] bg-cover bg-no-repeat"></div>
            <p className="py-2 font-extrabold text-3xl"> 45</p>
            <p className=""> Total Request</p>
          </div>

          <div className="bg-[#FFFFFF] rounded-[15px] h-[181px] p-4">
            <div className="w-14 h-14 s bg-[url('../images/approve.png')] bg-cover bg-no-repeat"></div>
            <p className="py-2 font-extrabold text-3xl"> 45</p>
            Total Approved.
          </div>
          <div className="bg-[#FFFFFF] rounded-[15px] h-[181px] p-4">
            <div className="w-14 h-14 s bg-[url('../images/rejected.png')] bg-cover bg-no-repeat"></div>
            <p className="py-2 font-extrabold text-3xl"> 45</p>
            Declined
          </div>
        </div>
      </div>

      <div className=" mt-14 display-flex py-4 justify-evenly px-2 w-[97%]">
        <div className="grid grid-cols-3 gap-4 ">
          <div className=" col-span-2 bg-[#FFFFFF] rounded-[15px] h-[440px] p-4">
            <a className="py-2  text-1xl">Stocks</a>
            {/* <table className="grid">
              <tr className="  text-center borderborder-b-2">
                <th className="px-7">Item ID</th>
                <th className="px-7">Name of Item</th>
                <th className="px-7">Unit of Measure</th>
                <th className="px-7">Last Updated</th>
                <th className="px-7">Action</th>
              </tr>
            </table> */}
          </div>
          <div className="bg-[#FFFFFF] rounded-[15px] font-semibold p-4">
            Activity Logs
          </div>
        </div>
      </div>
    </div>
  );
}
