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
      {
        categoryId: "coffee",
        id: "espresso",
        name: "Эспрессо",
        price: '150',
        description: "Классическая порция крепкого кофе с насыщенным вкусом и плотной пенкой. Идеально для бодрого утра.",
        image: "/menu/espresso.png"
      },
      {
        categoryId: "coffee",
        id: "capuccino",
        name: "Капучино",
        price: '150',
        description: "Эспрессо с нежной молочной пеной, украшенный легкой посыпкой какао. Сбалансированный вкус.",
        image: "/menu/cappuccino.png"
      },
      {
        categoryId: "coffee",
        id: "latte",
        name: "Латте",
        price: '150',
        description: "Мягкий кофейный напиток с большим количеством вспененного молока и тонким слоем пенки. Для тех, кто любит нежность.",
        image: "/menu/latte.png"
      },
    ]
  },
  {
    id: "desserts",
    name: "Десерты",
    items: [
      {
        categoryId: "desserts",
        id: "cheescake",
        name: "Чизкейк",
        price: '150',
        description: "Нежный творожный десерт на песочной основе с легкой кислинкой. Подается с ягодным соусом.",
        image: "/menu/cheesecake.png"
      },
      {
        categoryId: "desserts",
        id: "bun",
        name: "Пирожное",
        price: '150',
        description: "Воздушный бисквит с кремом и шоколадной глазурью. Маленькое удовольствие к чашке кофе.",
        image: "/menu/cupcake.png"
      },
      {
        categoryId: "desserts",
        id: "croissant",
        name: "Круассан",
        price: '150',
        description: "Слоеное тесто с хрустящей корочкой и масляным ароматом. Классика для завтрака.",
        image: "/menu/croissant.png"
      },
    ]
  }
];