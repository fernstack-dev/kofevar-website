
export default function HomeBlock1() {
  return (
    <div className="bg-gradient-to-b from-amber-950 to-black">
      <main className="">
        <div className="h-135 flex gap-12 justify-end">
          {/* Текст */}
          <h1 className="text-[128px] leading-[0.725] pt-28 px-10 md:text-[86px] tracking-right font-bold text-amber-200">
            КОФЕВАР
            <p className="opacity-60">КОФЕВАР</p>
            <p className="opacity-40">КОФЕВАР</p>
            <p className="opacity-20">КОФЕВАР</p>
            <p className="opacity-5">КОФЕВАР</p>
          </h1>
          <div className="w-1/2 overflow-hidden">
            <img src="/thumb1.jpg" className="object-fit md:object-cover h-full"/>
          </div>
        </div>
      </main>
    </div>
  );
}