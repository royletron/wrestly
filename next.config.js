/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    tsconfigPath: "./tsconfig.next.json",
  },
  exportPathMap: async function (defaultPathMap) {
    return Object.assign({}, defaultPathMap, {
      "/": { page: "/[...fragment]", query: { fragment: ["/"] } },
    });
  },
};

module.exports = nextConfig;
