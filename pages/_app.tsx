import type { AppProps, AppContext } from "next/app";

import * as React from "react";
import Head from "next/head";
import App from "next/app";
import { CSSReset, ColorModeProvider, ThemeProvider } from "@chakra-ui/core";
import { CacheProvider } from "@emotion/core";
import { cache } from "emotion";
import { DefaultSeo } from "next-seo";
import absoluteURL from "next-absolute-url";

import SEO from "../next-seo.config";
import { theme } from "@utils";

const CustomizeApp = ({ Component, pageProps, host, origin }: CustomizeAppProps & AppProps) => {
	const extendsProps = { ...pageProps, host, origin };

	return (
		<CacheProvider value={cache}>
			<ThemeProvider theme={theme}>
				<CSSReset />
				<ColorModeProvider value="light">
					<Head>
						<meta name="viewport" content="width=device-width, initial-scale=1.0" />
						<link rel="icon" href="/favicon.png" sizes="16x16" type="image/png" />
						<link
							href="https://fonts.googleapis.com/css2?family=Grandstander&display=swap"
							rel="stylesheet"
						/>
					</Head>
					<DefaultSeo {...SEO} />
					<Component {...extendsProps} />
				</ColorModeProvider>
			</ThemeProvider>
		</CacheProvider>
	);
};

CustomizeApp.getInitialProps = async (appContext: AppContext) => {
	const appProps = await App.getInitialProps(appContext);
	const { host, origin } = absoluteURL(appContext.ctx.req);

	return { ...appProps, host, origin };
};

export default CustomizeApp;
