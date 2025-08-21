import About from "./components/About";
import AfterHero from "./components/AfterHero";
import HeroSection from "./components/HeroSection";
import Problem from "./components/Problem";
import Solution from "./components/Solution";

export default function Home() {
  return (
      <main className="max-w-[1150px] py-0 px-5 lg:px-0 m-auto mt-[130px] flex flex-col items-center">
        <HeroSection/>
        <AfterHero />
        <Problem />
        <Solution />
        <About />
      </main>
  )
}