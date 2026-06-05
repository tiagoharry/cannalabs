import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-black bg-white text-center text-[12px] py-6 flex items-center justify-center gap-8">
      <Link href={"https://www.instagram.com/cannalabspe"} target="_blank"
  rel="noopener noreferrer"><p className="text-green-900 font-bold text-[13px]">Instagram</p></Link>
       © {new Date().getFullYear()}
  {" "} CANNALABS PE — Todos os direitos reservados</footer>
  )
}