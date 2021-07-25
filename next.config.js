const withMDX = require("@next/mdx")({ extension: /\.mdx?$/ });

module.exports = withMDX({
  webpack5: false,
  images: {
    deviceSizes: [420, 768, 1024, 1200],
    iconSizes: [],
    domains: [],
    path: "/_next/image",
    loader: "default"
  }
});
