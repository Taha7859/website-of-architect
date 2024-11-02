import Logo from "@/app/icons/logo";
import Image from "next/image";
import Link from "next/link";



export default function Header() {
    return (
     <main>
        <div className="border-2 bg-gray-400 rounded-md h-[90px] shadow-xl shadow-gray-300">
               <div><Image
               width={400}
               height={500}
              src="/icon.1.svg"
              alt="my icon"
              className="h-20">

               </Image>
               </div>
               <div className="flex justify-end space-x-12 relative bottom-[60px] mr-12 font-semibold mt-2" >
                <Link href="/" className="hover:underline ">Home</Link>
                <Link href="/project " className="hover:underline ">Project</Link>
                <Link href="/about" className="hover:underline ">About</Link>
                <Link href="/contact" className="hover:underline ">Contact</Link>
               </div>

               
        </div>
     </main>
    );
  }
  