import Image from "next/image";

import DarkAboutImage from "@/assets/images/image-about-dark.jpg";
import LightAboutImage from "@/assets/images/image-about-light.jpg";
import AboutContentContainer from "./AboutContentContainer";

export default function AboutSection() {
  return (
    <section className="flex h-fit w-full max-w-[1920px] flex-col md:h-[35vh] md:flex-row">
      <Image
        className="h-[30vh] min-h-[200px] w-full object-cover md:h-[35vh] md:min-h-0 md:w-[25%] xl:w-[30%]"
        src={DarkAboutImage}
        alt="dark about image"
      />
      <AboutContentContainer>
        <h2 className="text-sm font-[600] tracking-[0.25rem] xs:text-base 2xl:text-lg">
          ABOUT OUR FURNITURE
        </h2>
        <p className="text-sm font-[500] leading-snug text-dark-gray xs:text-base">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </AboutContentContainer>
      <Image
        className="h-[30vh] min-h-[200px] w-full object-cover md:h-[35vh] md:min-h-0 md:w-[25%] xl:w-[30%]"
        src={LightAboutImage}
        alt="light about image"
      />
    </section>
  );
}
