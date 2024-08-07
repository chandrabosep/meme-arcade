"use client";
import React from "react";
import Image from "next/image";
import Card from "@/components/Card";
import { unbounded } from "@/components/Fonts";
import Navbar from "@/components/Navbar";

export default function page() {
  return (
    <main className="flex w-screen flex-col gap-y-12 text-cream">
      <Navbar />
      <div className="w-full flex flex-col rounded-lg">
        <div className="w-11/12 md:w-full mx-auto flex items-center justify-between bg-black text-cream  py-4 px-5 ">
          <div className="flex items-center gap-x-3">
            <Image
              src="/arcade-white.svg"
              alt="alt"
              width={1000}
              height={1000}
              className="w-8"
            />
            <div className="flex flex-col">
              <h6 className={`${unbounded.className} text-lg font-bold`}>
                Onboarding Games
              </h6>
            </div>
          </div>
        </div>
        <div className="md:pl-6 py-6 flex flex-row w-full overflow-x-scroll gap-x-4 rounded-b-lg">
          {[
            {
              title: "The Flying Burd",
              image: "/flappyBird.png",
              slug: "flappy-bird",
            },
          ].map((item, index) => (
            <Card
              key={index}
              title={item.title}
              image={item.image}
              slug={item.slug}
            />
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col rounded-lg">
        <div className="w-11/12 md:w-full mx-auto flex items-center justify-between bg-black text-cream  py-4 px-5 ">
          <div className="flex items-center gap-x-3">
            <Image
              src="/solo.svg"
              alt="alt"
              width={1000}
              height={1000}
              className="w-8"
            />
            <div className="flex flex-col">
              <h6 className={`${unbounded.className} text-lg font-bold`}>
                Enganging Games
              </h6>
            </div>
          </div>
        </div>
        <div className="pl-6 py-6 flex flex-row flex-wrap gap-5 w-full  rounded-b-lg">
          {[
            {
              title: "Pepe Run",
              image: "/dino.jpg",
              slug: "dino",
            },
            {
              title: "Block Fit",
              image: "/tetris.jpg",
              slug: "tetris",
            },
          ].map((item, index) => (
            <Card
              key={index}
              title={item.title}
              image={item.image}
              slug={item.slug}
            />
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col rounded-lg">
        <div className="w-11/12 md:w-full mx-auto flex items-center justify-between bg-black text-cream  py-4 px-5 ">
          <div className="flex items-center gap-x-3">
            <Image
              src="/slot.svg"
              alt="alt"
              width={1000}
              height={1000}
              className="w-8"
            />
            <div className="flex flex-col">
              <h6 className={`${unbounded.className} text-lg font-bold`}>
                Degen Games
              </h6>
            </div>
          </div>
        </div>
        <div className="pl-6 py-6 flex flex-row w-full overflow-x-scroll gap-x-4 rounded-b-lg">
          {[
            {
              title: "Just Push",
              image: "/just-push.jpg",
              slug: "just-push",
            },
          ].map((item, key) => (
            <Card
              key={key}
              title={item.title}
              image={item.image}
              slug={item.slug}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
