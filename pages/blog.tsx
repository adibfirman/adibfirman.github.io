import * as React from "react";
import Link from "next/link";
import { Box, PseudoBox, Icon, Grid, Stack, Text, useTheme } from "@chakra-ui/core";
import { Heart } from "react-feather";

import { Page } from "@components";

const DESC_PAGE = `So in this page, it's just an open space where I share my knowledge or let say "seeds" of my thoughts to be cultivated in public, *most of these seeds writed in 🇮🇩 `;
const TITLE_PAGE = "I'm a Digital Gardeners";

const BlogPage = () => {
	const theme = useTheme();

	return (
		<Page
			path="/blog"
			title={TITLE_PAGE}
			desc={DESC_PAGE}
			SEO={{ title: TITLE_PAGE, desc: DESC_PAGE }}
		>
			<Box mt={8} mx={`calc(-1*${theme.space[16]})`}>
				<Text fontWeight={600} fontSize="2xl">
					2020
				</Text>
				<Box mt={1} borderColor="azure.300" borderBottomWidth="1px" borderBottomStyle="solid" />
				<Stack spacing={1}>
					<Link href="/page/sip">
						<PseudoBox role="group" cursor="pointer" py={2} px={4}>
							<Grid gridAutoFlow="column" gridTemplateColumns="93% 1fr" gap="1">
								<Box>
									<PseudoBox
										fontWeight="bolder"
										_groupHover={{ textDecoration: "underline" }}
										fontSize="lg"
									>
										Ruang penyimpanan pada website
									</PseudoBox>
									<Text
										color="azure.600"
										whiteSpace="nowrap"
										overflow="hidden"
										style={{ textOverflow: "ellipsis" }}
									>
										Apa saja dan apakah ada best practice dalam menyimpan sesuatu pada website?
									</Text>
									<Grid
										mt="2"
										gridAutoFlow="column"
										gridAutoColumns="max-content"
										alignItems="center"
										gap="1"
									>
										<Icon as={Heart} color="azure.400" justifySelf="center" />
										<Text fontSize="sm" color="azure.400">
											123
										</Text>
									</Grid>
								</Box>
								<Grid
									gap="1"
									mt="1"
									justifyContent="flex-end"
									alignItems="center"
									alignContent="center"
								>
									<Text>Jan</Text>
									<Box borderColor="azure.300" borderBottomWidth="1px" borderBottomStyle="solid" />
									<Text textAlign="center">01</Text>
								</Grid>
							</Grid>
						</PseudoBox>
					</Link>
				</Stack>
			</Box>
		</Page>
	);
};

export default BlogPage;
