interface H1Props {
  text: string;
}

export default function H1({ text }: H1Props) {
  return (
    <div className="flex flex-col items-start">
      <h1 className="text-3xl md:text-3xl font-bold text-green-900 leading-tight">{text}</h1>
      <div className="w-20 h-1 bg-yellow-600 my-3"></div>
    </div>
  )
}