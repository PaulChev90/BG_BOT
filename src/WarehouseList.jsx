import React from 'react';

const warehouses = [
  {
    name: 'ОП Горелово',
    address: 'Волхонское шоссе, 9/2...',
    phone: '+7(921)928-55-73',
    latitude: 59.788352,
    longitude: 30.219623,
    additional_inf: '',
  },
  {
    name: 'ОП Всеволожск',
    address: 'Дизельная улица, 2А...',
    phone: '+7(921)589-87-82',
    latitude: 60.004874,
    longitude: 30.794392,
    additional_inf: '',
  },
  // Добавь остальные склады
];

const WarehouseList = () => {
  return (
    <div>
      <h1>Склады компании Би Джи</h1>
      {warehouses.map((warehouse, index) => (
        <div key={index} className="warehouse">
          <h3>{warehouse.name}</h3>
          <p>{warehouse.address}</p>
          <p>{warehouse.phone}</p>
          <p>Широта: {warehouse.latitude}</p>
          <p>Долгота: {warehouse.longitude}</p>
          <p>{warehouse.additional_inf}</p>
        </div>
      ))}
    </div>
  );
};

export default WarehouseList;
