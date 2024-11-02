import Image from "next/image";
export default function contact(){
    return (
        <main>
            <section>
                <div>
                <div className="flex justify-end">
                        <Image
                    src="/img.contact.png"
                    alt="img1"
                    height={500}
                    width={500}
                    className="w-[800px] h-[400px] relative right-36 top-7">
                    </Image>
                    </div>
                    <div className="relative bottom-80">
                    <h1 className="text-6xl font-normal text-gray-400 ml-40 mt-10">
                        Contact Us
                    </h1>
                    <div className="ml-40 mt-20 space-y-8 ">
                    <p className="text-2xl text-gray-400">
                        Name
                    </p>
                    <p className="text-2xl text-gray-400">
                        Phone Number
                    </p>
                    <p className="text-2xl text-gray-400">
                        E-mail
                    </p>
                    <p className="text-2xl text-gray-400">
                        Intrested In
                    </p>   <p className="text-2xl text-gray-400">
                        Message
                    </p>
                    <button className="border-gray-400 border-2 px-4 py-2 rounded-md hover:bg-gray-500 hover:text-white hover:border-black ">
                        Send Mail →
                    </button>
                    </div>
                    
                    </div>
                </div>
            </section>
        </main>
    )
}