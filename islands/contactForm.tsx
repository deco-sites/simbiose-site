import Image from "apps/website/components/Image.tsx";
import { invoke } from "site/runtime.ts";
import { useState } from "preact/hooks";
import { CopyEmails, RecipientsEmails } from "site/sections/Contact.tsx";

interface ContactFormIslandProps {
  RecipientsEmailsArr: RecipientsEmails[];
  CopyToArr?: CopyEmails[];
  subject: string;
}

export default function ContactFormIsland(
  { RecipientsEmailsArr, CopyToArr, subject }: ContactFormIslandProps,
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
        onChange={(e) => setName(e.target.value)}
      />
      <input
        id="email"
        name="email"
        type="text"
        placeholder="E-mail"
        className="bg-white-gray outline-primary rounded-md w-full placeholder:text-black placeholder:text-sm py-2 pl-4"
        onChange={(e) => setFilledEmail(e.target.value)}
      />
      <input
        id="tel"
        name="tel"
        type="text"
        placeholder="Telefone"
        className="bg-white-gray outline-primary rounded-md w-full placeholder:text-black placeholder:text-sm py-2 pl-4"
        onChange={(e) => setFilledTel(e.target.value)}
      />
      <textarea
        id="message"
        name="message"
        placeholder="Conte como podemos ajudá-lo!"
        className="bg-white-gray outline-primary rounded-md h-36 w-full placeholder:text-black placeholder:text-sm py-2 pl-4"
        onChange={(e) => setMessage(e.target.value)}
      >
      </textarea>
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
      </button>
    </form>
  );
}
