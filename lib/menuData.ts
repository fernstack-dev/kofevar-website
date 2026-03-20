export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: string;
  image?: string;
  categoryId: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: "coffee",
    name: "Кофе",
    items: [
      { categoryId: "coffee", id: "espresso", name: "Эспрессо", price: '150', description: "", image: "/menu/espresso.png"},
      { categoryId: "coffee", id: "capuccino", name: "Капучино", price: '150', description: "", image: "/menu/cappuccino.png"},
      { categoryId: "coffee", id: "latte", name: "Латте", price: '150', description: "", image: "/menu/latte.png"},
    ]
  },
  {
    id: "desserts",
    name: "Десерты",
    items: [
      { categoryId: "desserts", id: "cheescake", name: "Чизкейк", price: '150', description: "", image: "menu/cheesecake.png"},
      { categoryId: "desserts", id: "bun", name: "Пироженное", price: '150', description: "", image: "menu/cupcake.png"},
      { categoryId: "desserts", id: "croissant", name: "Круассан", price: '150', description: "", image: "menu/croissant.png"},
    ]
  }
]