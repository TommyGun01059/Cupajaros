const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: "/internal/:path*",
        destination:
          process.env.NODE_ENV === "development"
            ? "http://127.0.0.1:8000/:path*"
            : "/",
      },
    ];
  },
};

module.exports = nextConfig;
