import Image from "apps/website/components/Image.tsx";
import { useSignal } from "@preact/signals";
import { useEffect, useState } from "preact/hooks";
import { Device } from "apps/website/matchers/device.ts";
import CoreValueCard from "../components/ui/CoreValueCard.tsx";
import LastWhiteCard from "../components/ui/LastWhiteCard.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";

interface CoreValue {
  icon: ImageWidget;
  title: string;
  text: string;
}

interface CoreValuesProps {
  device: Device;
  values: CoreValue[];
}

export default function CoreValuesIsland({ device, values }: CoreValuesProps) {
  const activeCard = useSignal(1);
  const [animationClass, setAnimationClass] = useState("");
  const [leftCards, setLeftCards] = useState([values[0]]);
  const [showControls, setShowControls] = useState("");

  const handleNext = () => {
    setTimeout(() => {
      if (rightCards.length > 0) {
        const nextCard = rightCards[0];
        setRightCards(rightCards.slice(1));
        const newArray = [...leftCards, nextCard];
        setLeftCards(newArray);

        activeCard.value = (activeCard.value + 1) %
          (values.length + 1);
      }

      setAnimationClass("");
      setShowControls("control-buttons");
    }, 500);
    setShowControls("control-buttons-hidden");
    setAnimationClass("slide-left");
  };

  const handlePrev2 = () => {
    setRightCards((prevRightCards) => [
      ...prevRightCards,
      {
        id: values.length + 1,
        component: <LastWhiteCard handlePrev={handlePrev2} device={device} />,
      },
    ]);
    activeCard.value = (activeCard.value - 1 + (values.length + 1)) %
      (values.length + 1);
    setShowControls("control-buttons");
    setAnimationClass("slide-right");
    setLeftCards(values);
  };

  const handlePrev = () => {
    if (leftCards.length > 1) {
      const prevCard = leftCards[leftCards.length - 1];
      setRightCards([prevCard, ...rightCards]);
      setLeftCards(leftCards.slice(0, leftCards.length - 1));

      activeCard.value = (activeCard.value - 1 + (values.length + 1)) %
        (values.length + 1);
    }
    setShowControls("control-buttons");
    setAnimationClass("slide-right");
  };

  const [rightCards, setRightCards] = useState(
    device === "mobile"
      ? [...values.slice(1), {
        id: values.length + 1,
        component: <LastWhiteCard handlePrev={handlePrev2} device={device} />,
      }]
      : values.slice(1),
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimationClass("");
    }, 500);

    return () => clearTimeout(timeout);
  }, [animationClass]);

  return (
    <div
      className="w-full py-20 bg-blue-300 overflow-x-hidden"
      style={{
        clipPath:
          "polygon(100% 5.949%,100% 5.949%,89.458% 3.953%,79.35% 2.319%,69.559% 1.09%,59.967% 0.31%,50.456% 0.02%,40.908% 0.264%,31.207% 1.084%,21.233% 2.523%,10.87% 4.623%,0% 7.427%,0% 100%,100% 100%)",
      }}
    >
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-28 lg:gap-36">
        <div className="flex flex-col flex-1 px-16 lg:px-10 2xl:px-0 font-sora gap-10 lg:w-1/3">
          <div className="flex flex-col gap-5">
            <span className="text-pink1 text-4xl font-bold">
              Nossos<br />Valores:
            </span>
            <span className="text-purple text-2xl">
              Esses são os princípios que<br /> guiam cada linha de código<br />
              {" "}
              que escrevemos.
            </span>
          </div>
        </div>
        <div className="pl-8 lg:pl-10 2xl:px-0 flex gap-5 lg:w-2/3">
          <div className="flex">
            {leftCards.length > 0 && (
              leftCards[leftCards.length - 1].component
                ? (
                  <>
                    {leftCards[leftCards.length - 1]
                      .component}
                  </>
                )
                : (
                  <CoreValueCard
                    key={leftCards[leftCards.length - 1].id}
                    card={leftCards[leftCards.length - 1]}
                    activeCard={activeCard}
                    handleNext={handleNext}
                    handlePrev={handlePrev}
                    cardsLength={values
                      .length}
                    isCurrent={leftCards[
                      leftCards.length - 1
                    ]
                      .id === activeCard.value}
                    showControls={showControls}
                    device={device}
                  />
                )
            )}
          </div>
          <div className={`flex gap-5 ${animationClass}`}>
            {rightCards.map((card, index) =>
              card.component
                ? (
                  <>
                    {card.component}
                  </>
                )
                : (
                  <CoreValueCard
                    key={card.id}
                    card={card}
                    activeCard={activeCard}
                    handleNext={handleNext}
                    handlePrev={handlePrev}
                    cardsLength={values
                      .length}
                    isCurrent={card.id === activeCard.value}
                    showControls={showControls}
                    device={device}
                  />
                )
            )}
            {device !== "mobile" && (
              <LastWhiteCard
                handlePrev={handlePrev}
                device={device}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
