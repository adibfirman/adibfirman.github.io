import { Link } from "react-router";
import type { Article } from "@/utils/articles";

type Props = {
  article: Article;
};

export function ArticleItem(props: Props) {
  return (
    <article>
      <div className="pb-6">
        {props.article.isRegional && (
          <span className="text-xs font-semibold font-heading italic text-mystic-mid">
            *Regional / (Indonesian Article)
          </span>
        )}
        <h2 className="text-xl font-bold hover:underline hover:decoration-mystic-accent-hover font-body">
          <Link to={`/articles/${props.article.slug}`} viewTransition>
            {props.article.title}
          </Link>
        </h2>

        <p className="text-gray-300 my-4 leading-relaxed font-body">
          {props.article.excerpt}
        </p>

        <Link
          to={`/articles/${props.article.slug}`}
          viewTransition
          className="text-base inline-flex items-center gap-1 font-body font-bold hover:underline hover:decoration-mystic-accent-hover"
        >
          Read more
        </Link>
      </div>
    </article>
  );
}
