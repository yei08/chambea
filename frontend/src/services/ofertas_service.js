// esta carpeta sirve para manejar las solicitudes http de las carpetas
// 1 Entiende Async/Await: Sin esto, el código del backend te parecerá confuso.

// 2 Prueba fetch: Intenta entender cómo se pide un dato y se convierte a JSON.

// 3 Explora useEffect: Para saber cómo meter todo eso dentro de un componente de React 
// sin que se ejecute infinitamente.

// ********************************************************

// ¿Cómo se vería la lógica ahí dentro? (Conceptualmente)
// Imagina que creas un archivo llamado src/services/perfilService.js. Dentro de ese 
// archivo, tendrías una función que hace lo siguiente:

// Prepara la dirección: Toma la URL de tu backend 
// (la que definiste en Docker: http://localhost:8000).
// Lanza la petición: Usa una herramienta (como fetch o axios) para tocar la 
// puerta de tu FastAPI.

// Procesa la respuesta: Espera a que el backend responda con el JSON, 
// revisa que no haya errores y "limpia" los datos para que React los use fácilmente.