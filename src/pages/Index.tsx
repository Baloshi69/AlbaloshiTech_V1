
import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhatIBringSection from "@/components/WhatIBringSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import BubbleCertificationSection from "@/components/BubbleCertificationSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsappFloat from "@/components/WhatsappFloat";
import CalendlyFloat from "@/components/CalendlyFloat";
import {
  ALT_DEFAULT_TITLE,
  ALT_OG_IMAGE_ALT,
  ALT_SITE_NAME,
  BRAND_OG_IMAGE,
  BRAND_OG_IMAGE_ALT,
  CERTIFICATION_OG_IMAGE,
  CERTIFICATION_OG_IMAGE_ALT,
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  DEFAULT_OG_IMAGE_ALT,
  DEFAULT_TAGLINE,
  DEFAULT_TITLE,
  SITE_NAME,
  TWITTER_HANDLE,
  buildCanonicalUrl,
  toAbsoluteUrl,
} from "@/lib/seo";
import { useIsNasirDomain } from "@/hooks/useContactVisibility";

const Index = () => {
  const isNasirDomain = useIsNasirDomain();
  const metaTitle = isNasirDomain ? ALT_DEFAULT_TITLE : DEFAULT_TITLE;
  const siteName = isNasirDomain ? ALT_SITE_NAME : SITE_NAME;
  const ogAlt = isNasirDomain ? ALT_OG_IMAGE_ALT : DEFAULT_OG_IMAGE_ALT;
  const socialImages = [
    { src: DEFAULT_OG_IMAGE, alt: ogAlt },
    { src: CERTIFICATION_OG_IMAGE, alt: CERTIFICATION_OG_IMAGE_ALT },
    { src: BRAND_OG_IMAGE, alt: BRAND_OG_IMAGE_ALT },
  ];
  const twitterImage = socialImages[0];
  const canonicalUrl = buildCanonicalUrl("/");

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={DEFAULT_DESCRIPTION} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={DEFAULT_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        {socialImages.map((image) => (
          <React.Fragment key={image.src}>
            <meta property="og:image" content={toAbsoluteUrl(image.src)} />
            <meta property="og:image:alt" content={image.alt} />
          </React.Fragment>
        ))}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={TWITTER_HANDLE} />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={DEFAULT_DESCRIPTION} />
        <meta name="twitter:image" content={toAbsoluteUrl(twitterImage.src)} />
        <meta name="twitter:image:alt" content={twitterImage.alt} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                name: SITE_NAME,
                url: canonicalUrl,
                slogan: DEFAULT_TAGLINE,
                sameAs: [
                  "https://x.com/BaloShi69",
                  "https://linkedin.com/company/albaloshitech",
                ],
                logo: toAbsoluteUrl(BRAND_OG_IMAGE),
                image: socialImages.map((image) => ({
                  "@type": "ImageObject",
                  url: toAbsoluteUrl(image.src),
                  caption: image.alt,
                })),
              },
              {
                "@type": "Person",
                name: "Nasir Nawaz",
                jobTitle: "Certified Bubble.io Developer & Automation Specialist",
                url: canonicalUrl,
                image: socialImages.map((image) => toAbsoluteUrl(image.src)),
                sameAs: [
                  "https://x.com/BaloShi69",
                  "https://linkedin.com/in/nrz636",
                  "https://linkedin.com/company/albaloshitech",
                ],
                knowsAbout: [
                  "Bubble.io",
                  "Automation",
                  "AI integrations",
                  "No-code product delivery",
                ],
                description: DEFAULT_DESCRIPTION,
              },
            ],
          })}
        </script>
      </Helmet>
      <div className="min-h-screen bg-white text-slate-900">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <BubbleCertificationSection />
        <WhatIBringSection />
        <ProjectsSection />
        <ExperienceSection />
        <FAQSection />
        <ContactSection />
        <Footer />
        <CalendlyFloat />
        <WhatsappFloat />
      </div>
    </>
  );
};

export default Index;
