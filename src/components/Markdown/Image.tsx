import * as React from "react";
import { useRouter } from "next/router";
import { Image as ChakraUiImage } from "@chakra-ui/react";
import qs from "querystring";

type Props = Partial<HTMLImageElement>;

const Image = (props: Props) => {
  const [isError, setIsError] = React.useState(false);
  const router = useRouter();

  const fileName = props.src;
  const dirFolder = router.query.pathBlog;
  const params = qs.stringify({ fileName, dirFolder });
  const urlImage = `/api/get-image-blog?${params}`;
  const srcImg = !isError ? urlImage : "/not-found-img.png";

  function handleClickImage() {
    if (!isError) window.open(srcImg);
  }

  return (
    <ChakraUiImage
      onClick={handleClickImage}
      cursor={isError ? "" : "pointer"}
      onError={() => setIsError(true)}
      src={srcImg}
      alt={typeof props.alt !== "string" ? "" : props.alt}
      mx="auto"
      my={4}
    />
  );
};

export default Image;
