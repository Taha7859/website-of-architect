import Image from "next/image";
import Logo from "./icons/logo";

export default function Home() {
  return (
    <main>
  <div>
    <div>
      <h1 className="text-6xl font-bold text-gray-400 mt-72 inline-block ml-96">
        Project
      </h1>
      <br />
      <h1 className="text-6xl font-bold inline-block ml-96">
        Lorum
      </h1>
    </div>
    <div className="flex justify-center">
      <Image
        src="/icon.2.png"
        alt="this is a image"
        width={500}
        height={500}
        className="h-[600px] absolute bottom-36"
      />
    </div>
  </div>
</main>

  );
}
