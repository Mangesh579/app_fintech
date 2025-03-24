import React, { useEffect } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { useOrders } from '../../../contexts/OrderContext';
import OrderListItem from './OrderListItem';

const OrderList = ({ userType }: { userType: 'B2B' | 'B2C' }) => {
  const { orders, loading, refreshOrders } = useOrders();

  useEffect(() => {
    refreshOrders();
  }, []);

  return (
    <FlatList
      data={orders}
      renderItem={({ item }) => <OrderListItem order={item} />}
      keyExtractor={item => item.id}
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={refreshOrders}
        />
      }
    />
  );
};

export default OrderList;