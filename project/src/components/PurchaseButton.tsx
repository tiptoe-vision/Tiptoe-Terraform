import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { QRAuthModal } from './QRAuthModal';

interface PurchaseButtonProps {
  itemId: string;
  sellerId: string;
  price: number;
}

export function PurchaseButton({ itemId, sellerId, price }: PurchaseButtonProps) {
  const [showQRModal, setShowQRModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowQRModal(true)}
        className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <ShoppingCart className="h-5 w-5 mr-2" />
        Purchase Now
      </button>

      <QRAuthModal
        isOpen={showQRModal}
        onClose={() => setShowQRModal(false)}
        paymentData={{
          amount: price,
          itemId,
          sellerId,
        }}
      />
    </>
  );
}