'use client'

import Image from "next/image";
import Button from "../Button/page";
import React from "react";
import LinkComponent from "../Link/page";
import HamburgerButton from "../hamburguerbutton/page";

export default function Header() {
  const [navbar, setNavbar] = React.useState(false);

  return (
    <div className="bg-white w-full h-32 flex items-center justify-between max-lg:justify-around px-8 py-20">
      <Image src="/logo.png" width={220} height={245} alt="CANNALABS" className="mt-8" />
      <div className="hidden max-lg:block ">
        <HamburgerButton isOpen={navbar} setIsOpen={setNavbar} />
      </div>
      <div className={`${navbar ? 'max-lg:translate-y-0}' : 'max-lg:-translate-y-full'} max-lg:fixed max-lg:top-0
  max-lg:left-0
  max-lg:w-screen
  max-lg:h-screen
  max-lg:bg-white
  max-lg:z-40
  max-lg:duration-500
  max-lg:ease-in-out`}>
        <div className="">
          <div className="text-green-900 text-m flex gap-18 items-center max-lg:flex-col max-lg:text-center max-lg:gap-8 max-lg:bg-white max-lg:shadow max-lg:rounded max-lg:py-32 max-lg:px-24 ">
            <LinkComponent text="Quem somos" />
            <LinkComponent text="Trabalho que realizamos" />
            <LinkComponent text="Participar da associação" />

            <Button text="Doar" onClick={() => alert("Doar")} />
          </div>
        </div>
      </div>
    </div>
  )
}
