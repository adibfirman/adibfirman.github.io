import "react-medium-image-zoom/dist/styles.css";
import * as React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { Image as ChakraUiImage } from "@chakra-ui/react";
import qs from "querystring";
import Zoom from "react-medium-image-zoom";

import { useDarkMode } from "@utils/useDarkMode";

type Props = Partial<HTMLImageElement>;

const WrapperImg = styled.div`
  > div {
    width: 100%;
  }
`;

const Image = (props: Props) => {
  const [isError, setIsError] = React.useState(false);
  const router = useRouter();
  const { bg } = useDarkMode();

  const fileName = props.src;
  const dirFolder = router.query.pathBlog;
  const params = qs.stringify({ fileName, dirFolder });
  const urlImage = `/api/get-image-blog?${params}`;

  return (
    <WrapperImg>
      <Zoom overlayBgColorStart={bg} overlayBgColorEnd={bg}>
        <ChakraUiImage
          onError={() => setIsError(true)}
          cursor="pointer"
          src={!isError ? urlImage : "/not-found-img.png"}
          alt={typeof props.alt !== "string" ? "" : props.alt}
          mx="auto"
          my={4}
        />
      </Zoom>
    </WrapperImg>
  );
};

export default Image;
