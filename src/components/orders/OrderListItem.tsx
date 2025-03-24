// components/OrderListItem.js
import React, { memo } from 'react';
import { useMemo } from 'react';

const OrderListItem = memo(({ order }) => {
  const formattedDate = useMemo(
    () => new Date(order.createdAt).toLocaleDateString(),
    [order.createdAt]
  );

  return (
    <View>
      <Text>{order.reference}</Text>
      <Text>{formattedDate}</Text>
      <StatusBadge status={order.status} />
    </View>
  );
});