import Link from "next/link";
import { Coffee } from "lucide-react";
import HomeBlock1 from "./(components)/home-block-1"
import HomeBlock2 from "./(components)/home-block-2"


export default function Home() {
  return (
    <main>
      <HomeBlock1/>
      <HomeBlock2/>
    </main>
  );
}
