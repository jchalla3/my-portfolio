// next.config.mjs
import next from 'next';
const { PHASE_DEVELOPMENT_SERVER } = next.constants;

const nextConfig = {
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
