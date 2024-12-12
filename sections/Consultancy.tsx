import { VideoWidget } from "apps/admin/widgets.ts";

interface ConsultancyProps {
  title: string;
  /**
   * @format rich-text
   * @description the description of section
   */
  description: string;
  video: VideoWidget;
  actionText: string;
}

export default function Consultancy(
  { title, description, video, actionText }: ConsultancyProps,
) {
  return (
    <>
      <div className="w-full max-w-[1440px] mx-auto px-4" id="consultoria">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex flex-col gap-2 lg:min-w-2/5 text-justify">
            <span className="text-3xl font-semibold mb-12">{title}</span>
            <p
              dangerouslySetInnerHTML={{ __html: description }}
            >
            </p>
            {
              /*
            <button className="mt-12 rounded-full bg-primary text-white py-4 px-12 w-fit">
              {buttonText}
            </button>

            <button className="relative group overflow-hidden px-20 h-16 mt-12 rounded-full flex space-x-2 items-center bg-gradient-to-r from-primary to-third-blue ">
              <span className="relative text-base font-semibold text-white">
                {buttonText}
              </span>
              <div className="flex items-center -space-x-3 translate-x-3">
                <div className="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100">
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </button>*/
            }
            <div className="w-full flex justify-center">
              <span className="mt-4 lg:mt-16 text-center text-xl text-second-blue font-semibold">
                {actionText}
              </span>
            </div>
          </div>
          <div className="lg:w-3/5">
            <video
              src={video}
              type="video/mp4"
              width={100}
              controls
              autoplay
              muted
              loop
              playsInline
              controlsList="nodownload"
              className="w-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}
