<<<<<<< HEAD
# Sistema de Registros Client - Frontend

Este es el frontend del Sistema de Registros Client, una aplicación diseñada para gestionar clientes. Aquí encontrarás las instrucciones necesarias para configurar y ejecutar el frontend en tu entorno local.

#Configuración

Asegúrate de tener instaladas las siguientes versiones de npm y Node.js:

npm: 10.5.0
Node.js: v20.12.2

Luego al haber clonado el proyecto, corre lo siguiente:
npm install : Esto instalara todas las dependencias del proyecto.

# Ejecución
Una vez que tengas el proyecto configurado, puedes iniciar el servidor de desarrollo ejecutando el siguiente comando:
npm run dev

El frontend estará disponible en http://localhost:5173/. Asegúrate de que el backend esté ejecutándose en http://localhost:3000/ para que el frontend pueda comunicarse correctamente con él.

#Funcionalidades
React Router: Se utiliza React Router para manejar las rutas dentro de la aplicación, lo que permite la navegación entre diferentes vistas de manera sencilla.

Context API: Se implementa un contexto para mantener la sesión de usuario en toda la aplicación, lo que facilita el acceso a la información del usuario en diferentes componentes.

Bootstrap: Se utiliza Bootstrap para el diseño y estilización de la interfaz de usuario, lo que garantiza una apariencia moderna y responsiva en toda la aplicación.

Axios: Se utiliza Axios para realizar peticiones HTTP a los endpoints del backend y consumir los datos necesarios para la aplicación.

#Dependencias
Aquí se encuentran las principales dependencias del proyecto:

axios: ^1.7.2
bootstrap: ^5.3.3
moment: ^2.30.1
react: ^18.2.0
react-bootstrap: ^2.10.2
react-dom: ^18.2.0
react-feather: ^2.0.10
react-router-dom: ^6.23.1


¡Por supuesto! Aquí tienes una versión actualizada del README que incluye instrucciones para clonar el repositorio desde GitHub:

Sistema de Registros Client - Frontend
Este es el frontend del Sistema de Registros Client, una aplicación diseñada para gestionar clientes. Aquí encontrarás las instrucciones necesarias para configurar y ejecutar el frontend en tu entorno local.

Clonación del Repositorio
Para empezar, clona el repositorio desde GitHub utilizando el siguiente comando:

bash
Copiar código
git clone https://github.com/tu_usuario/sistema-registros-client-frontend.git
Configuración
Asegúrate de tener instaladas las siguientes versiones de npm y Node.js:

npm: 10.5.0
Node.js: v20.12.2
Si aún no has creado el proyecto, puedes hacerlo utilizando Vite:

bash
Copiar código
npm init vite@latest
Selecciona la configuración adecuada para tu proyecto (en este caso, JavaScript) y sigue las instrucciones para completar la creación del proyecto.

Ejecución
Una vez que tengas el proyecto configurado, puedes iniciar el servidor de desarrollo ejecutando el siguiente comando:

bash
Copiar código
npm run dev
El frontend estará disponible en http://localhost:5173/. Asegúrate de que el backend esté ejecutándose en http://localhost:3000/ para que el frontend pueda comunicarse correctamente con él.

Funcionalidades
React Router: Se utiliza React Router para manejar las rutas dentro de la aplicación, lo que permite la navegación entre diferentes vistas de manera sencilla.

Context API: Se implementa un contexto para mantener la sesión de usuario en toda la aplicación, lo que facilita el acceso a la información del usuario en diferentes componentes.

Bootstrap: Se utiliza Bootstrap para el diseño y estilización de la interfaz de usuario, lo que garantiza una apariencia moderna y responsiva en toda la aplicación.

Axios: Se utiliza Axios para realizar peticiones HTTP a los endpoints del backend y consumir los datos necesarios para la aplicación.

Dependencias
Aquí se encuentran las principales dependencias del proyecto:

axios: ^1.7.2
bootstrap: ^5.3.3
moment: ^2.30.1
react: ^18.2.0
react-bootstrap: ^2.10.2
react-dom: ^18.2.0
react-feather: ^2.0.10
react-router-dom: ^6.23.1

#Dependencias de desarrollo
Estas son las dependencias utilizadas en el entorno de desarrollo del proyecto:

@types/react: ^18.2.66
@types/react-dom: ^18.2.22
@vitejs/plugin-react: ^4.2.1
eslint: ^8.57.0
eslint-plugin-react: ^7.34.1
eslint-plugin-react-hooks: ^4.6.0
eslint-plugin-react-refresh: ^0.4.6
vite: ^5.2.0
