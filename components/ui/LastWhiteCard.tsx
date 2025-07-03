import Image from "apps/website/components/Image.tsx";

import { Device } from "apps/website/matchers/device.ts";
import Icon from "site/components/ui/Icon.tsx";

export interface Props {
  device: Device;
  handlePrev: () => void;
}

export default function LastWhiteCard({ device, handlePrev }: Props) {
  return (
    <div className="bg-white flex flex-col text-center gap-6 lg:gap-10 flex-shrink-0 items-center justify-center rounded-3xl w-80 lg:w-[550px] mx-2 px-10 py-14">
      <span className="font-sora text-xl lg:text-4xl">
        Esses valores fazem <br /> sentido para você?
      </span>
      <span className="">
        Preencha o formulário e envie o seu currículo
      </span>
      <a
        target="_blank"
        href="https://docs.google.com/forms/d/e/1FAIpQLSfmln-8srXWNT1-_ggFE3f7-eG-822as8MRMpVvA7cFICHnyw/viewform"
      >
        <button className="text-white bg-blue-300 px-4 py-2 rounded-lg">
          Trabalhe Conosco
        </button>
      </a>
      {device === "mobile" && (
        <Icon
          class="cursor-pointer h-auto -rotate-90 text-pink4"
          id="ChevronUp"
          strokeWidth={2}
          size={36}
          onClick={handlePrev}
        />
      )}
    </div>
  );
}
