import type { BoxProps } from "@chakra-ui/react";

export const transition = "all 350ms ease-in-out 0s";
export const textProps = {
  transition,
  position: "absolute",
  fontFamily: "grandstander",
  fontSize: "xl",
  fontWeight: "normal"
} as BoxProps;

export const LINKS_HEADER = [
  { href: "/blog", name: "Blog" },
  { href: "/talks", name: "Talks" },
  { href: "/oss", name: "OSS" },
  { href: "/speed", name: "Speed" }
];
