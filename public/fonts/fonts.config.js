import { Space_Grotesk } from "next/font/google";
import { Open_Sans } from "next/font/google";

// Google Font like Klavika (main font)
export const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  weights: [300, 400, 500, 600, 700],
});

// Google Font like Helvetica (secondary font)
export const open_sans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  weights: [300, 400, 500, 600, 700],
});
