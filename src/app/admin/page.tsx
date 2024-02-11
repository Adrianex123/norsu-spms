import Dashboard from "../dashboard/page";

export default function Admin() {
  return (
    <div className="w-full h-full flex flex-col justify-center place-items-center">
      <div className="w-full bg-gray] h-screen flex">
        <div className="w-[100%] bg-pr imary">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}
