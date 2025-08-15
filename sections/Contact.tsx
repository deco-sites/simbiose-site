import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import RoundedIcon from "site/components/ui/RoundedIcon.tsx";
import FormContactIsland from "site/islands/FormContact.tsx";
import CopyButton from "site/islands/CopyButton.tsx";

export interface Icon {
  icon: ImageWidget;
  alt: string;
  width: number;
  height: number;
}

/* @titleBy link */
interface SocialMedia {
  icon: Icon;
  link: string;
}
/* @titleBy email */
export interface RecipientsEmails {
  email: string;
}

/* @titleBy email */
export interface CopyEmails {
  email?: string;
}

interface ContactProps {
  title: string;
  description: string;
  tel: string;
  email: string;
  telIcon: SocialMedia;
  emailIcon: Icon;
  socialMedias: SocialMedia[];

  RecipientsEmailsArr: RecipientsEmails[];
  CopyToArr?: CopyEmails[];
  subject: string;
}

export default function Contact(
  {
    title,
    description,
    tel,
    email,
    telIcon,
    emailIcon,
    socialMedias,
    RecipientsEmailsArr,
    CopyToArr,
    subject,
  }: ContactProps,
) {
  return (
    <>
      <div className="max-w-[1440px] mx-auto px-4 py-16" id="contato">
        <div className="flex flex-col gap-4">
          <span className="text-3xl font-semibold">{title}</span>
          <span>{description}</span>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-36 mt-12">
            <div className="flex flex-col justify-center">
              <div className="flex flex-col">
                <span>Telefone:</span>
                <div className="flex flex-row-reverse justify-end lg:flex-row lg:justify-start items-center gap-4">
                  <a href={`tel:${tel}`}>
                    <span className="">{tel}</span>
                  </a>
                  <a href={telIcon.link} target="_blank">
                    <div className="bg-primary rounded-full flex items-center justify-center w-11 h-11">
                      <Image
                        src={telIcon.icon.icon}
                        alt={telIcon.icon.alt}
                        width={telIcon.icon.width}
                        height={telIcon.icon.height}
                      />
                    </div>
                  </a>
                </div>
              </div>
              <div className="flex flex-col">
                <span>E-mail:</span>

                <div className="flex flex-row-reverse justify-end lg:flex-row lg:justify-start items-center gap-4">
                  <span className="">{email}</span>
                  <CopyButton icon={emailIcon} />
                </div>
              </div>

              <div className="lg:mt-8">
                <span>Redes Sociais:</span>
                <div className="flex justify-center lg:justify-start gap-4">
                  {socialMedias.map((item) => (
                    <RoundedIcon
                      icon={item.icon}
                      link={item.link}
                      type={"blue"}
                    />
                  ))}
                </div>
              </div>
            </div>
            <FormContactIsland
              RecipientsEmailsArr={RecipientsEmailsArr}
              CopyToArr={CopyToArr}
              subject={subject}
            />
          </div>
        </div>
      </div>
    </>
  );
}
