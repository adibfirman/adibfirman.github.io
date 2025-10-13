import { Eye, ChatTeardropText } from "phosphor-react";
import type { Article } from "@/utils/articles";

type Props = {
  article: Article;
  totalDiscussion: number;
  totalReaction: number;
  totalView: number;
};

export function SubHeader(props: Props) {
  return (
    <div className="hidden lg:flex text-xs justify-between items-center col-start-1 col-end-11 py-4">
      <div className="flex gap-2">
        <div className="flex items-center gap-2 border rounded-full px-3 py-2 border-gray-400/55">
          <Eye size={23} />
          <span className="text-sm font-semibold text-shadow-mystic-purple-accent-light">
            {props.totalView || "-"}
          </span>
        </div>

        <div className="flex items-center gap-2 border rounded-full px-3 py-2 border-gray-400/55 cursor-pointer">
          <ChatTeardropText size={23} />
          <span className="text-sm font-semibold text-shadow-mystic-purple-accent-light">
            {props.totalDiscussion + props.totalReaction}
          </span>
        </div>
      </div>

      {props.article.isRegional && (
        <p>
          You are reading
          <span className="italic ml-1 text-mystic-accent-light">
            Regional / Indonesian article
          </span>
        </p>
      )}
    </div>
  );
}
