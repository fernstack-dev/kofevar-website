'use client';

import { useState, useMemo } from 'react';
import { Input } from "@/components/ui/input";
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Coffee } from 'lucide-react'

interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: string;
  image?: string;
  categoryId: string;
}

interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    id: "coffee",
    name: "Кофе",
    items: [
      { categoryId: "coffee", id: "espresso", name: "Эспрессо", price: '150', description: ""},
      { categoryId: "coffee", id: "capuccino", name: "Капучино", price: '150', description: ""},
      { categoryId: "coffee", id: "latte", name: "Латте", price: '150', description: ""},
    ]
  },
  {
    id: "desserts",
    name: "Десерты",
    items: [
      { categoryId: "desserts", id: "cheescake", name: "Чизкейк", price: '150', description: ""},
      { categoryId: "desserts", id: "bun", name: "Пироженное", price: '150', description: ""},
      { categoryId: "desserts", id: "croissant", name: "Круассан", price: '150', description: ""},
    ]
  }
]

export default function MenuBlock2() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    menuData.map(cat => cat.id)
  )

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev =>
      prev.includes(categoryId) ? prev.filter(id => id !== categoryId) : [...prev, categoryId]
    );
  }

  const allItems = useMemo(() => {
    return menuData.flatMap(category =>
      category.items.map(item => ({...item, categoryName: category.name}))
    )
  }, [])

  const filteredItems = useMemo(() => {
    return allItems.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ?? false;
      const matchesCategory = selectedCategories.includes(item.categoryId);
      return matchesSearch && matchesCategory
    });
  }, [searchQuery, selectedCategories, allItems])

  const groupedItems = useMemo(() => {
    const groups: Record<string, typeof filteredItems> = {};
    filteredItems.forEach(item => {
      if (!groups[item.categoryId]) {
        groups[item.categoryId] = []
        groups[item.categoryId].push(item);
      }
    });
    return groups;
  }, [filteredItems])

  return (
    <div className="bg-gradient-to-b from-amber-950 to-black overflow-hidden">
      <div className="mb-6 px-16 pt-8">
        <Input
          type="text"
          placeholder="Поиск блюд..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-full font-semibold rounded-none py-6 bg-white"
        />
      </div>
      
      <div className="px-16 pb-6 flex flex-col md:flex-row gap-8">
        <aside className="md:w-64 flex-shrink-0">
          <div className="bg-muted p-4 rounded-none sticky top-20">
            <h2 className="font-bold text-amber-950 text-2xl mb-4 border-b-5 pb-2 border-amber-950">Категории</h2>
            <ScrollArea className="h-[300px] pr-4">
              {menuData.map((category) => (
                <div key={category.id} className='flex items-center space-x-2 mb-3'>
                  <Checkbox
                    id={category.id}
                    checked={selectedCategories.includes(category.id)}
                    onCheckedChange={() => toggleCategory(category.id)}
                  />
                  <label
                    htmlFor={category.id}
                    className="text-lg text-amber-950 font-bold hover:pl-1 transition-all leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >{category.name}</label>
                </div>
              ))}
            </ScrollArea>
          </div>
        </aside>
        
        <main className="flex-1 bg-white px-4 py-4">
          {Object.entries(groupedItems).length > 0 ? (
            Object.entries(groupedItems).map(([categoryId, items]) => {
              const category = menuData.find(c => c.id === categoryId);
              return (
                <section key={categoryId} className="mb-10">
                  <h2 className="inline-block text-2xl font-bold text-amber-950 border-b-5 pb-2 border-amber-950">{category?.name}</h2>
                </section>
              );
            })
          ) :
          
          <div className="justify-center flex mt-10 text-amber-950">
            <Coffee className="size-13"/>
            <label className="text-5xl px-3 font-semibold">Ничего не найдено</label>
            <Coffee className="size-13"/>
          </div>

          }
        </main>

      </div>
    </div>
  );
}