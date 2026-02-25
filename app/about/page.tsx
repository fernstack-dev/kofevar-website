import Link from "next/link";

import AboutBlock1 from "@/app/(components)/about-block-1"
import AboutBlock2 from "@/app/(components)/about-block-2"

export default function About() {
  return (
    <div>
      <main>
        <AboutBlock1/>
        <AboutBlock2/>
      </main>
    </div>
  );
}
