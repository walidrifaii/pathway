import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  output: "standalone",
  // Keep Turbopack rooted at the project (not src/app) so Next resolves correctly
  turbopack: {
    root: process.cwd(),
  },
};

export default withNextIntl(nextConfig);
