"use client";
import { BottomNav, Header } from "@/components";
import Image from "next/image";
import { RefreshCw } from "lucide-react";
import { Card } from "@/components/card";
import BottomModal from "@/components/modal";
import { useState } from "react";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="bg-white">
      <Header />
      <main className="px-5 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <p className="text-[#002468] font-semibold">Миний бичиг баримтууд</p>
          <p className="text-[#3B82F6] text-xs font-semibold flex items-center gap-2">
            <span>Шинэчлэх</span>
            <RefreshCw color="#3B82F6" size={12} />
          </p>
        </div>
        <Image
          onClick={handleOpen}
          className="rounded-md"
          src="/unemleh-front.png"
          alt="home"
          width={1000}
          height={1000}
        />
        <Card />
      </main>
      <BottomNav />
      <BottomModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
