import type { HtmrOptions } from "htmr";
import * as React from "react";
import { Heading, Text } from "@chakra-ui/react";
import { Hr, Paragraph, Em, Code, Ul, Li, Link } from "@components/Markdown";

const htmrTransform = {
  h2: props => <Heading as="h2" fontSize="2xl" my={4} fontWeight="medium" {...props} />,
  strong: props => <Text as="strong" fontWeight="bold" {...props} />,
  a: props => <Link<typeof props> {...props} />,
  hr: Hr,
  p: Paragraph,
  em: Em,
  code: Code,
  ul: Ul,
  li: Li
} as HtmrOptions["transform"];

export default htmrTransform;
