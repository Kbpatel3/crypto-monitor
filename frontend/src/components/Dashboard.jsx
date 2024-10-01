import React from 'react';
import LivePrice from './LivePrice';

function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">Crypto Monitor Dashboard</h1>
      <LivePrice />
    </div>
  );
}

export default Dashboard;