import { getListFromMedium } from "@utils/blogs";

type GetListFromMedium = typeof getListFromMedium;

export type Props = {
  blogs: Awaited<ReturnType<GetListFromMedium>>;
};
