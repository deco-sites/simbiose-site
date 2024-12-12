import Image from "apps/website/components/Image.tsx";
import { useEffect, useState } from "preact/hooks";
import { Icon } from "site/sections/Contact.tsx";

interface FloatingButtonIslandProps {
  icon: Icon;
  link: string;
}

export default function FloatingButtonIsland(
  { icon, link }: FloatingButtonIslandProps,
) {
  const [showMessage, setShowMessage] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Animação inicial para o ícone de notificação
    setTimeout(() => {
      setShowNotification(true);
    }, 500); // Aparece após 0.5s

    // Animação para a mensagem aparecer depois da notificação
    setTimeout(() => {
      setShowMessage(true);
    }, 1500); // Aparece após 1.5s

    // Desaparece a mensagem após 5 segundos
    setTimeout(() => {
      setShowMessage(false);
    }, 6500); // Desaparece após 5s da exibição
  }, []);

  return (
    <div
      className="fixed bottom-6 right-6 flex flex-col items-end"
      style={{ zIndex: 999999 }}
    >
      {/* Balão de conversa */}
      {showMessage && (
        <div
          className="bg-white text-gray-700 text-sm px-4 py-3 rounded-lg shadow-md mb-4 relative transition-opacity duration-500"
          style={{ opacity: showMessage ? 1 : 0 }}
        >
          <span>Olá, posso te ajudar?</span>
          <div className="absolute w-0 h-0 border-t-[10px] border-t-white border-l-[10px] border-l-transparent border-b-0 border-r-0 -bottom-2 right-6">
          </div>
        </div>
      )}

      {/* Botão com notificação */}
      <a
        href={link}
        target="_blank"
        className={`relative bg-[#10c379] rounded-full flex items-center justify-center w-14 h-14 shadow-lg transition-transform duration-500`}
      >
        <Image
          src={icon.icon}
          width={icon.width}
          height={icon.height}
          alt={icon.alt}
          className="w-12 h-12 object-fill"
        />
        {/* Ícone de notificação */}
        <div
          className={`absolute top-1 right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full transform translate-x-1/2 -translate-y-1/2 transition-transform duration-500 ${
            showNotification ? "scale-100" : "scale-0"
          }`}
        >
          1
        </div>
      </a>
    </div>
  );
}
