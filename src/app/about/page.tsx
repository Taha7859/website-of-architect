import Image from "next/image";
export default function About(){
    return(
      <main>
        <section>
          <div className="">
            <Image className="ml-60 max-h-full h-[400px] w-[600px] mt-8"
            src="/icon.4.jfif" 
            alt="my-img"
            height={500} 
            width={500}></Image>
          </div>
          <div className="absolute left-[900px] bottom-[500px]">
            <h1 className="text-6xl font-light text-gray-400">
              About
            </h1>
            <p className="w-[500px] mt-2" >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique velit optio recusandae beatae nisi quaerat. Ipsum libero maiores tenetur rerum aperiam expedita fugit pariatur cumque officia beatae perspiciatis, minus doloremque.
            </p>
            <button className="mt-20 border-2 border-gray-400 px-3 py-2 rounded-md hover:bg-slate-400 hover:text-white hover:border-black">READ MORE . . .</button>
          </div>
        </section>
        <section>
          <div>
            <h1 className="text-6xl font-light text-gray-400 ml-44 mt-32 flex justify-center">
              Main focus/Misson Statement
            </h1>
            <div className="flex justify-center mt-12 space-x-72">
            <p className="w-[350px] ml-48 space-x-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero porro quae ad expedita error! Vel, eaque illum! Dolore ipsum distinctio ipsa consequuntur quaerat ipsam nam voluptates et amet. Sequi, culpa!
            </p>
            <p className="w-[350px] space-x-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum suscipit enim veritatis aliquam voluptates fugit minima cumque architecto dolorem. Deleniti sequi maiores ipsum. Illo aliquid molestiae eligendi recusandae nesciunt? Quo.
            </p>
            </div>
          </div>
        </section>
      </main>
    );
}
