import { ImageWidget } from "apps/admin/widgets.ts";
import AdvantageCard from "../components/ui/AdvantageCard.tsx";

/** @titleBy title */
interface AdvantageCard {
  image: ImageWidget;
  title: string;
  description: string;
}

interface AdvantagesProps {
  title: string;
  description: string;
  cards: AdvantageCard[];
}

export default function Advantages(
  { title, description, cards }: AdvantagesProps,
) {
  return (
    <>
      <div className="bg-primary text-white">
        <div className="w-full max-w-[1440px] mx-auto lg:px-4">
          <div className="flex flex-col justify-center items-center gap-12 pb-16 px-4 lg:px-0">
            <span className="font-bold text-xl">{title}</span>
            <span>{description}</span>
          </div>

          <div className="px-4 lg:px-0 flex gap-4 overflow-x-scroll scrollbar-none lg:grid grid-cols-4 grid-rows-2 lg:gap-16">
            {cards.map((card) => (
              <AdvantageCard
                image={card.image}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
      <div
        className="bg-primary h-28 -mt-1"
        style={{
          clipPath:
            "polygon(100% 0%,0% 0%,0% 96.339%,0% 96.339%,11.559% 98.459%,22.221% 99.691%,32.191% 99.979%,41.676% 99.266%,50.884% 97.496%,60.021% 94.613%,69.294% 90.561%,78.911% 85.284%,89.077% 78.725%,100% 70.828%,100% 0%)",
        }}
      >
      </div>
    </>
  );
}
