import { HOME_STATS_DATA } from "@/constants/home";
import {
  Hero,
  Header,
  StatsSection,
  Age,
  Partners,
  Advantages,
  Footer,
  ResourcesStatsSection,
} from "@/widgets";
export default function Home() {
  return (
    <div className="flex gap-[20px] justify-start items-center flex-col min-h-screen max-w-[1300px]">
      <Header />
      <main className="flex flex-col gap-[20px] row-start-2 items-center justify-center sm:items-start">
        <Hero />
        <ResourcesStatsSection stats={HOME_STATS_DATA}/>
        {/* <StatsSection /> */}
        <Age />
        <Partners />
        <Advantages />
      </main>
      <Footer />
    </div>
  );
}
