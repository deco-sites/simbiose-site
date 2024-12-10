import Image from "apps/website/components/Image.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";

interface ServiceCardProps {
  icon: ImageWidget;
  title: string;
  description: string;
}

export default function ServiceCard(
  { icon, title, description }: ServiceCardProps,
) {
  return (
    <div className="flex flex-col bg-primary rounded-xl text-white p-8 min-w-72">
      <div className="flex gap-4 items-center pb-11">
        <Image
          src={icon}
          alt="Card Image"
          className="w-6"
          width={100}
        />
        <span className="font-bold">{title}</span>
      </div>
      <span className="font-light">{description}</span>
    </div>
  );
}
