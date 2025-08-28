import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Article {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  content: string;
}

const articlesDirectory = path.join(process.cwd(), 'content/articles');

export function getArticles(): Article[] {
  try {
    const fileNames = fs.readdirSync(articlesDirectory);
    const articles = fileNames
      .filter(name => name.endsWith('.mdx'))
      .map(name => {
        const fullPath = path.join(articlesDirectory, name);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        
        return {
          slug: name.replace(/\.mdx$/, ''),
          title: data.title,
          date: data.date,
          excerpt: data.excerpt,
          tags: data.tags || [],
          content,
        };
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    return articles;
  } catch (error) {
    console.error('Error reading articles:', error);
    return [];
  }
}