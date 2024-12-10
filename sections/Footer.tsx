import Image from "apps/website/components/Image.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";
import RoundedIcon from "site/components/ui/RoundedIcon.tsx";

interface Logo {
  image: ImageWidget;
  width: number;
  height: number;
  alt: string;
}

interface Icon {
  icon: ImageWidget;
  alt: string;
  width: number;
  height: number;
}

interface SocialMedia {
  icon: Icon;
  link: string;
}

interface FooterProps {
  logo: Logo;
  socialMedias: SocialMedia[];
  text: string;
}

export default function Footer({ logo, socialMedias, text }: FooterProps) {
  return (
    <footer className="flex flex-col bg-primary pt-12 pb-14">
      <div className="flex flex-col items-center justify-center w-full max-w-[1440px] mx-auto px-4">
        <div className="w-full flex flex-col lg:flex-row justify-between border-b border-white border-opacity-25 pb-14">
          <Image
            src={logo.image}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className="object-contain"
          />
          <div className="flex gap-2">
            {socialMedias.map((item) => (
              <RoundedIcon icon={item.icon} link={item.link} type={"gray"} />
            ))}
          </div>
        </div>
        <span className="mt-4 text-white text-sm font-extralight">{text}</span>
      </div>
    </footer>
  );
}
