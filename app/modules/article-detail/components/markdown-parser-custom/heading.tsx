import { Link as IconLinkBase, type IconProps } from "phosphor-react";
import {
  useState,
  type DetailedHTMLProps,
  type HTMLAttributes,
  type ReactNode,
} from "react";

import { childrenToText, createHashArticleFromTitle } from "@/utils/articles";

type LinkProps = IconProps & {
  isIconShown: boolean;
};

function IconLink({ isIconShown, ...props }: LinkProps) {
  return (
    <IconLinkBase
      className={`absolute -ml-7 transition-opacity duration-300 ${isIconShown ? "opacity-100" : "opacity-0"}`}
      weight="bold"
      size={24}
      {...props}
    />
  );
}

// ---

type AnchorProps = {
  id: string;
  text: string;
};

function Anchor({ id, text }: AnchorProps) {
  return (
    <a
      href={`#${id}`}
      className="relative before:absolute before:origin-left before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-current before:transform before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100"
    >
      {text}
    </a>
  );
}

// ---

type BaseProps = {
  type: "h1" | "h2" | "h3" | "h6";
  className: string;
  children: (data: { isHovered: boolean; id: string }) => ReactNode;
  text: string;
};

function Base({ type, children, className, text }: BaseProps) {
  const [isHovered, setIsHovered] = useState(false);
  const toggleHoverFlag = () => setIsHovered((prev) => !prev);
  const id = createHashArticleFromTitle(childrenToText(text));
  const baseProps = {
    id,
    className: `${className} flex items-center gap-2 relative text-mystic-purple-surface font-heading cursor-pointer`,
    onMouseEnter: toggleHoverFlag,
    onMouseLeave: toggleHoverFlag,
    children: children({ isHovered, id }),
  } satisfies DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >;

  switch (type) {
    case "h1":
      return <h1 {...baseProps} />;
    case "h2":
      return <h2 {...baseProps} />;
    case "h3":
      return <h3 {...baseProps} />;
    case "h6":
      return <h6 {...baseProps} />;
    default:
      return null;
  }
}

export const Heading = {
  Anchor,
  Base,
  IconLink,
};

