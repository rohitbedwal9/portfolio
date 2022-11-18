import React from "react";
import { Logo } from "@components";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export const Navbar: React.FC = () => {
  return (
      <div>
        <Head>
          <title>Rohit | Portfolio</title>
        </Head>
        <div className="nav fixed top-0 left-0 right-0 grid grid-flow-col bg-black  align-center h-16 z-10 px-8 " >
          <span className="justify-start"><Link href="/"><Logo/></Link></span>
          <span className="flex justify-end pt-4 gap-6 text-xl text-white">
            <Link className="nav-item" href="/" >Home</Link>
            <Link className="nav-item" href="#about">About</Link>
            <Link className="nav-item" href="#skills">Skills</Link>
            <Link className="nav-item" href="#education">Education</Link>
            <Link className="nav-item" href="#projects">Projects</Link>
            <Link className="nav-item" href="#contact">Contact</Link>
          </span>
        </div>
      </div>
  );
};
