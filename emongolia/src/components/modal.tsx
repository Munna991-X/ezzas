import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";

export default function BottomModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [flip, setFlip] = useState(false);

  const handleFlip = () => {
    setFlip((prev) => !prev);
  };

  return (
    <div
      onClick={onClose}
      className={cn(
        "fixed inset-0 z-50 backdrop-blur-sm bg-black/50 flex items-end justify-center transition-all duration-300",
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      )}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={cn(
          "w-full max-w-md bg-white rounded-t-3xl p-4 shadow-lg transition-transform duration-300 ease-out transform",
          isOpen ? "translate-y-0" : "translate-y-full"
        )}
      >
        <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4" />

        <h2 className="text-center text-[#002468] text-lg font-semibold opacity-80 mb-4">
          Иргэний үнэмлэх
        </h2>

        <div className=" h-[200px] w-[350px] sm:h-[250px] perspective-[1000px]">
          <div
            className={`relative w-full h-full rounded-xl transition-transform duration-700 ease-in-out transform-style-preserve-3d ${
              flip ? "rotate-y-180" : ""
            }`}
          >
            <div className="absolute inset-0">
              <Image
                src={flip ? "/unemleh-back.png" : "/unemleh-front.png"}
                alt="Front"
                fill
                className={cn("  rounded-xl", flip ? "scale-x-[-1]" : "")}
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-[#3B82F6] font-semibold text-white px-4 py-2 rounded-full">
            Дахин захиалах
          </button>
          <button
            onClick={handleFlip}
            className="flex items-center border rounded-full p-2 px-4 border-[#3B82F6] gap-2"
          >
            <Image src="/swao.png" alt="flip" width={24} height={24} />
          </button>
        </div>
        <button
          onClick={onClose}
          className="text-[#002468] font-semibold mt-5 opacity-80 w-full px-4 py-2 text-center"
        >
          Хаах
        </button>
      </div>
    </div>
  );
}
