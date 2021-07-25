import * as React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";

import { AUTHOR_LINK } from "./constants";

const GHButton = dynamic(() => import("react-github-btn"), { ssr: false });

const CardTitle = ({ title, ...props }: { title: string; link?: string; ariaLabel?: string }) => (
  <Flex alignItems="center" justifyContent="space-between">
    <Text>{title}</Text>
    <Box mb="-6px">
      <GHButton
        data-text="Star"
        data-show-count
        data-icon="octicon-star"
        href={props?.link ?? `${AUTHOR_LINK}/${title}`}
      />
    </Box>
  </Flex>
);

export default CardTitle;
