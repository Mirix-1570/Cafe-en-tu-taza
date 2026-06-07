# ☕ Café en tu Taza

Sistema web desarrollado para la gestión integral de productores, fincas, productos, publicaciones y órdenes dentro de una plataforma relacionada con la industria cafetalera.

## 📖 Descripción

Café en tu Taza es una aplicación web desarrollada con Django y MySQL que permite administrar información relacionada con productores de café, fincas, productos, publicaciones y órdenes de compra.

El sistema implementa una arquitectura basada en modelos relacionales, permitiendo gestionar las relaciones entre las diferentes entidades involucradas en el proceso productivo y comercial del café.

Este proyecto fue desarrollado como parte del proceso de formación en desarrollo Full Stack, aplicando conceptos de:

* Backend Development
* Modelado de Bases de Datos
* APIs REST
* Django Framework
* MySQL
* Gestión de relaciones entre entidades

---

## 🚀 Tecnologías Utilizadas

### Backend

* Python 3
* Django 5.2.8
* Django REST Framework 3.16.1

### Base de Datos

* MySQL Server
* MySQL Workbench

### Herramientas de Desarrollo

* Git
* GitHub
* Visual Studio Code

---

## 📂 Estructura General del Proyecto

```bash
Cafe-en-tu-taza/
│
├── Backend/
│   ├── cafe_en_tu_taza_pfs/
│   ├── pfs_cafe_en_tu_taza/
│   ├── manage.py
│   └── requirements.txt
│
├── Database/
│   └── cafe_en_tu_taza_pfs.sql
│
└── README.md
```

---

## 🗄️ Modelo de Base de Datos

El sistema está compuesto por las siguientes entidades principales:

### Producer

Representa a los productores de café.

| Campo    | Tipo    |
| -------- | ------- |
| id       | PK      |
| nombre   | VARCHAR |
| telefono | INTEGER |
| cedula   | INTEGER |

---

### Farm

Representa las fincas productoras.

| Campo       | Tipo    |
| ----------- | ------- |
| id          | PK      |
| nombre      | VARCHAR |
| ubicacion   | VARCHAR |
| extension   | INTEGER |
| producer_id | FK      |

---

### Product

Representa los productos comercializados.

| Campo      | Tipo    |
| ---------- | ------- |
| id         | PK      |
| nombre     | VARCHAR |
| categoria  | VARCHAR |
| precio     | INTEGER |
| inventario | INTEGER |

---

### Order

Gestiona órdenes y facturación.

| Campo             | Tipo    |
| ----------------- | ------- |
| emisor            | VARCHAR |
| receptor          | VARCHAR |
| numero_de_factura | INTEGER |
| fecha             | DATE    |
| forma_de_pago     | VARCHAR |
| descripcion       | VARCHAR |
| cantidad          | INTEGER |
| precio_unitario   | INTEGER |
| importe_total     | INTEGER |
| impuestos         | INTEGER |
| cantidad_adeudada | INTEGER |

---

### Post

Permite registrar publicaciones relacionadas con la plataforma.

| Campo  | Tipo    |
| ------ | ------- |
| titulo | VARCHAR |
| texto  | VARCHAR |

---

## 🔗 Relaciones

El sistema implementa relaciones mediante tablas intermedias:

* Farm ↔ Producer
* Product ↔ Farm
* Farm ↔ Post
* User ↔ Product
* User ↔ Order

Estas relaciones permiten una estructura flexible y escalable para futuras funcionalidades.

---

## ⚙️ Instalación del Proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/Mirix-1570/Cafe-en-tu-taza.git
```

```bash
cd Cafe-en-tu-taza/Backend
```

---

### 2. Crear entorno virtual

```bash
python -m venv venv
```

Activar entorno virtual:

Windows

```bash
venv\Scripts\activate
```

Mac/Linux

```bash
source venv/bin/activate
```

---

### 3. Instalar dependencias

```bash
pip install -r requirements.txt
```

---

### 4. Configurar Base de Datos

Crear una base de datos llamada:

```sql
CREATE DATABASE cafe_en_tu_taza_pfs;
```

Actualizar las credenciales en:

```python
settings.py
```

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'cafe_en_tu_taza_pfs',
        'USER': 'root',
        'PASSWORD': 'TU_PASSWORD',
        'HOST': '127.0.0.1',
        'PORT': '3306'
    }
}
```

---

### 5. Ejecutar migraciones

```bash
python manage.py migrate
```

---

### 6. Crear superusuario

```bash
python manage.py createsuperuser
```

---

### 7. Ejecutar servidor

```bash
python manage.py runserver
```

Acceder a:

```text
http://127.0.0.1:8000/admin/
```

---

## 👨‍💻 Funcionalidades Implementadas

* Gestión de productores
* Gestión de fincas
* Gestión de productos
* Gestión de publicaciones
* Gestión de órdenes
* Relaciones entre entidades
* Administración mediante Django Admin
* Persistencia de datos con MySQL
* Migraciones automatizadas con Django

---

## 📈 Mejoras Futuras

* Implementación de autenticación JWT
* Desarrollo de frontend moderno
* Dashboard administrativo personalizado
* Reportes y estadísticas
* Gestión avanzada de inventario
* Despliegue en la nube

---

## 🎓 Objetivo Académico

Este proyecto fue desarrollado con fines educativos para fortalecer conocimientos en:

* Desarrollo Backend
* Bases de Datos Relacionales
* Django Framework
* Diseño de APIs
* Arquitectura de Software
* Buenas prácticas de desarrollo

---

## 👤 Autor

Mary

Proyecto desarrollado como parte del proceso de formación Full Stack y práctica profesional en desarrollo web.
