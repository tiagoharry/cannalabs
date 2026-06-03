import H1 from "@/app/components/h1/page";
import Image from "next/image";

export default function QuemSomos() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white font-sans px-20 py-8">
      <div className="">
        <H1 text="QUEM SOMOS" />
        <div className="flex flex-col flex-1 gap-2">
          <div className="text-gray-700 text-[15px] flex flex-col gap-2">
            <p>
              A Cannalabs-PE é uma associação dedicada ao estudo, pesquisa, promoção e apoio ao uso da cannabis medicinal, atuando com responsabilidade, ética e compromisso com a saúde e a qualidade de vida das pessoas.
            </p>
            <p>
              Nosso trabalho é promover o acesso à informação, incentivar a pesquisa científica e contribuir para o desenvolvimento de soluções baseadas em cannabis medicinal, sempre em conformidade com a legislação vigente. Acreditamos que o conhecimento, a ciência e a solidariedade são ferramentas fundamentais para transformar vidas.
            </p>
            <p>
              Buscamos acolher pacientes, familiares, profissionais da saúde e pesquisadores, criando uma rede de apoio que compartilha informações confiáveis, orientações e iniciativas voltadas ao bem-estar da comunidade.
            </p>
            <p>
              Nossa missão é ampliar o acesso ao conhecimento sobre a cannabis medicinal, fomentar a pesquisa e promover ações que contribuam para uma sociedade mais saudável, informada e inclusiva.
            </p>
            <div className="">
              <p className="text-green-900 font-bold mt-6">
                Cannalabs-PE: ciência, cuidado e compromisso com a qualidade de vida.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <Image src="/images/quemsomos.png" alt="Quem Somos" width={510} height={300} className="rounded-xl" />
        <div className="bg-green-50 p-8 rounded-xl mt-3 flex gap-10 max-w-128 max-md:flex-col max-md:items-center max-md:text-center max-md:gap-4">
          <div className="border-[#13532D] rounded-full border-2 bg-transparent flex items-center justify-center w-22 h-22">
            <span className="material-symbols-outlined" style={{ fontSize: '60px', color: '#13532D', display: 'inline-block', fontVariationSettings: "'wght' 120" }}>groups</span>
          </div>
          <div className="">
            <h2 className="text-xl font-bold text-green-900 leading-tight">
              NOSSA MISSÃO
            </h2>
            <p className="text-gray-700 max-w-80 text-[15px]">
              Ampliar o acesso ao conhecimento sobre a cannabis medicinal, fomentar a pesquisa e promover ações que contribuam para uma sociedade mais saudável, informada e inclusiva.
            </p>
          </div>
        </div>

      </div>
    </div>

  )
}