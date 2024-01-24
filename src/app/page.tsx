import Image from "next/image";
import norsu from "../images/norsu.png"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0" color="w">
      <div className="div" >
      <Image src={norsu} alt="logo" width={150} height={150} />

      <nav>
        
      </nav>

      </div>
     
    </main>
  );
}