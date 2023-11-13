import Image from "next/image"

export default function Merch() {
    return (
        <div className="flex flex-wrap justify-center items-center">
            <Image
                src='/tee-1.webp'
                height={100}
                width={400}
                alt="Your Misery is Mine Tee"
                className="bg-slate-400 rounded-xl bg-opacity-10 hover:scale-105 duration-200 mb-4 ml-4 w-1/3"
            />
            <Image
                src='/tee-1.webp'
                height={100}
                width={400}
                alt="Your Misery is Mine Tee"
                className="bg-slate-400 rounded-xl bg-opacity-10 hover:scale-105 duration-200 mb-4 ml-4 w-1/3"
            />
            <Image
                src='/tee-1.webp'
                height={100}
                width={400}
                alt="Your Misery is Mine Tee"
                className="bg-slate-400 rounded-xl bg-opacity-10 hover:scale-105 duration-200 mb-4 ml-4 w-1/3"
            />
            <Image
                src='/tee-1.webp'
                height={100}
                width={400}
                alt="Your Misery is Mine Tee"
                className="bg-slate-400 rounded-xl bg-opacity-10 hover:scale-105 duration-200 mb-4 ml-4 w-1/3"
            />
        </div>
    )
}