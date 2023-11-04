import AboutSection from "@/components/AboutSection/AboutSection";
import Slider from "@/components/Slider/Slider";

import sliderDataList from "@/utils/sliderDataList/sliderDataList";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center overflow-y-auto bg-black">
      <section className="h-fit w-full max-w-[1920px] md:h-[65vh]">
        <Slider data={sliderDataList} />
      </section>
      <AboutSection />
    </main>
  );
}
