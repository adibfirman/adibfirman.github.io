import { useState } from "react";
import { MobileMenuButton } from "./MobileMenuButton";
import { MobileNavigation } from "./MobileNavigation";

type Props = {
  pathname: string;
};

export function WrapperMobileNavigation({ pathname }: Props) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <MobileMenuButton
        isMenuOpen={isMenuOpen}
        handleClickMenu={() => setMenuOpen(!isMenuOpen)}
      />
      <MobileNavigation activeTab={pathname} isMenuOpen={isMenuOpen} />
    </>
  );
}
