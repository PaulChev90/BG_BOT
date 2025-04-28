import React from 'react';
import ReactDOM from 'react-dom/client';
import WarehouseList from './WarehouseList'; // Обрати внимание, что импортируется компонент WarehouseList
import './style.css'; // Если ты используешь стили

const root = ReactDOM.createRoot(document.getElementById('app'));

ReactDOM.render(
  <React.StrictMode>
    <WarehouseList /> {/* Проверяем, что компонент правильно отображается */}
  </React.StrictMode>,
  document.getElementById('app') // Где рендерится приложение
);
