import { Lightbulb } from "phosphor-react";

import { canUseDOM } from "@/utils/browser.client";

import { TreeTagsItem } from "./tree-tags-item";
import { buildFolderTree } from "./utils/build-folder-tree";
import { getAllCategories } from "./utils/filter-categories.client";

type TreeTagsProps = {
  folderStructure: { [key: string]: number };
};

export function TreeTags({ folderStructure }: TreeTagsProps) {
  const folderTree = buildFolderTree(folderStructure);
  const { categories } = canUseDOM ? getAllCategories() : { categories: [] };

  return (
    <div className="hidden lg:block">
      <h1 className="text-base font-semibold mb-3 font-heading uppercase text-mystic-accent">
        filter by categories 🔎
      </h1>
      {categories.length > 0 && (
        <div className="flex gap-1.5 items-center bg-blue-300/30 rounded py-2 px-1.5 mb-3">
          <Lightbulb size={21} />
          <p className="font-semibold text-gray-300 text-sm">
            Click again to remove filter
          </p>
        </div>
      )}
      <div className="space-y-1">
        {folderTree.length > 0 ? (
          folderTree.map((node, index) => (
            <TreeTagsItem key={index} node={node} />
          ))
        ) : (
          <p className="text-gray-400 text-sm">
            No folders found. Articles are in the root directory.
          </p>
        )}
      </div>
    </div>
  );
}
