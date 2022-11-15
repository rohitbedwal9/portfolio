import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <div className="grid justify-center gap-3 py-5 text-white text-lg bg-black">
      <div className="social  flex justify-center gap-4 ">
        <Link className="linkedin" href="https://au.linkedin.com/in/rohitbedwal9" title="Connect with me on Linkedin" target="_blank"><Image src="/icons/linkedin-icon.svg" width={35} height={35}/></Link>
        <Link className="instagram" href="https://www.instagram.com/rohitbedwal9" title="Follow me on Instagram" target="_blank"><Image src="/icons/instagram-icon.svg" width={35} height={35}/></Link>
        <Link className="github" href="https://www.github.com/rohitbedwal9" title="Follow me on GitHub" target="_blank"><Image src="/icons/github-icon.svg" width={35} height={35}/></Link>
      </div>
      <div>©2022 rohitbedwal9</div> 
    </div>
  );
};
