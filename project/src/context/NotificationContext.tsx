import React, { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

interface NotificationContextType {
  notifications: {
    paymentReceived: boolean;
    newMessages: boolean;
    itemViews: boolean;
  };
  toggleNotification: (setting: keyof NotificationContextType['notifications']) => void;
  sendNotification: (type: string, message: string) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export function NotificationProvider({ children }: { children: React.ReactNode }) {
  const [notifications, setNotifications] = useState({
    paymentReceived: true,
    newMessages: true,
    itemViews: false,
  });

  const toggleNotification = (setting: keyof typeof notifications) => {
    setNotifications(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const sendNotification = (type: string, message: string) => {
    const shouldNotify = notifications[type as keyof typeof notifications];
    if (shouldNotify) {
      toast(message, {
        icon: '🔔',
        position: 'top-right',
        duration: 5000,
      });
    }
  };

  // Mock payment listener
  useEffect(() => {
    const mockPaymentReceived = () => {
      if (notifications.paymentReceived) {
        sendNotification(
          'paymentReceived',
          'Payment received! A buyer has purchased your item.'
        );
      }
    };

    // Simulate receiving a payment every 30 seconds (for demo purposes)
    const interval = setInterval(mockPaymentReceived, 30000);
    return () => clearInterval(interval);
  }, [notifications.paymentReceived]);

  return (
    <NotificationContext.Provider value={{ notifications, toggleNotification, sendNotification }}>
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotifications() {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
}