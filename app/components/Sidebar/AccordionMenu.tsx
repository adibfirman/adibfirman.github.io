import { Link, useLocation } from "@remix-run/react";
import { useState } from "react";
import { ChevronDown, ChevronRight, Hash } from "react-feather";

type Props = {
  title: string;
  isOpened: boolean;
  menus: Array<{ title: string; path: string }>;
};

export function AccordionMenu({ title, isOpened, menus }: Props) {
  const [accordionOpen, setAccordionOpen] = useState(isOpened);
  const location = useLocation();

  return (
    <div className="py-2">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex flex-row items-center rpb-1.5"
      >
        {accordionOpen ? (
          <ChevronDown width={16} height={16} color="#b2b2bc" />
        ) : (
          <ChevronRight width={16} height={16} color="#b2b2bc" />
        )}
        <p className="text-[#b2b2bc] text-lg font-grandstander ml-1">{title}</p>
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
                <Link
                  to={menu.path}
                  className={`grid grid-cols-[max-content_1fr] justify-items-start gap-x-1.5 justify-start w-full px-4 py-2 ${
                    location.pathname === menu.path
                      ? "bg-[rgb(85_88_92_/_39%)] rounded-lg"
                      : ""
                  }`}
                >
                  <Hash width={16} color="#9293aa" />
                  <p className="text-base text-[#9293aa]">{menu.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
