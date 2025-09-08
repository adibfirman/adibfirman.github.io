export function constructUrlToview(url: string) {
  const urlConstructor = new URL(url);
  return `${urlConstructor.origin}/api/open-graph-image`;
}
