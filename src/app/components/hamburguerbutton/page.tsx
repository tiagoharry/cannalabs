"use client";

interface HamburgerButtonProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HamburgerButton({ isOpen, setIsOpen }: HamburgerButtonProps) {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="absolute flex h-10 w-10 flex-col items-center justify-center z-50"
      aria-label="Menu"
    >
      <span
        className={`absolute h-0.5 w-6 bg-black transition-all duration-300 ${
          isOpen ? "rotate-45" : "-translate-y-2"
        }`}
      />

      <span
        className={`absolute h-0.5 w-6 bg-black transition-all duration-300 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />

      <span
        className={`absolute h-0.5 w-6 bg-black transition-all duration-300 ${
          isOpen ? "-rotate-45" : "translate-y-2"
        }`}
      />
    </button>
  );
}