import React from 'react';
import ReactDOM from 'react-dom/client';
import WarehouseList from './WarehouseList';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(
  <React.StrictMode>
    <WarehouseList />
  </React.StrictMode>
);
