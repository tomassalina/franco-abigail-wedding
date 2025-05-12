import { DrinkIcon, FoodIcon } from "@/components/icons";

export default function MenuSection() {
  return (
    <div>
      <div className="p-4 text-center">
        <h3 className="inline-block px-10 py-4 border border-white text-white text-3xl font-bold mb-8">
          ¡Información importante!
        </h3>

        <div className="grid md:grid-cols-2 gap-8 text-white">
          <div className="text-center">
            <div className="inline-block mb-4">
              <FoodIcon />
            </div>
            <h4 className="font-playfair text-3xl mb-2">Comida</h4>
            <p className="text-base mb-4">
              Queremos que nuestra boda se sienta
              <br />
              como un gran encuentro familiar, así
              <br />
              que la comida será a la canasta.
              <br />
              ¡Traé lo que más te guste y disfrutá de
              <br />
              este día con nosotros!
              <br />
              (la comida estará servida en la mesa
              <br />
              para compartir)
            </p>
            <div>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScfEF9ZyiWdGWp5aJZDWjJzwaEKxI-TZddA1gj8eZ5N2KkLjQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-6 py-2 bg-[#EFEEEE] text-foreground rounded-3xl"
              >
                Sumate al menú,
                <br />
                avisanos qué traes
              </a>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-block mb-4">
              <DrinkIcon />
            </div>
            <h4 className="font-playfair text-3xl mb-2">Bebida</h4>
            <p className="text-base mb-4">
              Para hacer de nuestra boda un
              <br />
              momento único, hemos optado
              <br />
              por no incluir alcohol.
              <br />
              Te pedimos que no traigas
              <br />
              bebidas alcohólicas.
              <br />
              ¡Gracias por acompañarnos en
              <br />
              esta elección!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
