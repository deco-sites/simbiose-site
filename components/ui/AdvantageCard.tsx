import Image from "apps/website/components/Image.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";

interface AdvantageCardProps {
  image: ImageWidget;
  title: string;
  description: string;
}

export default function AdvantageCard(
  { image, title, description }: AdvantageCardProps,
) {
  return (
    <div className="flex shrink-0 flex-col gap-5 min-w-48 max-w-80 hover:bg-second-blue transition duration-300 p-6 rounded-xl">
      <Image src={image} alt="Icon" width={100} className="w-11 h-11" />
      <span className="text-lg font-bold text-accent">{title}</span>
      <span className="font-light">{description}</span>
    </div>
  );
}
