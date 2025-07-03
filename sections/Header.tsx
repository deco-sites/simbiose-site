import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import MenuIcon from "site/islands/MenuIcon.tsx";

/** @titleBy text */
export interface NavOption {
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
  consultancyButton: CTA;
}

export default function Header(
  {
    logo,
    navOptions,
    headerText,
    principalWord,
    buttonsText,
    consultancyButton,
  }: HeaderProps,
) {
  return (
    <header
      className="flex flex-col bg-primary text-white h-[420px] lg:h-96"
      style={{
        clipPath:
          "polygon(100% 0%,0% 0%,0% 96.339%,0% 96.339%,11.559% 98.459%,22.221% 99.691%,32.191% 99.979%,41.676% 99.266%,50.884% 97.496%,60.021% 94.613%,69.294% 90.561%,78.911% 85.284%,89.077% 78.725%,100% 70.828%,100% 0%)",
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4">
        <div className="flex justify-between items-center py-10 lg:pt-16 lg:pb-20">
          <Image
            src={logo.desktop.src}
            width={logo.desktop.width ?? 200}
            height={logo.desktop.height ?? 34}
            alt={logo.alt}
            className="hidden lg:flex w-48"
          />
          <Image
            src={logo.mobile.src}
            width={logo.mobile.width ?? 31}
            height={logo.mobile.height ?? 31}
            alt={logo.alt}
            className="flex lg:hidden"
          />

          <nav className="hidden lg:flex gap-14">
            {navOptions.map((item) => (
              <a
                href={item.link}
                target={item.text.toLowerCase() === "trabalhe conosco"
                  ? "_blank"
                  : ""}
              >
                <p class="group relative w-fit">
                  <span>{item.text}</span>
                  <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-third-blue group-hover:w-3/6">
                  </span>
                  <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-third-blue group-hover:w-3/6">
                  </span>
                </p>
              </a>
            ))}
          </nav>

          <MenuIcon navOptions={navOptions} />
        </div>

        <div className="flex flex-col items-center lg:flex-row justify-between">
          <div className="flex flex-col items-center lg:items-start">
            <span className="text-base">{headerText}</span>

            <span className="relative uppercase text-4xl w-fit v-underline">
              {principalWord}
            </span>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <div className="flex justify-center mt-12 lg:mt-0">
              <a href={consultancyButton.link}>
                <button className="btn relative  group transition-all inline-flex items-center justify-start overflow-hidden bg-gray1 text-neutral py-3 px-8 lg:px-11 min-w-24 rounded-full font-bold">
                  <span className="w-60 h-48 rounded bg-third-blue absolute bottom-0 left-0 -translate-x-full group-hover:translate-x-0 ease-out duration-500 transition-all translate-y-full mb-9 mr-9 group-hover:ml-0 group-hover:mb-32">
                  </span>
                  <span className="relative w-full text-left transition-colors duration-300 ease-in-out group-hover:text-white">
                    {consultancyButton.text}
                  </span>
                </button>
              </a>
            </div>
            <span className="text-sm text-center">
              {buttonsText}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
