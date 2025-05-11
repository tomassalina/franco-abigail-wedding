import type { Metadata } from "next";
import WeddingInvitation from "@/app/components/wedding-invitation";

export const metadata: Metadata = {
  title: "Franco & Abigail - Nuestro gran día",
  description:
    "Te invitamos a nuestra boda. ¡Acompáñanos en este día tan especial!",
};

// Esta función hace que la página se genere estáticamente en build time
export const generateStaticParams = async () => {
  return [];
};

export default function Home() {
  return <WeddingInvitation />;
}
