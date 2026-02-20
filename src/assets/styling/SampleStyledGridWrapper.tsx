"use client";

import dynamic from "next/dynamic";

// This file is needed because dynamic imports cannot be done in MDX files
// (as far as I know)
const SampleStyledGrid = dynamic(
  () => import("@/assets/styling/SampleStyledGrid"),
  { ssr: false },
);

export default SampleStyledGrid;
