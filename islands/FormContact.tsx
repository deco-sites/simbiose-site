import Image from "apps/website/components/Image.tsx";
import { invoke } from "site/runtime.ts";
import { useState } from "preact/hooks";
import { CopyEmails, RecipientsEmails } from "site/sections/Contact.tsx";
import { PhoneMask } from "site/helpers/phoneMask.ts";
import { emailLengthMask } from "site/helpers/emailMask.ts";
import { nameMask } from "site/helpers/nameMask.ts";

interface FormContactIslandProps {
  RecipientsEmailsArr: RecipientsEmails[];
  CopyToArr?: CopyEmails[];
  subject: string;
}

export default function FormContactIsland(
  { RecipientsEmailsArr, CopyToArr, subject }: FormContactIslandProps,
) {
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(
      `
        Nome: ${name}
        Email: ${filledEmail}
        Telefone: ${filledTel}
        Mensagem: ${message}
        `,
    );

    await invoke.site.actions.sendEmail({
      RecipientsEmailsArr: RecipientsEmailsArr,
      CopyToArr: CopyToArr,
      subject: subject,
      data: sendData,
    });
  };

  const [name, setName] = useState("");
  const [filledEmail, setFilledEmail] = useState("");
  const [filledTel, setFilledTel] = useState("");
  const [message, setMessage] = useState("");

  const sendData = `
        Nome: ${name}
        E-mail: ${filledEmail}
        Telefone: ${filledTel}
        Mensagem: ${message}
    `;

  return (
    <form className="flex flex-col gap-4 w-full justify-center items-center">
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Nome"
        className="bg-white-gray outline-primary rounded-md w-full placeholder:text-black placeholder:text-sm py-2 pl-4"
        onChange={(e) => setName(nameMask(e.target.value))}
        value={name}
      />
      <input
        id="email"
        name="email"
        type="email"
        placeholder="E-mail"
        className="bg-white-gray outline-primary rounded-md w-full placeholder:text-black placeholder:text-sm py-2 pl-4"
        onChange={(e) => setFilledEmail(e.target.value)}
        value={filledEmail}
      />
      <input
        id="tel"
        name="tel"
        type="text"
        placeholder="Telefone"
        className="bg-white-gray outline-primary rounded-md w-full placeholder:text-black placeholder:text-sm py-2 pl-4"
        onChange={(e) => setFilledTel(PhoneMask(e.target.value))}
        value={filledTel}
      />

      <textarea
        id="message"
        name="message"
        placeholder="Conte como podemos ajudá-lo!"
        className="bg-white-gray outline-primary rounded-md h-36 w-full placeholder:text-black placeholder:text-sm py-2 pl-4"
        onChange={(e) => setMessage(e.target.value)}
      >
      </textarea>
      {
        /*
      <button
        onClick={handleSubmit}
        className="flex items-center gap-2 py-2 px-6 bg-primary text-white w-fit rounded-full"
      >
        Enviar
        <Image
          src={"/SendIcon.png"}
          alt="Send Icon"
          width=""
          className="w-4 h-4"
        />
      </button>*/
      }

      <button
        onClick={handleSubmit}
        className="btn relative mt-4 lg:mt-16 group transition-all inline-flex items-center justify-start overflow-hidden bg-primary hover:bg-primary text-white py-3 px-8 lg:px-11 min-w-24 rounded-full font-bold"
      >
        <span className="w-60 h-48 rounded bg-third-blue absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 mr-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0">
        </span>
        <span className="flex justify-center items-center gap-4 w-full text-left transition-colors duration-300 ease-in-out group-hover:text-white z-10">
          Enviar
          <Image
            src={"/SendIcon.png"}
            alt="Send Icon"
            width=""
            className="w-4 h-4"
          />
        </span>
      </button>
    </form>
  );
}
