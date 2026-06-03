import Image from "next/image";
import H1 from "@/app/components/h1/page";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative w-full h-[500px]">
      <Image src="/images/banner.png"
        fill
        priority
        className="object-cover absolute max-md:hidden" alt="Principal" />
      <div className="absolute grid md:grid-cols-2 min-h-[500px]">
        <div className="flex flex-col justify-center px-8 md:px-20 py-12">
          <H1 text="ASSOCIAÇÃO DE ESTUDO E PROMOÇÃO LABORATORIAL" />
          <p className="text-lg text-gray-700 max-w-xl">
            Promovemos o acesso à informação, pesquisa e tratamentos
            à base de Cannabis para uma vida com mais saúde e dignidade.
          </p>
          <Link href="/quemsomos">
            <button className="mt-8 bg-green-900 text-white px-8 py-6 rounded-xl w-fit hover:bg-green-800 transition cursor-pointer">
              Saiba mais
            </button>
          </Link>

        </div>
        <div className="relative min-h-100">
        </div>
      </div>
    </section>
  )
}

