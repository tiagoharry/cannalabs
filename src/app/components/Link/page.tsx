interface LinkProps {
  text: string;
  active: boolean;
  onClick: () => void;
}

export default function LinkComponent({
  text,
  active,
  onClick,
}: LinkProps) {
  return (
    <button
      onClick={onClick}
      className={`
        relative
        pb-2
        text-lg
        cursor-pointer
        transition-colors
        text-green-900
        hover:text-green-700

        after:content-['']
        after:absolute
        after:left-0
        after:bottom-0
        after:h-[3px]
        after:bg-yellow-600
        after:transition-all
        after:duration-300

        ${
          active
            ? "after:w-full"
            : "after:w-0 hover:after:w-full"
        }
      `}
    >
      {text}
    </button>
  );
}