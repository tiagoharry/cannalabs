interface H1Props {
  text: string;
}

export default function H1({ text }: H1Props) {
  return (
    <h1 className="text-3xl md:text-3xl font-bold text-green-900 leading-tight">{text}</h1>
  )
}