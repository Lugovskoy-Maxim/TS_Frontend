

import { BreadcrumbWithCustomSeparator } from "@/shared/ui";
import { Header, Footer, AboutHeroSection, AboutMissionSection, AboutValuesSection, AboutHistorySection, AboutTeamSection, AboutContactSection, AboutMapSection } from "@/widgets";

export default function About() {
  return (
    <div className="flex gap-[20px] justify-start items-center flex-col min-h-screen max-w-[1300px] w-full">
      <Header />

      <div className="w-full px-5">
        <BreadcrumbWithCustomSeparator
          items={[
            { label: "Главная", href: "/" },
            { label: "О нас", isCurrent: true },
          ]}
          className=""
          separator={<span className="mx-2">›</span>}
        />
      </div>

      <main className="flex w-full flex-1 flex-col px-5 pb-12">
        <AboutHeroSection />
        <AboutMissionSection />
        <AboutValuesSection />
        <AboutHistorySection />
        <AboutTeamSection />
        <AboutContactSection />
        <AboutMapSection />
      </main>

      <Footer />
    </div>
  );
}