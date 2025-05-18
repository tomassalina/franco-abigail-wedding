import { DrinkIcon, FoodIcon } from "@/components/icons";

export default function MenuSection() {
  return (
    <div>
      <div className="pt-4 px-4 pb-0 lg:p-4 text-center">
        <h3 className="inline-block px-4 lg:px-10 py-4 border border-white text-white text-xl lg:text-3xl font-bold mb-8">
          ¡Información importante!
        </h3>

        <div className="grid md:grid-cols-2 gap-8 text-white">
          <div className="text-center">
            <div className="inline-block mb-1 lg:mb-4">
              <FoodIcon />
            </div>
            <h4 className="font-playfair text-3xl mb-2">Comida</h4>
            <div className="max-w-80 mx-auto mb-4 text-base">
              <p>
                Queremos que nuestra boda se sienta como un gran encuentro
                familiar, así que la comida será a la canasta.
              </p>
              <p>
                ¡Traé lo que más te guste y disfrutá de este día con nosotros!
              </p>
              <p>(la comida estará servida en la mesa para compartir)</p>
            </div>
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
            <div className="inline-block mb-1 lg:mb-4 relative -left-3">
              <DrinkIcon />
            </div>
            <h4 className="font-playfair text-3xl mb-2">Bebida</h4>
            <div className="max-w-80 mx-auto mb-4 text-base">
              <p>
                Para hacer de nuestra boda un momento único, hemos optado por no
                incluir alcohol.
              </p>
              <p>Te pedimos que no traigas bebidas alcohólicas.</p>
              <p>¡Gracias por acompañarnos en esta elección!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
