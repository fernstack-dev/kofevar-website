'use client';

import { ShoppingCart } from 'lucide-react';

interface PurchaseButtonProps {
  itemName: string;
}

export default function PurchaseButton({ itemName }: PurchaseButtonProps) {

  return (
    <button
      className="mt-8 w-full md:w-auto px-8 py-3 cursor-pointer bg-amber-950 text-white font-bold hover:bg-amber-900 transition-colors inline-flex items-center justify-center gap-2"
    >
      <ShoppingCart size={18} />
      Заказать
    </button>
  );
}