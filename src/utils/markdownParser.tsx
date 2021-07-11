import type { ReactMarkdownPropsBase } from "react-markdown";
import * as React from "react";
import { Text } from "@chakra-ui/react";
import {
  Hr,
  Paragraph,
  Em,
  Code,
  Ul,
  Li,
  Link,
  Image,
  InlineCode,
  Heading,
  Blockquote
} from "@components/Markdown";

const markdownParser = {
  image: ({ src, alt }) => <Image alt={alt} src={src} />,
  strong: props => <Text as="strong" fontWeight="bold" {...props} />,
  link: props => <Link<typeof props> {...props} />,
  blockquote: Blockquote,
  heading: Heading,
  thematicBreak: Hr,
  paragraph: Paragraph,
  emphasis: Em,
  code: Code,
  inlineCode: InlineCode,
  list: Ul,
  listItem: Li
} as ReactMarkdownPropsBase["renderers"];

export default markdownParser;
