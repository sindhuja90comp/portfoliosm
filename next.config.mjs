import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js';

const repoName = 'portfoliosm';

export default function nextConfig(phase) {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  return {
    reactStrictMode: true,
    output: 'export',
    ...(isDev
      ? {}
      : {
          basePath: `/${repoName}`,
          assetPrefix: `/${repoName}/`,
        }),
  };
}
