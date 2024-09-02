/** @type {import('next').NextConfig} */

const nextConfig = {
    // Adds Partial Prerendering
    experimental: {
        ppr: 'incremental',
    },
};

export default nextConfig;
