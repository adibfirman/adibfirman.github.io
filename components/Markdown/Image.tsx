import * as React from "react";
import NextImage from "next/image";
import qs from "querystring";

interface Props extends Partial<HTMLImageElement> {
  dirFolder: string;
}

const Image = (props: Props) => {
  const fileName = props.src;
  const dirFolder = props.dirFolder;
  const params = qs.stringify({ fileName, dirFolder });
  const urlImage = `/api/get-image-blog?${params}`;

  return (
    <img
      src={urlImage}
      alt={typeof props.alt !== "string" ? "" : props.alt}
      width={500}
      height={500}
    />
  );
};

export default Image;
