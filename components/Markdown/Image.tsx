import * as React from "react";
import { useRouter } from "next/router";
import { Image as ChakraUiImage } from "@chakra-ui/react";
import qs from "querystring";

type Props = Partial<HTMLImageElement>;
const Image = (props: Props) => {
  const router = useRouter();

  const fileName = props.src;
  const dirFolder = router.query.pathBlog;
  const params = qs.stringify({ fileName, dirFolder });
  const urlImage = `/api/get-image-blog?${params}`;

  return (
    <ChakraUiImage
      src={urlImage}
      alt={typeof props.alt !== "string" ? "" : props.alt}
      mx="auto"
      my={4}
    />
  );
};

export default Image;
