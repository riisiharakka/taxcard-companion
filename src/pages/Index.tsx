import { Hero } from "@/components/Hero";
import { Guide } from "@/components/Guide";
import { FAQ } from "@/components/FAQ";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Finnish Tax Card (Verokortti) - Get Your Tax Card Online</title>
        <meta
          name="description"
          content="Learn how to get your Finnish tax card (verokortti) online. Step-by-step guide and frequently asked questions about tax cards in Finland."
        />
        <meta
          name="keywords"
          content="verokortti, tax card finland, finnish tax card, tax card online, finland taxation"
        />
        <meta property="og:title" content="Finnish Tax Card (Verokortti) - Get Your Tax Card Online" />
        <meta
          property="og:description"
          content="Learn how to get your Finnish tax card (verokortti) online. Step-by-step guide and frequently asked questions about tax cards in Finland."
        />
        <link rel="canonical" href="https://your-domain.com" />
      </Helmet>
      <main className="min-h-screen">
        <Hero />
        <Guide />
        <FAQ />
      </main>
    </>
  );
};

export default Index;