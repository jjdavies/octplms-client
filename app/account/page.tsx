'use client';
import React, { useContext, useState } from 'react';
import DataContext from '../component/DataContext';
import { DataProvider } from '../component/DataContext';

const AccountPage = () => {
  const { user } = useContext(DataContext);
  return <div>User: {user && user.name ? user.name : ''}</div>;
};

export default function Page() {
  return (
    <DataProvider>
      <AccountPage />
    </DataProvider>
  );
}
