import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

/** @titleBy text */
interface NavOption {
  text: string;
  link: string;
}

interface CTA {
  text: string;
  link: string;
}

interface Logo {
  /** @description desktop otimized image */
  desktop: {
    src: ImageWidget;
    width?: number;
    height?: number;
  };
  /** @description mobile otimized image */
  mobile: {
    src: ImageWidget;
    width?: number;
    height?: number;
  };
  /** @description Image's alt text */
  alt: string;
}

interface HeaderProps {
  logo: Logo;
  navOptions: NavOption[];
  headerText: string;
  principalWord: string;
  buttonsText: string;
  contactButton: CTA;
  consultancyButton: CTA;
}

export default function Header(
  {
    logo,
    navOptions,
    headerText,
    principalWord,
    buttonsText,
    contactButton,
    consultancyButton,
  }: HeaderProps,
) {
  return (
    <header
      className="flex flex-col bg-primary text-white h-[500px] lg:h-96"
      style={{
        clipPath:
          "polygon(100% 0%,0% 0%,0% 96.339%,0% 96.339%,11.559% 98.459%,22.221% 99.691%,32.191% 99.979%,41.676% 99.266%,50.884% 97.496%,60.021% 94.613%,69.294% 90.561%,78.911% 85.284%,89.077% 78.725%,100% 70.828%,100% 0%)",
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4">
        <div className="flex justify-between items-center py-16">
          <Image
            src={logo.desktop.src}
            width={logo.desktop.width}
            height={logo.desktop.height}
            alt={logo.alt}
            className="hidden lg:flex"
          />
          <Image
            src={logo.mobile.src}
            width={logo.mobile.width}
            height={logo.mobile.height}
            alt={logo.alt}
            className="flex lg:hidden"
          />

          <nav className="hidden lg:flex gap-14">
            {navOptions.map((item) => (
              <a href={item.link}>
                <span>{item.text}</span>
              </a>
            ))}
          </nav>

          <Image
            src={"/hamburger.png"}
            width=""
            height=""
            alt={"Hamburguer menu icon"}
            className="flex lg:hidden cursor-pointer"
          />
        </div>

        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col">
            <span className="text-base">{headerText}</span>

            <span className="relative uppercase text-4xl w-fit v-underline">
              {principalWord}
            </span>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <div className="flex gap-4 mt-12 lg:mt-0">
              <a href={contactButton.link}>
                <button className="bg-gray1 text-neutral py-3 px-8 lg:px-11 min-w-24 rounded-full font-bold">
                  {contactButton.text}
                </button>
              </a>
              <a href={consultancyButton.link}>
                <button className="bg-gray1 text-neutral py-3 px-8 lg:px-11 min-w-24 rounded-full font-bold">
                  {consultancyButton.text}
                </button>
              </a>
            </div>
            <span className="text-sm">
              {buttonsText}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
