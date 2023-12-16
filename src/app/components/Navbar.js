"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "/",
      title: "Home",
    },
    {
      id: 2,
      link: "merch",
      title: "Merch",
    },
    {
      id: 3,
      link: "music",
      title: "Music",
    },
    {
      id: 4,
      link: "shows",
      title: "Shows",
    },
  ];

  return (
    <div className="flex items-center justify-between w-full h-20 px-4 text-white bg-black bg-opacity-50 nav">
      <div>
        <h1 className="ml-2">
          <a href="/" rel="noreferrer">
            <Image
              src="/logo.png"
              width={100}
              height={100}
              alt="Your Misery logo"
            />
          </a>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, title }) => (
          <li
            key={id}
            className="px-4 font-medium capitalize duration-200 cursor-pointer nav-links text-slate-200 hover:scale-105 hover:text-white link-underline"
          >
            <Link href={link}>{title}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="z-10 pr-4 text-gray-500 cursor-pointer md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen text-gray-500 bg-gradient-to-b from-black to-gray-800">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 py-6 text-4xl capitalize cursor-pointer"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
