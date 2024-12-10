import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

/** @titleBy alt */
interface PartnerLogo {
  image: ImageWidget;
  alt?: string;
  width?: number;
  height?: number;
}

interface PartnershipsProps {
  title: string;
  description: string;
  partnersLogos: PartnerLogo[];
}

export default function Partnerships(
  { title, description, partnersLogos }: PartnershipsProps,
) {
  return (
    <>
      <div
        className="bg-primary text-white py-32"
        style={{
          clipPath:
            "polygon(100% 5.949%,100% 5.949%,89.458% 3.953%,79.35% 2.319%,69.559% 1.09%,59.967% 0.31%,50.456% 0.02%,40.908% 0.264%,31.207% 1.084%,21.233% 2.523%,10.87% 4.623%,0% 7.427%,0% 88.071%,0% 88.071%,13.177% 91.846%,25.093% 94.88%,35.957% 97.19%,45.976% 98.793%,55.358% 99.704%,64.312% 99.943%,73.046% 99.524%,81.766% 98.466%,90.681% 96.785%,100% 94.498%,100% 5.949%)",
        }}
      >
        <div className="w-full max-w-[1440px] mx-auto px-4">
          <div className="flex flex-col gap-4 mb-4">
            <span className="text-3xl font-semibold">{title}</span>
            <span className="">{description}</span>
          </div>

          <div className="grid grid-cols-5 grid-rows-2 justify-items-center items-center">
            {partnersLogos.map((logo) => (
              <Image
                src={logo.image}
                alt={logo.alt}
                width={logo.width || 100}
                height={logo.height}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
