import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Sidebar from "../components/Sidebar/Sidebar";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import { useState } from "react";
import {Loader, LoaderText} from "../layout/Loader";

const Home = () => {
  const [ready, setReady] = useState(false);

  if(!ready) {
      setTimeout(() => {
        setReady(true)
    }, 1500)
      return (
        <Loader>
          <LoaderText>D</LoaderText>
        </Loader>
      )
  }

  return (
    <Layout>
      <Sidebar />
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
    </Layout>
  );
};

export default Home;
