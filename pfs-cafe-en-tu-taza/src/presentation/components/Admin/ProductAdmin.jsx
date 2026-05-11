import React from 'react';
import { useProducts } from '../../hooks/useProducts';

function ProductAdmin() {
  const { products, loading, error } = useProducts();

  if (loading) return <div>Cargando productos...</div>;
  if (error) return <div>Error al cargar productos: {error.message}</div>;

  return (
    <div>
      {products.map(producto => (
        <div key={producto.id} className="p-4 border rounded shadow-md mb-4">
          <div className="flex items-center justify-between mb-2">
            <input
              type="text"
              className="text-lg font-semibold"
              value={producto.nombre}
              readOnly
            />
            <label className="switch">
              <input type="checkbox" checked={producto.estatus} readOnly />
              <span className="slider round"></span>
            </label>
          </div>
          <p className="text-gray-600">Estatus: {producto.estatus ? 'Activo' : 'Inactivo'}</p>
        </div>
      ))}
    </div>
  )
}

export default ProductAdmin;
