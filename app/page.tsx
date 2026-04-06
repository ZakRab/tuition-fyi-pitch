"use client";

import dynamic from "next/dynamic";
const SlideEngine = dynamic(() => import("@/components/SlideEngine"), { ssr: false });
import Title from "@/slides/00-Title";
import KaiStory from "@/slides/01-KaiStory";
import CostMatters from "@/slides/01b-CostMatters";
import Pattern from "@/slides/02-Pattern";
import WhyThisExists from "@/slides/03-WhyThisExists";
import Solution from "@/slides/04-Solution";
import HowItWorks from "@/slides/05-HowItWorks";
import BusinessModel from "@/slides/06-BusinessModel";
import WhyNow from "@/slides/07-WhyNow";
import EnrollmentCliff from "@/slides/07a-EnrollmentCliff";
import InternationalStudents from "@/slides/07b-InternationalStudents";
import OriginsChart from "@/slides/07b-OriginsChart";
import MarketSize from "@/slides/07c-MarketSize";
import Competition from "@/slides/08-Competition";
import Team from "@/slides/09-Team";
import StartupStudio from "@/slides/10-StartupStudio";
import Risks from "@/slides/10b-Risks";
import Expansion from "@/slides/10c-Expansion";
import Roadmap from "@/slides/11-Roadmap";
import Close from "@/slides/12-Close";
import AppendixPrivacy from "@/slides/13-Appendix-Privacy";
import AppendixSite from "@/slides/14-Appendix-Site";
import AppendixFeatures from "@/slides/15-Appendix-Features";

const slides = [
  <Title key="title" />,
  <KaiStory key="kai" />,
  <CostMatters key="cost-matters" />,
  <Pattern key="pattern" />,
  <WhyThisExists key="why" />,
  <Solution key="solution" />,
  <HowItWorks key="how" />,
  <AppendixSite key="appendix-site" />,
  <BusinessModel key="biz" />,
  <WhyNow key="whynow" />,
  <EnrollmentCliff key="enrollment-cliff" />,
  <InternationalStudents key="international-students" />,
  <MarketSize key="market-size" />,
  <OriginsChart key="origins-chart" />,
  <Competition key="competition" />,
  <Team key="team" />,
  <StartupStudio key="studio" />,
  <Risks key="risks" />,
  <Expansion key="expansion" />,
  <Roadmap key="roadmap" />,
  <Close key="close" />,
  <AppendixPrivacy key="appendix-privacy" />,
  <AppendixFeatures key="appendix-features" />,
];

export default function Home() {
  return <SlideEngine slides={slides} noClickNav={[7]} />;
}
