## PO
- ¿QUE ES EL CLIENTE? ES EL NAVEGADOR 
- ¿QUE ES EL SERVIDOR? ES EL PUNTO FISICO DONDE LE LLEGAN LAS PETICIONES 
- ¿QUE VIAJA EN LA ENTRADA Y LA SALIDA? LAS PETICIONES POR PARTE DEL CLIENTE Y LAS RESPUESTAS DEL SERVIDOR 


## P1
- Mi predicción: Pienso que en todas va a decir hola desde el servidor por que creo que todas las peticiones dan lo mismo. 
- Lo que pasó: Efectivamente todas las direcciones arrojaron lo mismo.
- Por qué pasó: Paso por que el codigo dice que toda peticion la va aresponder con un hola desde el servidor.

## P2
- Mi predicción:Yo crreo que solo va aparecer una 
- Lo que pasó: Por cada página que abrí aparecieron 2 líneas en la terminal, no 1.
- Por qué pasó: El navegador pide por su cuenta /favicon.ico además de la página que yo escribí.


## P3
-  Mi predicción:Yo crreo que no va a encontrar nada y va aresponder ruta no encontrada por que no esta bien escrita la direccion.
- Lo que pasó: Efectivamente al estar mal escritas me decian que "ruta no encontrada".
- Por qué pasó: por que al no escribir como debia la peticion caia en el esle if de la ruta no encontrada.

## REFLEXION FINAL
- Pienso que una parte que es algo dificil es que para poder encontrar un sito se debe escribir tal cual por que sino lo puede llevar a uno a citios diferentes. 
- Me perdi un poco para utilizar la terminal.
- Y me enrrede un poco por la cantidad de informacion que teniamos que hacer.


## P4
- Mi predicción: Yo pienso que va escribir que no encuentra nada y va a votar un error 404.
- Lo que pasó: Efectivamente paso lo ya descrito y mando el error 404.
- Por qué pasó: Por que solo esta programado con la ruta / no con  /no_existe por eso automaticamente dio ese resultado 


## REFLEXION FINAL 
- Resolvio el problema de escribir mucho por que ya resiclamos una libreria que hace cosas automaticas agilizando nuestro backend.
- Mejora las respuestas del servidor.



## P5
- Mi predicción: Creo que me va a mandar en la terminal lo mismo pero no me deja entrar al citio por que no esta la ruta como es.
- Lo que pasó: Efectivamente mando la fecha y la hora y la peticion a la terminal, tambien no dejo entrar a la ruta pero mo fue por lo que dije sino por que el middleware tomo la peticion. 
- Por qué pasó:Paso por que el next se quedo con la peticion y no de jo pasar a la otra.


## P6
- Mi predicción:Pienso que el codigo de estado es de 200 porque si esta y el body creo que seria algo asi "id":1
- Lo que pasó: Casi pasa lo que dije pero no el codigo de estado si paso pero el body no era.
- Por qué pasó: Porque el 1 del id esta sin comillas y el de la url esta con comillas entonces el === hizo lo suyo y dijo que no eran iguales y pues quedo en blanco.


## P7
- Mi predicción: Pienso que sin el return no va dar un retorno si llaman la peticion y no da una respuesta.
- Lo que pasó:Sin el return, el navegador igual mostró el mensaje de 404 y no salió ningún error en la terminal.
- Por qué pasó:Sin return, el código no se detiene después de responder y sigue leyendo las líneas de abajo.
