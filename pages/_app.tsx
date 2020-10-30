import * as React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { CSSReset, ColorModeProvider, ThemeProvider } from "@chakra-ui/core";
import { CacheProvider } from "@emotion/core";
import { cache } from "emotion";
import { DefaultSeo } from "next-seo";

import { theme } from "@utils";

const CustomizeApp = ({ Component, pageProps }: AppProps) => {
	return (
		<CacheProvider value={cache}>
			<ThemeProvider theme={theme}>
				<CSSReset />
				<ColorModeProvider value="light">
					<Head>
						<meta name="viewport" content="width=device-width, initial-scale=1.0" />
						<link
							href="https://fonts.googleapis.com/css2?family=Grandstander&display=swap"
							rel="stylesheet"
						></link>
					</Head>

					<DefaultSeo
						title="Adib Firman"
						titleTemplate="%s · (@adibfirman)"
						description="Web Development, Software Engineering and Jr Developer For Life"
					/>

					<Component {...pageProps} />
				</ColorModeProvider>
			</ThemeProvider>
		</CacheProvider>
	);
};

export default CustomizeApp;
