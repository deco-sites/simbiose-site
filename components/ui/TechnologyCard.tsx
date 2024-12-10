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
      <div className="flex flex-col items-center py-12 w-64 h-[550px] bg-secondary rounded-xl border border-white">
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
