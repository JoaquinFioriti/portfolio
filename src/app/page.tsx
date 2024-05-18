
import Head from "next/head";
import { AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { MdOutlineEngineering } from "react-icons/md";
import { FaUpwork } from "react-icons/fa6";
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
          <h1 className=" text-xl">Portfolio</h1>
          <ul className=" flex items-center">
            <MdOutlineEngineering className="text-3xl "/> {/* TODO: make this size variable depending the device */}
            <li className="hover:scale-125 transition" >
              <a href="#" className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-2 border-none rounded-md ml-8">
                Resume
              </a>
            </li>
          </ul>
        </nav>
      <div className="text-center p-10">
        <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
          Joaquin Fioriti
        </h2>
        <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
          Software Engineer
        </h3>
        <p className="text-md py-5 leading-7 text-gray-800">
        Background in corporate and freelance work, specializing in full-stack development. With expertise in agile methodologies and application deployment, I excel in delivering efficient and scalable solutions
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16">
        <a href="https://www.linkedin.com/in/joaquin-fioriti-a2ba89197/" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin className="hover:scale-125 transition"/>
        </a>
        <a href="https://www.upwork.com/freelancers/~01eb2607a3760fc756" target="_blank" rel="noopener noreferrer">
        <FaUpwork className="hover:scale-125 transition"/>
        </a>
        <a href="mailto:joaquinfioriti9@gmail.com" target="_blank" rel="noopener noreferrer">
        <MdEmail className="hover:scale-125 transition"/>
        </a>
      </div>
      <section className="flex justify-center">
        <Container />
      </section>
      </section>
      </main>
    </div>
  );
}
