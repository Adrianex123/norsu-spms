export default function Dashboard() {
  return (
    <div className="max-w-full  max-h-full w-full h-full pt-4 bg-gray-300   flex flex-col place-items-center">
      <div className="w-[97%] h-16 text-2xl font-extrabold   flex-col ">
        <div>
          <p className="py-2 px-2 rounded-[50px]">Welcome to Dashboard.</p>
        </div>
      </div>

      <div className="h-[20%] py-2  px-2 w-[97%] ">
        <div className="grid grid-cols-3 gap-4 ">
          <div className="bg-[#FFFFFF] rounded-[15px] h-[181px] p-4">
            <div className="w-12 h-12  bg-[url('../images/req.png')] bg-cover bg-no-repeat"></div>
            <p className="py-2 font-extrabold text-3xl"> 45</p>
            <p className=" text-blue-900 font-semibold"> Total Request</p>
          </div>

          <div className="bg-[#FFFFFF] rounded-[15px] h-[181px] p-4">
            <div className="w-14 h-14 s bg-[url('../images/approve.png')] bg-cover bg-no-repeat"></div>
            <p className="py-2 font-extrabold text-3xl"> 45</p>
            <p className=" text-blue-900 font-semibold"> Total Approved</p>
          </div>
          <div className="bg-[#FFFFFF] rounded-[15px] h-[181px] p-4">
            <div className="w-14 h-14 s bg-[url('../images/rejected.png')] bg-cover bg-no-repeat"></div>
            <p className="py-2 font-extrabold text-3xl"> 45</p>
            <p className=" text-blue-900 font-semibold"> Total Deckined</p>
          </div>
        </div>
      </div>

      <div className="  display-flex py-6 mt-14 h-full justify-evenly px-2 w-[97%]">
        <div className="grid grid-cols-3 gap-4 ">
          <div className=" col-span-2 bg-[#FFFFFF]  rounded-[15px]  p-4">
            <div className="flex flex-col w-full  text-gray-700 bg-white rounded-xl ">
              <div className="relative overflow-hidden text-gray-700 bg-white">
                <div className="flex flex-col justify-between gap-8 mb-4 md:flex-row md:items-center">
                  <div>
                    <h5 className="block font-sans text-lg antialiased font-semibold leading-snug tracking-normal text-blue-900">
                      Stocks
                    </h5>
                  </div>
                  <div className="flex w-full pt-2 gap-2 shrink-0 md:w-max">
                    <div className="w-full md:w-72">
                      <div className="relative h-10 w-full min-w-[200px]">
                        <div className="absolute grid w-5 h-5 top-2/4 right-3 -translate-y-2/4 place-items-center text-blue-gray-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="w-5 h-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            ></path>
                          </svg>
                        </div>
                        <input
                          className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                          placeholder=" "
                        />
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                          Search
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <table className="w-full text-left table-auto min-w-max">
                  <thead>
                    <tr>
                      <th className="p-4 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                          Item ID
                        </p>
                      </th>
                      <th className="p-4 border-blue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                          Name of Item
                        </p>
                      </th>
                      <th className="p-4  border-blue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                          Unit of Measure
                        </p>
                      </th>
                      <th className="p-4  border-blue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                          Quantity
                        </p>
                      </th>
                      <th className="p-4  border-blue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                          Last Updated
                        </p>
                      </th>
                      <th className="p-4  border-blue-gray-100 bg-blue-gray-50/50">
                        <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                          Action
                        </p>
                      </th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div className="flex items-center gap-4">
                <button
                  disabled
                  className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    ></path>
                  </svg>
                  Previous
                </button>
                <div className="flex items-center gap-2">
                  <button
                    className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg bg-gray-900 text-center align-middle font-sans text-xs font-medium uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      1
                    </span>
                  </button>
                  <button
                    className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      2
                    </span>
                  </button>
                  <button
                    className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      3
                    </span>
                  </button>
                  <button
                    className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      4
                    </span>
                  </button>
                  <button
                    className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      5
                    </span>
                  </button>
                </div>
                <button
                  className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Next
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    ></path>
                  </svg>
                </button>
              </div>{" "}
            </div>
          </div>
          <div className="bg-[#FFFFFF] rounded-[15px] font-semibold p-4">
            Activity Logs
          </div>
        </div>
      </div>
    </div>
  );
}
