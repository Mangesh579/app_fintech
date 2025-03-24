// components/OrderTracking.js
import MapView from 'react-native-maps';

const OrderTracking = ({ order }) => (
  <View>
    <MapView
      initialRegion={order.deliveryRoute[0]}
      annotations={order.deliveryRoute}
    />
    <DeliveryTimeline steps={order.statusHistory} />
  </View>
);