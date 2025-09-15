import { useState } from "react";
import { useSearchParams } from "react-router";

import { canUseDOM } from "@/utils/browser.client";

import type { FolderNode } from "./types";
import {
  setCategoriesQueryParams,
  isCategorySelected,
} from "./utils/filter-categories.client";

type Props = {
  node: FolderNode;
  depth?: number;
  onClick?: (path: FolderNode["path"]) => void;
};

export function TreeTagsItem({ node, depth = 0, onClick }: Props) {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set([]));
  const [_, setSearchParams] = useSearchParams();

  const hasChildren = node.children.length > 0;
  const isExpanded = expandedNodes.has(node.path);

  const toggleExpanded = (path: string) => {
    const newExpanded = new Set(expandedNodes);
    if (newExpanded.has(path)) {
      newExpanded.delete(path);
    } else {
      newExpanded.add(path);
    }
    setExpandedNodes(newExpanded);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCategoriesQueryParams({
      value: node.path,
      callback: (newSearchParams) => {
        setSearchParams(newSearchParams, { preventScrollReset: true });
      },
    });

    if (hasChildren) {
      toggleExpanded(node.path);
    }

    if (onClick) {
      onClick(node.path);
    }
  };

  const isSelectedByFilter = canUseDOM ? isCategorySelected(node.path) : false;

  return (
    <div key={node.path} className="font-body">
      <div
        className={`flex items-center gap-2 py-2 hover:bg-gray-800 rounded px-2 transition-all duration-200 cursor-pointer select-none ${isSelectedByFilter ? "bg-gray-800" : ""}`}
        style={{ paddingLeft: `${depth * 16 + 8}px` }}
        onClick={handleClick}
      >
        <div className="w-4 h-4 flex items-center justify-center">
          {hasChildren ? (
            <span className="text-gray-400 hover:text-white transition-colors">
              {isExpanded ? "▼" : "▶"}
            </span>
          ) : (
            <span className="w-2 h-2 bg-gray-600 rounded-full"></span>
          )}
        </div>

        <span
          className={`capitalize text-sm text-gray-300 hover:text-mystic-accent-light transition-colors flex-1 font-semibold ${isSelectedByFilter ? "text-mystic-accent-light" : ""}`}
        >
          {node.name.replace("-", " ")}
        </span>

        {node.articleCount > 0 && (
          <span className="text-xs text-gray-500 bg-gray-800 px-2 py-0.5 rounded">
            {node.articleCount}
          </span>
        )}
      </div>

      {hasChildren && isExpanded && (
        <div>
          {node.children
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((child) => (
              <TreeTagsItem node={child} onClick={onClick} depth={depth + 1} />
            ))}
        </div>
      )}
    </div>
  );
}
