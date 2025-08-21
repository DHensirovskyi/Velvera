import About from "./components/About";
import AfterHero from "./components/AfterHero";
import Comments from "./components/Comments";
import HeroSection from "./components/HeroSection";
import Problem from "./components/Problem";
import Process from "./components/Process";
import Solution from "./components/Solution";
import Team from "./components/Team";

export default function Home() {
  return (
      <main className="max-w-[1150px] py-0 px-5 lg:px-0 m-auto mt-[130px] flex flex-col items-center">
        <HeroSection/>
        <AfterHero />
        <Problem />
        <Solution />
        <About />
        <Comments />
        <Process />
        <Team />
      </main>
  )
}