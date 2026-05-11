export class Product {
  constructor({ id, nombre, categoria, precio, inventario, orderId }) {
    this.id = id;
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = precio;
    this.inventario = inventario;
    this.orderId = orderId;
  }
}
