"use client";

import SlideEngine from "@/components/SlideEngine";
import Title from "@/slides/00-Title";
import Hook from "@/slides/01-Hook";
import Problem from "@/slides/02-Problem";
import PainPoints from "@/slides/03-PainPoints";
import Solution from "@/slides/04-Solution";
import Verification from "@/slides/05-Verification";
import BusinessModel from "@/slides/11-BusinessModel";
import Team from "@/slides/06-Team";
import Traction from "@/slides/07-Traction";
import WhyNow from "@/slides/08-WhyNow";
import Competition from "@/slides/09-Competition";
import Risks from "@/slides/10-Risks";
import WhyStartupStudio from "@/slides/12-WhyStartupStudio";
import Roadmap from "@/slides/13-Roadmap";
import Close from "@/slides/14-Close";

const slides = [
  <Title key="title" />,
  <Hook key="hook" />,
  <Problem key="problem" />,
  <PainPoints key="pain" />,
  <Solution key="solution" />,
  <Verification key="verification" />,
  <BusinessModel key="biz" />,
  <Team key="team" />,
  <Traction key="traction" />,
  <WhyNow key="whynow" />,
  <Competition key="competition" />,
  <Risks key="risks" />,
  <WhyStartupStudio key="whystartupstudio" />,
  <Roadmap key="roadmap" />,
  <Close key="close" />,
];

export default function Home() {
  return <SlideEngine slides={slides} />;
}
