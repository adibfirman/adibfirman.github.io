import { SubHeader } from "@/components";
import { normalizeDate, type Article } from "@/utils/articles";

import type { ArticleDetail } from "../types";

type Props = Pick<ArticleDetail, "coverIMG"> & {
  article: Article;
};

export function Header(props: Props) {
  const bgImageCover = `url(/api/get-image-article?path=${props.coverIMG})`;

  return (
    <SubHeader>
      <div
        className={`absolute top-0 left-0 w-full h-[99%] bg-cover bg-center`}
        style={{ backgroundImage: bgImageCover }}
      >
        <div className="w-full h-full bg-gray-900/30 backdrop-blur-md" />
      </div>
      <div className="absolute inset-0 flex items-center pt-7 lg:pt-0 lg:items-end lg:pb-36 justify-left z-10 max-w-4xl mx-auto px-8">
        <div className="text-left pr-6 xs:mt-20 sm:pr-8 md:pr-12 max-w-4xl">
          <h1 className="text-xl lg:text-4xl mb-2 font-bold font-heading text-mystic-text-secondary text-shadow-mystic-bg text-shadow-2xs">
            {props.article.title}
          </h1>
          <p className="text-xs text-gray-300 leading-relaxed font-heading">
            <span className="italic">Created on&nbsp;</span>
            <span className="text-mystic-text-primary">
              {normalizeDate(props.article.createdAt)}.&nbsp;
            </span>
            <span className="italic">Last updated on&nbsp;</span>
            <span className="text-mystic-text-primary">
              {normalizeDate(props.article.updatedAt)}.
            </span>
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-20 max-w-4xl flex mr-3 mb-3">
        <p
          className="text-[9px] text-gray-300 leading-relaxed font-heading [&>a]:italic [&>a]:text-mystic-accent [&>a]:hover:underline"
          dangerouslySetInnerHTML={{ __html: props.article.copyrightCover }}
        />
      </div>
    </SubHeader>
  );
}
