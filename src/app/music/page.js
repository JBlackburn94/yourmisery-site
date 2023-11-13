import { FaSpotify, FaApple, FaDeezer, FaAmazon, FaYoutube } from "react-icons/fa"
import { PiTidalLogoFill } from "react-icons/pi"

export default function Music() {
    return (
            <div className="flex flex-col justify-center items-center mt-10">
                <h2 className="text-2xl mt-4 uppercase">No Hope</h2>
                <div className="flex flex-row items-center mb-11">
                    <FaSpotify size={28} className="hover:scale-110 mx-2 duration-200" />
                    <FaApple size={28} className="hover:scale-110 mx-2 duration-200" />
                    <PiTidalLogoFill size={28} className="hover:scale-110 mx-2 duration-200" />
                    <FaDeezer size={28} className="hover:scale-110 mx-2 duration-200" />
                    <FaAmazon size={28} className="hover:scale-110 mx-2 duration-200" />
                    <FaYoutube size={28} className="hover:scale-110 mx-2 duration-200" />
                </div>
                <video autoPlay muted loop className="w-80 rounded hidden lg:block">
                    <source src="/when-i-am-not.mp4" />
                </video>
                <h2 className="text-2xl mt-4 uppercase">When I Am Not</h2>
                <div className="flex flex-row items-center mb-11">
                    <FaSpotify size={28} className="hover:scale-110 mx-2 duration-200" />
                    <FaApple size={28} className="hover:scale-110 mx-2 duration-200" />
                    <PiTidalLogoFill size={28} className="hover:scale-110 mx-2 duration-200" />
                    <FaDeezer size={28} className="hover:scale-110 mx-2 duration-200" />
                    <FaAmazon size={28} className="hover:scale-110 mx-2 duration-200" />
                    <FaYoutube size={28} className="hover:scale-110 mx-2 duration-200" />
                </div>
                <h2 className="text-2xl mt-4 uppercase">Still Existence</h2>
                <div className="flex flex-row items-center mb-11">
                    <FaSpotify size={28} className="hover:scale-110 mx-2 duration-200" />
                    <FaApple size={28} className="hover:scale-110 mx-2 duration-200" />
                    <PiTidalLogoFill size={28} className="hover:scale-110 mx-2 duration-200" />
                    <FaDeezer size={28} className="hover:scale-110 mx-2 duration-200" />
                    <FaAmazon size={28} className="hover:scale-110 mx-2 duration-200" />
                    <FaYoutube size={28} className="hover:scale-110 mx-2 duration-200" />
                </div>
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
    )
}