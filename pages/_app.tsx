import type { AppProps } from "next/app";

import * as React from "react";
import Head from "next/head";
import { CSSReset, ColorModeProvider, ThemeProvider } from "@chakra-ui/core";
import { css } from "@emotion/core";
import { CacheProvider, Global } from "@emotion/core";
import { cache } from "emotion";
import { DefaultSeo } from "next-seo";

import SEO from "../next-seo.config";
import theme from "@utils/theme";

const globalStyle = css`
	@font-face {
		font-family: "InputMono-Medium";
		font-style: normal;
		font-weight: 400;
		font-display: swap;
		src: url("/fonts/InputMono-Medium.ttf");
	}
`;

const CustomizeApp = ({ Component, pageProps }: AppProps) => {
	return (
		<CacheProvider value={cache}>
			<ThemeProvider theme={theme}>
				<CSSReset />
				<Global styles={globalStyle} />
				<ColorModeProvider value="light">
					<Head>
						<meta name="viewport" content="width=device-width, initial-scale=1.0" />
						<link rel="icon" href="/favicon.png" sizes="16x16" type="image/png" />
						<link
							href="https://fonts.googleapis.com/css2?family=Grandstander&display=swap"
							rel="stylesheet"
						/>
						<link rel="preconnect" href="https://fonts.gstatic.com" />
						<link
							href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;1,400;1,700&display=swap"
							rel="stylesheet"
						/>
					</Head>
					<DefaultSeo {...SEO} />
					<Component {...pageProps} />
				</ColorModeProvider>
			</ThemeProvider>
		</CacheProvider>
	);
};

export default CustomizeApp;
