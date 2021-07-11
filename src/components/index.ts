import NextDynamic from "next/dynamic";

export { default as Page } from "./Page";

export const Header = NextDynamic(() => import("./Header"), { ssr: false });
export const Footer = NextDynamic(() => import("./Footer"), { ssr: false });
