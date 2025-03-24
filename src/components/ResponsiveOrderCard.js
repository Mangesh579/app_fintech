// components/ResponsiveOrderCard.js
import { Platform, useWindowDimensions } from 'react-native';

const ResponsiveOrderCard = ({ order }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={width > 768 ? styles.desktopCard : styles.mobileCard}>
      <Text style={styles.title}>{order.reference}</Text>
      <StatusIndicator status={order.status} />
      {width > 768 && <OrderDetailPreview />}
    </View>
  );
};