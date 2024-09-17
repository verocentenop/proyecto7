# Proyecto 7

Este es mi proyecto 7. En él trabajo por primera vez con una BBDD de Mongo Atlas y creo colecciones con datos relacionados entre ellos, haciendo peticiones a través de Insomnia y comprobando el funcionamiento de cada uno de los elementos del CRUD según los permisos otorgados a los usuarios.

Está basado en elementos base del fútbol. Lo componen 3 colecciones, Marcas, Modelos  y Usuarios, con permisos otorgados a cada uno según el rol que posea, para poder realizar diferentes acciones.. Están organizados y entrelazados por diversos recursos que comparten entre ellos.

## Tabla de Contenidos
1. [Instalación](#instalación)
2. [Uso](#uso)
3. [Características](#características)
4. [Configuración](#configuración)
5. [Contribuir](#contribuir)
8. [Contacto](#contacto)

## Instalación

Instrucciones para instalar el proyecto.
```bash
- Clonar el repositorio
git clone https://github.com/verocentenop/proyecto7.git

- Entrar al directorio del proyecto
cd proyecto7
``` 

## Uso
```bash
- Comando para iniciar el proyecto:
npm run dev
npm run seed (para ejecutar la semilla)

- Ejemplos de rutas para hacer gestiones:
Brands:
http://localhost:3000/api/v1/brands/country/Corea (get - país) usuarios
http://localhost:3000/api/v1/brands/66d5918092d5fb956bdb945f (get - ID) usuarios
http://localhost:3000/api/v1/brands/models/Kia%20Picanto (get - model) usuarios
http://localhost:3000/api/v1/brands/ (get) - usuarios
http://localhost:3000/api/v1/brands/ (post) usuarios registrados
http://localhost:3000/api/v1/brands/66d98fc3ef8ec6e9ee6c6a41 (put) administradores
http://localhost:3000/api/v1/brands/66d98fc3ef8ec6e9ee6c6a41 (delete) administradores

Models:
http://localhost:3000/api/v1/models/fuel/Diesel (get - combustible) usuarios
http://localhost:3000/api/v1/models/66d98ac2bddf218bfd1a0c1e (get - ID) usuarios
http://localhost:3000/api/v1/models/year/2019 (get - year) usuarios
http://localhost:3000/api/v1/models/ (get) - usuarios
http://localhost:3000/api/v1/models/ (post) usuarios registrados
http://localhost:3000/api/v1/models/66d98ac2bddf218bfd1a0c1f (put) administradores
http://localhost:3000/api/v1/models/66d98ac2bddf218bfd1a0c1f (delete) administradores

Users:

http://localhost:3000/api/v1/users/register (post - registro) usuarios
http://localhost:3000/api/v1/users/login (post - login) usuarios
http://localhost:3000/api/v1/users/ (get) - administradores
http://localhost:3000/api/v1/brands/66e97c567eeb8bc4dfb2ce71 (put) administradores
http://localhost:3000/api/v1/brands/66e97c567eeb8bc4dfb2ce71 (delete) usuarios registrados a si mismos o administradores

``` 
## Características
- Se pueden solicitar datos por ID, país, nombre, modelo o combustible.
- Cada colección tiene un CRUD completo.
- El elemento Seeds envía datos a la colección de modelos.

## Configuración
Los datos sensibles están configurados en un .env tratado con .gitignore, se han subido a git en un .txt

## Contacto
Información de contacto para preguntas o comentarios.

- **Email**: verocentenop@gmail.com
- **GitHub**: verocentenop
