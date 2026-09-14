import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { PartnersBar } from "@/components/sections/partners-bar";
import { Quote } from "@/components/sections/quote";
import { Solutions } from "@/components/sections/solutions";
import { Technology } from "@/components/sections/technology";
import { Thermal } from "@/components/sections/thermal";
import { TrackRecord } from "@/components/sections/track-record";
import { Water } from "@/components/sections/water";
import { Why } from "@/components/sections/why";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <PartnersBar />
        <Solutions />
        <Technology />
        <Water />
        <Thermal />
        <TrackRecord />
        <Why />
        <Faq />
        <Quote />
      </main>
      <SiteFooter />
    </>
  );
}
