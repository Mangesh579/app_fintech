// components/BulkOrderManagement.js
import React from 'react';
import { BulkOrderTable, InventoryTracker } from '.';

const BulkOrderManagement = () => (
  <View>
    <InventoryTracker />
    <BulkOrderTable />
    <ShippingOptimizationMap />
  </View>
);