import { useEffect, useState } from "react";

type DiscussionDataGiscus = {
  reactionCount: number;
  totalCommentCount: number;
  totalReplyCount: number;
};

export function useListenGiscus() {
  const [giscusData, setGiscusData] = useState({ discussion: 0, reaction: 0 });

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

      setGiscusData((prevState) => ({
        discussion:
          prevState.discussion > 0 ? prevState.discussion : discussion,
        reaction: prevState.reaction > 0 ? prevState.reaction : reaction,
      }));
    }

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return giscusData;
}
