// services/webhookHandler.js
import { registerListener } from 'react-native-webhooks';
import messaging from '@react-native-firebase/messaging';

export const initializeWebhooks = (callback) => {
  messaging().onMessage(async remoteMessage => {
    callback(remoteMessage.data);
  });
  
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    callback(remoteMessage.data);
  });
};

// components/WebhookListener.js
import { useEffect } from 'react';
import { initializeWebhooks } from './webhookHandler';

export default function WebhookListener() {
  const { updateOrder } = useOrders();

  useEffect(() => {
    initializeWebhooks((payload) => {
      updateOrder(payload.orderId, payload.status);
    });
  }, []);

  return null;
}