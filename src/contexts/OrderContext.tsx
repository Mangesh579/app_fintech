import React, { createContext, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { fetchOrders } from '../redux/slices/ordersSlice';

type OrderContextType = {
  orders: Order[];
  loading: boolean;
  error: string | null;
  refreshOrders: () => Promise<void>;
};

const OrderContext = createContext<OrderContextType>({} as OrderContextType);

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { orders, loading, error } = useSelector((state: RootState) => state.orders);

  const refreshOrders = async () => {
    try {
      await dispatch(fetchOrders()).unwrap();
    } catch (err) {
      console.error('Failed to refresh orders:', err);
    }
  };

  return (
    <OrderContext.Provider value={{ orders, loading, error, refreshOrders }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => useContext(OrderContext);