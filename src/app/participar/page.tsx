"use client";

import { useState } from "react";
import H2 from "../components/h2/page";

export default function Participar() {
  const [file, setFile] = useState<File | null>(null);
  const [cpf, setCpf] = useState("");
  const [tel, setTel] = useState("");
  const [cpfError, setCpfError] = useState("");

  function maskCPF(value: string) {
    value = value
      .replace(/\D/g, "")
      .slice(0, 11);

    if (value.length <= 3) {
      return value;
    }

    if (value.length <= 6) {
      return value.replace(
        /(\d{3})(\d+)/,
        "$1.$2"
      );
    }

    if (value.length <= 9) {
      return value.replace(
        /(\d{3})(\d{3})(\d+)/,
        "$1.$2.$3"
      );
    }

    return value.replace(
      /(\d{3})(\d{3})(\d{3})(\d+)/,
      "$1.$2.$3-$4"
    );
  }

  function maskPhone(
    value: string
  ) {
    value = value
      .replace(/\D/g, "")
      .slice(0, 11);

    return value
      .replace(
        /^(\d{2})(\d)/,
        "($1) $2"
      )
      .replace(
        /(\d{5})(\d)/,
        "$1-$2"
      );
  }

  function validateCPF(
    cpf: string
  ) {
    cpf = cpf
      .replace(/\D/g, "");

    // tamanho
    if (cpf.length !== 11)
      return false;

    // evita 11111111111
    if (
      /^(\d)\1+$/.test(cpf)
    ) {
      return false;
    }

    let sum = 0;

    // primeiro dígito
    for (
      let i = 0;
      i < 9;
      i++
    ) {
      sum +=
        Number(cpf[i]) *
        (10 - i);
    }

    let first =
      (sum * 10) % 11;

    if (first === 10) {
      first = 0;
    }

    if (
      first !==
      Number(cpf[9])
    ) {
      return false;
    }

    sum = 0;

    // segundo dígito
    for (
      let i = 0;
      i < 10;
      i++
    ) {
      sum +=
        Number(cpf[i]) *
        (11 - i);
    }

    let second =
      (sum * 10) % 11;

    if (second === 10) {
      second = 0;
    }

    return (
      second ===
      Number(cpf[10])
    );
  }

  async function handleSubmit(
    e:
      React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (
      !validateCPF(cpf)
    ) {
      setCpfError(
        "CPF inválido"
      );

      return;
    }

    setCpfError("");

    const formData =
      new FormData(
        e.currentTarget
      );

    if (file) {
      formData.append(
        "image",
        file
      );
    }

    const res =
      await fetch(
        "/api/contact",
        {
          method: "POST",
          body: formData,
        }
      );

    const data =
      await res.json();

    alert(
      data.message
    );
  }

  return (
    <div className="flex flex-col items-center gap-10 bg-white font-sans px-20 py-8 max-md:px-0">
      <H2 text="Seja um associado" />
      <form onSubmit={handleSubmit} className="max-w-xl flex flex-col gap-2">
        <label htmlFor="name" className="text-gray-700">
          Nome
        </label>
        <input
          className=" w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600"
          type="text" name="name" id="name" placeholder="Nome" required />
        <label htmlFor="cpf" className="text-gray-700">
          CPF
        </label>
        <input
          className=" [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600"
          type="text"
          name="cpf"
          id="cpf"
          placeholder="CPF"
          value={cpf}
          maxLength={14}
          onChange={(e) =>
            setCpf(
              maskCPF(
                e.target.value
              )
            )
          }
          required />
        {
          cpfError && (
            <p
              className="
text-red-500
text-sm
"
            >
              {cpfError}
            </p>
          )
        }
        <label htmlFor="email" className="text-gray-700">
          Email
        </label>
        <input
          className=" w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600" type="email" name="email" id="email" placeholder="Email" required />
        <label htmlFor="tel" className="text-gray-700">
          Telefone
        </label>
        <input className=" w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600" type="tel" name="tel" id="tel" placeholder="(xx) xxxxxx-xxxx"
          value={tel}
          maxLength={15}
          onChange={(e) =>
            setTel(
              maskPhone(
                e.target.value
              )
            )
          }
          required />
        <label htmlFor="date" className="text-gray-700">
          Data de nascimento
        </label>
        <input
          className=" w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600" type="date" name="date" id="date" placeholder="Data de nascimento" required />
        <label
          htmlFor="image"
          className="
          cursor-pointer
          w-full
          bg-green-900
          text-white
          px-4
          py-3
          rounded-lg
          text-center
          hover:bg-green-800
          transition
          "
        >
          {file
            ? file.name
            : "Anexar documento de identidade"}
        </label>
        <span className="text-sm text-gray-500">
          {
            file
              ? file.name
              : "Nenhum arquivo selecionado"
          }
        </span>

        <input
          id="image"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) =>
            setFile(
              e.target.files?.[0] ||
              null
            )
          }
        />
        <button className="mt-8 bg-green-900 text-white px-8 py-4 rounded-xl w-full hover:bg-green-800 transition cursor-pointer" type="submit">
          Enviar
        </button>
      </form>
    </div>

  )
}