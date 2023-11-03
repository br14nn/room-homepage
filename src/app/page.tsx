import Slider from "@/components/Slider/Slider";

import sliderDataList from "@/utils/sliderDataList/sliderDataList";

export default function Home() {
  return (
    <main className="flex h-screen flex-col bg-black">
      <section className="h-[65%] w-full">
        <Slider data={sliderDataList} />
      </section>
      <section className="h-[35%] w-full border-2 border-dashed border-yellow-500"></section>
    </main>
  );
}
