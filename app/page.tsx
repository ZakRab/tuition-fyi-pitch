"use client";

import dynamic from "next/dynamic";
const SlideEngine = dynamic(() => import("@/components/SlideEngine"), { ssr: false });
import Title from "@/slides/00-Title";
import KaiStory from "@/slides/01-KaiStory";
import Pattern from "@/slides/02-Pattern";
import WhyThisExists from "@/slides/03-WhyThisExists";
import Solution from "@/slides/04-Solution";
import HowItWorks from "@/slides/05-HowItWorks";
import BusinessModel from "@/slides/06-BusinessModel";
import MarketSize from "@/slides/07-MarketSize";
import WhyNow from "@/slides/08-WhyNow";
import GoToMarket from "@/slides/09-GoToMarket";
import Universities from "@/slides/10-Universities";
import Competition from "@/slides/11-Competition";
import Team from "@/slides/12-Team";
import StartupStudio from "@/slides/13-StartupStudio";
import Roadmap from "@/slides/14-Roadmap";
import Close from "@/slides/15-Close";
import AppendixPrivacy from "@/slides/16-Appendix-Privacy";
import AppendixSite from "@/slides/17-Appendix-Site";

const slides = [
  <Title key="title" />,
  <KaiStory key="kai" />,
  <Pattern key="pattern" />,
  <WhyThisExists key="why" />,
  <Solution key="solution" />,
  <HowItWorks key="how" />,
  <BusinessModel key="biz" />,
  <MarketSize key="market" />,
  <WhyNow key="whynow" />,
  <GoToMarket key="gtm" />,
  <Universities key="universities" />,
  <Competition key="competition" />,
  <Team key="team" />,
  <StartupStudio key="studio" />,
  <Roadmap key="roadmap" />,
  <Close key="close" />,
  <AppendixPrivacy key="appendix-privacy" />,
  <AppendixSite key="appendix-site" />,
];

export default function Home() {
  return <SlideEngine slides={slides} noClickNav={[17]} />;
}
