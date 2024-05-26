import { useState } from "react";
import { ChevronDown, ChevronRight, Hash } from "react-feather";

type Props = {
  title: string;
  isOpened: boolean;
  menus: Array<{ title: string; path: string; isActivated?: boolean }>;
};

export function AccordionMenu({ title, isOpened, menus }: Props) {
  const [accordionOpen, setAccordionOpen] = useState(isOpened);

  return (
    <div className="py-2">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="grid grid-cols-[0.58fr_1fr] content-center items-center justify-items-start justify-start pb-1.5"
      >
        {accordionOpen ? (
          <ChevronDown width={16} height={16} color="#b2b2bc" />
        ) : (
          <ChevronRight width={16} height={16} color="#b2b2bc" />
        )}
        <p className="text-[#b2b2bc] text-lg">{title}</p>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="grid auto-rows-max">
            {menus.map((menu) => (
              <li key={menu.path}>
                <button
                  className={`grid grid-cols-[max-content_1fr] justify-items-start gap-x-1.5 justify-start w-full px-4 py-2 ${
                    menu.isActivated ? "bg-[rgb(85_88_92_/_39%)]" : ""
                  }`}
                >
                  <Hash width={16} color="#9293aa" />
                  <p className="text-base text-[#9293aa]">{menu.title}</p>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
