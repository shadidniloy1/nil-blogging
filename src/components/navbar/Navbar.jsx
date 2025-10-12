import Image from "next/image";
import Link from "next/link";
import React from "react";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-[100px] px-8 sm:px-12 md:px-16 lg:px-24">
      <div className="flex items-center_ justify-center_ gap-2 flex-1">
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <div className="flex flex-1 items-center justify-center text-2xl font-bold text-center">NilBlogging</div>
      <div className="flex gap-2 justify-center items-center flex-1">
        <ThemeToggle />
        <Link href='/'>Homepage</Link>
        <Link href='/'>Contact</Link>
        <Link href='/'>About</Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
