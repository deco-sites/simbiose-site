import Image from "apps/website/components/Image.tsx";
import { Icon } from "site/sections/Contact.tsx";
import { useSignal } from "@preact/signals";

interface CopyButtonProps {
  icon: Icon;
}

export default function CopyButton({ icon }: CopyButtonProps) {
  const emailCopy = useSignal(false);

  const handleClick = () => {
    const email = "comercial@simbioseventures.com";

    navigator.clipboard.writeText(email).then(
      () => {
        console.log("E-mail copiado com sucesso:", email);
        emailCopy.value = true;

        // Faz o texto desaparecer após 3 segundos
        setTimeout(() => {
          emailCopy.value = false;
        }, 3000);
      },
      (err) => {
        console.error("Falha ao copiar o e-mail:", err);
      },
    );
  };

  return (
    <div className="relative flex items-center">
      <div
        className="bg-primary cursor-pointer rounded-full flex items-center justify-center w-11 h-11"
        onClick={handleClick}
      >
        <Image
          src={icon.icon}
          alt={icon.alt}
          width={icon.width}
          height={icon.height}
        />
      </div>
      {emailCopy.value && (
        <span className="absolute left-full ml-2 text-xs text-nowrap bg-yellow-100 px-2 py-1 rounded shadow">
          E-mail copiado
        </span>
      )}
    </div>
  );
}
