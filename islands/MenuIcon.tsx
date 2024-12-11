import { useState } from "preact/hooks";

interface NavOption {
  text: string;
  link: string;
}

interface MenuIconProps {
  navOptions: NavOption[];
}

export default function MenuIcon({ navOptions }: MenuIconProps) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    console.log("Chamou o menu");
    setOpen(!open);
  };

  return (
    <>
      <div className="flex lg:hidden">
        <input
          type="checkbox"
          id="menu-toggle"
          class="menu_opener hidden"
          onClick={handleClick}
        />

        <label
          for="menu-toggle"
          class="btn-menu-mobile cursor-pointer relative block w-[35px] h-[24px] z-50"
        >
          <span class="icon-bar block w-[35px] h-[3px] bg-white absolute top-0">
          </span>
          <span class="icon-bar block w-[35px] h-[3px] bg-white absolute top-[10px]">
          </span>
          <span class="icon-bar block w-[35px] h-[3px] bg-white absolute bottom-0">
          </span>
        </label>
      </div>

      {open && (
        <div className="absolute z-40 top-0 left-0 flex flex-col bg-third-blue">
          {navOptions.map((item) => (
            <a
              href={item.link}
              className="border-t border-white first:border-none  w-screen py-4 flex items-center justify-center"
            >
              <span className="uppercase">{item.text}</span>
            </a>
          ))}
        </div>
      )}
    </>
  );
}
