import { ImageWidget } from "apps/admin/widgets.ts";
import OurHistoryPhoto from "site/components/ui/OurHistoryPhoto.tsx";

/** @titleBy title */
interface Statistic {
  number: number;
  title: string;
  description?: string;
}

interface OurHistoryProps {
  title: string;
  description: string;
  photo: ImageWidget;
  statistics: Statistic[];
}

export default function OurHistory(
  { title, description, photo, statistics }: OurHistoryProps,
) {
  return (
    <>
      <div className="w-full max-w-[1440px] mx-auto px-4 py-16" id="sobre_nos">
        <div className="flex flex-col gap-4">
          <span className="text-3xl font-semibold">{title}</span>
          <span>{description}</span>
        </div>

        <div className="flex justify-center w-full">
          <OurHistoryPhoto photo={photo} statistics={statistics} />
        </div>
      </div>
    </>
  );
}
