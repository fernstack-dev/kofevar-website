'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Input } from "@/components/ui/input";
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Coffee } from 'lucide-react'
import { menuData } from '@/lib/menuData'

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
    return filteredItems.reduce((acc,item) => {
      if(!acc[item.categoryId]){
        acc[item.categoryId] = [];
      }
      acc[item.categoryId].push(item);
      return acc;
    }, {} as Record<string, typeof filteredItems>)
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
          <div className="bg-white p-4 rounded-none sticky top-20">
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
                  <h2 className="inline-block text-2xl font-bold text-amber-950 border-b-5 pb-2 border-amber-950 mb-2">{category?.name}</h2>
                  <div className="grid md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {items.map((item) => (
                      <Link
                        key={item.id}
                        href={`/menu/${item.id}`}
                        className="block"
                      >
                      <Card className="group cursor-pointer md:w-full md:max-w-3/2 lg:w-full md:min-w-60 lg:max-h-75 rounded-none overflow-hidden border-amber-950 hover:bg-amber-100 active:scale-105 hover:scale-102 after:active:transition-duration-500 transition-duration-100 transition-all border-dashed border-4">
                        {item.image && (
                          <div className="group-hover:pt-0 group-hover:-mt-3 px-10 pt-10 -mt-10 overflow-hidden group-hover:-m-2 transition-all">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        )}
                        <CardHeader>
                          <CardTitle className="flex justify-between items-center">
                            <span className="text-amber-950 group-hover:text-amber-800 font-bold md:text-3xl sm:text-lg  group-hover:border-b-5 group-hover:pb-1 transition-all border-amber-800">{item.name}</span>
                            <span className="text-amber-700 md:text-2xl pt-1 font-bold sm:text-lg">{item.price}₽</span>
                          </CardTitle>
                        </CardHeader>
                        {/* <CardContent>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </CardContent> */}
                      </Card>
                      </Link>
                    ))}
                  </div>
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