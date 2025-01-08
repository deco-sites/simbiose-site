interface EmailSentProps {
  setEmailSent: () => void;
}
export default function EmailSent({ setEmailSent }: EmailSentProps) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-8">
      <span className="text-xl font-bold">E-mail enviado com sucesso!</span>
      <span className="">
        Retornaremos o seu contato o mais breve possível.
      </span>
      <span
        className="text-sm text-second-blue cursor-pointer underline"
        onClick={() => setEmailSent(false)}
      >
        Enviar um novo e-mail
      </span>
    </div>
  );
}
