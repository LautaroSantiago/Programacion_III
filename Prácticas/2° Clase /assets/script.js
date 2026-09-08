    function descargarImagen() {
        fetch("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9XfgAzYA7fa3jQpfWkkiATI_fU6FMmU-jAwBpLMLNdg&s=10")
            // Hace una petición HTTP a esa URL para traer el recurso fetch() devuelve una Promise que se resuelve cuando llega la respuesta del servidor

            .then(r => r.blob())
                // "r" es la respuesta (Response) del fetch .blob() la convierte en un objeto
                // Blob (datos binarios crudos, ideal para imágenes/archivos) 
                // También devuelve una Promise, por eso se puede encadenar otro .then()
            .then(blob => {
                const url = URL.createObjectURL(blob);
                // Crea una URL temporal (tipo blob:http://...) que apunta a ese Blob en memoria, para poder usarla como si fuera un link a un archivo real

                const a = document.createElement("a"); // Crea dinámicamente un elemento <a> en JavaScript (no está en el HTML, vive solo en memoria por ahora)

                a.href = url;    // Le asigna como destino la URL del blob que se creó arriba

                a.download = "humildad.jpg"; // Le dice al navegador que, al hacer click en este link, en vez de  navegar/abrir el archivo, lo DESCARGUE con ese nombre de archivo
                a.click(); // Simula un click en ese <a> por código, disparando la descarga  automáticamente sin que el usuario tenga que clickear nada visible
                URL.revokeObjectURL(url);
                // Libera de memoria la URL temporal creada antes, ya que una vez disparada la descarga no se necesita más. Es buena práctica para no dejar basura en memoria (memory leak)
            })
            .catch(err => console.error("Error al descargar:", err));
            // Si algo falla en cualquier punto de la cadena (el fetch, el blob, etc.),se captura el error acá y se muestra en la consola en vez de romper
            // silenciosamente o tirar un error sin explicación
    }