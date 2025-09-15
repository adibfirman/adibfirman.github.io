import type { Article } from "@/utils/articles";

type Props = {
  article: Article;
  totalDiscussion: number;
  totalReaction: number;
  totalView: number;
};

export function SubHeader(props: Props) {
  return (
    <div className="flex justify-between text-xs col-start-1 col-end-11 pb-2">
      <p className="text-gray-300 leading-relaxed font-body font-semibold">
        <span className="text-mystic-accent-light mr-1 font-semibold">
          {props.totalView || "-"}
        </span>
        views
      </p>
      <div className="flex flex-row gap-1 text-gray-300 leading-relaxed font-body font-semibold">
        {props.article.isRegional && (
          <>
            <p>
              You are reading
              <span className="italic ml-1 text-mystic-accent-light">
                Regional / Indonesian article
              </span>
            </p>
            <span>|</span>
          </>
        )}
        <p>
          {props.totalDiscussion}
          <span className="text-mystic-accent-light ml-1">Discussion</span>
        </p>
        <span>|</span>
        <p>
          {props.totalReaction}
          <span className="text-mystic-accent-light ml-1">Reactions</span>
        </p>
      </div>
    </div>
  );
}
