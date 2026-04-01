"use client";

import SlideEngine from "@/components/SlideEngine";
import Title from "@/slides/00-Title";
import KaiStory from "@/slides/01-KaiStory";
import Pattern from "@/slides/02-Pattern";
import WhyThisExists from "@/slides/03-WhyThisExists";
import Solution from "@/slides/04-Solution";
import HowItWorks from "@/slides/05-HowItWorks";
import BusinessModel from "@/slides/06-BusinessModel";
import WhyNow from "@/slides/07-WhyNow";
import Competition from "@/slides/08-Competition";
import Team from "@/slides/09-Team";
import StartupStudio from "@/slides/10-StartupStudio";
import Roadmap from "@/slides/11-Roadmap";
import Close from "@/slides/12-Close";

const slides = [
  <Title key="title" />,
  <KaiStory key="kai" />,
  <Pattern key="pattern" />,
  <WhyThisExists key="why" />,
  <Solution key="solution" />,
  <HowItWorks key="how" />,
  <BusinessModel key="biz" />,
  <WhyNow key="whynow" />,
  <Competition key="competition" />,
  <Team key="team" />,
  <StartupStudio key="studio" />,
  <Roadmap key="roadmap" />,
  <Close key="close" />,
];

export default function Home() {
  return <SlideEngine slides={slides} />;
}
