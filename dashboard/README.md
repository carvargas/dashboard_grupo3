# Mi Ecommerce Dashboard

## Descripción

En etapas anteriores se nos solicitó crear un e-commerce, el cual se encuentra en *https://github.com/axelfischbein/proyecto_mi_ecommerce_lostriples*.  
En esta etapa nos enfocaremos en construir un panel de control (dashboard) que permita al personal de nuestra empresa gestionar los productos que se ofrecen. Usaremos el patrón MVC con ReactJS como Vista para construir esta nueva app que se comunicará con los métodos que desarrollamos y expusimos en el proyecto anterior.

**Estado:** _en proceso_

---

## Tecnologías

- **@testing-library/jest-dom:** _versión 5.16.4_
- **@testing-library/react:** _versión 13.2.0_
- **@testing-library/user-event:** _versión 13.5.0_
- **react:** _versión 18.1.0_
- **react-router-dom:** _versión 6.3.0_
- **react-scripts:** _versión 5.0.1_
- **styled-components:** _versión 5.3.5_
- **web-vitals:** _versión 2.1.4_

---

## Instalación

1. Abre la consola del sistema y clona este proyecto con el comando **git clone https://github.com/carvargas/dashboard_grupo3.git**
2. Ve a la carpeta del proyecto con el comando **cd dashboard**
3. Instala las depencencias con el comando **npm install**
4. Una vez hecho esto levanta el servidor con el comando **npm start**  
   Para que todo funcione correctamente es necesario, en paralelo, tener levantado el servidor del proyecto que construimos en las etapas anteriores (https://github.com/axelfischbein/proyecto_mi_ecommerce_lostriples.git)

En el navegador de preferencia, el **_localhost:3000_** será el encargado de permitir visualizar las distintas páginas con las que cuenta nuestra aplicación.

---

## Rutas

- **/**  
   Esta es la pantalla principal que se carga cuando la aplicación se abre. Da información importante y acceso directo a las funcionaes principales
- **/products**  
   Lleva al usuario a nuestra _página de productos_. Allí podrá navegar a través de un listado de productos, donde cada uno tiene su respectivo enlace para obtener información en detalle. Además, cuenta con una barra de búsqueda de productos.
- **/products/:id**  
   Cuando se selecciona un producto, esta es la ruta dinámica que lleva a la pantalla con el detalle del mismo, donde el usuario podrá observar sus características y modificarlas.
- **/products/new**  
   Aquí el usuario podrá dar de alta un nuevo producto, ingresando los datos requeridos del mismo (nombre, valor, stock, descripción, tienda e imagen).
