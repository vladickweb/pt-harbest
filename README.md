
# Prueba Técnica para HARBEST



## Instalación

Clonar repositorio
```sh
cd <directorio donde se va a clonar>
git clone https://github.com/vladickweb/pt-harbest
cd pt-harbest
```
Instalar las dependencias

```sh
cd client
npm i
cd ../harbest-test-api
npm i
```

Hacer 'SEEDING' e iniciar el servidor
```sh
cd harbest-test-api
node seeds.js
npm start
```

Iniciar el cliente (desde otra terminal)
```sh
cd client
npm start
```

*Por defecto el servidor inicia en el puerto 9000 y el cliente en el 3000, se puede cambiar en los archivos de configuración. Se deja publicado el .env para que la empresa pueda testear. Está hecho a conciencia.*
