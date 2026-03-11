
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { Card, CardContent } from "@/components/ui/card";

export default function AboutBlock2() {
  return (
    <div className="bg-black">
      <div className="flex justify-center flex-row flex-wrap text-white">
        <Accordion className="w-full" type="single" collapsible defaultValue="item-1">
            <AccordionItem value="item-1" >
                <AccordionTrigger className="h-1vh justify-center py-8 rounded-none text-2xl font-bold bg-amber-950 border-amber-200">История нашей кофейни</AccordionTrigger>
                <AccordionContent className="py-0 bg-gradient-to-b to-black">
                    <div className="pr-42 px-12 pt-8 pb-8 flex text-xl border-24 md:border-96 md:border-b-0 md:border-t-0 border-t-0 border-b-0 border-[#3d1600] bg-black">
                        «Кофевар» - одна из крупнейших российских сетей кофеен, основанная в сентябре 1999 года Райаном Гослингом. Вдохновленная миланской культурой, сеть быстро стала популярной, масштабировавшись до 10 точек к 2011 г. и до более чем 200 точек по сей день. С 2014 года произошел переход от классической кофейни с официантами к более современному формату, фокус сместился на кофе с собой, сэндвичи, салаты.
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" >
                <AccordionTrigger className="h-1vh justify-center py-8 rounded-none text-2xl font-bold bg-amber-950 border-amber-200">Информация о кофейне</AccordionTrigger>
                <AccordionContent className="py-0 bg-gradient-to-b to-black">
                    <div className="pr-42 px-12 pt-8 pb-8 flex text-xl border-24 md:border-96 md:border-b-0 md:border-t-0 border-t-0 border-b-0 border-[#3d1600] bg-black">
                        Наша сеть кофеен работает с 1999 года, мы делаем упор на предоставление покупателю кофе с собой, выпечку, сэндвичи, салаты; наша сеть по сей день расширяется через франшизу, постоянно открываются новые точки, чем наша сеть кофеен наиболее доступна, по сравнению с конкурентами.
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" >
                <AccordionTrigger className="h-1vh justify-center py-8 rounded-none text-2xl font-bold bg-amber-950 border-amber-200">Часы работы</AccordionTrigger>
                <AccordionContent className="py-0 bg-gradient-to-b to-black">
                    <div className="pr-42 px-12 pt-8 pb-8 flex text-xl border-24 md:border-96 md:border-b-0 md:border-t-0 border-t-0 border-b-0 border-[#3d1600] bg-black">
                          Ради доступности и удобства, каждая кофейня в сети «Кофевар» работает круглосуточно.
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" >
                <AccordionTrigger className="h-1vh justify-center py-8 rounded-none text-2xl font-bold bg-amber-950 border-amber-200">Наш подход к приготовлению кофе</AccordionTrigger>
                <AccordionContent className="py-0 bg-gradient-to-b to-black">
                    <div className="pr-42 px-12 pt-8 pb-8 flex text-xl border-24 md:border-96 md:border-b-0 md:border-t-0 border-t-0 border-b-0 border-[#3d1600] bg-black">
                          Все кофейни в сети «Кофевар» получают собственные молотые зёрна фирменного производства - за счёт этого, вкус и качество нашего кофе остаётся премиальным в любой нашей кофейне.
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}