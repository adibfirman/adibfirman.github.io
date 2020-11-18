import { theme as baseTheme } from "@chakra-ui/core";

const colors = {
	...baseTheme.colors,
	azure: {
		"50": "#f6f7f8",
		"100": "#d9d9da",
		"200": "#c0c1c2",
		"300": "#a7a8a9",
		"400": "#8e8f90",
		"500": "#757677",
		"600": "#5d5d5e",
		"700": "#444445",
		"800": "#2b2b2c",
		"900": "#121213"
	}
};

const fonts = {
	...baseTheme.fonts,
	grandstander: "'Grandstander', cursive",
	merriweather: "'Merriweather', serif",
	inputMono: "InputMono-Medium"
};

const theme = {
	...baseTheme,
	colors,
	fonts
};

export default theme;