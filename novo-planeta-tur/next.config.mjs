/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async redirects() {
    return [
      { source: "/portfolio", destination: "/pacotes", permanent: true },
      { source: "/produtoseservicos", destination: "/produtos-e-servicos", permanent: true },
      { source: "/centraldepromocoes", destination: "/promocoes", permanent: true },
      { source: "/quemsomos", destination: "/quem-somos", permanent: true },
      { source: "/copia-contato-2", destination: "/contato", permanent: true },
      { source: "/copia-contato-1", destination: "/responsabilidade-social", permanent: true },
      { source: "/avalienossosservicos", destination: "/avaliacao", permanent: true },
      { source: "/faleconosco", destination: "/fale-conosco", permanent: true },
    ];
  },
};

export default nextConfig;
