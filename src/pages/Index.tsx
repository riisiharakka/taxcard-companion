import { Hero } from "@/components/Hero";
import { Guide } from "@/components/Guide";
import { FAQ } from "@/components/FAQ";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Verokortti - Hanki verokorttisi verkossa</title>
        <meta
          name="description"
          content="Opi miten saat verokorttisi helposti verkossa. Vaiheittainen opas ja usein kysytyt kysymykset verokortista Suomessa."
        />
        <meta
          name="keywords"
          content="verokortti, verokortti verkossa, suomen verokortti, verokortti netistä, verotus suomessa"
        />
        <meta property="og:title" content="Verokortti - Hanki verkorttisi verkossa | Vero.fi" />
        <meta
          property="og:description"
          content="Opi miten saat verokorttisi helposti verkossa. Vaiheittainen opas ja usein kysytyt kysymykset verokortista Suomessa."
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