import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Logo: React.FC = () => {
  return (
    <Link href="/"><Image src="/icons/logo.png" alt="Rohit" width="130" height="60" /></Link>
  );
};
