import { Icon } from "site/sections/Contact.tsx";
import FloatingButtonIsland from "site/islands/FloatingButtonIsland.tsx";

interface FloatingButtonProps {
  icon: Icon;
  link: string;
}

export default function FloatingButton({ icon, link }: FloatingButtonProps) {
  return <FloatingButtonIsland icon={icon} link={link} />;
}
