import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-white font-sans">
       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 py-8 px-16">
        <div className="flex flex-col items-center gap-4 text-center">

          <div className="border-[#13532D] rounded-full border-2 bg-transparent flex items-center justify-center w-22 h-22">
            <span className="material-symbols-outlined" style={{ fontSize: '60px', color: '#13532D', display: 'inline-block', fontVariationSettings: "'wght' 120" }}>group</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-xl font-bold text-green-900">QUEM SOMOS</h2>
            <p className="text-gray-700 text-center w-77">
              Conheça nossa história, missão e os valores que nos movem.
            </p>
            <Link href="/quemsomos" className="text-green-900 font-medium hover:underline flex items-center gap-1">
              Saiba mais
              <span className="material-symbols-outlined">
                arrow_right_alt
              </span>
            </Link>
          </div>

        </div>

        <div className="flex flex-col items-center gap-4 text-center">

          <div className="border-[#13532D] rounded-full border-2 bg-transparent flex items-center justify-center w-22 h-22">
            <span className="material-symbols-outlined" style={{ fontSize: '60px', color: '#13532D', display: 'inline-block', fontVariationSettings: "'wght' 120" }}>biotech</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-xl font-bold text-green-900">TRABALHO QUE REALIZAMOS</h2>
            <p className="text-gray-700 text-center w-77">
              Nossas ações, projetos e iniciativas pela Cannabis medicinal.
            </p>
            <Link href="/trabalho" className="text-green-900 font-medium hover:underline flex items-center gap-1">
              Saiba mais
              <span className="material-symbols-outlined">
                arrow_right_alt
              </span>
            </Link>
          </div>

        </div>

        <div className="flex flex-col items-center gap-4 text-center">

          <div className="border-[#13532D] rounded-full border-2 bg-transparent flex items-center justify-center w-22 h-22">
            <span className="material-symbols-outlined" style={{ fontSize: '60px', color: '#13532D', display: 'inline-block', fontVariationSettings: "'wght' 120" }}>groups</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-xl font-bold text-green-900">PARTICIPAR DA ASSOCIAÇÃO</h2>
            <p className="text-gray-700 text-center w-77">
              Associe-se e faça parte de uma rede que transforma.
            </p>
            <Link href="#" className="text-green-900 font-medium hover:underline flex items-center gap-1">
              Quero participar
              <span className="material-symbols-outlined">
                arrow_right_alt
              </span>
            </Link>
          </div>

        </div>

        <div className="flex flex-col items-center gap-4 text-center">

          <div className="border-[#13532D] rounded-full border-2 bg-transparent flex items-center justify-center w-22 h-22">
            <span className="material-symbols-outlined" style={{ fontSize: '60px', color: '#13532D', display: 'inline-block', fontVariationSettings: "'wght' 120" }}>volunteer_activism</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-xl font-bold text-green-900">Doar</h2>
            <p className="text-gray-700 text-center w-77">
              Sua contribuição ajuda a transformar vidas. Doe e faça parte dessa causa.
            </p>
            <Link href="/doar" className="text-green-900 font-medium hover:underline flex items-center gap-1">
              Quero doar
              <span className="material-symbols-outlined">
                arrow_right_alt
              </span>
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
