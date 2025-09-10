import { useEffect, useState } from "react";

export function useActiveId(itemIds: string[]) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% 0% 0%` },
    );

    const getEle = (id: string) => document.querySelector(`#${id}`);

    itemIds.forEach((id) => {
      const ele = getEle(id);
      if (ele) {
        observer.observe(ele);
      }
    });

    return () => {
      itemIds.forEach((id) => {
        const ele = getEle(id);
        if (ele) {
          observer.unobserve(ele);
        }
      });
    };
  }, [itemIds]);

  return activeId;
}
