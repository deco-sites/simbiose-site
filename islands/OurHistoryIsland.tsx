import Image from "apps/website/components/Image.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";

interface Statistic {
  number: number;
  title: string;
  description?: string;
}

interface OurHistoryPhotoProps {
  photo: ImageWidget;
  statistics: Statistic[];
}

function StatisticCard({
  number,
  title,
  description,
}: Statistic & { description?: string }) {
  return (
    <div className="flex flex-col gap-6 bg-gray2 rounded-xl py-12 px-14 z-10 max-w-96">
      <span className="text-7xl font-extrabold">{number}+</span>
      <span className="font-bold text-3xl">{title}</span>
      {description && (
        <span className="text-gray3 font-light">{description}</span>
      )}
    </div>
  );
}

function StatisticBubble({ number, title }: Statistic) {
  return (
    <div className="bg-primary hover:scale-125 transition-transform duration-300 rounded-full w-32 h-32 lg:w-36 lg:h-36 text-white flex flex-col items-center justify-center gap-px">
      <span className="text-3xl font-semibold">+{number}</span>
      <span className="capitalize whitespace-pre-line text-center">
        {title.replace(" ", "\n")}
      </span>
    </div>
  );
}

export default function OurHistoryPhoto({
  photo,
  statistics,
}: OurHistoryPhotoProps) {
  const [mainStatistic, ...otherStatistics] = statistics;

  return (
    <div className="flex flex-col w-full items-center justify-center">
      {/* Parte superior com a foto, fundo e estatísticas */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 py-16">
        <div className="relative flex items-center justify-center">
          {/* Fundo primário */}
          <div
            className="bg-primary w-[304px] h-[345px] lg:w-[504px] lg:h-[545px] -translate-x-2 -translate-y-3"
            style={{
              clipPath:
                "polygon(5.79% 100%,0% 7.293%,96.648% 0%,99.813% 97.686%,5.79% 100%)",
            }}
          >
          </div>
          {/* Imagem */}
          <Image
            src={photo}
            alt="History Photo"
            className="absolute w-[285px] h-[315px] lg:w-[485px] lg:h-[515px] object-cover"
            width={100}
            style={{
              clipPath:
                "polygon(0.882% 98.112%,0% 3.674%,99.814% 0%,99.012% 99.841%,0.882% 98.112%)",
            }}
          />
        </div>
        {/* Cartão de estatística */}
        <StatisticCard {...mainStatistic} />
      </div>

      {/* Bolhas de estatísticas */}
      <div className="flex gap-2 lg:gap-10">
        {otherStatistics.map((stat, index) => (
          <StatisticBubble key={index} {...stat} />
        ))}
      </div>
    </div>
  );
}
