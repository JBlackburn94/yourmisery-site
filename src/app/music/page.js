import { FaSpotify, FaApple, FaDeezer, FaAmazon, FaYoutube } from "react-icons/fa"
import { PiTidalLogoFill } from "react-icons/pi"
import Image from "next/image"

export default function Music() {
    return (
            <div className="flex flex-col justify-center items-center mt-10">
                <video autoPlay muted loop className="w-80 rounded hidden lg:block">
                    <source src="/when-i-am-not.mp4" />
                </video>
                <div className="bg-slate-700 sm:w-2/6 rounded bg-opacity-75 flex justify-center items-center flex-col mt-2 mb-4 mx-2">
                <Image
                    src="/no-hope.webp"
                    height={500}
                    width={500}
                    alt="No Hope artwork"
                    className="block lg:hidden"
                />
                <h2 className="text-2xl mt-4 uppercase">No Hope</h2>
                    <div className="flex flex-row items-center mb-11">
                        <FaSpotify size={28} className="hover:scale-110 mx-2 duration-200" />
                        <FaApple size={28} className="hover:scale-110 mx-2 duration-200" />
                        <PiTidalLogoFill size={28} className="hover:scale-110 mx-2 duration-200" />
                        <FaDeezer size={28} className="hover:scale-110 mx-2 duration-200" />
                        <FaAmazon size={28} className="hover:scale-110 mx-2 duration-200" />
                        <FaYoutube size={28} className="hover:scale-110 mx-2 duration-200" />
                    </div>
                </div>
                <video autoPlay muted loop className="w-80 rounded hidden lg:block">
                    <source src="/when-i-am-not.mp4" />
                </video>
                <div className="bg-slate-700 sm:w-2/6 rounded bg-opacity-75 flex justify-center items-center flex-col mt-2 mb-4 mx-2">
                <Image
                    src="/wian.webp"
                    height={500}
                    width={500}
                    alt="When I Am Not artwork"
                    className="block lg:hidden"
                />
                    <h2 className="text-2xl mt-4 uppercase">When I Am Not</h2>
                    <div className="flex flex-row items-center mb-11">
                        <FaSpotify size={28} className="hover:scale-110 mx-2 duration-200" />
                        <FaApple size={28} className="hover:scale-110 mx-2 duration-200" />
                        <PiTidalLogoFill size={28} className="hover:scale-110 mx-2 duration-200" />
                        <FaDeezer size={28} className="hover:scale-110 mx-2 duration-200" />
                        <FaAmazon size={28} className="hover:scale-110 mx-2 duration-200" />
                        <FaYoutube size={28} className="hover:scale-110 mx-2 duration-200" />
                    </div>
                </div>
                <video autoPlay muted loop className="w-80 rounded hidden lg:block">
                    <source src="/when-i-am-not.mp4" />
                </video>
                <div className="bg-slate-700 sm:w-2/6 rounded bg-opacity-75 flex justify-center items-center flex-col mt-2 mb-4 mx-2">
                <Image
                    src="/still-existence.webp"
                    height={500}
                    width={500}
                    alt="Still Existence artwork"
                    className="block lg:hidden"
                />
                    <h2 className="text-2xl mt-4 uppercase">Still Existence</h2>
                    {/* <p className="w-3/6 text-center">It’s beautifully constructed and spine-tinglingly rousing and bound to be stuck in your head for the next few weeks. - Rocksound</p> */}
                    <div className="flex flex-row items-center mb-11">
                        <FaSpotify size={28} className="hover:scale-110 mx-2 duration-200" />
                        <FaApple size={28} className="hover:scale-110 mx-2 duration-200" />
                        <PiTidalLogoFill size={28} className="hover:scale-110 mx-2 duration-200" />
                        <FaDeezer size={28} className="hover:scale-110 mx-2 duration-200" />
                        <FaAmazon size={28} className="hover:scale-110 mx-2 duration-200" />
                        <FaYoutube size={28} className="hover:scale-110 mx-2 duration-200" />
                    </div>
                </div>
                <video autoPlay muted loop className="w-80 rounded hidden lg:block">
                    <source src="/when-i-am-not.mp4" />
                </video>
                <div className="bg-slate-700 sm:w-2/6 rounded bg-opacity-75 flex justify-center items-center flex-col mt-2 mb-4 mx-2">
                <Image
                    src="/se.webp"
                    height={500}
                    width={500}
                    alt="Shallow Life artwork"
                    className="block lg:hidden"
                />
                <h2 className="text-2xl mt-4 uppercase">Shallow Life</h2>
                    <div className="flex flex-row items-center mb-11">
                        <FaSpotify size={28} className="hover:scale-110 mx-2 duration-200" />
                        <FaApple size={28} className="hover:scale-110 mx-2 duration-200" />
                        <PiTidalLogoFill size={28} className="hover:scale-110 mx-2 duration-200" />
                        <FaDeezer size={28} className="hover:scale-110 mx-2 duration-200" />
                        <FaAmazon size={28} className="hover:scale-110 mx-2 duration-200" />
                        <FaYoutube size={28} className="hover:scale-110 mx-2 duration-200" />
                    </div>
                </div>
            </div>    
    )
}