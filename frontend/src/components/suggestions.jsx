// Un componente en la carpeta `components` debe ser como una **pieza de Lego**: 
// independiente, reutilizable y que solo se encarga de una cosa.

// Siguiendo tu idea del **Perfil**, aquí te explico la estructura que debería tener
//  ese archivo (por ejemplo, `src/components/PerfilCard.jsx`) para que sea profesional:

// ### 1. La Estructura del Archivo

// Un componente bien organizado tiene tres partes:

// 1. **Importaciones:** Donde traes el CSS o iconos.
// 2. **La Función (El Componente):** Donde recibes las **props** 
// (los atributos que mencionabas).
// 3. **Exportación:** Para que otros archivos puedan "llamarlo".

// ### 2. Recibiendo "Atributos" (Props)

// En lugar de escribir un nombre fijo, usas un objeto (normalmente llamado `props`) 
// para que el componente sea dinámico.

// * **Lógica:** Si le pasas un nombre, lo muestra. Si le pasas una foto, la renderiza.
// * **Independencia:** Este archivo no sabe de dónde vienen los datos 
// (si de una base de datos o de un archivo local), solo sabe cómo dibujarlos.

// ---

// ### 3. Ejemplo de organización interna (Conceptuál)

// Imagina el archivo `PerfilCard.jsx`:

// * **Definición:** Creas una función que recibe un objeto 
// con `nombre`, `descripcion` y `imagen`.
// * **Estructura Visual:** Usas etiquetas HTML (`div`, `img`, `h2`) y 
// les asignas clases de CSS para que se vea bien.
// * **Seguridad:** Puedes definir qué pasa si no llega una imagen 
// (por ejemplo, mostrar un icono por defecto).

// ### ¿Por qué ponerlo en una carpeta aparte?

// Si mañana quieres cambiar el diseño de todas las tarjetas de perfil de tu web, 
// **solo editas este archivo**. No tienes que buscar en todo tu código dónde escribiste 
// "perfil".

// ### 💡 Un consejo sobre CSS

// Cuando creas componentes, es muy útil crear también un archivo CSS con el 
// mismo nombre en la misma carpeta (ej: `PerfilCard.css`). Así, cada pieza de tu 
// interfaz tiene su propia "ropa" y no se mezcla con el resto del sitio.

// ¿Te gustaría que te explicara cómo hacer para que este componente **avise** 
// al componente principal cuando alguien hace clic en él (por ejemplo, para 
//     abrir un detalle)? Eso se llama "Subir el estado".