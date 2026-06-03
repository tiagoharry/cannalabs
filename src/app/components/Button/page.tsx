interface ButtonProps {
  text: string;
  onClick: () => void;
}

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      className="bg-yellow-600 hover:bg-green-700 text-white py-2 px-8 rounded-lg cursor-pointer transition-colors duration-300"
      
    >
      {text}
    </button>
  );
}
