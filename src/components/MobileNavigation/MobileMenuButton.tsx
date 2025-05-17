import { Menu, X } from "lucide-react";

type Props = {
  isMenuOpen: boolean;
  handleClickMenu: () => void;
};

export function MobileMenuButton({ isMenuOpen, handleClickMenu }: Props) {
  return (
    <button
      onClick={handleClickMenu}
      className="fixed top-6 right-6 z-50 md:hidden"
      aria-label={isMenuOpen ? "Close menu" : "Open menu"}
    >
      {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </button>
  );
}
