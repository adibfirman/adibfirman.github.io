import { Hr, Paragraph } from "@components/Markdown";
import type { HtmrOptions } from "htmr";

const htmrTransform = {
	hr: Hr,
	p: Paragraph
} as HtmrOptions["transform"];

export default htmrTransform;
