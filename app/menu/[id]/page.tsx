import Link from "next/link";
import { notFound } from "next/navigation";
import { menuData } from "@/lib/menuData";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

interface PageProps {
  params: {id: string};
}

export async function genMetadata({params}: PageProps){
  const allItems = menuData.flatMap(category => category.items);
  const item = allItems.find(i => i.id === params.id);
  if(!item){
    return { title: "Блюдо не найдено"}
  }
  return {
    title: `${item.name}`,
    description: item.description
  }
}

export default async function MenuItemPage({params}: PageProps) {
  const allItems = menuData.flatMap(category => category.items);
  console.log('param id:',params.id); // пофиксить он undefined
  console.log('menudata:',menuData);
  const item = allItems.find(i => i.id === params.id);
  console.log('found item:',item);

  if(!item){
    notFound();
  }

  const category = menuData.find(cat => cat.id === item.categoryId);
  return (
    <div>
      <main>
            <div className="bg-gradient-to-b from-amber-950 to-black overflow-hidden h-[calc(100vh-4rem)]">
              <div className="">

              </div>
            </div>
      </main>
    </div>
  );
}
