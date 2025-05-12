interface InvitationLetterProps {
  handleOpen: () => void;
}

export default function InvitationLetter({
  handleOpen,
}: InvitationLetterProps) {
  return (
    <div className="relative w-full flex items-center justify-center">
      <svg
        viewBox="0 0 1000 700"
        className="w-full max-w-5xl"
        style={{
          fill: "#f9f5ef",
          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.5)",
          filter: "drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.5))",
        }}
      >
        <polygon points="0,0 1000,0 500,380" />
      </svg>

      <button
        onClick={handleOpen}
        className="absolute border-0 outline-0 cursor-pointer bg-secondary tracking-normal leading-none w-16 h-16 md:w-24 md:h-24 rounded-full text-white"
      >
        <p className="text-xl md:text-3xl">F&A</p>
        <span className="text-xs md:text-sm">Abrir</span>
      </button>
    </div>
  );
}
