import Link from "next/link";
import H1 from "../components/h1/page";
import Image from "next/image";

export default function Doar() {
  return (
    <div className="flex flex-col items-center gap-10 bg-[#fdfdfd] font-sans px-20 py-8 max-md:px-15">
      <div className="flex flex-col gap-2 items-center text-center">
        <H1 text="POR QUE DOAR?" />
        <p className="text-gray-700 text-[15px] max-w-xl">
          Sua doação fortalece nosso trabalho e nos permite continuar promovendo saúde, conhecimento e qualidade de vida para muitas pessoas.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 py-8 px-16">
        <div className="text-center flex flex-col items-center gap-2">
          <div className="bg-[#edfbf3] rounded-full  flex items-center justify-center w-22 h-22">
            <span className="material-symbols-outlined" style={{ fontSize: '60px', color: '#13532D', display: 'inline-block', fontVariationSettings: "'wght' 120" }}>search</span>
          </div>
          <p className="text-green-900 font-bold">
            Incentivamos a pesquisa
          </p>
          <p className="max-w-50 text-gray-700 text-[15px]">
            Apoiamos estudos científicos sobre os benefícios da Cannabis medicinal.
          </p>
        </div>
        <div className="text-center flex flex-col items-center gap-2">
          <div className="bg-[#edfbf3] rounded-full  flex items-center justify-center w-22 h-22">
            <span className="material-symbols-outlined" style={{ fontSize: '60px', color: '#13532D', display: 'inline-block', fontVariationSettings: "'wght' 120" }}>groups</span>
          </div>
          <p className="text-green-900 font-bold">
            Acolhemos e orientamos
          </p>
          <p className="max-w-50 text-gray-700 text-[15px]">
            Oferecemos informação confiável e suporte para pacientes e familiares.
          </p>
        </div>
        <div className="text-center flex flex-col items-center gap-2">
          <div className="bg-[#edfbf3] rounded-full  flex items-center justify-center w-22 h-22">
            <span className="material-symbols-outlined" style={{ fontSize: '60px', color: '#13532D', display: 'inline-block', fontVariationSettings: "'wght' 120" }}>dictionary</span>
          </div>
          <p className="text-green-900 font-bold">
            Promovemos educação
          </p>
          <p className="max-w-50 text-gray-700 text-[15px]">
            Produzimos conteúdos e materiais educativos sobre o uso seguro e responsável.
          </p>
        </div>
        <div className="text-center flex flex-col items-center gap-2">
          <div className="bg-[#edfbf3] rounded-full  flex items-center justify-center w-22 h-22">
            <span className="material-symbols-outlined" style={{ fontSize: '60px', color: '#13532D', display: 'inline-block', fontVariationSettings: "'wght' 120" }}>volunteer_activism</span>
          </div>
          <p className="text-green-900 font-bold">
            Transformamos vidas
          </p>
          <p className="max-w-55 text-gray-700 text-[15px]">
            Trabalhamos para garantir mais acesso, dignidade e qualidade de vida para quem precisa.
          </p>
        </div>
      </div>


      <div className="bg-green-50 p-8 rounded-xl mt-3 flex gap-10  max-md:flex-col max-md:items-center max-md:text-center max-md:gap-4">
        <div className="flex flex-col gap-4">
          <H1 text="FAÇA SUA DOAÇÃO" />
          <p className="text-gray-700 max-w-77 text-[15px]">
            Qualquer contribuição faz a diferença!
            Escolha a forma que for mais conveniente para você e ajude a manter nosso trabalho.
          </p>
          <Link href="/quemsomos">
            <button className="mt-8 bg-green-900 text-white px-8 py-4 rounded-xl w-full hover:bg-green-800 transition cursor-pointer">
              LINK DE DOAÇÃO
            </button>
          </Link>
        </div>
        <div className="h-80 w-1 bg-gray-100 my-3 max-md:hidden"></div>

        <div className="flex flex-col gap-4 max-md:mt-6">
          <H1 text="OUTRAS FORMAS DE CONTRIBUIR" />
          <p className="text-gray-700 max-w-77 text-[15px]">
            Você também pode realizar sua doação diretamente por transferência bancária.
          </p>
          <div className="bg-white shadow-md shadow-gray-200 p-8 rounded-xl mt-3 flex gap-10 max-w-110 max-md:flex-col max-md:items-center max-md:text-center max-md:gap-4">
            <div className="">
              <p className="text-green-900 font-bold">
                DADOS BANCÁRIOS
              </p>
              <div className="text-green-900">
                <p>
                  Banco:
                </p>
                <p>
                  Agência:
                </p>
                <p>
                  Conta:
                </p>
                <p>
                  CNPJ / PIX:
                </p>
                <p>
                  Favorecido: Cannalabs-PE
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
      <div className="bg-white shadow-md shadow-gray-200 p-8 rounded-xl mt-3 flex gap-10  max-md:flex-col max-md:items-center max-md:text-center max-md:gap-4">
        <div className="bg-[#e3f5eb] rounded-full  flex items-center justify-center w-22 h-22">
          <span className="material-symbols-outlined" style={{ fontSize: '60px', color: '#13532D', display: 'inline-block', fontVariationSettings: "'wght' 120" }}>verified_user</span>
        </div>
        <div className="">
          <H1 text="TRANSPARÊNCIA E COMPROMISSO" />
          <div className="text-green-900 max-w-160 text-[15px]">
            <p>
              Todas as doações recebidas são utilizadas com responsabilidade e transparência para o desenvolvimento de nossas atividades e projetos.

              Prestamos contas regularmente e prezamos pela ética em tudo o que fazemos.
            </p>
          </div>
        </div>
        <span className="material-symbols-outlined" style={{ fontSize: '100px', color: '#13532D', display: 'inline-block', fontVariationSettings: "'wght' 120" }}>volunteer_activism</span>
      </div>
      <div className="text-center">
        <H1 text="OBRIGADO POR FAZER PARTE DESSA CAUSA!" />
        <div className="text-green-900 max-w-160 text-[15px]">
            <p>
             Juntos, podemos construir um futuro com mais saúde, conhecimento e esperança.
            </p>
          </div>
          <Image src="/logo.png" alt="Logo Cannalabs" width={150} height={150} className="mx-auto mt-6" />
      </div>
    </div>
  )
}