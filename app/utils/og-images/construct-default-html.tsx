import type { CSSProperties } from "react";

type Props = {
  cover: string;
  useDefaultStyle: boolean;
};

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

export async function constructDefaultHTML({ cover, useDefaultStyle }: Props) {
  try {
    return (
      <div
        tw="relative flex items-start justify-start w-full h-full overflow-hidden"
        style={{ backgroundColor: BACKGROUND_COLOR }}
      >
        {useDefaultStyle ? (
          <img
            src={cover}
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
              backgroundImage: `url("${cover}")`,
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
