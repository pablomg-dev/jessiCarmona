import { useState, useEffect } from 'react';

const testimonios = [
  {
    texto: "Me ayudó a desbloquearme y sentir alivio al peso que venía trayendo. Seguir adelante desde el cambio de percepción y perspectiva, con otra mirada y sentir"
  },
  {
    texto: "Me llevo herramientas para conectar conmigo misma en el día a día. Se ha notado el cambio de carácter y como un@ aprende a manejar mejor las cosas"
  },
  {
    texto: "Jessica supo guiarme con calidez humana para ayudarme en lo que estaba necesitando y tomar decisiones para mejorar"
  },
  {
    texto: "Un espacio valioso y liberador"
  },
  {
    texto: "Me ayudó a conocer mis emociones internas y poder ir encontrando un equilibrio, a pesar de las resistencias"
  },
  {
    texto: "Este espacio y tiempo dedicado a la introspección es muy valioso. Me llevo una experiencia completa"
  },
  {
    texto: "Aprendí a darme eso que tanto buscaba y necesitaba siempre del afuera. Estas herramientas me sirvieron para calmar esta ansiedad y dejarme en paz"
  },
  {
    texto: "Jessica es muy profesional conduciendo la sesión, los resultados fueron increíbles. Logré ver varias cosas que estaban en mí y no tenía idea. Me dejó material para trabajar conmigo"
  },
  {
    texto: "Me ayudó a comprender varios aspectos de mi presente y a aprender a autoobservarme, a tener en cuenta otras perspectivas y posibilidades para el desarrollo de mi vida"
  },
  {
    texto: "Me ayudó a ver mis raíces y a mi misma desde otra perspectiva y así comprender mi historia y mi presente. Gracias por ser guía en este camino de autoconocimiento, por tu calidez y amorosidad."
  }
];

export default function TestimoniosCarousel() {
  const [indiceActual, setIndiceActual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceActual((prev) => (prev + 1) % testimonios.length);
    }, 5000);

    return () => clearInterval(intervalo);
  }, []);

  const testimonioActual = testimonios[indiceActual];

  return (
    <div className="relative rounded-2xl overflow-hidden border-2 border-[#f4e0a3] shadow-xl text-white text-center bg-[url('/media/carouselTestimonios2.jpg')] bg-center bg-no-repeat bg-cover min-h-[350px] sm:min-h-[400px] flex items-center justify-center px-2">
      <div className="relative w-full max-w-lg mx-auto px-6 md:px-12">
        <div
          key={indiceActual}
          className="testimonio-slide animate-fade-in flex flex-col justify-center py-8"
        >
          <p className="text-shadow-lg font-black italic text-base lg:text-xl">
            "{testimonioActual.texto}"
          </p>
        </div>
      </div>
    </div>
  );
}
