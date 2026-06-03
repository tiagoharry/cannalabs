import H1 from "@/app/components/h1/page";
import Image from "next/image";


export default function QuemSomos() {
  return (
    <div className="">
      <H1 text="QUEM SOMOS" />
      <div className="w-20 h-1 bg-yellow-600 my-6"></div>
      <p>
        A Cannalabs-PE é uma associação dedicada ao estudo, pesquisa, promoção e apoio ao uso da cannabis medicinal, atuando com responsabilidade, ética e compromisso com a saúde e a qualidade de vida das pessoas.

        Nosso trabalho é promover o acesso à informação, incentivar a pesquisa científica e contribuir para o desenvolvimento de soluções baseadas em cannabis medicinal, sempre em conformidade com a legislação vigente. Acreditamos que o conhecimento, a ciência e a solidariedade são ferramentas fundamentais para transformar vidas.

        Buscamos acolher pacientes, familiares, profissionais da saúde e pesquisadores, criando uma rede de apoio que compartilha informações confiáveis, orientações e iniciativas voltadas ao bem-estar da comunidade.

        Nossa missão é ampliar o acesso ao conhecimento sobre a cannabis medicinal, fomentar a pesquisa e promover ações que contribuam para uma sociedade mais saudável, informada e inclusiva.

        Cannalabs-PE: ciência, cuidado e compromisso com a qualidade de vida.
      </p>
      <div className="">
        <Image src="" alt="Quem Somos" width={500} height={300} />
        <h2 className="text-3xl md:text-3xl font-bold text-green-900 leading-tight">NOSSA MISSÃO</h2>
        <p>
          Ampliar o acesso ao conhecimento sobre a cannabis medicinal, fomentar a pesquisa e promover ações que contribuam para uma sociedade mais saudável, informada e inclusiva.
        </p>
      </div>
    </div>
  )
}