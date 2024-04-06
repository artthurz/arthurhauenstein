"use client";
import { ImagesGrid } from "@/components/ui/images-grid";
import React from "react";

export function UniversityImages() {
  return (
    <div className="h-screen py-20 w-full">
      <ImagesGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House in the woods</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House above the clouds</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Greens all over</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className:
      "w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full",
    thumbnailClassName:
      "w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full",
    thumbnail: "/images/university/1.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className:
      "hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32",
    thumbnailClassName:
      "hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32",
    thumbnail: "/images/university/2.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className:
      "mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2",
    thumbnailClassName:
      "hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32",
    thumbnail: "/images/university/3.jpg",
  },
];
