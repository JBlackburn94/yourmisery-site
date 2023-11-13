import Image from "next/image"
import Link from "next/link"
import { FaSpotify, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa"

export default function Home() {
    return (
        <div className="flex flex-col justify-center items-center mt-11">
           <Image 
            src="/hero-image.webp"
            height={500}
            width={1000}
            alt="Shallow Life Banner"
            className="rounded-sm"
           />
           <p className="mt-5">The New Single</p>
           <h1 className="text-4xl uppercase">Shallow Life</h1>
           <button className="bg-slate-700 hover:bg-slate-400 duration-500 py-2 px-4 mt-4 rounded">
            <Link href="https://open.spotify.com/artist/7qJanCPQlXfO9DajSlDR2n" target="_blank">Listen Now!</Link>
           </button>
           <div className="flex mt-4">
            <Link className="mx-2" href="">
                <FaSpotify size={28} />
            </Link>
            <Link className="mx-2" href="">
                <FaInstagram size={28} />
            </Link>
            <Link className="mx-2" href="">
                <FaFacebook size={28} />
            </Link>
            <Link className="mx-2" href="">
                <FaTwitter size={28} />
            </Link>
           </div>
           <iframe className="rounded-sm mt-4 mb-7 w-2/4 hidden lg:block" src="https://open.spotify.com/embed/artist/7qJanCPQlXfO9DajSlDR2n?utm_source=generator" height="400" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    )
}