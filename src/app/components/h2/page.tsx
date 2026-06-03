interface H2Props {
  text: string;
}

export default function H2({ text }: H2Props) {
  return (
    <div className="flex flex-col items-start">
      <h2 className="text-2xl font-bold text-green-900 leading-tight">{text}</h2>
      <div className="w-20 h-1 bg-yellow-600 my-3"></div>
    </div>

  );
}