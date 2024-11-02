import Image from "next/image";
export default function project (){
    return(
        <main>
            <section>
                <div>
                <h1 className="text-6xl font-normal text-gray-400 ml-64 mt-4">
                    Our Projects
                </h1>
                </div>
                <div className="flex mt-20 justify-center space-x-8">
                    <Image
                    src="/img.1.png"
                    alt="img1"
                    height={500}
                    width={500}
                    className="w-[650]">
                    </Image>
                    
                    <Image
                    src="/img.2.png"
                    alt="img1"
                    height={500}
                    width={500}
                    className="w-[600]">
                    </Image>
                </div>
                <div className="flex justify-center mt-8 space-x-8"> 
                <Image
                    src="/img.3.png"
                    alt="img1"
                    height={500}
                    width={500}
                    className="w-[270px] h-[255px]">
                    </Image>
                    
                    <Image
                    src="/img.4.png"
                    alt="img1"
                    height={500}
                    width={500}
                    className="w-[400px] h-[255]">
                    </Image>

                    <Image
                    src="/img.5.png"
                    alt="img1"
                    height={500}
                    width={500}
                    className="w-[370px] h-[255px]">
                    </Image>
                </div>
                <div className="flex justify-end mr-96 mt-10">
                    <button className="border-gray-400 border-2 px-4 py-2 rounded-md hover:bg-gray-500 hover:text-white hover:border-black">
                        All Project →
                    </button>
                </div>
            </section>
        </main>
    )
}