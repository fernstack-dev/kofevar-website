// app/contact/page.tsx
import { MapPin, Clock, Phone, Mail, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-gradient-to-b from-black to-gray-950">
      <div className="bg-gradient-to-b from-amber-950 to-black overflow-hidden">
        <div className="h-135 flex gap-12 justify-center">
          <h1 className="text-[64px] leading-[0.725] pt-28 pl-0 md:pl-16 md:pr-0 pr-12 md:text-[86px] tracking-left font-bold text-white">
            КОНТАКТЫ
            <p className="opacity-60">КОНТАКТЫ</p>
            <p className="opacity-40">КОНТАКТЫ</p>
            <p className="opacity-20">КОНТАКТЫ</p>
            <p className="opacity-5">КОНТАКТЫ</p>
          </h1>
        </div>
      </div>

      <div className="bg-black min-h-screen">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white border-b-5 pb-2 border-white inline-block mb-8 uppercase">
                Как нас найти
              </h2>
              <div className="space-y-6 text-white">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 uppercase border-b-4 border-white inline-block pb-1">Адрес</h3>
                  <p className="text-gray-300">г. Москва, ул. Тверская, д. 15<br />(м. Тверская / Пушкинская)</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 uppercase border-b-4 border-white inline-block pb-1">Часы работы</h3>
                  <p className="text-gray-300">Пн–Пт: 8:00 – 22:00<br />Сб–Вс: 9:00 – 21:00</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 uppercase border-b-4 border-white inline-block pb-1">Телефон</h3>
                  <p className="text-gray-300">+7 (495) 123-45-67</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 uppercase border-b-4 border-white inline-block pb-1">Email</h3>
                  <p className="text-gray-300">info@coffeewar.ru</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 uppercase border-b-4 border-white inline-block pb-1">Соцсети</h3>
                  <p className="text-gray-300">@coffeewar</p>
                </div>
              </div>
            </div>

            {/* Правая колонка – карта */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white border-b-5 pb-2 border-white inline-block mb-8 uppercase">
                Карта
              </h2>
              <div className="border-dashed border-4 border-white overflow-hidden h-2/3 bg-gray-100 flex items-center justify-center text-gray-500 text-center p-4">
                <div className="">
                  <MapPin className="w-12 h-12 mx-auto text-black mb-2" />
                  <p className="text-sm">Заглушка интерактивной карты</p>
                  <p className="text-xs mt-2">ул. Гослинговская, 15, Москва</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}