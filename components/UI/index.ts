import NextDynamic from "next/dynamic";

export const NavigationCard = NextDynamic(() => import("./NavigationCard"), { ssr: false });
export { default as Hr } from "./Hr";
