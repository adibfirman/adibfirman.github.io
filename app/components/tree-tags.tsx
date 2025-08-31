import { useState } from "react";

interface FolderNode {
  name: string;
  path: string;
  children: FolderNode[];
  articleCount: number;
  isLeaf: boolean;
}

interface TreeTagsProps {
  folderStructure: { [key: string]: number };
  onFolderClick?: (folderPath: string) => void;
}

export function TreeTags({ folderStructure, onFolderClick }: TreeTagsProps) {
  // Initialize with some folders expanded by default
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(() => {
    const rootFolders = Object.keys(folderStructure)
      .filter(path => !path.includes('/'))
      .slice(0, 2); // Expand first 2 root folders by default
    return new Set(rootFolders);
  });

  const buildFolderTree = (): FolderNode[] => {
    const paths = Object.keys(folderStructure).sort();
    const nodeMap: { [key: string]: FolderNode } = {};

    // First pass: create all nodes
    paths.forEach(fullPath => {
      const parts = fullPath.split('/');
      
      parts.forEach((part, index) => {
        const currentPath = parts.slice(0, index + 1).join('/');
        
        if (!nodeMap[currentPath]) {
          nodeMap[currentPath] = {
            name: part,
            path: currentPath,
            children: [],
            articleCount: folderStructure[currentPath] || 0,
            isLeaf: index === parts.length - 1
          };
        }
      });
    });

    // Second pass: build parent-child relationships
    Object.values(nodeMap).forEach(node => {
      const pathParts = node.path.split('/');
      if (pathParts.length > 1) {
        const parentPath = pathParts.slice(0, -1).join('/');
        const parent = nodeMap[parentPath];
        if (parent && !parent.children.find(child => child.path === node.path)) {
          parent.children.push(node);
        }
      }
    });

    // Return only root level nodes
    return Object.values(nodeMap).filter(node => !node.path.includes('/'));
  };

  const toggleExpanded = (path: string) => {
    const newExpanded = new Set(expandedNodes);
    if (newExpanded.has(path)) {
      newExpanded.delete(path);
    } else {
      newExpanded.add(path);
    }
    setExpandedNodes(newExpanded);
  };

  const renderFolderNode = (node: FolderNode, depth: number = 0) => {
    const hasChildren = node.children.length > 0;
    const isExpanded = expandedNodes.has(node.path);

    const handleClick = (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      
      if (hasChildren) {
        toggleExpanded(node.path);
      }
      
      if (onFolderClick) {
        onFolderClick(node.path);
      }
    };

    return (
      <div key={node.path} className="font-body">
        <div 
          className="flex items-center gap-2 py-2 hover:bg-gray-800 rounded px-2 transition-all duration-200 cursor-pointer select-none"
          style={{ paddingLeft: `${depth * 16 + 8}px` }}
          onClick={handleClick}
        >
          <div className="w-4 h-4 flex items-center justify-center">
            {hasChildren ? (
              <span className="text-gray-400 hover:text-white transition-colors">
                {isExpanded ? '▼' : '▶'}
              </span>
            ) : (
              <span className="w-2 h-2 bg-gray-600 rounded-full"></span>
            )}
          </div>
          
          <span className="w-4 h-4 flex items-center justify-center text-gray-400">
            {hasChildren ? (isExpanded ? '📂' : '📁') : '🏷️'}
          </span>
          
          <span className="text-sm text-gray-300 hover:text-white transition-colors flex-1">
            {node.name}
          </span>
          
          {node.articleCount > 0 && (
            <span className="text-xs text-gray-500 bg-gray-800 px-2 py-0.5 rounded">
              {node.articleCount}
            </span>
          )}
        </div>
        
        {hasChildren && isExpanded && (
          <div className="border-l border-gray-700 ml-6 pl-2">
            {node.children
              .sort((a, b) => a.name.localeCompare(b.name))
              .map(child => renderFolderNode(child, depth + 1))
            }
          </div>
        )}
      </div>
    );
  };

  const folderTree = buildFolderTree();

  if (folderTree.length === 0) {
    return (
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-200 font-body">
          Folder Structure
        </h3>
        <p className="text-gray-400 text-sm">No folders found. Articles are in the root directory.</p>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-gray-200 font-body">
        Folder Structure
      </h3>
      <div className="space-y-1 max-h-64 overflow-y-auto">
        {folderTree.map(node => renderFolderNode(node))}
      </div>
    </div>
  );
}