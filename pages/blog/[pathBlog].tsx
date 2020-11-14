import type { GetStaticProps } from "next";

import * as React from "react";
import { format as formatDate } from "date-fns";
import htmr from "htmr";
import { useTheme, Flex, Text, Icon } from "@chakra-ui/core";
import { Heart, Calendar } from "react-feather";

import { Page } from "@components";
import { Hr } from "@components/UI";
import htmrTransform from "utils/htmrTransform";
import { listBlogs, markdownToHTML } from "@utils/blogs";

type Props = {
	source: string;
	frontMatter: typeof listBlogs[0];
};

const BlogPage = ({ frontMatter, source }: Props) => {
	const content = htmr(source, { transform: htmrTransform });
	const theme = useTheme();
	const createdAt = new Date(frontMatter.data.date);

	return (
		<Page
			path={`/blog/${frontMatter.pathname}`}
			title={frontMatter.data.title}
			SEO={{ title: frontMatter.data.title, desc: frontMatter.data.spoiler }}
			bodyStyle={{ mx: [null, `calc(-1*${theme.space[20]})`] }}
		>
			<Hr />
			<Flex justifyContent="space-between" alignItems="center">
				<Flex alignItems="center">
					<Icon as={Calendar} color="azure.400" justifySelf="center" mr={1} />
					<Text fontSize="sm" color="azure.400">
						{formatDate(createdAt, "dd MMMM yyyy")}
					</Text>
				</Flex>
				<Flex alignItems="center">
					<Icon as={Heart} color="azure.400" justifySelf="center" mr={1} />
					<Text fontSize="sm" color="azure.400">
						123
					</Text>
				</Flex>
			</Flex>
			<Hr />
			{content}
		</Page>
	);
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const detailBlog = listBlogs.find(blog => blog.pathname === params?.pathBlog);
	const parseMarkdownToHTML = await markdownToHTML(detailBlog?.content ?? "");
	const htmlContent = parseMarkdownToHTML;

	return {
		props: {
			source: htmlContent,
			frontMatter: detailBlog
		}
	};
};

export const getStaticPaths = async () => {
	const paths = listBlogs.map(blog => ({ params: { pathBlog: blog.pathname } }));

	return { paths, fallback: false };
};

export default BlogPage;
