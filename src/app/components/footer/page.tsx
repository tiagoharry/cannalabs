import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="text-black bg-white text-center text-[12px] py-6 flex max-lg:flex-col items-center justify-center gap-8">

      <Link href={"https://www.instagram.com/cannalabspe"} target="_blank"
        rel="noopener noreferrer">
        <div className="flex items-center justify-center gap-1">
          <Image src="/instagram.svg" height={15} width={15} alt="" />
          <p className="text-green-900 font-bold text-[13px]">
            Instagram
          </p>
        </div>

      </Link>

      © {new Date().getFullYear()}
      {" "} CANNALABS PE — Todos os direitos reservados</footer>
  )
}