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
    <div className="w-full max-w-[1440px] mx-auto px-4" id="servicos">
      <div className="py-16">
        <div className="flex flex-col gap-2 pb-16">
          <span className="text-3xl font-semibold">{title}</span>
          <p>{description}</p>
        </div>

        <div className="flex overflow-x-scroll scrollbar-none lg:grid gap-4 md:grid-rows-3 lg:grid-rows-2 md:grid-cols-3 lg:grid-cols-4 px-4 box-border">
          {cards.map((card) => {
            return (
              <ServiceCard
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            );
          })}
          <div className="grid lg:row-span-2 lg:col-start-4 lg:row-start-1 md:col-span-3 md:col-start-1 md:col-end-4 ">
            <div className="flex flex-col items-center bg-info rounded-xl justify-between py-12 px-8">
              <span className="text-primary text-2xl font-bold">
                {actionCard.title}
              </span>
              <Image
                src={actionCard.image}
                className="w-fit hidden lg:block"
                alt="Action Card Image"
                width={100}
              />
              <button className="bg-success text-white rounded-full font-bold w-full h-11">
                {CTA.buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
