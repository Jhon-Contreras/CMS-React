# CMS

# 📇 Contact Manager System

Un sistema simple de gestión de contactos hecho con **React + TypeScript**. Permite agregar, listar y eliminar contactos utilizando formularios validados con Zod y react-hook-form.
Incluye una API REST serverless construida con **AWS Lambda, DynamoDB y API Gateway** para persistencia en la nube.

---

## 🚀 Tecnologías usadas

- ⚛️ React
- ⌨️ TypeScript
- 📋 React Hook Form
- ✅ Zod (validación de formularios)
- 💅 Bootstrap 5
- 🔔 React Toastify (notificaciones toast)

### ☁️ Backend y API Serverless (AWS)

- DynamoDB
- AWS Lambda
- Amazon API Gateway

---

## 📦 Características

- ✅ Agrega contactos con los campos:
  - Nombre
  - Apellido
  - Correo electrónico
  - Tipo (Familiar, Amigo, Trabajo, Otro)
- ✅ Validación de formularios en tiempo real con Zod y react-hook-form
- ✅ Listado dinámico de contactos desde DynamoDB mediante la API serverless
- ✅ Eliminación de contactos con confirmación visual
- ✅ Manejo de estados de carga y error para mejorar experiencia UX
- ✅ Código modular y reutilizable (componentes Input, Select, Button, Table, Form)
- ✅ Arquitectura serverless con AWS para alta escalabilidad y mantenimiento sencillo

---

## ☁️ API Serverless con AWS (DynamoDB + Lambda + API Gateway)

Este proyecto incluye una API REST construida sobre servicios serverless de AWS. Permite crear, listar y eliminar contactos desde una base de datos DynamoDB, mediante funciones Lambda y API Gateway.

### 🔧 Servicios Utilizados

AWS Lambda: función única que maneja múltiples rutas (PUT, GET, DELETE) usando event.routeKey.

Amazon API Gateway: expone la API pública en rutas como /contacts y /contacts/{id}.

Amazon DynamoDB: tabla contacts_cms que almacena contactos con los siguientes campos:

- id (primary key)

- nombre

- apellido

- email

- tipo (amigo, familiar, trabajo, etc.)

---

## 🧑‍💻 Instalación y uso

1. Clona el repositorio

```bash
git clone https://github.com/Jhon-Contreras/CMS

```

2 Instala las dependencias:

```bash
npm install

```

3 Inicia el servidor de desarrollo:

```bash
npm run dev

```

## 📂 Estructura del proyecto

```
src/
├── App.tsx
├── components/
│       ├── Form/
│       │     ├── Index.tsx # Formulario con validaciones y envío
│       │     ├── Input.tsx # Input genérico con react-hook-form
│       │     ├── Select.tsx # Select genérico con react-hook-form
│       │     └── Button.tsx # Botón reutilizable con variantes
│       │
│       ├── Table/
│       │     └── Index.tsx # Tabla para listar y eliminar contactos
│       │
│       └── CMS.tsx # Componente principal con estado y lógica de fetch
│
├── schemas/
│       └── Contact.ts # Esquema Zod para validar contactos
```
