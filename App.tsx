// App.js
import { WebhookProvider, OrderProvider, AuthProvider } from './src/contexts';
import MainNavigator from './src/navigation/MainNavigator';

export default function App() {
  return (
    <AuthProvider>
      <WebhookProvider>
        <OrderProvider>
          <MainNavigator />
        </OrderProvider>
      </WebhookProvider>
    </AuthProvider>
  );
}