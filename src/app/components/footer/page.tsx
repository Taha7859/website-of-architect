import { Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
export default function Footer(){
    return (
        <main>
            <section>
                <div className="bg-black h-[420px] w-full text-white mt-[900px] flex">
                    <div>
                        <Image
                        src="/footer.png"
                        alt="footer.img"
                        height={200}
                        width={200}
                        className="w-36 h-24 mx-28 my-14">

                        </Image>
                    </div>
                    <div className=" flex mt-16 space-x-64 ">
                    <div className="h-56 ml-48 space-y-4">
                        <h1 className="font-bold">
                            Inoformation
                        </h1>
                        <ul className="space-y-6">
                            <li>
                                Contacts
                            </li>
                            <li>
                                Gallery
                            </li>
                            <li>
                                Projects
                            </li>
                            <li>
                                Certification
                            </li>
                        </ul>
                    </div>
                    <div className="h-56 space-y-8"  >
                        <h1 className="font-bold ">
                            Contacts
                        </h1>
                        <p>
                            1234 Sample Street <br />Austin Texas78404
                        </p>
                        <p>
                            512.4301-2222
                        </p>
                        <p>
                            anonymousy@gmail.com
                        </p>
                    </div>
                    <div>
                        <h1 className="font-bold">
                            Socail Media
                        </h1>
                        <div className="flex gap-5 mt-3">
                        <Instagram />
                        <Linkedin  />
                        <Github />
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </main>
    )
}