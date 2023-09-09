const withMDX = require("@next/mdx")({ extension: /\.mdx?$/ });

module.exports = withMDX({
  swcMinify: true,
  images: {
    deviceSizes: [420, 768, 1024, 1200],
    domains: [],
    path: "/_next/image",
    loader: "default"
  }
});
