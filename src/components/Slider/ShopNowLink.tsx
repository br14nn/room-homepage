import Link from "next/link";
import { useState } from "react";
import { motion, Variants } from "framer-motion";

const textVariants: Variants = {
  unHover: {
    color: "#000000",
  },
  hover: {
    color: "hsl(0 0% 27%)",
  },
};

const arrowVariants: Variants = {
  unHover: {
    fill: "#000000",
  },
  hover: {
    fill: "hsl(0 0% 27%)",
  },
};

export default function ShopNowLink() {
  const [hoverState, setHoverState] = useState<"hover" | "unHover">("unHover");
  const MotionLink = motion(Link);

  const handleHover = () => {
    setHoverState("hover");
  };

  const handleUnHover = () => {
    setHoverState("unHover");
  };

  return (
    <MotionLink
      initial={false}
      animate={hoverState}
      onHoverStart={handleHover}
      onHoverEnd={handleUnHover}
      className="flex w-fit flex-row items-center justify-center gap-6 font-[500]"
      href="#"
    >
      <motion.p
        variants={textVariants}
        className="text-base tracking-[0.5em] xs:text-lg"
      >
        SHOP NOW
      </motion.p>

      <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          variants={arrowVariants}
          d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
          fillRule="nonzero"
        />
      </svg>
    </MotionLink>
  );
}
