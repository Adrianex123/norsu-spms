import reqlogo from "../images/request.png";
export default function Dashboard() {
  return (
    <div className="w-full h-full pt-4 bg-gray-300   flex flex-col place-items-center">
      <div className="w-[97%] h-16    text-2xl font-extrabold   flex-col ">
        <div className=" bg-gray-500 w-50%">
          <p className="py-2 px-2 rounded-[50px]">Welcome to Dashboard.</p>
        </div>
      </div>

      <div className="h-[20%] py-4 px-2 w-[97%]">
        <div className="grid grid-cols-3 gap-4 ">
          <div className="bg-[#FFFFFF] rounded-[15px] h-[181px] p-4">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/pastel-glyph/64/40C057/email-marketing--v1.png"
              alt="email-marketing--v1"
            />
            <p className="py-4 font-extrabold text-4xl"> 45</p>
            <p className=""> Total Request</p>
          </div>
          <div className="bg-[#FFFFFF] rounded-[15px] h-[181px] p-4">
            Column 1
          </div>
          <div className="bg-[#FFFFFF] rounded-[15px] h-[181px] p-4">
            Column 1
          </div>
        </div>
      </div>

      <div className=" mt-14 display-flex py-4 px-2 w-[97%]">
        <div className="grid grid-cols-3 gap-4 ">
          <div className=" col-span-2 bg-[#FFFFFF] font-semibold rounded-[15px] h-[440px] p-4">
            Stocks
          </div>
          <div className="bg-[#FFFFFF] rounded-[15px] font-semibold p-4">
            Activity Logs
          </div>
        </div>
      </div>
    </div>
  );
}
