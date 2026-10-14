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


## P8
- Mi predicción:Pienso que aparte de /actividades?tipo=agua.  las otras dos apareceran como error y por que no existe nada llamado asi ademas la de tipo fuego pieso que sera error 404 por que no exixte un direccion llamada asi.
- Lo que pasó: No paso lo que esperaba en ambas predicciones dieron 200 pero con lista vacia entonces me equivoque.
- Por qué pasó: Paso por que el error 404 da cuando algo no exixte pero como /atividades si existe entonces si es un 200 lo que pasa es que dentro de /actividades no encontro ni fuego ni AGUA entonces mostro una lista vacia como diciendo si esta pero no lo encontre encambio agua si devolvio algo, ademas agrege toLowerCase() para poner todo en minuscula.  

## P9
- Mi predicción: Pienso que voy a recibir un codifgo de estado de 200 y el body es el escrito en thunder client.
- Lo que pasó: : Recibí 201 Created como predije en parte (yo dije 200). El primer intento, sin express.json(), devolvió solo { "id": 5 } y en la terminal req.body salió undefined. Después de agregar express.json(), salió el objeto completo.
- Por qué pasó: Pasa por que el body llega como texto y Express no lo convierte en objeto a menos de que se lo pida con express.json().




## P10
- Mi predicción:Creo que la actividad nueva  si va a estar  después de reiniciar el servidor, porque  pues ya se guardo .
- Lo que pasó:creé la Espeleología con POST y la vi en la lista con 5 actividades. Después de reiniciar el servidor volvieron a salir solo 4. Mi predicción fue incorrecta.
- Por qué pasó:La actividad solo se guardó en la memoria del servidor. Al reiniciarse, el servidor leyó el código de nuevo y la lista volvió a empezar con las 4 originales.


## P11
- Mi predicción:Pienso que manda un error por que no dejara pasar peticione mas abajo  
- Lo que pasó:Si mueves el bloque del middleware 404  al inicio, justo después de express.json(), todas las peticiones  caerán inmediatamente en ese middleware y devolverán el mensaje de error 404.
- Por qué pasó: Express evalúa las rutas y middlewares en orden secuencial (de arriba hacia abajo). Si encuentra un app.use() genérico al principio que no llama a next(), la petición se detiene ahí y se responde de inmediato, sin llegar a leer las rutas que están escritas más abajo.



## CONCLUSION 
Express decide qué código ejecutar siguiendo estrictamente el orden en el que están definidas las rutas y middlewares en el archivo, pasando la petición al siguiente bloque mediante next si la ruta actual no coincide o no finaliza la respuesta.
