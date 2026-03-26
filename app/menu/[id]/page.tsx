import Link from "next/link";
import { notFound } from "next/navigation";
import { menuData } from "@/lib/menuData";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import PurchaseButton from "@/app/(components)/PurchaseButton";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const allItems = menuData.flatMap(category => category.items);
  const item = allItems.find(i => i.id === id);
  if (!item) {
    return { title: "Блюдо не найдено" };
  }
  return {
    title: item.name,
    description: item.description,
  };
}

export default async function MenuItemPage({ params }: PageProps) {
  const { id } = await params;
  const allItems = menuData.flatMap(category => category.items);
  const item = allItems.find(i => i.id === id);
  if (!item) {
    notFound();
  }
  const category = menuData.find(cat => cat.id === item.categoryId);

  return (
    <div>
      <main>
        <div className="bg-gradient-to-b from-amber-950 to-black h-screen">
          <div className="px-16 py-32">
            <div className="relative max-w-6xl mx-auto">
              <div className="absolute -top-24 left-0">
                <Link
                  href="/menu"
                  className="inline-flex items-center justify-center w-16 h-16 bg-white text-amber-950 hover:bg-amber-50 transition-colors"
                >
                  <ArrowLeft size={48} />
                </Link>
              </div>

              <div className="bg-white p-8 md:p-12 w-full">
                <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                  <div className="md:w-1/2 flex justify-center">
                    {item.image ? (
                      <div className="border-dashed border-4 border-amber-950 md:-ml-5 lg:-ml-10 p-4 w-full max-w-md">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    ) : (
                      <div className="border-dashed border-4 border-amber-950 p-4 w-full max-w-md h-64 flex items-center justify-center text-gray-400">
                        Нет изображения
                      </div>
                    )}
                  </div>

                  <div className="md:w-1/2 flex flex-col justify-between">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-amber-950 mb-4 border-b-5 pb-2 border-amber-950 inline-block">
                        {item.name}
                      </h2>
                      <p className="text-gray-700 text-lg mt-6 leading-relaxed">
                        {item.description}
                      </p>
                      <p className="text-2xl font-bold text-amber-800 mt-6">
                        {item.price}₽
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        Категория: {category?.name}
                      </p>
                    </div>

                    <PurchaseButton itemName={item.name} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}