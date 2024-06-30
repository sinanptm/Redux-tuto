import { m } from "framer-motion";
import { Suspense } from "react";
import Spinner from "./Spinner";

const pageVariants = {
  initial: {
    opacity: 0,
    y: -20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: 20,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

const AnimatedSuspense = ({ children }) => (
  <m.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
    className="min-h-screen flex items-center justify-center p-4 bg-gray-100 dark:bg-gray-900"
  >
    <Suspense fallback={<Spinner />}>
      {children}
    </Suspense>
  </m.div>
);

export default AnimatedSuspense;
