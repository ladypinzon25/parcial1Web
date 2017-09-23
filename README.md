# parcial1Web
Lady Pinzon

En el repositorio se encuentra el backend y frontend de una aplicación hecha con react, node.js y express que dado un usuario de github se muestran todos sus seguidores,y si le das click a uno de ellos, tambien se mostraran sus seguidores. Existe una "linea de tiempo" que permite ver quien ha seguido a quien cada vez que se realizan peticiones.

Para correr el proyecto siga estas indicaciones: ya sea la opción 1 o la 2.

#opción 1

Clone el proyecto y luego:

#Back:

En la carpeta back ejecute en el terminal estos comandos:

npm install

nodemon

Una vez realizado esto el backend esta escuchando en el puerto 8082, puede verificar que se encuentre desplegado en la siguiente URL:

API: Retorna los seguidores de un usuario de github entrado por parametro
http://localhost:8082/getFollowers/john-guerra

#Frontend:

En la carpeta front ejecute el siguiente comando en esta misma:

npm install

Ahora puede desplegar el front con:

npm start

Una vez realizado esto el frontend esta escuchando en el puerto 3000, puede verificar que se encuentre desplegado en la siguiente URL:

http://localhost:3000/

Por favor coloque en la constante URL de app.js http://localhost:8082/ para que el front le pueda hacer peticiones al back.

#opción 2

Abra el link de despliegue del proyecto: https://ljpinzon12.github.io/parcial1Web/front/build/

#TOQUE PERSONAL:

Por cada seguidor encontrado, además de mostrar su login se muestra su foto y cada vez que se presione el boton buscar, realiza la busqueda que también se guarda en la base de datos de mongo. Esto con el fin de mostrar búsquedas recientes al visualizador de la página.

