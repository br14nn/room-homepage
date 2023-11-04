import Slider from "@/components/Slider/Slider";

import sliderDataList from "@/utils/sliderDataList/sliderDataList";

export default function Home() {
  return (
    <main className="flex flex-col overflow-y-auto bg-black">
      <section className="h-[65vh] w-full">
        <Slider data={sliderDataList} />
      </section>
      <section className="h-[35vh] w-full border-2 border-dashed border-yellow-500"></section>
    </main>
  );
}
