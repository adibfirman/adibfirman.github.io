import "react-medium-image-zoom/dist/styles.css";
import * as React from "react";
import { useRouter } from "next/router";
import { Image as ChakraUiImage } from "@chakra-ui/react";
import qs from "querystring";
import Zoom from "react-medium-image-zoom";

import { useDarkMode } from "@utils/useDarkMode";

type Props = Partial<HTMLImageElement>;
const Image = (props: Props) => {
  const router = useRouter();
  const { bg } = useDarkMode();

  const fileName = props.src;
  const dirFolder = router.query.pathBlog;
  const params = qs.stringify({ fileName, dirFolder });
  const urlImage = `/api/get-image-blog?${params}`;

  return (
    <Zoom overlayBgColorStart={bg} overlayBgColorEnd={bg}>
      <ChakraUiImage
        cursor="pointer"
        src={urlImage}
        alt={typeof props.alt !== "string" ? "" : props.alt}
        mx="auto"
        my={4}
      />
    </Zoom>
  );
};

export default Image;
