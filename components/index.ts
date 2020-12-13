import NextDynamic from "next/dynamic";

export const Header = NextDynamic(() => import("./Header"), { ssr: false });
export const Page = NextDynamic(() => import("./Page"), { ssr: false });
export const Footer = NextDynamic(() => import("./Footer"), { ssr: false });
