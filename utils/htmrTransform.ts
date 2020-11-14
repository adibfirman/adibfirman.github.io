import type { HtmrOptions } from "htmr";
import { Hr, Paragraph, Em } from "@components/Markdown";

const htmrTransform = {
	hr: Hr,
	p: Paragraph,
	em: Em
} as HtmrOptions["transform"];

export default htmrTransform;
