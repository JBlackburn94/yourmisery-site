import Image from "next/image"

export default function Merch() {
    return (
        <div className="flex flex-wrap justify-center items-center mt-10 md:flex-col lg:flex-row shrink-0">
            <div className="bg-slate-400 rounded-xl bg-opacity-40 m-4 flex justify-center items-center flex-col py-2">
                <Image
                    src='/tee-1.webp'
                    height={100}
                    width={400}
                    alt="Your Misery is Mine Tee"
                />
                <p className="text-center">Is Mine T-Shirt</p>
                <p className="text-center">£20</p>
                <button className="bg-black py-2 px-4 rounded hover:scale-105">Add</button>
            </div>
            <div className="bg-slate-400 rounded-xl bg-opacity-40 m-4 flex justify-center items-center flex-col py-2">
                <Image
                    src='/tee-1.webp'
                    height={100}
                    width={400}
                    alt="Your Misery is Mine Tee"
                />
                <p className="text-center">Is Mine T-Shirt</p>
                <p className="text-center">£20</p>
                <button className="bg-black py-2 px-4 rounded hover:scale-105">Add</button>
            </div>
            <div className="bg-slate-400 rounded-xl bg-opacity-40 m-4 flex justify-center items-center flex-col py-2">
                <Image
                    src='/tee-1.webp'
                    height={100}
                    width={400}
                    alt="Your Misery is Mine Tee"
                />
                <p className="text-center">Is Mine T-Shirt</p>
                <p className="text-center">£20</p>
                <button className="bg-black py-2 px-4 rounded hover:scale-105">Add</button>
            </div>
            <div className="bg-slate-400 rounded-xl bg-opacity-40 m-4 flex justify-center items-center flex-col py-2">
                <Image
                    src='/tee-1.webp'
                    height={100}
                    width={400}
                    alt="Your Misery is Mine Tee"
                />
                <p className="text-center">Is Mine T-Shirt</p>
                <p className="text-center">£20</p>
                <button className="bg-black py-2 px-4 rounded hover:scale-105">Add</button>
            </div>
        </div>
    )
}