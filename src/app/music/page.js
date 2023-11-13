import { FaSpotify, FaApple, FaDeezer, FaAmazon, FaYoutube } from "react-icons/fa"
import { PiTidalLogoFill } from "react-icons/pi"

export default function Music() {
    return (
            <div className="flex justify-evenly items-start mt-10">
                <video autoPlay muted loop src="/when-i-am-not.mp4" className="w-80 rounded"></video>
                <div className="flex flex-col items-center">
                <h2 className="text-2xl uppercase">When I Am Not</h2>
                <FaSpotify size={40} className="mt-8 hover:scale-110 duration-200" />
                <FaApple size={40} className="mt-8 hover:scale-110 duration-200" />
                <PiTidalLogoFill size={40} className="mt-8 hover:scale-110 duration-200" />
                <FaDeezer size={40} className="mt-8 hover:scale-110 duration-200" />
                <FaAmazon size={40} className="mt-8 hover:scale-110 duration-200" />
                <FaYoutube size={40} className="mt-8 hover:scale-110 duration-200" />
                </div>
            </div>    
    )
}