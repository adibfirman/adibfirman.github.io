import Giscus from "@giscus/react";
import { useEffect } from "react";

type Props = {
  onReceiveData: (data: {
    totalDiscussion: number;
    totalReaction: number;
  }) => void;
};

type DiscussionDataGiscus = {
  reactionCount: number;
  totalCommentCount: number;
  totalReplyCount: number;
};

export function GiscusArticle({ onReceiveData }: Props) {
  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.origin !== "https://giscus.app") return;
      if (!(typeof event.data === "object" && event.data.giscus)) return;

      const giscusData = event.data.giscus;
      const discussionData: DiscussionDataGiscus = giscusData?.discussion || {
        reactionCount: 0,
        totalCommentCount: 0,
        totalReplyCount: 0,
      };

      const reaction = discussionData.reactionCount;
      const discussion =
        discussionData.totalCommentCount + discussionData.totalReplyCount;

      onReceiveData({ totalDiscussion: discussion, totalReaction: reaction });
    }

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <Giscus
      repo="adibfirman/adibfirman.github.io"
      repoId="MDEwOlJlcG9zaXRvcnkxNjgyODI2NDI="
      category="Articles"
      categoryId="DIC_kwDOCgfKEs4CvOGg"
      mapping="pathname"
      strict="1"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="top"
      theme="dark"
      lang="en"
    />
  );
}
