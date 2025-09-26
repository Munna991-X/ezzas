"use client";
import { Grid, Home, MessageSquareText, User } from "lucide-react";
import { BsQrCodeScan } from "react-icons/bs";

export const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t rounded-t-xl border-gray-200 px-4 pt-2 pb-4 z-50">
      <div className="relative flex items-end justify-between">
        {/* Left buttons */}
        <div className="flex flex-col items-center text-xs text-[#3B82F6]">
          <Home size={20} />
          <span className="mt-1">Нүүр</span>
        </div>

        <div className="flex flex-col items-center text-xs text-[#3B82F6]">
          <Grid size={20} />
          <span className="mt-1">Үйлчилгээ</span>
        </div>

        {/* Center button container (simulate floating) */}
        <div className="relative z-10 before:content-[''] before:absolute bottom-6 before:inset-0 before:rounded-full before:bg-white before:z-[-1] before:scale-125">
          <div className="bg-gradient-to-b from-[#3B82F6] to-[#2563EB] rounded-full p-3 shadow-lg border border-white">
            <BsQrCodeScan size={24} className="text-white" />
          </div>
        </div>

        {/* Right buttons */}
        <div className="flex flex-col items-center text-xs text-[#3B82F6]">
          <MessageSquareText size={20} />
          <span className="mt-1">Чат</span>
        </div>

        <div className="flex flex-col items-center text-xs text-[#3B82F6]">
          <User size={20} />
          <span className="mt-1">Профайл</span>
        </div>
      </div>
    </nav>
  );
};
