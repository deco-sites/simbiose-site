import Image from "apps/website/components/Image.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";

interface CardImages {
  image: ImageWidget;
  width?: number;
  height?: number;
  alt?: string;
}

interface TechnologyCardProps {
  title: string;
  images: CardImages[];
}

export default function TechnologyCard({ title, images }: TechnologyCardProps) {
  return (
    <>
      <div className="group relative overflow-hidden flex shrink-0 flex-col items-center py-12 w-64 h-[550px] bg-secondary rounded-xl border border-white hover:border-third-blue">
        <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-third-blue transition-all duration-200 group-hover:w-full">
        </span>
        <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-third-blue transition-all duration-200 group-hover:h-full">
        </span>
        <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-third-blue transition-all duration-200 group-hover:w-full">
        </span>
        <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-third-blue transition-all duration-200 group-hover:h-full">
        </span>

        <span className="uppercase mb-16 font-semibold">
          {title}
        </span>
        <div className="flex flex-col justify-between items-center h-full">
          {images.map((image) => (
            <Image
              src={image.image}
              alt="Image"
              width={image.width || 100}
              height={image.height}
            />
          ))}
        </div>
      </div>
    </>
  );
}
