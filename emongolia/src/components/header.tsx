"use client";
import Image from "next/image";
import { FaBars, FaBell } from "react-icons/fa";
export const Header = () => {
  return (
    <header className="flex justify-between items-center mb-4 px-5 py-4">
      <Image src="/logo/emongolia.svg" alt="logo" width={180} height={38} />
      <div className="flex gap-4">
        <FaBell size={24} className="text-[#3B82F6]" />
        <FaBars size={24} className="text-[#3B82F6]" />
      </div>
    </header>
  );
};
