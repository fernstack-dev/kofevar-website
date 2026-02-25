
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { Card, CardContent } from "@/components/ui/card";

export default function AboutBlock2() {
  return (
    <div className="bg-black h-224">
      <div className="flex justify-center flex-row flex-wrap text-white">
        <Accordion className="w-full" type="single" collapsible defaultValue="item-1">
            <AccordionItem value="item-1" >
                <AccordionTrigger className="h-1vh justify-center py-8 rounded-none text-2xl font-bold bg-amber-950 border-amber-200">История нашей кофейни</AccordionTrigger>
                <AccordionContent className="bg-gradient-to-b to-black">
                    <div className="pr-42 px-12 pt-8 pb-16 flex text-xl border-24 md:border-96 md:border-b-0 md:border-t-0 border-t-0 border-b-0 border-[#3d1600] bg-black">
                        алалалалалалаалалал
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}