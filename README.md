# Challenge Amigo Secreto

Una aplicación web simple para organizar sorteos de intercambio de regalos entre amigos.

## Descripción

Esta aplicación permite a los usuarios agregar nombres de amigos a una lista y realizar un sorteo aleatorio para determinar quién será el "amigo secreto". Es perfecta para organizar intercambios de regalos en navidad, cumpleaños o cualquier ocasión especial.

## Características

- Agregar nombres de amigos a una lista
- Validación de entrada (no permite campos vacíos)
- Visualización de la lista de participantes
- Sorteo aleatorio de un participante
- Interfaz simple y fácil de usar
- Diseño responsive

## Cómo usar

1. Agregar amigos: Escribe el nombre de un amigo en el campo de texto y haz clic en "Añadir"
2. Ver la lista: Los nombres aparecerán en una lista debajo del campo de entrada
3. Realizar sorteo: Una vez que tengas al menos un amigo en la lista, haz clic en "Sortear amigo"
4. Ver resultado: El amigo secreto seleccionado aparecerá en pantalla

## Estructura del proyecto

```
amigo-secreto/
├── index.html          # Estructura HTML principal
├── style.css           # Estilos CSS
├── app.js             # Lógica JavaScript
├── assets/            # Imágenes y recursos
│   ├── amigo-secreto.png
│   └── play_circle_outline.png
└── README.md          # Este archivo
```

##  Tecnologías utilizadas

- **HTML5** - Estructura de la página
- **CSS3** - Estilos y diseño visual
- **JavaScript** - Lógica de la aplicación

## Instalación y ejecución

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/amigo-secreto.git
   ```

2. Navega al directorio:
   ```bash
   cd amigo-secreto
   ```

3. Abre el archivo index.html** en tu navegador web favorito

¡No requiere instalación de dependencias ni servidor local!

##  Funcionalidades técnicas

### Validaciones implementadas
- Verifica que el campo de entrada no esté vacío
- Alerta al usuario si intenta agregar un nombre vacío
- Previene sorteo si no hay participantes

### Algoritmo de sorteo
- Utiliza `Math.random()` para generar números aleatorios
- Selecciona un índice aleatorio de la lista de amigos
- Garantiza que todos los participantes tengan la misma probabilidad

## Personalización

Puedes personalizar la apariencia modificando las variables CSS en `style.css`:

```css
:root {
    --color-primary: #4B69FD;
    --color-secondary: #FFF9EB;
    --color-button: #fe652b;
    /* Más variables... */
}
```

