
import Head from "next/head";
import { AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { MdOutlineEngineering } from "react-icons/md";
import { FaUpwork } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Container from "@/components/Container";



export default function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-400 to-amber-200 min-h-screen">
      <Head>
        <title>Joaquin Fioriti</title>
        <meta name="description" content="Joaquin Fioriti Software Engineer porfolio"/> 
      </Head>
      <main >
      <section>
        <nav className="py-10 mb-12 flex justify-between px-3">
          <a href="/">
          <h1 className=" text-xl">Portfolio</h1>
          </a>
          <ul className=" flex items-center">
            <MdOutlineEngineering className="text-3xl "/> {/* TODO: make this size variable depending the device */}
            <li className="hover:scale-125 transition" >
              <a href="#" className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-2 border-none rounded-md ml-8">
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">Working on this page xD</h2>
      </section>
      </main>
    </div>
  );
}
