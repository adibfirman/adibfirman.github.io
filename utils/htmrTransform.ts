import type { HtmrOptions } from "htmr";
import { Hr, Paragraph, Em, Code } from "@components/Markdown";

const htmrTransform = {
	hr: Hr,
	p: Paragraph,
	em: Em,
	code: Code
} as HtmrOptions["transform"];

export default htmrTransform;
