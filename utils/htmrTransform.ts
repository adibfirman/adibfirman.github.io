import { Hr } from "@components/Markdown";
import type { HtmrOptions } from "htmr";

const htmrTransform = {
	hr: Hr
} as HtmrOptions["transform"];

export default htmrTransform;
