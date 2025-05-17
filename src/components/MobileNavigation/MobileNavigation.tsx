import { cn } from "@/lib/utils";
import { MENUS } from "@/lib/menus";

type Props = {
  isMenuOpen: boolean;
  activeTab: string;
};

export function MobileNavigation({ isMenuOpen, activeTab }: Props) {
  return (
    <div
      className={cn(
        "fixed inset-0 bg-black z-40 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out md:hidden",
        isMenuOpen ? "translate-x-0" : "translate-x-full",
      )}
    >
      <nav className="flex flex-col items-center space-y-8">
        {MENUS.map((menu) => (
          <a
            key={menu.path}
            href={menu.path}
            className={cn(
              "text-2xl tracking-wider hover:text-gray-300 transition-colors duration-300",
              activeTab === menu.path ? "border-b border-white pb-1" : "",
            )}
          >
            {menu.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
