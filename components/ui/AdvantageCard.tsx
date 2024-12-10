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
    <div className="flex flex-col gap-5 min-w-48">
      <Image src={image} alt="Icon" width={100} className="w-11 h-11" />
      <span className="text-lg font-bold text-accent">{title}</span>
      <span className="font-light">{description}</span>
    </div>
  );
}
