import type { FolderStructure, FolderNode } from "../types";

export function buildFolderTree(folderStructure: FolderStructure) {
  const paths = Object.keys(folderStructure).sort();
  const nodeMap: { [key: string]: FolderNode } = {};

  // First pass: create all nodes
  paths.forEach((fullPath) => {
    const parts = fullPath.split("/");

    parts.forEach((part, index) => {
      const currentPath = parts.slice(0, index + 1).join("/");

      if (!nodeMap[currentPath]) {
        nodeMap[currentPath] = {
          name: part,
          path: currentPath,
          children: [],
          articleCount: folderStructure[currentPath] || 0,
          isLeaf: index === parts.length - 1,
        };
      }
    });
  });

  // Second pass: build parent-child relationships
  Object.values(nodeMap).forEach((node) => {
    const pathParts = node.path.split("/");
    if (pathParts.length > 1) {
      const parentPath = pathParts.slice(0, -1).join("/");
      const parent = nodeMap[parentPath];
      if (
        parent &&
        !parent.children.find((child) => child.path === node.path)
      ) {
        parent.children.push(node);
      }
    }
  });

  // Return only root level nodes
  return Object.values(nodeMap).filter((node) => !node.path.includes("/"));
}
