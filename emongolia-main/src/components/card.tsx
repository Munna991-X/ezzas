import Image from "next/image";
import React from "react";

export const Card = () => {
  return (
    <div className="flex flex-col gap-4">
      {data.map((item) => (
        <div
          key={item.id}
          className="flex items-center border rounded-full py-2 px-4 gap-2"
        >
          <Image src={item.image} alt={item.title} width={24} height={24} />
          <p className="text-[#002468] opacity-80 text-sm font-semibold">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

const data = [
  {
    id: 2,
    title: "Санал асуулга",
    image: "/icons/inbox.svg",
  },
  {
    id: 1,
    title: "Иргэний бүртгэлийн мэдээлэл",
    image: "/icons/unemelh.svg",
  },
  {
    id: 3,
    title: "“Чингис Хаан” Үндэсний Баялгийн Сан",
    image: "/icons/khan.svg",
  },
  {
    id: 4,
    title: "Миний тэтгэврийн мөнгөн хуримтлал",
    image: "/icons/tetgever.svg",
  },
  {
    id: 5,
    title: "Хаягийн өөрчлөлтийн мэдээлэл",
    image: "/icons/map.svg",
  },
  {
    id: 6,
    title: "Өрхийн гишүүдийн мэдээлэл",
    image: "/icons/heart.svg",
  },
  {
    id: 7,
    title: "Гэрлэлтийн мэдээлэл",
    image: "/icons/gerlelt.svg",
  },
  {
    id: 8,
    title: "Гадаад пасспортын мэдээлэл",
    image: "/icons/gadaad.svg",
  },
];
