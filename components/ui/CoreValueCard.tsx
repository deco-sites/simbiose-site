import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { Signal } from "@preact/signals";
import { Device } from "apps/website/matchers/device.ts";
import Icon from "site/components/ui/Icon.tsx";

export interface CardProps {
  icon: ImageWidget;
  title: string;
  text: string;
}

export interface CoreValueCardProps {
  card: CardProps;
  activeCard: Signal<number>;
  handleNext: () => void;
  handlePrev: () => void;
  cardsLength: number;
  isCurrent: boolean;
  showControls: string;
  device: Device;
}

export default function CoreValueCard(
  {
    card,
    activeCard,
    handleNext,
    handlePrev,
    cardsLength,
    isCurrent,
    showControls,
    device,
  }: CoreValueCardProps,
) {
  return (
    <div className="flex flex-col justify-between flex-shrink-0 bg-primary rounded-3xl w-72 mx-2">
      <div className="h-full flex flex-col gap-4 p-4">
        <div className="flex justify-center items-center h-1/4">
          <Image
            src={card.icon}
            alt="Icon"
            className="w-16 h-16 object-contain drop-shadow-2xl"
          />
        </div>

        <span className="text-white text-center font-semibold text-lg">
          {card.title}
        </span>

        <span
          className="flex items-center justify-center text-center text-white font-sora font-thin min-h-1/4"
          dangerouslySetInnerHTML={{ __html: card.text }}
        >
        </span>
      </div>
      <div
        className={`flex justify-center items-center gap-6 h-1/4 ${showControls}`}
      >
        {activeCard.value === card.id && (
          <>
            {card.id !== 1 && (
              <Icon
                class="h-auto -rotate-90 text-white cursor-pointer"
                id="ChevronUp"
                strokeWidth={2}
                size={28}
                onClick={handlePrev}
              />
            )}
            {((device === "desktop" && card.id !== cardsLength) ||
              (device !== "desktop" &&
                card.id !== cardsLength + 1)) && (
              <Icon
                class="h-auto -rotate-[270deg] text-white cursor-pointer"
                id="ChevronUp"
                strokeWidth={2}
                size={28}
                onClick={handleNext}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}
