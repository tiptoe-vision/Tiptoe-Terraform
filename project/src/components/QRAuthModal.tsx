import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { X } from 'lucide-react';

interface QRAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  paymentData: {
    amount: number;
    itemId: string;
    sellerId: string;
  };
}

export function QRAuthModal({ isOpen, onClose, paymentData }: QRAuthModalProps) {
  if (!isOpen) return null;

  const qrData = JSON.stringify({
    ...paymentData,
    timestamp: new Date().toISOString(),
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose} />

        <div className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:w-full sm:max-w-md">
          <div className="absolute right-4 top-4">
            <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="px-4 pb-8 pt-5 sm:p-6 sm:pb-8">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Scan to Purchase
              </h3>
              <p className="text-gray-600 mb-6">
                Open your payment app and scan this QR code to complete your purchase
              </p>
              
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white rounded-lg shadow-inner">
                  <QRCodeSVG
                    value={qrData}
                    size={200}
                    level="H"
                    includeMargin={true}
                  />
                </div>
              </div>

              <p className="text-sm text-gray-500">
                The seller will be notified once the payment is confirmed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}