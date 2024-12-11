import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Icon {
  icon: ImageWidget;
  alt: string;
  width: number;
  height: number;
}

interface RoundedIconProps {
  icon: Icon;
  link: string;
  type: "blue" | "gray";
}

export default function RoundedIcon({ icon, link, type }: RoundedIconProps) {
  return (
    <a href={link} target="_blank">
      <div
        className={`${
          type === "blue" ? "bg-primary" : "bg-gray1"
        } rounded-full flex items-center justify-center w-11 h-11`}
      >
        <Image
          src={icon.icon}
          alt={icon.alt}
          width={icon.width}
          height={icon.height}
        />
      </div>
    </a>
  );
}
