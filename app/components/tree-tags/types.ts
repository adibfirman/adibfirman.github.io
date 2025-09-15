export type FolderNode = {
  name: string;
  path: string;
  children: FolderNode[];
  articleCount: number;
  isLeaf: boolean;
};

export type FolderStructure = { [key: string]: number };
