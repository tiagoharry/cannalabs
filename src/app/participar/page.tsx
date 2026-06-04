"use client";

import { useState } from "react";

export default function Participar() {
  const [file, setFile] = useState<File | null>(null);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    if (file) {
      formData.append("image", file);
    }

    const res = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    alert(data.message);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white font-sans px-20 py-8">
      <form onSubmit={handleSubmit}>
        <input
          className=" w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
          type="text" name="name" placeholder="Nome" required />
        <input
          className=" [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"  type="number" name="cpf" placeholder="CPF" required />
        <input
          className=" w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500" type="email" name="email" placeholder="Email" required />
        <input
          className=" w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500" type="tel" name="tel" placeholder="Telefone" required />
        <input
          className=" w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500" type="date" name="date" placeholder="Data de nascimento" required />
        <input
          className=" w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500" type="file" accept="image/*"  onChange={(e) =>
            setFile(
              e.target.files?.[0] ||
              null
            )
          }/>
        <button className="mt-8 bg-green-900 text-white px-8 py-4 rounded-xl w-full hover:bg-green-800 transition cursor-pointer" type="submit">
          Enviar
        </button>
      </form>
    </div>

  )
}