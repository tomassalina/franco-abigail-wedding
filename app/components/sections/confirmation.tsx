import { CheckIcon, LetterIcon } from "@/components/icons";

export default function ConfirmationSection() {
  return (
    <div className="text-center mb-16 relative z-10">
      <div className="inline-block mb-4">
        <LetterIcon />
      </div>
      <h3 className="mb-2 font-playfair text-3xl font-medium">
        Confirmación de asistencia
      </h3>
      <p className="text-[#787878] text-sm mb-6">
        Esperamos contar con tu presencia,
        <br />
        no olvides confirmar
      </p>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdPAWnTFnpSrbyuKMrzBkXFsKoZHclVAjPY1Zn-kwpGpH9wkw/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-10 py-2 bg-white rounded-full text-base shadow-md uppercase"
      >
        <CheckIcon />
        Confirmar
      </a>
    </div>
  );
}
