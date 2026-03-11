import Link from "next/link";

import MenuBlock1 from "@/app/(components)/menu-block-1"
import MenuBlock2 from "@/app/(components)/menu-block-2"

export default function Menu() {
  return (
    <div>
      <main>
        <MenuBlock1/>
        <MenuBlock2/>
      </main>
    </div>
  );
}
