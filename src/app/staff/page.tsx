export default function Sidebar() {
  return (
    <form action="./Staff" method="post">
    <main className="w-screen h-screen flex">
    
      
    <div className="w-[30%] h-full sidebar  flex flex-col  place-items-center gap-14">
      
        <div className="logo p-20 "   >
            niggas
        </div>

      <div className="flex flex-col justify-items-center place-items-left gap-2">
     
      <div className=" box ">
      <a href="#" className=" ">DASHBOARD</a>
      </div>

      <div className=" box ">
      <a href="#" className=" ">QUEUE</a>
      </div>

      <div className=" box ">
      <a href="#" className=" ">STOCKS</a>
      </div>
      
      <div className=" box ">
      <a href="#" className="">DEPARTMENTS</a>
      </div>

      </div>

    </div>
    
    <div className="w-full h-full flex flex-col justify-center place-items-center">
      <div className="card h-auto">
        <h2>Content</h2>
    <p>This is where the main content goes.</p>
      </div>
    </div>
  </main>
  </form>
  );
}