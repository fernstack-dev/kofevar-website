
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Card, CardContent } from "@/components/ui/card";

export default function HomeBlock2() {
  return (
    <div className="bg-gradient-to-t from-gray-900 to-black h-224">
      <div className="flex justify-center flex-row flex-wrap">
        <h1 className="text-[200px] leading-none pt-24 md:text-[60px] text-center font-bold text-white">
          Локальное кафе в Москве<br/> для встреч с любимыми людьми
        </h1>
        <br/>
      </div>
      <div className="flex justify-center pt-24">
          <Carousel className="md:w-[70vw] w-full max-w-5xl">
            <CarouselContent className="-ml-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="basis-full w-5xl">
                  <div className="p-1">
                    <Card className="rounded-none border-32 p-0 bg-transparent mr-2.5">
                      <CardContent className="flex items-center justify-center h-110 mx-0 px-0  ">
                        {/* <span className="text-2xl font-semibold">{index + 1}</span> */}
                        <img src={`/carousel_thumb${index+1}.jpg`} className="object-fit md:object-cover w-1/1 h-full"/>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hover:w-36 border-none rounded-none p-8 absolute -translate-x-1/2 w-32 h-[calc(100%-8px)] bg-amber-950 hover:bg-amber-900 transition-all" />
            <CarouselNext className="hover:w-36 border-none rounded-none p-8 absolute translate-x-1/2 w-32 h-[calc(100%-8px)] bg-amber-950 hover:bg-amber-900 transition-all"/>

            {/* px-4.5 hover:px-6 py-4.5 text-sm font-bold transition-all
                                        ${isActive ? 'bg-amber-950 text-white' : 'text-amber-950 hover:text-white hover:bg-amber-900'} */}
                                        
          </Carousel>
        </div>
    </div>
  );
}