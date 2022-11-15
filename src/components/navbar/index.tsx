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
        <div className="nav grid grid-flow-col  bg-black  align-center h-16 z-10 px-8 " >
          <span className="justify-start"><Logo/></span>
          <span className="flex justify-end pt-4 gap-6 text-xl text-white">
            <Link className="nav-item" href="/about" >Home</Link>
            <Link className="nav-item" href="/book">About</Link>
            <Link className="nav-item" href="/portfolio">Skills</Link>
            <Link className="nav-item" href="/blog">Education</Link>
            <Link className="nav-item" href="/blog">Projects</Link>
            <Link className="nav-item" href="/contact">Contact</Link>
          </span>
        </div>
      </div>
  );
};
