import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import ServiceCard from "site/components/ui/ServiceCard.tsx";

/** @titleBy title */
interface Card {
  icon: ImageWidget;
  title: string;
  description: string;
}

interface actionCard {
  title: string;
  image: ImageWidget;
}

interface CTA {
  buttonText: string;
}

interface ServicesProps {
  title: string;
  description: string;
  cards: Card[];
  actionCard: actionCard;
  CTA: CTA;
}

export default function Services(
  { title, description, cards, actionCard, CTA }: ServicesProps,
) {
  return (
    <div className="w-full max-w-[1440px] mx-auto lg:px-4" id="servicos">
      <div className="pt-16 pb-4 lg:py-16">
        <div className="flex flex-col gap-4 lg:pb-16 px-4 lg:px-0">
          <span className="text-3xl font-semibold">{title}</span>
          <p>{description}</p>
        </div>

        <div className="flex overflow-x-scroll lg:overflow-visible scrollbar-none lg:grid gap-4 lg:grid-rows-2 lg:grid-cols-4 px-4 py-12 lg:py-0">
          {cards.map((card) => {
            return (
              <ServiceCard
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
