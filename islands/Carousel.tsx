import { useEffect, useState } from "preact/hooks";
import Image from "apps/website/components/Image.tsx";

interface Testimonial {
  text: string;
  author: string;
  role: string;
  organization: string;
}

interface CarouselProps {
  testimonials: Testimonial[];
}

export default function Carousel({ testimonials }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Função para avançar no carrossel
  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
      setIsAnimating(false);
    }, 300); // Tempo da animação
  };

  // Função para voltar no carrossel
  const handlePrev = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setIsAnimating(false);
    }, 300); // Tempo da animação
  };

  // Avanço automático
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 10000); // 10 segundos
    return () => clearInterval(timer); // Limpa o timer ao desmontar
  }, []);

  // Função para ir para um índice específico
  const handleDotClick = (index: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="flex flex-col items-center gap-4 max-w-[840px] mx-auto">
      <div className="flex items-center w-full gap-4">
        {/* Botão anterior */}
        <div>
          <Image
            src={"/caret-circle-left.png"}
            alt="Arrow Icon"
            className="cursor-pointer"
            onClick={handlePrev}
          />
        </div>

        {/* Área do slide */}
        <div className="relative flex-1">
          {/* Aspas no topo */}
          <Image
            src={"/aspas.png"}
            alt="Aspas Icon"
            width=""
            height=""
            className="absolute top-0 -left-8"
          />

          {/* Área do carrossel */}
          <div className="relative overflow-hidden h-full">
            <div
              className="flex transition-transform duration-300"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="w-full h-full flex-shrink-0 text-center flex flex-col items-center justify-center gap-2"
                >
                  <span className="text-primary text-base">{item.text}</span>
                  <span className="text-primary text-lg">{item.author}</span>
                  <span className="text-gray4 text-sm">
                    {item.role} - {item.organization}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Aspas na parte inferior */}
          <Image
            src={"/aspas.png"}
            alt="Aspas Icon"
            width=""
            height=""
            className="absolute bottom-0 -right-8 rotate-180"
          />
        </div>

        {/* Botão próximo */}
        <div className="">
          <Image
            src={"/caret-circle-left.png"}
            alt="Arrow Icon"
            className="cursor-pointer rotate-180 "
            onClick={handleNext}
          />
        </div>
      </div>

      {/* Dots */}
      <div className="flex gap-2 justify-center w-full">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-primary" : "bg-gray4"
            }`}
            onClick={() => handleDotClick(index)}
          >
          </div>
        ))}
      </div>
    </div>
  );
}
