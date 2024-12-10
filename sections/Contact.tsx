import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import RoundedIcon from "site/components/ui/RoundedIcon.tsx";
import ContactFormIsland from "site/islands/contactForm.tsx";

interface Icon {
  icon: ImageWidget;
  alt: string;
  width: number;
  height: number;
  link?: string;
}

interface SocialMedia {
  icon: Icon;
  link: string;
}

export interface RecipientsEmails {
  email: string;
}

export interface CopyEmails {
  email?: string;
}

interface ContactProps {
  title: string;
  description: string;
  tel: string;
  email: string;
  telIcon: Icon;
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
          <div className="flex flex-col lg:flex-row gap-36 mt-12">
            <div className="flex flex-col justify-center">
              <div className="flex flex-col">
                <span>Telefone:</span>
                <div className="flex items-center gap-4">
                  <span className="text-xl">{tel}</span>
                  <a href={"#"}>
                    <div className="bg-primary rounded-full flex items-center justify-center w-11 h-11">
                      <Image
                        src={telIcon.icon}
                        alt={telIcon.alt}
                        width={telIcon.width}
                        height={telIcon.height}
                      />
                    </div>
                  </a>
                </div>
              </div>
              <div className="flex flex-col">
                <span>E-mail:</span>

                <div className="flex items-center gap-4">
                  <span className="text-xl">{email}</span>
                  <a href={"#"}>
                    <div className="bg-primary rounded-full flex items-center justify-center w-11 h-11">
                      <Image
                        src={emailIcon.icon}
                        alt={emailIcon.alt}
                        width={emailIcon.width}
                        height={emailIcon.height}
                      />
                    </div>
                  </a>
                </div>
              </div>

              <div className="mt-8">
                <span>Redes Sociais:</span>
                <div className="flex gap-4">
                  {socialMedias.map((item) => (
                    <a href={item.link}>
                      <RoundedIcon
                        icon={item.icon}
                        link={item.link}
                        type={"blue"}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <ContactFormIsland
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
