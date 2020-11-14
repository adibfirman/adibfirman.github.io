import type { HtmrOptions } from "htmr";
import { Hr, Paragraph, Em, Code, Ul, Li } from "@components/Markdown";

const htmrTransform = {
	hr: Hr,
	p: Paragraph,
	em: Em,
	code: Code,
	ul: Ul,
	li: Li
} as HtmrOptions["transform"];

export default htmrTransform;
