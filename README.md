# Programación III - UTN FRA

Repositorio de la cursada de Programación III (Frontend: HTML, CSS, JS) en UTN FRA, comisión 132.

---

## 📅 Clase 1 - 21/08 - HTML básico

**Temas vistos:**
- Estructura base: `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`
- Meta etiquetas: charset UTF-8, viewport, title
- Etiquetas y atributos (clave="valor")
- Encabezados `<h1>` a `<h6>` — regla de un solo `<h1>` por página, descendientes en orden
- Elementos en bloque vs. en línea
- Listas `<ul>` / `<ol>` / `<li>`
- Etiquetas de formato de texto: `<strong>`, `<em>`, `<mark>`, etc.
- Enlaces `<a href target>` e imágenes `<img src alt>`
- Buenas prácticas: `alt` en imágenes, optimización de peso, código semántico

**Aplicado en:** página de receta de empanadas criollas.

**Guía:** [W3Schools - HTML Basic](https://www.w3schools.com/html/html_basic.asp)

[![Ver resultado](https://img.shields.io/badge/🌐_Ver_resultado-2ea44f?style=for-the-badge)](https://htmlpreview.github.io/?https://github.com/LautaroSantiago/Programacion_III/blob/master/1%C2%B0%20Clase%20-%20(Receta)/index.html)
[![Ver código](https://img.shields.io/badge/💻_Ver_código-0969da?style=for-the-badge)](https://github.com/LautaroSantiago/Programacion_III/blob/master/1%C2%B0%20Clase%20-%20(Receta)/index.html)

<details>
<summary>📋 Copiar código (index.html)</summary>

```html
<!-- 
    Receta de empanadas - practica de la clase de Programacion 3
    Profe Xavi dijo que aprovechemos la carga horaria para agarrar bien la maña
    de escribir codigo limpio desde el principio, asi que voy comentando 
    mientras hago para acordarme despues
-->
<!DOCTYPE html>
<!-- 
    esto va primero que nada, es la instruccion que le dice al navegador
    que el documento es HTML. el profe remarco que el navegador NO detecta 
    esto solo por la extension del archivo, lo necesita si o si
-->
<html lang="es">
<head>
    <!-- 
        todo lo de aca adentro es info que NO se ve en la pagina,
        el profe lo llamo "informacion no visible" 
    -->

    <meta charset="UTF-8">
    <!-- 
        el encodificado de caracteres, hoy por hoy siempre UTF-8,
        ya nadie usa ASCII. esto evita que las tildes y la ñ salgan raras
    -->

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- 
        esto ajusta el "puerto visual" para que la pagina se vea bien
        en el celular, el profe dijo que lo vamos a retomar cuando
        veamos responsive pero que va siempre por defecto
    -->

    <title>Receta de Empanadas</title>
    <!-- title es de las pocas etiquetas de metadata que se abren y cierran (meta no) -->
</head>
<body style="background-image: url('https://img.magnific.com/foto-gratis/fondo-texturado-abstracto-blanco_23-2148624407.jpg?semt=ais_hybrid&w=740&q=80'); background-repeat: repeat;">
    <!-- 
        ojo aca: esto ya es un adelanto de CSS metido como atributo style
        directo en la etiqueta. el profe dijo que el atributo style lo
        íbamos a "ignorar" por ahora porque el posicionamiento y los
        estilos los vamos a ver bien la clase que viene con CSS aparte,
        pero lo dejo anotado aca para acordarme cuando lo pasemos
        a una hoja .css como corresponde
    -->

    <!-- 
        REGLA IMPORTANTE (anotar): solo puede haber UN h1 por pagina,
        tiene que ser el titulo principal y va arriba de todo.
        de ahi para abajo los encabezados tienen que ser descendentes
        (h2, h3...) sin saltar de mas. esto ayuda un monton al SEO
    -->
    <h1>Empanadas Criollas</h1>

    <!-- 
        el parrafo es de bloque, ocupa TODO el ancho aunque el texto
        sea corto. por eso cada p que ponga se va a ir uno debajo del otro
    -->
    <p>Receta clasica de empanadas criollas fritas, rellenas de carne cortada a cuchillo, huevo duro y aceitunas.</p>

    <!-- 
        etiqueta img: src es de donde saca la imagen (source = fuente)
        y alt es el texto alternativo, MUY importante ponerlo siempre
        porque si la imagen no carga por lo menos se entiende que iba ahi,
        y ademas suma para accesibilidad y SEO. sin el alt la etiqueta
        "no tiene sentido" como decia el profe con los atributos
    -->
    <img src="https://cocinaderestauranteencasa.com/wp-content/uploads/2023/05/LISTA-1170x840.jpg.webp" alt="Empanadas criollas horneadas recién salidas del horno">

    <h2>Ingredientes</h2>
    <!-- 
        lista desordenada (unordered list), el orden de los ingredientes
        no importa, por eso ul y no ol. cada item va en su li (list item)
    -->
    <ul>
        <li>500 g de masa para empanada argentina</li>
        <li>250 g de lomo de ternera</li>
        <li>3 cebollas</li>
        <li>1/4 taza de aceitunas picadas</li>
        <li>4 huevos duros picados (solo la clara)</li>
        <li>2 cebolletas</li>
        <li>1 cucharada de comino molido y cebollino finamente picado</li>
        <li>Pimienta negra recién molida y sal al gusto</li>
        <li>1 cucharada de ají molido</li>
        <li>1/2 vaso de vino blanco</li>
        <li>Aceite de oliva o de girasol al gusto</li>
        <li>2 cucharadas de pimentón dulce</li>
        <li>1 pimiento rojo</li>
    </ul>

    <h2>Preparación</h2>
    <!-- 
        aca cambia a lista ORDENADA (ol) porque los pasos si tienen
        que ir en orden, si no la receta no tiene sentido
    -->
    <ol>
        <li>Cortar el lomo a cuchillo en tiras pequeñas parejas.</li>
        <li>Machacar en un mortero el ají molido, el pimentón, el comino y una cucharada de vino blanco, y adobar la carne con esa pasta. Sazonar con pimienta y sal, tapar y dejar en la heladera de un día para el otro.</li>
        <li>Freír la carne apenas en una cazuela con aceite, solo para asustarla, y reservar junto con su jugo.</li>
        <li>Picar la cebolla, el cebollino, las cebolletas y el pimiento en juliana.</li>
        <li>Sofreír la cebolla y el pimiento a fuego muy lento hasta que ablanden sin dorarse, y a los 10 minutos agregar el vino blanco. Este proceso lleva unos 20 minutos.</li>
        <li>Añadir la carne con su caldo, rectificar sal y pimienta, y dejar reducir unos 5 minutos sin que se seque del todo.</li>
        <li>Incorporar el huevo duro picado en trozos grandes y las aceitunas bien picadas, mezclar todo y dejar enfriar el relleno.</li>
        <li>Estirar la masa con el rodillo hasta unos 5 mm de espesor y cortar discos de unos 15 cm de diámetro.</li>
        <li>Rellenar cada disco con una cucharada de relleno frío, pintar el borde con huevo batido, cerrar y sellar trenzando el repulgue con un tenedor.</li>
        <li>Freír en abundante aceite bien caliente hasta que doren, y escurrir sobre papel absorbente.</li>
    </ol>

    <!-- 
        hr = horizontal ruler, esta es de las pocas que el profe dijo
        que sigue estando bien usarla. el br en cambio lo mando a olvidar
        porque el posicionamiento despues lo vamos a manejar con CSS
    -->
    <hr>

    <!-- 
        strong es una etiqueta de formato, de texto IMPORTANTE (en linea,
        no ocupa todo el ancho como el parrafo). tambien suma para SEO
    -->
    <p><strong>Tip:</strong> dejar enfriar bien el relleno antes de armar, así no se rompen las tapas al freír.</p>

    <!-- 
        etiqueta a (ancla) con el atributo href que es la URL a donde
        lleva el link. target="_blank" es para que abra en pestaña nueva,
        si no pongo target por defecto es como si tuviera _self (se abre aca mismo).
        sin el href el link "no sirve para nada" como dijo el profe
    -->
    <p>Fuente: <a href="https://www.abc.es/recetasderechupete/receta-de-empanada-argentina-o-criolla/283/" target="_blank">receta de empanada argentina o criolla - ABC</a></p>

</body>
</html>
```

</details>

---

<!--
  PLANTILLA PARA LA PRÓXIMA CLASE (copiar y completar):

  ## 📅 Clase N - DD/MM - Tema

  **Temas vistos:**
  - ...

  **Aplicado en:** ...

  [![Ver resultado](https://img.shields.io/badge/🌐_Ver_resultado-2ea44f?style=for-the-badge)](https://htmlpreview.github.io/?https://github.com/LautaroSantiago/Programacion_III/blob/master/CARPETA%20DE%20LA%20CLASE/index.html)
  [![Ver código](https://img.shields.io/badge/💻_Ver_código-0969da?style=for-the-badge)](https://github.com/LautaroSantiago/Programacion_III/blob/master/CARPETA%20DE%20LA%20CLASE/index.html)

  <details>
  <summary>📋 Copiar código (index.html)</summary>

  ```html
  (pegar acá el código completo)
  ```

  </details>
-->
