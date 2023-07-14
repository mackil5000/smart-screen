/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/visitors",
        destination: "https://oimsweden.com/wp-json/oim/v1/visitors",
      },
    ];
  },
};

module.exports = nextConfig;
