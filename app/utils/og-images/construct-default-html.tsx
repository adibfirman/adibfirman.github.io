import type { CSSProperties } from "react";
import { getImageAsBase64 } from "./get-image-as-base64";

type Props = Partial<{
  customCoverPath: string;
}>;

const BACKGROUND_COLOR = "#101828";
const ABSOLUTE_STYLE: CSSProperties = {
  width: "1400px",
  height: "630px",
  position: "absolute",
};

function renderDefaultBody() {
  return (
    <div tw="relative flex flex-col justify-center w-2/5 h-full text-[#e1e1ec] px-14">
      <h1 tw="text-5xl m-0 text-left" style={{ fontFamily: "Montserrat" }}>
        Adib Firman
      </h1>
      <p tw="text-base mt-4" style={{ fontFamily: "Lato" }}>
        Welcome to my corner of the internet where I share my journey, projects,
        and thoughts on development.
      </p>
    </div>
  );
}

export async function constructDefaultHTML(params: Props) {
  try {
    const pathBgCover = params?.customCoverPath || "content/og-cover.svg";
    const bgCoverBase64 = await getImageAsBase64(pathBgCover);

    return (
      <div
        tw="relative flex items-start justify-start w-full h-full overflow-hidden"
        style={{ backgroundColor: BACKGROUND_COLOR }}
      >
        {params?.customCoverPath ? (
          <img
            src={bgCoverBase64}
            style={{
              ...ABSOLUTE_STYLE,
              objectFit: "cover",
              marginLeft: "20%",
            }}
          />
        ) : (
          <div
            style={{
              ...ABSOLUTE_STYLE,
              backgroundImage: `url("${bgCoverBase64}")`,
              backgroundColor: BACKGROUND_COLOR,
            }}
          />
        )}
        <div
          style={{
            ...ABSOLUTE_STYLE,
            background: `linear-gradient(90deg, rgba(27, 30, 52, 1) 40%, rgba(66, 71, 105, 0.45) 80%, transparent)`,
            inset: 0,
          }}
        />

        {renderDefaultBody()}
      </div>
    );
  } catch (err) {
    throw err;
  }
}
