"use client";

import dynamic from "next/dynamic";
const SlideEngine = dynamic(() => import("@/components/SlideEngine"), { ssr: false });
import Title from "@/slides/00-Title";
import KaiStory from "@/slides/01-KaiStory";
import Pattern from "@/slides/02-Pattern";
import WhyThisExists from "@/slides/03-WhyThisExists";
import EnrollmentCliff from "@/slides/07a-EnrollmentCliff";
import Solution from "@/slides/04-Solution";
import AppendixSite from "@/slides/14-Appendix-Site";
import BusinessModel from "@/slides/06-BusinessModel";
import MarketSize from "@/slides/07c-MarketSize";
import Competition from "@/slides/08-Competition";
import Team from "@/slides/09-Team";
import Risks from "@/slides/10b-Risks";
import Expansion from "@/slides/10c-Expansion";
import Roadmap from "@/slides/11-Roadmap";
import Close from "@/slides/12-Close";
import AppendixPrivacy from "@/slides/13-Appendix-Privacy";
import AppendixFeatures from "@/slides/15-Appendix-Features";

const slides = [
  <Title key="title" />,
  <KaiStory key="kai" />,
  <Pattern key="pattern" />,
  <WhyThisExists key="why" />,
  <EnrollmentCliff key="enrollment-cliff" />,
  <Solution key="solution" />,
  <AppendixSite key="demo" />,
  <BusinessModel key="biz" />,
  <MarketSize key="market-size" />,
  <Competition key="competition" />,
  <Team key="team" />,
  <Risks key="risks" />,
  <Expansion key="expansion" />,
  <Roadmap key="roadmap" />,
  <Close key="close" />,
  <AppendixPrivacy key="appendix-privacy" />,
  <AppendixFeatures key="appendix-features" />,
];

export default function Home() {
  return <SlideEngine slides={slides} noClickNav={[6]} />;
}
