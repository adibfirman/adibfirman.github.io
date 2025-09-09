import type { CSSProperties } from "react";
import { PARAMS_CUSTOM_OG_IMAGE } from "@/utils/og-images/constants";
import { normalizeDate } from "@/utils/articles";

type ParamsCustomOgImage = typeof PARAMS_CUSTOM_OG_IMAGE;
type Props = ParamsCustomOgImage & {
  useArticleDetailStyle: boolean;
  avatarImg: string;
};

const BACKGROUND_COLOR = "#101828";
const ABSOLUTE_STYLE: CSSProperties = {
  width: "1400px",
  height: "630px",
  position: "absolute",
};

export async function constructDefaultHTML({
  customCoverPath,
  useArticleDetailStyle,
  title: _title,
  excerpt,
  createdAt,
  avatarImg,
}: Props) {
  const title = _title || "Hi There, I'm Adib Firman..!!";
  const desc =
    excerpt ||
    `Welcome to my corner of the internet where I share my journey, projects, and thoughts on development.`;

  try {
    const renderDefaultBody = (() => {
      return (
        <div
          tw={`relative flex flex-col justify-center w-2/3 h-full text-[#e1e1ec] pt-5 ${customCoverPath ? "px-10 py-12" : "px-14"}`}
        >
          {useArticleDetailStyle && (
            <div tw="flex align-center">
              <img
                src={avatarImg}
                tw="w-14 h-14 rounded-full"
                style={{ objectFit: "cover" }}
              />
              <div tw="flex flex-col mt-2 ml-2">
                <p tw="m-0" style={{ fontFamily: "Lato" }}>
                  by: Adib Firman
                </p>
                <p tw="m-0" style={{ fontFamily: "Lato" }}>
                  Software Engineering Web Platform
                </p>
              </div>
            </div>
          )}

          <h1
            tw={`text-4xl m-0 text-left ${useArticleDetailStyle && "mt-10"}`}
            style={{ fontFamily: "Montserrat" }}
          >
            {title}
          </h1>
          <p tw="text-2xl mt-4" style={{ fontFamily: "Lato" }}>
            {desc}
          </p>

          {createdAt && (
            <p tw="text-xl mt-auto" style={{ fontFamily: "Lato" }}>
              Published on: {normalizeDate(createdAt)}
            </p>
          )}
        </div>
      );
    })();

    return (
      <div
        tw="relative flex items-start justify-start w-full h-full overflow-hidden"
        style={{ backgroundColor: BACKGROUND_COLOR }}
      >
        {useArticleDetailStyle ? (
          <img
            src={customCoverPath}
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
              backgroundImage: `url("${customCoverPath}")`,
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

        {renderDefaultBody}
      </div>
    );
  } catch (err) {
    throw err;
  }
}
