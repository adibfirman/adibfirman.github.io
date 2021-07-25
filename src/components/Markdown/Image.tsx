import "react-medium-image-zoom/dist/styles.css";
import * as React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { Image as ChakraUiImage } from "@chakra-ui/react";
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
  const srcImg = !isError ? `/images-blog/${dirFolder}/${fileName}` : "/not-found-img.png";

  return (
    <WrapperImg>
      <Zoom overlayBgColorStart={bg} overlayBgColorEnd={bg}>
        <ChakraUiImage
          onError={() => setIsError(true)}
          cursor="pointer"
          src={srcImg}
          alt={typeof props.alt !== "string" ? "" : props.alt}
          mx="auto"
          my={4}
        />
      </Zoom>
    </WrapperImg>
  );
};

export default Image;
