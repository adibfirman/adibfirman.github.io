import { useEffect, useState } from "react";

export function useGetTotalView(args: { slug: string }) {
  const [totalView, setTotalView] = useState(0);

  useEffect(() => {
    (async function getTotalView() {
      const fetchTotalView = await fetch(
        `/api/get-total-views-article?slug=${args.slug}`,
      );

      const totalView = await fetchTotalView.json();
      setTotalView(totalView.total);
    })();
  }, []);

  return { totalView };
}
