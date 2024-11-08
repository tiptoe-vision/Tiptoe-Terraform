import React from 'react';
import { Bell, BellOff } from 'lucide-react';

interface NotificationSettingsProps {
  notifications: {
    paymentReceived: boolean;
    newMessages: boolean;
    itemViews: boolean;
  };
  onToggle: (setting: keyof NotificationSettings['notifications']) => void;
}

export function NotificationSettings({ notifications, onToggle }: NotificationSettingsProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Notification Settings
      </h2>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {notifications.paymentReceived ? (
              <Bell className="h-5 w-5 text-indigo-600" />
            ) : (
              <BellOff className="h-5 w-5 text-gray-400" />
            )}
            <div>
              <p className="font-medium text-gray-900">Payment Notifications</p>
              <p className="text-sm text-gray-500">
                Get notified when you receive a payment
              </p>
            </div>
          </div>
          <button
            onClick={() => onToggle('paymentReceived')}
            className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
              notifications.paymentReceived ? 'bg-indigo-600' : 'bg-gray-200'
            }`}
          >
            <span
              className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                notifications.paymentReceived ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {notifications.newMessages ? (
              <Bell className="h-5 w-5 text-indigo-600" />
            ) : (
              <BellOff className="h-5 w-5 text-gray-400" />
            )}
            <div>
              <p className="font-medium text-gray-900">Message Notifications</p>
              <p className="text-sm text-gray-500">
                Get notified when you receive new messages
              </p>
            </div>
          </div>
          <button
            onClick={() => onToggle('newMessages')}
            className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
              notifications.newMessages ? 'bg-indigo-600' : 'bg-gray-200'
            }`}
          >
            <span
              className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                notifications.newMessages ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {notifications.itemViews ? (
              <Bell className="h-5 w-5 text-indigo-600" />
            ) : (
              <BellOff className="h-5 w-5 text-gray-400" />
            )}
            <div>
              <p className="font-medium text-gray-900">Item View Notifications</p>
              <p className="text-sm text-gray-500">
                Get notified when your items receive views
              </p>
            </div>
          </div>
          <button
            onClick={() => onToggle('itemViews')}
            className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
              notifications.itemViews ? 'bg-indigo-600' : 'bg-gray-200'
            }`}
          >
            <span
              className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                notifications.itemViews ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}