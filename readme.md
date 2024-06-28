# Prueba Técnica Ivolegal

## Información a tener en cuenta

Esta prueba maneja las siguientes tecnologías `MySQL`, `NodeJS`, y `npm`. Por lo que, es necesario tenerlo instalado en el dispositivo antes de poder iniciar con la configuración del proyecto.

Luego, usando `npm` vas a ejecutar el siguiente comando:

```cmd
npm install
```

Configura tu IDE que sea de tu preferencia para ejeutar comandos de `MySQL`, en mi caso estoy usando `PHPMyAdmin` pero son libres de usar el sistema de su preferencia.

A continuación editamos el archivo `.env` del archivo de la siguiente manera:

```env
REACT_PORT = 3000 [Puerto donde se vaya a ejecutar, para correcto funcionamiento no modificar]
PORT = 5000 [Puerto donde se vaya a ejecutar, para correcto funcionamiento no modificar]
HOST = "localhost" [Dejar localhost como host a menos que se vaya a ejecutar en un post diferente]
DATABASE = "localidades" [Nombre de la base de datos, no se debe mover]
DBUSER = "root" [Aquí se debe cambiar a el usuario con el que hayas configurado MySQL en tu dispositivo]
PASSWORD = "" [Aquí se debe cambiar a la contraseña con el que hayas configurado MySQL en tu dispositivo]
DIALECT= "mysql" [Dialecto de la base de datos, no se debe mover]
```

Ya con esto podemos iniciar con los scritpts, si quieres testear la aplicación como desarrollador puedes ejecutar el siguiente comando en la terminal del proyecto.

```bash
npm run preview
```

para entrar a el Frontend se usará el link ```http://localhost:3000/```

y para entrar a el Frontend se usará el link ```http://localhost:5000/API/graphql```

Si quieres entrar al proyecto en modo de Producción entra ejecuta el siguiente comando en la terminal del proyecto.

**Si eres usuario de Windows**

```bash
npm run prod-win
```

**Si eres usuario de MacOs o Linux**

```bash
npm run prod-linux
```

Aquí se debería abir automaticamente el Frontend, pero en el caso que no, solo debes abrir el archivo ``HTML`` de la carpeta Frontend.

y para entrar a el Frontend se usará el link ```http://localhost:5000/API/graphql```