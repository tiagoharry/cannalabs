import Link from "next/link";
interface PProps {
  text: string;
}

export default function LinkComponent({ text }: PProps) {
  return (
    <p className="text-green-900 text-lg hover:text-green-700 cursor-pointer">{text}</p>
  )
}