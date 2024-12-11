import { ImageWidget } from "apps/admin/widgets.ts";
import TechnologyCard from "site/components/ui/TechnologyCard.tsx";

interface CardImages {
  image: ImageWidget;
  width?: number;
  height?: number;
  alt?: string;
}

/** @titleBy title */
interface TachnologyCard {
  title: string;
  images: CardImages[];
}

interface TechnologiesProps {
  title: string;
  description: string;
  cards: TachnologyCard[];
}

export default function Technologies(
  { title, description, cards }: TechnologiesProps,
) {
  return (
    <>
      <div
        className="bg-primary h-28 rotate-180 -mb-1"
        style={{
          clipPath:
            "polygon(100% 0%,0% 0%,0% 96.339%,0% 96.339%,11.559% 98.459%,22.221% 99.691%,32.191% 99.979%,41.676% 99.266%,50.884% 97.496%,60.021% 94.613%,69.294% 90.561%,78.911% 85.284%,89.077% 78.725%,100% 70.828%,100% 0%)",
        }}
      >
      </div>
      <div className="bg-primary pb-32 -mb-1">
        <div className="w-full max-w-[1440px] mx-auto px-4 flex flex-col text-white">
          <div className="flex flex-col gap-8 mb-8">
            <span className="text-3xl font-semibold">{title}</span>
            <span>{description}</span>
          </div>
          <div className="flex gap-8 lg:gap-0 overflow-x-scroll scrollbar-none justify-between">
            {cards.map((card) => {
              return (
                <>
                  <TechnologyCard title={card.title} images={card.images} />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
