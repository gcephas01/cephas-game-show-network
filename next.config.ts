import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/YOUR-MCGSN-REPO-NAME",
  assetPrefix: "/YOUR-MCGSN-REPO-NAME/",
  trailingSlash: true,
};

export default nextConfig;

