
export default function AboutBlock1() {
  return (
    <div className="bg-gradient-to-b from-black to-gray-950 overflow-hidden">
      <main className="">
        <div className="h-135 flex gap-12 justify-start">
          {/* Текст */}
          <div className="w-1/2 overflow-hidden">
            <img src="/carousel_thumb5.jpg" className="filter sepia-85 contrast-150 object-fit md:object-cover h-full"/>
          </div>
          <h1 className="text-[64px] leading-[0.725] pt-28 pl-0 md:pl-16 md:pr-0 pr-12 md:text-[86px] tracking-left font-bold text-white">
            О НАС
            <p className="opacity-60">О НАС</p>
            <p className="opacity-40">О НАС</p>
            <p className="opacity-20">О НАС</p>
            <p className="opacity-5">О НАС</p>
          </h1>
        </div>
      </main>
    </div>
  );
}