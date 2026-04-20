import { Helmet } from "react-helmet-async";
import { LandingGlobalStyles, PageWrapper, TopStrip } from "./landing-styled";
import { LandingNav }      from "./sections/LandingNav";
import { LandingHero }     from "./sections/LandingHero";
import { LandingProduct }  from "./sections/LandingProduct";
import { LandingLogos }    from "./sections/LandingLogos";
import { LandingFeatures } from "./sections/LandingFeatures";
import { LandingBand }     from "./sections/LandingBand";
import { LandingQuote }    from "./sections/LandingQuote";
import { LandingPricing }  from "./sections/LandingPricing";
import { LandingCta }      from "./sections/LandingCta";
import { LandingFooter }   from "./sections/LandingFooter";

function LandingPage() {
  return (
    <>
      <Helmet>
        <title>Maverva — Project management that respects your time</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&family=Lato:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <LandingGlobalStyles />

      <PageWrapper>
        <TopStrip>
          <b>v3.2 Release</b>
          <span>/</span>
          Timeline view, bulk actions &amp; SOC 2 Type II — now available
          <span>/</span> Read changelog →
        </TopStrip>

        <LandingNav />
        <LandingHero />
        <LandingProduct />
        <LandingLogos />
        <LandingFeatures />
        <LandingBand />
        <LandingQuote />
        <LandingPricing />
        <LandingCta />
        <LandingFooter />
      </PageWrapper>
    </>
  );
}

export default LandingPage;
