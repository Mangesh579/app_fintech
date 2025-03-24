import messaging from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native';

export const initializeNotifications = (onMessage: (payload: any) => void) => {
  // Request permissions
  messaging().requestPermission();
  
  // Foreground messages
  messaging().onMessage(async remoteMessage => {
    await notifee.displayNotification({
      title: remoteMessage.notification?.title,
      body: remoteMessage.notification?.body,
      android: { channelId: 'orders' }
    });
    onMessage(remoteMessage.data);
  });

  // Background messages
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    onMessage(remoteMessage.data);
  });
};

export const getFCMToken = async () => {
  return await messaging().getToken();
};