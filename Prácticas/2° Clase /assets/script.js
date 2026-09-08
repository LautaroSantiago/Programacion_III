        function descargarImagen() {
            fetch("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9XfgAzYA7fa3jQpfWkkiATI_fU6FMmU-jAwBpLMLNdg&s=10")
                .then(r => r.blob())
                .then(blob => {
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = "humildad.jpg";
                    a.click();
                    URL.revokeObjectURL(url);
                })
                .catch(err => console.error("Error al descargar:", err));
        }