import { PARAMS_CUSTOM_OG_IMAGE } from "./constants";

type KeyParamsCustomOgImage = keyof typeof PARAMS_CUSTOM_OG_IMAGE;
type ExtraParams = Record<KeyParamsCustomOgImage, string>;

export function constructOgImageAPI(url: string, extraParams?: ExtraParams) {
  const urlConstructor = new URL(url);
  const searchParams = new URLSearchParams(urlConstructor.searchParams);

  if (extraParams) {
    Object.keys(extraParams).forEach((param) => {
      const value = extraParams[param as KeyParamsCustomOgImage];
      searchParams.append(param, value);
    });
  }

  return `${urlConstructor.origin}/api/open-graph-image?${searchParams.toString()}`;
}
