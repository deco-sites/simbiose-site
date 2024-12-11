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
    <div className="flex w-full shrink-0 group relative overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
      <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-primary transition-all duration-300 group-hover:scale-[10]">
      </span>
      <div className="relative z-10 mx-auto max-w-md">
        <div className="flex items-center gap-4">
          <span className="flex shrink-0 justify-center items-center h-20 w-20 place-items-center rounded-full bg-primary transition-all duration-300 group-hover:bg-primary">
            <Image
              src={icon}
              alt="Card Image"
              className="w-6"
              width={100}
            />
          </span>
          <span className="font-bold text-gray-600 transition-all duration-300 group-hover:text-white/90">
            {title}
          </span>
        </div>
        <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
          <p>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
