export type MapListBlogsPerYears = {
  [year: string]: Array<{ monthCreated: string; dayCreated: string } & typeof listBlogs[0]>;
};

export type Props = {
  mapListBlogsPerYears: MapListBlogsPerYears;
};
