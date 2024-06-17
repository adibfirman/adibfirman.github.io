import { getExtractSiteDetail } from "./getExtractSiteDetail";

async function getGithub() {
  try {
    const fetching = await fetch("https://github.com/adibfirman");
    const text = await fetching.text();

    return getExtractSiteDetail(text);
  } catch (err) {
    throw err;
  }
}

async function getTwitter() {
  try {
    const siteURL = "https://twitter.com/adibfirman_";
    const fetching = await fetch(siteURL);
    const text = await fetching.text();

    return {
      ...getExtractSiteDetail(text),
      url: siteURL,
      icon: "icons/x-formerly-twitter.png",
    };
  } catch (err) {
    throw err;
  }
}

async function getLinkedin() {
  try {
    const siteURL = "https://www.linkedin.com/in/adibfirman/";
    const fetching = await fetch(siteURL);
    const text = await fetching.text();

    return {
      ...getExtractSiteDetail(text),
      url: siteURL,
      siteName: "Linkedin",
      icon: "icons/linkedin.png",
    };
  } catch (err) {
    throw err;
  }
}

export async function getMetaSocialMedia() {
  try {
    const github = await getGithub();
    const twitter = await getTwitter();
    const linkedin = await getLinkedin();

    return [github, twitter, linkedin] as const;
  } catch (err) {
    throw err;
  }
}
