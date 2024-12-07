Aqui ire documentando todo el codigo y lo necesario para aprender, lo mas probable es que no vuelva a ver esto, pero ahi queda para en un futuro si lo necesitara repasar estos temas, lo cual espero que no ocurra, ya que quiero dominar este lenguaje.

---

### **¿Por qué aprender JavaScript?**

Tienes que aprender JavaScript, y lo tienes que aprender ahora. Pero, ¿por qué? ¿Qué es JavaScript y para qué sirve?

JavaScript es el lenguaje de programación más utilizado en la web. **El 98.8%** de los sitios web y las aplicaciones web lo utilizan. Además, cerca del **97%** de los desarrolladores de aplicaciones móviles utilizan JavaScript para desarrollar aplicaciones para **Android** y **iOS**. Actualmente, es el lenguaje más popular en todo el mundo. Lo utilizan empresas como **Google**, **Microsoft**, **Netflix**, **PayPal**, **Walmart** y **Uber**.

¿Qué significa esto? Que lo tienes que aprender **sí o sí**. Y lo tienes que aprender **ahora**. 

¿Estás listo para aprender?

---

### **Estructura del Curso**

Este curso no tiene requisitos previos. Solo necesitas una computadora con internet y, a medida que avanzamos, vamos a instalar todas las herramientas necesarias. A continuación, te presento el temario:

1. **Tipos básicos**  
2. **Operadores**  
3. **Control de flujo**  
4. **Objetos**  
5. **Arrays**  
6. **Funciones**  
7. **Prototipos**  
8. **Herencia con prototipos**  
9. **Clases (ES6)**  
10. **Manipulación del DOM**  
11. **Asincronía** (Aquí veremos temas como **Ajax**, **promesas**, cómo conectarnos con **APIs**, entre muchas otras cosas)  
12. **Herramientas de empaquetado**  

---

### **¿Cómo tomar este curso?**

Comencemos, y te quiero dar la bienvenida a este curso de **Ultimate JavaScript**. JavaScript es uno de los lenguajes más populares en la actualidad, por lo que has tomado una excelente decisión al aprender este lenguaje.

Pero antes de empezar, quiero darte un par de **consejos** sobre cómo tomar este curso.

1. **Míralo completo**: Te recomiendo que veas el curso de principio a fin, sin saltarte ningún video. Puede ser que muchas de las dudas que te vayan surgiendo se resuelvan dentro del mismo curso.

2. **Si tienes dudas**: Si llegas a tener dudas, quiero que las dejes en la comunidad de **Hola Mundo**. Si estás inscrito en la academia, ya deberías tener acceso a esta comunidad. Aquí encontrarás un equipo de **profesores** dispuestos a ayudarte con todas tus dudas técnicas.

   - Si no estás en la academia y estás en **Udemy**, puedes dejar tus preguntas en la sección de **Preguntas y Respuestas**. En ambos casos, contarás con el apoyo de un equipo de profesores expertos, además de la **comunidad de desarrolladores** que también están aprendiendo con este curso.

---

### **Introducción**

En este video, vamos a resolver tres preguntas:

1. **¿Qué es JavaScript?**
2. **¿Qué es ECMAScript?**
3. **¿Qué se puede hacer con JavaScript?**

JavaScript lo podemos escribir de dos maneras: como **JavaScript** o de manera más corta como **JS**.

---

### **¿Qué es JavaScript?**

JavaScript es uno de los lenguajes de programación más populares y posiblemente el más utilizado en el mundo. Con JavaScript, puedes trabajar como desarrollador web, ya sea en el **frontend** o **backend**:

- **Frontend Developer**: Encargado de construir la parte visual de la aplicación.
- **Backend Developer**: Se encarga de la lógica del negocio en el servidor.
- **Fullstack Developer**: Sabe tanto frontend como backend.

Además de esto, con JavaScript también puedes ser **desarrollador móvil** (para aplicaciones Android e iOS) o **desarrollador de aplicaciones de escritorio**. De hecho, el editor de texto que vamos a utilizar en este curso está construido con JavaScript y es una **aplicación de escritorio**.

JavaScript también se usa para trabajar con **microcontroladores**. Este lenguaje es considerado como la "navaja suiza" de los lenguajes de programación.

---

### **Librerías y Frameworks Populares**

JavaScript se utiliza en algunas de las librerías y frameworks más populares, entre los cuales tenemos:

- **Vue.js** (pronunciado como "View")
- **Angular**
- **React** (la librería más popular actualmente)

---

### **Diferencia entre Framework y Librería**

Es importante entender la diferencia entre estos dos conceptos:

- **Framework**: Un framework te entrega muchas herramientas para desarrollar aplicaciones complejas. Te dice cómo trabajar.
- **Librería**: Una librería se encarga de resolver un problema específico. Te da una herramienta, pero no te dicta cómo estructurar tu trabajo.

En términos simples, un **framework** ofrece más herramientas que una **librería**. Con un framework puedes construir una aplicación completa, mientras que una librería solo resuelve un problema puntual.

---

### **¿Qué es ECMAScript?**

Ahora, vamos a responder a la pregunta: **¿Qué es ECMAScript?**

ECMAScript es una especificación que define los estándares para los lenguajes de programación como JavaScript. Originalmente, JavaScript fue creado para ejecutarse en navegadores web, específicamente en **Netscape**. Los sitios web en ese entonces eran estáticos, lo que significaba que para ver contenido nuevo debías navegar a otra página.

Netscape decidió entregar JavaScript a la **ECMA** (European Computer Manufacturers Association), que luego cambió su nombre para ser una organización sin fines de lucro dedicada a los estándares tecnológicos.

**ECMA 262** es la especificación más conocida de ECMAScript, y es la que define los estándares para JavaScript, **JScript** y **ActionScript**.

---

### **ECMAScript 2015 (ES6)**

La versión de ECMAScript de **2015** (también conocida como **ES6**) cambió **radicalmente** JavaScript. Algunas de las funcionalidades nuevas que se introdujeron fueron:

- **Let** y **const** (para declarar variables)
- **Arrow functions** (Funciones flecha)
- **Clases** (aunque las clases en JavaScript no son realmente clases, sino una sintaxis más amigable para trabajar con objetos y prototipos).

---

### **¿Cómo se ejecuta JavaScript?**

JavaScript fue originalmente creado para ejecutarse en los navegadores. Hoy en día, todos los navegadores modernos tienen un **motor JavaScript** que ejecuta el código.

El motor de **Google Chrome** se llama **V8**. Es un motor de código abierto, lo que significa que cualquier persona puede ver su código fuente.

Gracias a un desarrollador llamado **Ryan Dahl**, el motor V8 se integró con **C++** para permitir que JavaScript pueda ejecutarse en otras plataformas, como **servidores**, **aplicaciones de escritorio**, **aplicaciones móviles**, **videojuegos**, y **microcontroladores**. 

Este código, conocido como **Node.js**, permitió que JavaScript se pudiera ejecutar en **casi cualquier lugar**.

---

### **Herramientas necesarias**

Para el curso, necesitamos instalar tres herramientas:

1. **Visual Studio Code**: Este editor de texto está construido con JavaScript y lo usaremos durante el curso. La instalación es fácil, solo tienes que ir a [visualstudio.com](https://code.visualstudio.com/) y descargar la versión para tu sistema operativo.

2. **Node.js**: Este es un entorno que nos permitirá construir **bundles** (paquetes de código). Aunque no lo necesitamos inmediatamente, puedes descargarlo más tarde desde [nodejs.org](https://nodejs.org).

3. **Google Chrome**: Es importante usar este navegador para tener una experiencia uniforme en el curso. Google Chrome tiene herramientas de depuración que son muy útiles. Puedes descargarlo desde [google.com/chrome](https://www.google.com/chrome/).

---

### **Preparando el ambiente de trabajo**

En este paso, vamos a preparar nuestro ambiente de trabajo para que las lecciones que veremos a continuación sean más fáciles de seguir y para que todo el código que escribamos quede bien organizado.

1. **Abrir el explorador de archivos**  
   Si estás en **Mac**, utiliza **Finder**. Si estás en **Windows**, utiliza **Windows Explorer** (o el explorador de archivos de tu sistema operativo).  
   Busca una ubicación donde quieras guardar tu proyecto. En este caso, yo lo voy a guardar en un directorio llamado **workspace**. Si no tienes un directorio como ese, simplemente crea uno.

2. **Crear un nuevo directorio**  
   - Dentro del directorio `workspace`, crea una carpeta nueva con el nombre **Ultimate js** (todo junto).  
   - Si estás usando **Visual Studio Code**, puedes arrastrar esta carpeta directamente al editor para abrirla, o puedes ir a **File > Open** y seleccionar la carpeta creada.

3. **Crear el archivo `index.html`**  
   - En Visual Studio Code, haz clic en el icono de **nuevo archivo** (el símbolo con el documento) en la barra lateral.  
   - Nombra el archivo como **index.html.erb**.

4. **Generar una plantilla HTML**  
   - Dentro de **Visual Studio Code**, escribe el símbolo de **exclamación (!)** y selecciona la opción que aparece con el texto **Emmet abbreviate**. Esto generará una estructura básica de HTML.  
   - Modifica el título de la página para que diga **Ultimate js**.

5. **Guardar el archivo**  
   - Para guardar el archivo, utiliza el atajo de teclado **Cmd + S** (en Mac) o **Ctrl + S** (en Windows). También puedes ir a **File > Save** para guardar el archivo manualmente.

6. **Agregar contenido al cuerpo de la página**  
   - Dentro de la etiqueta `<body>`, agrega el texto **Hola mundo**.  
   - Guarda los cambios usando nuevamente el atajo de teclado.

---

### **Instalar la extensión "Live Server"**

Para ver los cambios en tiempo real mientras trabajamos con nuestro código, vamos a instalar una extensión en Visual Studio Code.

1. **Abrir la sección de extensiones**  
   - Haz clic en el icono de **extensiones** (la cajita compuesta por cuatro cuadros) en la barra lateral de Visual Studio Code.  
   - En el campo de búsqueda, escribe **Live Server**.

2. **Instalar la extensión**  
   - Encuentra la extensión creada por **Ritwick Dey**, que tiene más de **40 millones de descargas**.  
   - Haz clic en **Install** para instalarla.

3. **Abrir el archivo con Live Server**  
   - Una vez instalada la extensión, regresa a tu archivo **index.html.erb**.  
   - Haz clic derecho sobre el archivo y selecciona **Open with Live Server**.

4. **Verificar la configuración**  
   - Al hacer clic en **Open with Live Server**, tu navegador debería abrirse automáticamente y mostrarte una URL similar a **localhost:5500** o algo parecido.  
   - Si ves el texto **Hola mundo** en el navegador, significa que todo está funcionando correctamente y tu ambiente está configurado con éxito.

---

Ahora que hemos configurado el entorno de trabajo y verificado que todo está listo, podemos continuar con el siguiente video y comenzar a agregar más funcionalidades a nuestro proyecto.

---

### **Primera Aplicación en JavaScript**

En este video, vamos a crear nuestra primera aplicación utilizando JavaScript dentro de un archivo HTML. Para ello, necesitaremos incluir el código JavaScript en una etiqueta `<script>` dentro del archivo HTML.

#### **Pasos para agregar JavaScript en el archivo HTML:**

1. **Agregar la etiqueta `<script>`**  
   Después del texto "Hola Mundo" en el archivo `index.html`, vamos a agregar nuestra etiqueta `<script>`. Esto se hace de la siguiente manera:

   ```html
   <script>
       console.log("Hola Mundo");
   </script>
   ```

2. **Guardar los cambios**  
   Después de agregar el código, guarda los cambios en tu archivo utilizando el atajo de teclado **Cmd + S** (en Mac) o **Ctrl + S** (en Windows).

#### **Verificar el funcionamiento en el navegador:**

1. **Abrir las herramientas de desarrollador en el navegador (Chrome)**  
   - Abre el archivo HTML en **Google Chrome** y haz clic derecho en cualquier parte de la página.
   - Selecciona **Inspeccionar** (o **Inspect** si tu navegador está en inglés).
   - Una vez abiertas las herramientas de desarrollo, presiona la tecla **Escape** para mostrar o esconder la consola.

2. **Verificar el mensaje en la consola**  
   - En la consola (pestaña **Console**), deberías ver el mensaje **"Hola Mundo"**. Esto significa que el código JavaScript se ejecutó correctamente dentro de la página.

---

### **Explicación sobre la ubicación de la etiqueta `<script>`**

Es importante entender por qué colocamos el código JavaScript al final del archivo HTML, dentro de la etiqueta `<body>`. Aquí están las razones principales:

1. **Carga eficiente de la página web:**  
   Los navegadores web leen el código HTML de arriba hacia abajo. Si ponemos el código JavaScript al principio (por ejemplo, dentro de la etiqueta `<head>`), el navegador tendrá que descargar e interpretar el JavaScript antes de seguir cargando el resto del contenido de la página (como imágenes y textos). Esto podría resultar en una **pantalla en blanco** mientras se carga el JavaScript, lo cual ofrece una **mala experiencia de usuario**.

2. **Interacción con los elementos HTML:**  
   Cuando JavaScript interactúa con los elementos de la página (por ejemplo, títulos, párrafos, botones), necesita que esos elementos ya estén cargados. Si el JavaScript se ejecuta antes de que estos elementos se hayan cargado, el código puede generar errores o no funcionar correctamente. Colocar el `<script>` al final asegura que todo el contenido HTML ya esté disponible para ser manipulado por JavaScript.

---

### **Excepciones a la regla**

Aunque la regla general es colocar las etiquetas `<script>` al final de la etiqueta `<body>`, existen algunas **excepciones**:

- Algunas **librerías externas** pueden requerir que incluyas su código JavaScript dentro de la etiqueta `<head>`. En este caso, tendrás que seguir las instrucciones específicas de la librería y colocar el `<script>` en esa sección.
  
---

Con esto, hemos completado nuestra primera aplicación en JavaScript y comprendido cómo y por qué colocamos las etiquetas `<script>` al final del archivo HTML.

---
---

**Referenciando Archivos**

Es importante ordenar el código para que los próximos videos del curso sean más fáciles de seguir. A medida que avanzamos en el curso, no vamos a escribir solo una línea de código, sino muchas más, posiblemente cientos o miles. Si colocamos todo el código dentro de las etiquetas `<script>` en el archivo `index.html`, el proyecto se volvería difícil de gestionar.

Para evitar esto, vamos a separar el código en archivos más pequeños. Comencemos cortando el código que tenemos dentro de `<script>` en el archivo `index.html`. Para ello, usamos **Control + X** (o **Comando + X** si estás en Mac) para cortar el código. Luego, guardamos el archivo y nos dirigimos al explorador de archivos para crear un nuevo archivo llamado `app.js`. Una vez creado este archivo, pegamos el código que cortamos previamente.

Después de guardar los cambios en `app.js`, volvemos a `index.html` y eliminamos el código dentro de las etiquetas `<script>`. Luego, agregamos una referencia al archivo `app.js` escribiendo `src="app.js"`. Guardamos el archivo y al refrescar la página en el navegador, veremos que la aplicación sigue funcionando correctamente. Esto significa que hemos hecho una refactorización exitosa del código.

---

**¿Qué significa refactorizar?**

Imaginemos que tenemos nuestra aplicación alojada en un servidor en la nube, donde un usuario la está utilizando. El servidor responde correctamente a las peticiones del usuario, pero a medida que la aplicación crece, empieza a volverse más lenta y su rendimiento disminuye.

Lo que necesitamos hacer en este caso es cambiar la estructura interna del código para mejorar el rendimiento, sin afectar la experiencia del usuario ni el comportamiento externo de la aplicación. Refactorizar significa justamente eso: cambiar el código para mejorar su estructura, legibilidad y rendimiento, sin alterar su funcionamiento externo. En otras palabras, es hacer que el código sea más eficiente o más fácil de entender, pero sin que el usuario note ninguna diferencia, excepto que la aplicación ahora funciona mejor.

---

**Variables en JavaScript**

En JavaScript, al igual que en otros lenguajes de programación, existen las **variables**, que se pueden imaginar como "cajas" que contienen información. Por ejemplo, podríamos escribir la dirección de nuestra casa en un papel y ponerlo dentro de una caja. A esa caja le damos un nombre, como `dirección`. Cuando queramos saber qué hay dentro de la caja, solo tenemos que referirnos a la variable `dirección`, y nos devolverá la información que hemos guardado en ella.

Dentro de un computador, las variables están almacenadas en la **memoria RAM**. Para representar esto visualmente, podemos imaginar la memoria RAM como una tabla de chocolate o una red de pescar. En esa memoria, creamos una caja llamada `nombre`, donde guardamos un valor, como el texto "Hola Mundo". Si en algún momento queremos obtener el valor de `nombre`, solo tenemos que referirnos a la caja usando su nombre, y nos devolverá el valor que contiene, en este caso, "Hola Mundo".

---

**Creando y Usando Variables en JavaScript**

Ahora vamos a llevar esto al código. En **VS Code**, creamos un nuevo directorio llamado `01-tipos` para organizar las lecciones. Dentro de este directorio, creamos un archivo llamado `01-variables.js` y luego modificamos el archivo `index.html` para referenciar este nuevo archivo JavaScript.

Para definir una variable en JavaScript, usamos la palabra reservada `let`, seguida del nombre de la variable, un igual y el valor que queremos asignar. Por ejemplo:

```javascript
let nombre = "Hola Mundo";
```

Después de definir la variable, podemos imprimir su valor en la consola utilizando `console.log(nombre);`. Al ejecutar este código, veremos el mensaje "Hola Mundo" en la consola.

Es importante notar que no es necesario asignar un valor a la variable en el momento en que la creamos. Si definimos una variable sin asignarle un valor, como por ejemplo:

```javascript
let nombre;
```

El valor de `nombre` será `undefined`, lo que significa que la variable ha sido creada, pero aún no tiene un valor asignado. 

---

**Conclusión sobre las Variables y la Refactorización**

En resumen, las **variables** en JavaScript son contenedores de información que nos permiten almacenar y recuperar datos durante la ejecución de un programa. Las **refactorizaciones**, por otro lado, son cambios que realizamos en el código para mejorar su rendimiento o legibilidad, sin que afecten el comportamiento que los usuarios ven en la aplicación. La refactorización exitosa permite que nuestro código sea más eficiente y fácil de mantener mientras mantenemos la misma experiencia de usuario.

---

**Reglas para Nombrar Variables**

Existen ciertas reglas que debemos seguir para poder crear variables en JavaScript. Algunas son prácticas comunes en la industria, mientras que otras son restricciones impuestas por el lenguaje. Por ejemplo:

1. **Inicio de las variables**: 
   Las variables deben comenzar con letras (de la A a la Z) o con un guion bajo (`_`). No es permitido comenzar una variable con un número. Si intentamos hacerlo, JavaScript nos mostrará un error, y también Visual Studio Code (VS Code) nos alertará con una notificación.

2. **Palabras reservadas**: 
   Las variables no pueden tener el mismo nombre que las palabras reservadas de JavaScript. Por ejemplo, ya hemos visto que `let` es una palabra reservada, por lo que no podemos crear una variable llamada `let`.

---

**Convenciones de Nombres de Variables**

Además de las reglas del lenguaje, existen tres convenciones comunes para nombrar variables. Son prácticas ampliamente utilizadas en la industria y dependen del estilo que se prefiera o el que esté establecido en un equipo de desarrollo. Estas convenciones son:

1. **Upper Camel Case**:
   En esta convención, cada palabra que forme parte del nombre de la variable empieza con mayúscula, incluyendo la primera palabra. Un ejemplo de esto sería `NombreCompleto`. Esta convención es comúnmente utilizada en algunos lenguajes para nombrar **constantes**.

2. **Camel Case**:
   En esta convención, la primera palabra empieza con minúscula y las palabras siguientes comienzan con mayúscula. Un ejemplo sería `nombreCompleto`. Esta es la convención más comúnmente utilizada en JavaScript para nombrar variables.

3. **Snake Case**:
   En esta convención, las palabras se separan con guiones bajos. Por ejemplo, `nombre_completo`. Esta convención no es comúnmente utilizada en JavaScript, pero sí en otros lenguajes de programación, como Python.

---

**Ejemplo de Convenciones en JavaScript**

Vamos a crear variables siguiendo estas tres convenciones:

1. **Upper Camel Case**:
   ```javascript
   let NombreCompleto;
   ```
   Esta convención se utiliza más comúnmente para **constantes**.

2. **Camel Case**:
   ```javascript
   let nombreCompleto;
   ```

   JavaScript es **case sensitive**, lo que significa que diferencia entre mayúsculas y minúsculas. Por lo tanto, `nombreCompleto` y `NombreCompleto` son dos variables distintas.

3. **Snake Case**:
   ```javascript
   let nombre_completo;
   ```

Es importante notar que **camelCase** es la convención que más se utiliza en JavaScript, especialmente para nombrar variables. Así que, durante este curso, vamos a seguir esta convención.

---

**Declaración y Asignación de Variables**

En JavaScript, al declarar variables con `let`, podemos definir una variable y asignarle un valor en la misma línea. Sin embargo, también es posible declarar una variable sin asignarle un valor, y luego asignar un valor en una línea separada.

Ejemplo de **declaración y asignación** en una sola línea:

```javascript
let nombre = "Hola Mundo";
```

Pero si decidimos declarar la variable sin un valor y asignarlo después, la sintaxis es:

```javascript
let nombre;
nombre = "Felipe";
```

En este caso, **no necesitamos usar la palabra reservada `let`** nuevamente al asignar un valor a la variable. Solo escribimos el nombre de la variable y le asignamos un valor.

---

**Declarando Múltiples Variables en una Línea**

También podemos declarar más de una variable en la misma línea. Por ejemplo:

```javascript
let apellido, animal;
```

Aquí no es necesario volver a escribir `let` para cada variable, ya que JavaScript sabe que estamos declarando varias variables. Sin embargo, la práctica más recomendada es **declarar cada variable en una línea independiente** para mayor claridad.

---

**Buenas Prácticas al Nombrar Variables**

Cuando vayas a nombrar tus variables, asegúrate de que el nombre tenga **sentido** y que puedas **entender lo que contiene solo con leer el nombre**. Por ejemplo:

- Si ves una variable llamada `nombre`, sabes que contiene un **nombre**.
- Si ves una variable llamada `nombreCompleto`, sabes que contiene un **nombre completo** (nombre y apellido).
- Si ves una variable llamada `apellido`, sabes que contiene un **apellido**.
- Si ves una variable llamada `animal`, sabes que contiene el nombre de un **animal**.

Evita nombres ambiguos como `x`, `a`, `n1`, `r` o similares, ya que no indican claramente qué información almacena la variable.

Recuerda: un buen nombre de variable ayuda a **leer y entender el código** de manera más fácil y rápida.

---

### **Tipos de Datos en JavaScript**

En JavaScript, los **tipos de datos** se dividen en dos categorías principales: **tipos primitivos** y **tipos de referencia**. Vamos a ver ambos con más detalle.

#### **Tipos de Datos Primitivos:**

1. **Number**: Representa números, ya sean enteros o decimales.
2. **String**: Representa cadenas de texto.
3. **Boolean**: Representa valores de verdad, es decir, `true` o `false`.
4. **Undefined**: Representa una variable que ha sido declarada pero no se le ha asignado un valor.
5. **Null**: Representa una variable que explícitamente tiene un valor nulo, es decir, "vacío" o "ningún valor".

#### **Tipos de Datos de Referencia:**

1. **Array**: Representa una lista ordenada de valores.
2. **Object**: Representa un conjunto de propiedades y valores, también conocidos como objetos.
3. **Function**: Representa una función.
4. **Class**: Representa una clase, la cual es una plantilla para crear objetos.

### **Primitivos vs. Referencia**

La diferencia fundamental entre los tipos de datos **primitivos** y **de referencia** radica en cómo se almacenan en la memoria.

- **Tipos Primitivos** se almacenan en una memoria **fija** y son **rápidos** de acceder. Esta memoria se llama **stack**.
- **Tipos de Referencia** se almacenan en una memoria **dinámica**, conocida como **heap**, que puede crecer o reducirse según se necesite.

La memoria **stack** almacena el valor directamente, mientras que en **heap**, en lugar de almacenar el valor, se almacena una **referencia** o **dirección de memoria** que apunta al valor real. Por lo tanto, cuando se trabaja con tipos de referencia, lo que se pasa es la **referencia** al dato, no el dato en sí.

---

### **Tipos de Datos Primitivos en JavaScript**

A continuación, vamos a declarar y trabajar con ejemplos de los tipos de datos primitivos en JavaScript.

1. **Number**:
   Los números no requieren comillas y pueden ser enteros o decimales.

   ```javascript
   let numero = 1; // Tipo de dato: Number
   ```

2. **String**:
   Las cadenas de texto deben ir entre comillas (simples o dobles).

   ```javascript
   let texto = "Hola Mundo"; // Tipo de dato: String
   ```

   Al pasar el puntero del mouse sobre las variables, el editor te muestra el tipo de dato correspondiente: **Number** o **String**.

3. **Boolean**:
   Los valores booleanos son **true** o **false**. Es importante escribirlos correctamente.

   ```javascript
   let verdadero = true; // Tipo de dato: Boolean
   let falso = false;    // Tipo de dato: Boolean
   ```

4. **Undefined**:
   El tipo de dato **undefined** se asigna a una variable que ha sido declarada pero no se le ha asignado un valor aún, o a una variable que explícitamente se le asigna `undefined`.

   ```javascript
   let noDefinido; // Tipo de dato: undefined (por no asignar valor)
   let unDef = undefined; // Tipo de dato: undefined
   ```

   Es importante notar que **undefined** también puede ser un valor asignado a una variable, además de ser un tipo de dato.

5. **Null**:
   El tipo **null** representa una variable que explícitamente tiene un valor "vacío", es decir, que no contiene nada.

   ```javascript
   let nulo = null; // Tipo de dato: null
   ```

   **¿Cuándo utilizar null?** Un ejemplo sería cuando un usuario no selecciona ninguna opción en un menú desplegable, donde el valor asignado es "nulo", pero no indefinido, ya que la elección fue deliberada.

---

### **Resumen de Tipos Primitivos:**

- Los **números** son de tipo `Number`.
- Las **cadenas de texto** son de tipo `String`.
- Los valores **booleanos** (verdadero o falso) son de tipo `Boolean`.
- Las variables **no inicializadas** o explícitamente asignadas a `undefined` son de tipo `undefined`.
- El valor **null** representa un tipo de dato especial que se utiliza para indicar "sin valor".

---

### **Constantes en JavaScript**

En JavaScript, podemos declarar variables utilizando diferentes palabras clave. Ya vimos cómo hacerlo con `let`, pero ahora vamos a explorar las **constantes**.

#### **Declaración de una Constante:**

Las **constantes** son similares a las variables, pero con una diferencia importante: **su valor no puede cambiar una vez que ha sido asignado**. 

1. **Creación de una constante**:

   Para declarar una constante, usamos la palabra reservada **`const`**. A continuación, se muestra un ejemplo donde declaramos una constante llamada `nombre` y le asignamos el valor `"Hola Mundo"`:

   ```javascript
   const nombre = "Hola Mundo";
   ```

   Al imprimir esta constante con `console.log(nombre)`, se muestra `"Hola Mundo"`, tal como esperábamos.

2. **Cambio de valor de una constante**:

   En el caso de las variables creadas con `let`, podemos cambiar el valor de la variable sin problemas. Por ejemplo:

   ```javascript
   let nombre = "Hola Mundo";
   console.log(nombre);  // Muestra: Hola Mundo

   nombre = "Chanchito feliz";
   console.log(nombre);  // Muestra: Chanchito feliz
   ```

   Sin embargo, las constantes tienen un comportamiento diferente: **no podemos reasignarles un valor** una vez que se ha establecido. Intentar hacerlo generará un error. Si intentamos reasignar el valor de la constante `nombre`:

   ```javascript
   const nombre = "Hola Mundo";
   nombre = "Chanchito feliz";  // Error: Assignment to constant variable.
   ```

   En este caso, JavaScript arroja un error que indica que estamos intentando reasignar un valor a una constante, lo cual **no es permitido**.

#### **¿Cuándo usar `let` y `const`?**

- **`const`**: Se debe usar cuando sabemos que **el valor de la variable no cambiará** en el futuro. En otras palabras, **cuando queremos que el valor sea constante y no se modifique**. La mayoría de las veces, se recomienda utilizar `const` para asegurar que las variables no se cambien accidentalmente.
  
- **`let`**: Se debe usar cuando **necesitamos cambiar el valor de la variable** en el futuro. En situaciones en las que el valor de la variable debe variar durante la ejecución del código, es cuando tiene sentido utilizar `let`.

#### **Criterio de uso**:

1. **Uso de `const`**:
   - Siempre que una variable no deba cambiar de valor durante la ejecución del programa, utilizamos `const`.
   - `const` nos ayuda a proteger el valor de la variable de cambios accidentales, lo que hace que el código sea más predecible y seguro.

2. **Uso de `let`**:
   - Utilizamos `let` cuando sabemos que el valor de la variable **necesitará ser modificado** en algún momento.
   - Aunque no se recomienda cambiar valores frecuentemente, `let` es útil en situaciones donde la re-asignación de valor es necesaria, por ejemplo, en ciclos o cuando el valor depende de algún cálculo.

---

### **Tipado Dinámico en JavaScript**

En programación, existen dos tipos de **tipado**:

1. **Tipado Estático**: El tipo de dato de una variable se define explícitamente cuando se declara. No se puede cambiar el tipo de dato de la variable una vez asignado. Ejemplo: en Java, si defines una variable como `String`, no podrás asignarle un número más adelante sin provocar un error.

2. **Tipado Dinámico**: El tipo de dato de una variable no se define en el momento de su declaración y puede cambiar a lo largo del programa. En **JavaScript**, las variables pueden tener tipos de datos que cambian dinámicamente durante la ejecución. Ejemplo:

   ```javascript
   let nombre = "Hola";
   nombre = 42;  // Esto es completamente válido en JavaScript
   ```

   En este ejemplo, la variable `nombre` comienza como un **String** y luego cambia a un **Number**, sin generar ningún error, gracias al **tipado dinámico** de JavaScript.

#### **Uso de `typeof` en JavaScript**

La palabra clave **`typeof`** se utiliza para determinar el tipo de una variable. Ejemplo:

```javascript
let nombre = "Hola";
console.log(typeof nombre);  // Muestra: string
```

Esto devolverá el tipo de dato de la variable. Sin embargo, en el caso de **null**, se observa un comportamiento peculiar:

```javascript
let valor = null;
console.log(typeof valor);  // Muestra: object
```

Aunque el tipo de dato de `null` es **null**, **`typeof null`** devuelve **`object`**. Esto se debe a la implementación original de JavaScript, donde **null** era representado internamente como un **puntero nulo**, el cual se clasificaba como **un objeto vacío**.

#### **Razón del comportamiento de `typeof null`**

- **Implementación histórica**: En versiones tempranas de JavaScript, los valores de tipo **null** eran representados por el puntero nulo (un valor especial que apunta a nada). Debido a que los punteros nulos se trataban como objetos vacíos, la función **`typeof`** devolvía **`object`** para **null**.
  
- **Propuesta para ECMA-262**: Se propuso modificar la función para que **`typeof null`** devolviera **`null`**, pero esta propuesta fue rechazada. La implementación original se mantuvo.

---

### **Comentarios en JavaScript**

Los comentarios en JavaScript son importantes para documentar y explicar el código, ayudando a otros (o a ti mismo) a entender por qué y para qué se está escribiendo algo en el código. Vamos a ver cómo se pueden agregar comentarios en JavaScript.

#### **1. Comentarios de una sola línea**

Para agregar un comentario de una sola línea, se utilizan dos barras diagonales (`//`). Todo lo que escribas después de estas barras en esa línea será ignorado por el navegador o el intérprete de JavaScript.

**Ejemplo:**
```javascript
// Esta es una variable número
let numero = 42;
console.log(numero); // Este es otro comentario
```

En este caso, el navegador no ejecutará nada que esté después de `//`. Los comentarios de una línea también pueden ir al final de una línea de código:

```javascript
let numero = 42; // Este es el valor de la variable
```

#### **2. Comentarios de múltiples líneas**

Si necesitas agregar un comentario que ocupe varias líneas, puedes usar el siguiente formato:

```javascript
/*
Este es un comentario
que abarca varias líneas.
Nada de esto será ejecutado.
*/
```

Para escribir comentarios de varias líneas, comienzas con `/*` y terminas con `*/`. Todo lo que esté entre estos delimitadores será considerado como comentario y será ignorado.

**Ejemplo:**
```javascript
/*
Este bloque de código declara una variable
y luego imprime su valor en la consola.
*/
let numero = 42;
console.log(numero);
```

##### **Uso del formato oficial para comentarios multilínea**

La forma oficial para comentarios de múltiples líneas en JavaScript es usar `/*` y `*/`. Sin embargo, para mayor legibilidad, puedes aprovechar funcionalidades como las de Visual Studio Code, que al escribir un comentario de múltiples líneas con `/*` y `*/`, te ayuda a formatear y alinear el texto de manera más clara, colocando un `*` al inicio de cada línea interna del comentario.

**Ejemplo de VS Code con autocompletado:**
```javascript
/*
* Este es un comentario
* que se extiende por varias
* líneas, y VS Code alineará
* el asterisco en cada línea
*/
```

#### **Reglas generales al escribir comentarios**

1. **Comentarios explicativos**: Nunca escribas cosas obvias como "esto es un número" o "esto es una cadena". El código ya debe ser claro por sí mismo.
   
   **Incorrecto:**
   ```javascript
   let numero = 42; // Esto es un número
   ```
   
   **Correcto:**
   ```javascript
   let numero = 42; // Definimos el número de usuarios activos
   ```

   Los comentarios deben explicar **por qué** se hace algo, no **qué** se está haciendo. El código ya debe ser lo suficientemente claro para explicar lo que hace.

2. **No abusar de los comentarios**: Los comentarios deben usarse para explicar la lógica compleja, no para describir cada línea de código. Si el código es difícil de entender, tal vez sea una señal de que debería ser refactorado.

---

### **Objetos en JavaScript**

En JavaScript, los **objetos** son un tipo de dato complejo, utilizado para almacenar colecciones de datos y más complejas estructuras. Un objeto es **referenciado** en memoria, lo que significa que en lugar de almacenar el valor directamente, JavaScript guarda una **referencia** a la dirección de memoria del objeto.

#### **Definición de un objeto literal**

Los objetos en JavaScript se definen usando una sintaxis de llaves `{}` y pueden contener propiedades (o claves), que son pares de **clave** y **valor**. Esta estructura es conocida como **objeto literal**.

##### **Ejemplo básico de un objeto literal:**

```javascript
let personaje = {
  nombre: "Tanjiro",
  anime: "Demon Slayer",
  edad: 16
};
```

En este ejemplo, hemos creado un objeto llamado `personaje` que contiene tres propiedades:
- `nombre`: un **String** con el valor `"Tanjiro"`,
- `anime`: un **String** con el valor `"Demon Slayer"`,
- `edad`: un **número** con el valor `16`.

Cada propiedad en un objeto se representa como un par clave-valor. En este caso:
- La **clave** o **llave** es el nombre de la propiedad (como `nombre`, `anime`, `edad`),
- El **valor** es el dato asociado a esa propiedad (como `"Tanjiro"`, `"Demon Slayer"`, `16`).

#### **Accediendo a las propiedades de un objeto**

1. **Acceso utilizando notación de punto:**

   Para acceder a una propiedad de un objeto, podemos utilizar la notación de punto (`.`).

   ```javascript
   console.log(personaje.nombre);  // Imprime "Tanjiro"
   console.log(personaje.anime);   // Imprime "Demon Slayer"
   ```

2. **Acceso utilizando notación de corchetes:**

   La notación de corchetes (`[]`) se utiliza cuando necesitamos acceder a una propiedad de un objeto usando una **variable** o cuando el nombre de la propiedad contiene caracteres especiales (como espacios o símbolos). Además, es necesario pasar el nombre de la propiedad como un **string**.

   ```javascript
   console.log(personaje["nombre"]);  // Imprime "Tanjiro"
   console.log(personaje["anime"]);   // Imprime "Demon Slayer"
   ```

   **Ventaja** de usar la notación de corchetes:
   - Permite acceder a las propiedades cuando el nombre de la propiedad es dinámico o cuando no conocemos el nombre de antemano. 
   - Es útil cuando se están iterando las propiedades de un objeto o cuando las claves son variables.

   **Ejemplo con variable:**

   ```javascript
   let propiedad = "edad";
   console.log(personaje[propiedad]);  // Imprime 16
   ```

#### **Modificando las propiedades de un objeto**

Podemos modificar las propiedades de un objeto de la siguiente manera:

1. **Utilizando la notación de punto:**

   ```javascript
   personaje.edad = 13;  // Cambia el valor de la propiedad "edad"
   ```

2. **Utilizando la notación de corchetes:**

   ```javascript
   personaje["edad"] = 16;  // Cambia el valor de la propiedad "edad"
   ```

Ambas formas son válidas, pero si el nombre de la propiedad es una cadena dinámica o no es un identificador válido (como contener espacios), es recomendable utilizar la notación de corchetes.

#### **Eliminar propiedades de un objeto**

Si necesitamos **eliminar** una propiedad de un objeto, podemos usar el operador `delete`:

```javascript
delete personaje.anime;  // Elimina la propiedad "anime"
```

Al utilizar `delete`, la propiedad `anime` será eliminada del objeto `personaje`.

#### **Observación sobre el orden de las propiedades**

JavaScript no garantiza que las propiedades de un objeto se muestren en el mismo orden en el que fueron definidas. Es decir, el orden de las propiedades puede no ser el mismo al imprimir un objeto, aunque generalmente los motores de JavaScript mantendrán un orden lógico en los objetos.

#### **Resumen:**

- **Objetos en JavaScript**: Son colecciones de pares de clave-valor. Se crean usando la sintaxis de `{}`.
- **Propiedades**: Se accede a ellas usando **notación de punto** (`.`) o **notación de corchetes** (`[]`).
- **Modificar propiedades**: Se pueden modificar con ambas notaciones.
- **Eliminar propiedades**: Usando el operador `delete`.
- **Acceso dinámico**: La notación de corchetes es útil cuando las propiedades no son estáticas o son dinámicas.

### **Ejemplo completo:**

```javascript
let personaje = {
  nombre: "Tanjiro",
  anime: "Demon Slayer",
  edad: 16
};

console.log(personaje.nombre); // Tanjiro
console.log(personaje["anime"]); // Demon Slayer

// Modificar propiedad
personaje.edad = 13;
console.log(personaje.edad); // 13

// Eliminar propiedad
delete personaje.anime;
console.log(personaje); // { nombre: "Tanjiro", edad: 13 }
```

Este es un ejemplo básico de cómo trabajar con objetos en JavaScript. Los objetos son una de las estructuras de datos más importantes en el lenguaje, ya que permiten almacenar y gestionar información de manera flexible y eficiente.

---

### **Arrays en JavaScript**

En JavaScript, un **array** es una estructura de datos que nos permite almacenar varios valores en una sola variable. Los arrays son **listas ordenadas** de elementos, donde cada elemento tiene un índice numérico que comienza desde 0. Los arrays son objetos especiales que nos permiten almacenar colecciones de datos, como cadenas, números, objetos, entre otros.

### **Definir un Array**

Un array se puede crear de dos maneras: vacío o con elementos ya asignados. Utilizamos los **corchetes (`[]`)** para definir un array.

#### **Array vacío:**
```javascript
let listadoDeAnimales = [];
```

#### **Array con elementos:**
```javascript
let listadoDeAnimales = ["Chanchito", "Caballo"];
```

En este ejemplo, hemos creado un array llamado `listadoDeAnimales` que contiene dos elementos: `"Chanchito"` y `"Caballo"`.

### **Acceder a los elementos de un Array**

Los elementos de un array se acceden mediante su **índice**, el cual comienza desde **0**. 

#### **Ejemplo de acceso a un elemento:**
```javascript
console.log(listadoDeAnimales[0]); // Imprime "Chanchito"
```
Para acceder al primer elemento de `listadoDeAnimales`, utilizamos `listadoDeAnimales[0]`.

#### **Acceder a otros elementos:**
- El segundo elemento sería `listadoDeAnimales[1]` que corresponde a `"Caballo"`.
- Si agregamos más elementos, por ejemplo `"Dragón"`, este se ubicará en el índice 2.

### **Modificar los elementos de un Array**

Podemos modificar un elemento de un array utilizando su índice:

```javascript
listadoDeAnimales[2] = "Dragón";  // Agrega "Dragón" al índice 2
```

### **Agregar un elemento a un Array**

Para agregar un nuevo elemento a un array, puedes asignarlo a un nuevo índice:

```javascript
listadoDeAnimales[3] = "Perro";  // Agrega "Perro" al índice 3
```

### **Problemas al agregar elementos fuera del rango del Array**

Si intentamos agregar un elemento en un índice que está más allá de la longitud actual del array, el array tendrá **espacios vacíos** entre los elementos. Por ejemplo:

```javascript
listadoDeAnimales[10] = "Pes";  // Agrega "Pes" en el índice 10
```

En este caso, el array tendrá elementos vacíos entre los índices 3 y 9. Si verificamos el array, veremos que el índice 10 está ocupado por `"Pes"`, pero los índices vacíos no son visibles:

```javascript
console.log(listadoDeAnimales);  // [ 'Chanchito', 'Caballo', 'Dragón', 'Perro', <7 empty items>, 'Pes' ]
```

El array tendrá una **longitud de 11**, ya que el índice más alto es 10, pero las posiciones intermedias estarán vacías.

### **Longitud del Array**

La propiedad `length` de un array nos indica cuántos elementos tiene el array. A pesar de que los índices vacíos no contienen valores, el valor de `length` cuenta todos los índices, incluso los vacíos.

```javascript
console.log(listadoDeAnimales.length);  // Imprime 11
```

Esto significa que aunque tengamos elementos vacíos en el array, su longitud sigue siendo 11 porque el índice más alto es 10.

### **Acceder a un índice vacío en un Array**

Si intentamos acceder a un índice vacío, el valor será **`undefined`**:

```javascript
console.log(listadoDeAnimales[7]);  // Imprime undefined
```

### **Verificando el tipo de dato de un Array**

Aunque sabemos que los arrays son una estructura de datos especial en JavaScript, técnicamente son objetos. Si utilizamos la función `typeof` para verificar el tipo de dato de un array, veremos que se trata de un "objeto":

```javascript
console.log(typeof listadoDeAnimales);  // Imprime "object"
```

Aunque `typeof` nos dice que es un objeto, los arrays tienen métodos y propiedades especiales que los distinguen de los objetos comunes, como la propiedad `length` y métodos como `push()`, `pop()`, entre otros.

### **Acceder a los Métodos del Array**

Los arrays tienen varios métodos útiles, que están disponibles a través de su prototipo. En **VS Code**, podemos explorar estos métodos utilizando la notación de punto en el nombre del array:

```javascript
console.log(listadoDeAnimales.length);  // Accede a la propiedad "length"
```

Es muy importante recordar que **la propiedad `length` está escrita con `th` al final** y no con `ng`. Muchos desarrolladores cometen el error de escribirlo incorrectamente, lo que puede llevar a obtener `undefined`:

```javascript
console.log(listadoDeAnimales.lenght);  // Devuelve undefined (error tipográfico)
```

### **Resumen:**

1. **Definición de un array**: Los arrays se definen utilizando corchetes `[]`. Pueden ser vacíos o contener elementos de manera inicial.
2. **Acceso a elementos**: Utiliza índices, comenzando desde 0.
3. **Agregar elementos**: Puedes agregar elementos a través de índices específicos. Si el índice es más grande que la longitud actual, se crearán espacios vacíos.
4. **Longitud del array**: La propiedad `length` devuelve el número total de índices, incluidos los vacíos.
5. **Verificación del tipo de dato**: `typeof` devuelve "object" para los arrays, aunque los arrays tienen métodos especiales para tratarlos como colecciones.
6. **Errores comunes**: Es importante no escribir mal el nombre de las propiedades como `lenght` en lugar de `length`.

### **Ejemplo Completo:**

```javascript
let listadoDeAnimales = ["Chanchito", "Caballo"];
console.log(listadoDeAnimales[0]);  // "Chanchito"
console.log(listadoDeAnimales[1]);  // "Caballo"

// Modificar un elemento
listadoDeAnimales[2] = "Dragón";  // "Dragón" en el índice 2
console.log(listadoDeAnimales);  // [ "Chanchito", "Caballo", "Dragón" ]

// Agregar un nuevo elemento en un índice alto
listadoDeAnimales[10] = "Pes";
console.log(listadoDeAnimales);  // [ "Chanchito", "Caballo", "Dragón", "Pes", <7 empty items> ]

// Ver la longitud del array
console.log(listadoDeAnimales.length);  // 11

// Acceder a un índice vacío
console.log(listadoDeAnimales[7]);  // undefined

// Ver el tipo de dato
console.log(typeof listadoDeAnimales);  // "object"

// Acceder a la propiedad `length`
console.log(listadoDeAnimales.length);  // 11
```

Este es un resumen de cómo trabajar con **arrays** en JavaScript: cómo crearlos, acceder a sus elementos, modificarlos, y manejar propiedades importantes como la longitud.

---

### **Funciones en JavaScript**

Las **funciones** son bloques de código diseñados para realizar una tarea específica. Son fundamentales en JavaScript para organizar y reutilizar código. En este ejemplo, vamos a aprender cómo crear y llamar funciones, y cómo pasarles parámetros para hacerlas más dinámicas.

### **Definición de una Función Básica**

Para crear una función en JavaScript, usamos la palabra reservada `function`, seguida del nombre de la función, paréntesis y un bloque de código entre llaves `{}`. Aquí te muestro cómo crear una función sencilla:

```javascript
function saludar() {
  console.log("Hola Mundo");
}
```

1. **`function`**: Palabra clave para declarar una función.
2. **`saludar`**: Nombre de la función.
3. **`()`**: Paréntesis que indican que es una función.
4. **`{}`**: Llaves que contienen el bloque de código que se ejecutará cuando la función sea llamada.

**Nota importante:** El código dentro de una función **no se ejecuta** hasta que no se llama a la función.

#### **Llamar a una Función**

Para que una función ejecute su código, debemos llamarla en alguna parte de nuestro programa. La llamada a la función se hace utilizando su nombre y paréntesis.

```javascript
saludar(); // Llama a la función 'saludar' y ejecuta su código
```

Cuando ejecutamos esto, el resultado en la consola será:

```
Hola Mundo
```

### **Funciones con Return**

Las funciones no solo sirven para ejecutar acciones, sino también para **devolver un valor** que puede ser usado en otras partes del programa. Para devolver un valor, usamos la palabra clave `return`. Veamos un ejemplo de cómo hacerlo con una función que realiza una suma:

```javascript
function suma() {
  return 2 + 2;
}
```

En este caso, la función `suma()` **devuelve** el resultado de `2 + 2`, que es `4`.

#### **Guardar el resultado de una función**

Podemos guardar el valor devuelto por una función en una variable y usarlo más adelante:

```javascript
let resultado = suma(); // Guardamos el valor retornado por la función 'suma'
console.log(resultado); // Imprime '4' en la consola
```

Si ejecutamos este código, veremos el siguiente resultado en la consola:

```
4
```

### **Llamar a una Función dentro de `console.log()`**

En lugar de guardar el resultado de la función en una variable, también podemos llamarla directamente dentro de `console.log()`:

```javascript
console.log(suma()); // Llama a la función 'suma' y muestra el resultado directamente
```

Este código también imprimirá:

```
4
```

### **Funciones con Parámetros**

Hasta ahora hemos visto funciones que no reciben ningún valor, pero en la mayoría de los casos, las funciones deben ser **más dinámicas** y recibir **valores** a través de **parámetros**. Un parámetro es simplemente un valor que le pasamos a la función cuando la llamamos. 

Vamos a modificar la función `suma` para que reciba dos números como parámetros y los sume:

```javascript
function suma(a, b) {
  return a + b;
}
```

En este caso, `a` y `b` son parámetros de la función `suma`. Ahora, cuando llamamos a la función, debemos pasarle dos valores (argumentos):

```javascript
let resultado = suma(5, 3); // Llamamos a la función 'suma' con los valores 5 y 3
console.log(resultado); // Imprime '8'
```

En este caso, la función `suma` recibirá los valores `5` y `3`, los sumará y devolverá `8`.

### **Ejemplo Completo de Funciones con Parámetros y Return**

```javascript
// Función para saludar
function saludar(nombre) {
  console.log("Hola " + nombre);
}

// Llamada a la función 'saludar' pasando un argumento
saludar("Juan"); // Imprime "Hola Juan"

// Función para sumar dos números
function suma(a, b) {
  return a + b;
}

// Llamada a la función 'suma' con dos argumentos
let resultado = suma(10, 15);
console.log(resultado); // Imprime "25"
```

### **Resumen de Conceptos Clave:**

1. **Definición de una función**:
   - Usamos la palabra clave `function`, seguido del nombre, paréntesis `()` y un bloque de código `{}`.
   
2. **Llamada a una función**:
   - Llamamos a la función escribiendo su nombre seguido de paréntesis `()`.
   
3. **Funciones con `return`**:
   - Una función puede devolver un valor usando `return`. Este valor puede ser guardado en una variable o usado directamente.
   
4. **Funciones con parámetros**:
   - Podemos hacer que las funciones reciban **valores** externos a través de parámetros. Esos valores se pasan cuando llamamos a la función.

5. **Funciones sin parámetros**:
   - Las funciones también pueden funcionar sin parámetros, ejecutando un conjunto de instrucciones fijas.

6. **Ejemplo de uso**:
   - **Funciones sencillas**: `console.log("Hola Mundo")`
   - **Funciones que retornan valores**: `return a + b`
   - **Funciones con parámetros**: `function saludar(nombre) { ... }`

---

### **Argumentos y Parámetros en JavaScript**

En JavaScript, los **parámetros** y **argumentos** son conceptos fundamentales cuando se trabajan con funciones. Permiten que las funciones sean más dinámicas y reutilizables. En este video se profundiza en cómo hacer funciones más flexibles utilizando estos conceptos.

### **Conceptos Básicos: Parámetros y Argumentos**

1. **Parámetros**: Son variables definidas en la declaración de una función, que representan los valores que la función recibirá cuando sea llamada.
2. **Argumentos**: Son los valores específicos que se pasan a la función cuando se hace una llamada a esa función.

#### **Ejemplo: Suma de Dos Números con Parámetros**

Comencemos con una función simple que suma dos números:

```javascript
function suma(a, b) {
  return a + b;
}
```

- **Parámetros**: `a` y `b` son parámetros de la función `suma`.
- **Retorno**: La función devuelve la suma de `a` y `b`.

Ahora, para llamar a la función y obtener el resultado de una suma, pasamos los **argumentos** cuando la invocamos:

```javascript
let resultado = suma(5, 3);
console.log(resultado);  // Imprime "8"
```

En este caso, `5` y `3` son los **argumentos** pasados a la función. Estos valores se asignan a los parámetros `a` y `b`, respectivamente.

### **Hacer Funciones Más Flexibles con Parámetros**

Supongamos que queremos hacer nuestra función `suma` más flexible, de modo que acepte cualquier valor para `a` y `b`, no solo los valores constantes. Para ello, podemos definir los parámetros en la declaración de la función, y luego pasar los **argumentos** correspondientes cuando la llamamos:

```javascript
function suma(a, b) {
  return a + b;
}

let resultado = suma(5, 2);  // Argumentos 5 y 2
console.log(resultado);  // Imprime "7"
```

De esta manera, la función puede ser reutilizada con diferentes valores sin necesidad de reescribir el código.

### **Múltiples Parámetros y Argumentos**

Las funciones pueden recibir múltiples parámetros y argumentos. Si queremos que una función acepte más de dos números, simplemente añadimos más parámetros en la declaración de la función y luego pasamos más argumentos al llamarla.

#### **Ejemplo: Función con Múltiples Parámetros**

```javascript
function suma(a, b, c) {
  return a + b + c;
}

let resultado = suma(5, 3, 2);
console.log(resultado);  // Imprime "10"
```

### **Acceder a los Argumentos de una Función con la Variable `arguments`**

En JavaScript, cada función tiene una variable especial llamada `arguments`, que contiene todos los valores pasados a esa función, incluso si no se especifican en los parámetros. 

#### **Ejemplo: Usar la variable `arguments`**

```javascript
function suma() {
  console.log(arguments);  // Muestra todos los argumentos pasados
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];  // Suma todos los argumentos
  }
  return total;
}

let resultado = suma(5, 6, 1, 2, 3);  // Pasamos 5, 6, 1, 2 y 3 como argumentos
console.log(resultado);  // Imprime "17"
```

Aquí, **`arguments`** es un objeto array-like que contiene todos los valores pasados a la función. Si se inspecciona el valor de `arguments`, veremos:

```javascript
Arguments(5) [5, 6, 1, 2, 3]
```

Esto nos muestra que la función recibe 5 argumentos, y los valores son `5`, `6`, `1`, `2` y `3`. Es importante notar que **`arguments` no es un array real**, por lo que no podemos usar los métodos de array directamente en él, pero sí podemos acceder a sus valores con la notación de índice.

### **Mejor Método para Acceder a Todos los Argumentos: `Rest Parameters`**

Aunque la variable `arguments` puede ser útil, la forma más moderna y recomendada de manejar múltiples argumentos es utilizando **Rest Parameters**. Esto convierte los argumentos en un verdadero array, lo que facilita el manejo de los mismos.

#### **Ejemplo con Rest Parameters**

```javascript
function suma(...args) {
  console.log(args);  // Muestra todos los argumentos pasados
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];  // Suma todos los argumentos
  }
  return total;
}

let resultado = suma(5, 6, 1, 2, 3);  // Usamos Rest Parameters para pasar los argumentos
console.log(resultado);  // Imprime "17"
```

En este caso, **`...args`** es el parámetro rest que recoge todos los valores pasados a la función y los convierte en un array. Esto nos permite usar directamente los métodos de array (como `.forEach`, `.map`, etc.) en los argumentos.

---

### **Declaraciones y Expresiones en JavaScript**

En JavaScript, es fundamental entender la diferencia entre **declaraciones** (declarations) y **expresiones** (expressions), ya que esto influye en cómo interpretamos y utilizamos el código. Además, también entra en juego el concepto de **sentencias** (statements), que tiene un significado específico dentro de la programación. En este video, se aborda la diferencia entre estos conceptos y cómo afectan la escritura de código en JavaScript.

### **Declaraciones (Declarations)**

Una **declaración** en JavaScript es cuando creamos algo (como una variable, función, clase, etc.) que luego se puede **referenciar** en el futuro. Las **declaraciones** se usan para definir una nueva entidad o estructura en el código que se utilizará más adelante.

#### **Ejemplos de Declaraciones:**

1. **Declaración de variables:**
   - `let` y `const` son ejemplos comunes de declaraciones de variables:
     ```javascript
     let variable;
     const constante = 5;
     ```

2. **Declaración de funciones:**
   - La palabra clave `function` se usa para declarar una función:
     ```javascript
     function miFuncion() {
       console.log("Hola Mundo");
     }
     ```

3. **Clases:**
   - Las clases también se declaran con la palabra clave `class`:
     ```javascript
     class Persona {
       constructor(nombre) {
         this.nombre = nombre;
       }
     }
     ```

4. **Importaciones y Exportaciones:**
   - `import` y `export` son declaraciones que permiten la importación o exportación de módulos:
     ```javascript
     import { miFuncion } from './archivo.js';
     export function miFuncion() { ... }
     ```

#### **Resumen de Declaraciones:**
- Las **declaraciones** en JavaScript son aquellas que definen algo que será utilizado en el futuro. 
- Si se está creando algo para ser referenciado más adelante, estamos haciendo una declaración.
  
**Declaraciones típicas:**
- `let`, `const`, `function`, `class`, `import`, `export`.

### **Sentencias (Statements)**

Una **sentencia** en JavaScript es una instrucción que realiza una tarea, como controlar el flujo del programa (por ejemplo, condicionales, bucles). A diferencia de las declaraciones, las sentencias no crean valores, sino que ejecutan una acción o realizan una operación.

#### **Ejemplos de Sentencias:**

1. **Condicionales:**
   - Las estructuras condicionales, como `if`, son ejemplos de sentencias:
     ```javascript
     if (x > 10) {
       console.log("Mayor que 10");
     }
     ```

2. **Bucles:**
   - Los bucles `for`, `while`, `do while` también son sentencias:
     ```javascript
     for (let i = 0; i < 5; i++) {
       console.log(i);
     }
     ```

3. **Switch:**
   - El `switch` es otra sentencia que permite elegir entre diferentes opciones:
     ```javascript
     switch (dia) {
       case 'lunes':
         console.log('Inicio de semana');
         break;
       default:
         console.log('Otro día');
     }
     ```

#### **Resumen de Sentencias:**
- Las **sentencias** son bloques de código que ejecutan alguna acción o controlan el flujo del programa.
- **Sentencias comunes** incluyen `if`, `for`, `while`, `switch`, etc.

### **Expresiones (Expressions)**

Una **expresión** es cualquier porción de código que **evalúa** a un valor. Es decir, una expresión es algo que se puede evaluar para obtener un resultado.

#### **Ejemplos de Expresiones:**

1. **Operaciones Matemáticas:**
   - Una simple operación matemática como `4 + 6` es una expresión porque se evalúa y da como resultado `10`:
     ```javascript
     let resultado = 4 + 6;  // Expresión
     console.log(resultado);  // Imprime 10
     ```

2. **Asignaciones:**
   - La asignación de un valor a una variable también es una expresión, ya que evalúa y asigna el valor de la derecha a la variable:
     ```javascript
     let x = 4;  // Expresión de asignación
     console.log(x);  // Imprime 4
     ```

3. **Llamadas a Funciones:**
   - Las llamadas a funciones también son expresiones porque la función puede devolver un valor:
     ```javascript
     function suma(a, b) {
       return a + b;
     }

     let resultado = suma(3, 7);  // Expresión
     console.log(resultado);  // Imprime 10
     ```

#### **Resumen de Expresiones:**
- Una **expresión** es cualquier fragmento de código que puede evaluarse para producir un valor.
- **Ejemplos comunes** incluyen operaciones matemáticas, asignaciones, llamadas a funciones, etc.

### **Diferencia entre Declaraciones y Expresiones**

1. **Declaraciones**:
   - **Definen** algo que se usará en el futuro.
   - No **devuelven** un valor directamente.
   - Ejemplos: `let`, `const`, `function`, `class`.

2. **Expresiones**:
   - **Evalúan** un valor.
   - Siempre **devuelven** un valor.
   - Ejemplos: `4 + 6`, `x = 4`, `suma(3, 7)`.

### **Cómo Diferenciar Declaraciones de Expresiones**

- Si el código **hace algo** y devuelve un valor, es una **expresión**.
- Si el código **define algo** para usarlo más tarde, es una **declaración**.

#### **Ejemplo de Declaración vs Expresión**

1. **Declaración (no devuelve un valor)**:
   ```javascript
   let x;  // Declaración de una variable
   ```

2. **Expresión (devuelve un valor)**:
   ```javascript
   let x = 4 + 6;  // Expresión que devuelve 10 y asigna a x
   ```

### **Diferencia en el Uso de `console.log()`**

- **No puedes hacer un `console.log` directamente a una declaración**, como un `let` o una función:
  ```javascript
  console.log(let x = 4);  // Esto genera un error
  ```

- **Puedes hacer un `console.log` a una expresión**, ya que siempre devuelve un valor:
  ```javascript
  console.log(4 + 6);  // Imprime 10
  ```

---

### **Operadores en JavaScript**

En JavaScript, los **operadores** son fundamentales para crear **expresiones** y llevar a cabo tareas matemáticas, lógicas y de asignación, lo que nos permite crear algoritmos para resolver problemas. Los principales operadores que se utilizan son: **aritméticos**, **de asignación**, **de comparación**, **lógicos** y **bitwise**. A continuación, exploramos los **operadores aritméticos**.

---

### **Operadores Aritméticos**

Los **operadores aritméticos** permiten realizar operaciones matemáticas entre valores.

#### **Principales Operadores Aritméticos:**

1. **Suma (`+`)**
   - Suma de dos números:
     ```javascript
     let a = 5;
     let b = 3;
     console.log(a + b);  // Resultado: 8
     ```

2. **Resta (`-`)**
   - Resta de dos números:
     ```javascript
     console.log(a - b);  // Resultado: 2
     ```

3. **Multiplicación (`*`)**
   - Multiplicación de dos números:
     ```javascript
     console.log(a * b);  // Resultado: 15
     ```

4. **División (`/`)**
   - División de dos números:
     ```javascript
     console.log(a / b);  // Resultado: 1.6667
     ```

5. **Módulo (`%`)**
   - Devuelve el **resto** de una división:
     ```javascript
     let x = 7;
     let y = 5;
     console.log(x % y);  // Resultado: 2
     ```
   - Ejemplo: Si dividimos 7 entre 5, el cociente es 1 y el **resto** es 2.

6. **Potencia (`**`)**
   - Eleva un número a la potencia de otro:
     ```javascript
     let a = 5;
     let b = 7;
     console.log(a ** b);  // Resultado: 78125
     ```
   - Ejemplo: `5**7` significa 5 elevado a la séptima potencia.

---

### **Operadores de Incremento y Decremento**

Los operadores de **incremento** y **decremento** son utilizados para aumentar o disminuir el valor de una variable en 1, respectivamente.

#### **Incremento (`++`)**

El operador **incremento** puede utilizarse de dos formas:

1. **Pre-incremento**: Incrementa el valor antes de usarlo:
   ```javascript
   let a = 5;
   console.log(++a);  // Resultado: 6
   ```

2. **Post-incremento**: Usa el valor y luego lo incrementa:
   ```javascript
   console.log(a++);  // Resultado: 5
   console.log(a);    // Resultado: 6 (valor actualizado)
   ```

#### **Decremento (`--`)**

El operador **decremento** también tiene dos formas:

1. **Pre-decremento**: Decrece el valor antes de usarlo:
   ```javascript
   let a = 7;
   console.log(--a);  // Resultado: 6
   ```

2. **Post-decremento**: Usa el valor y luego lo decrementa:
   ```javascript
   console.log(a--);  // Resultado: 7
   console.log(a);    // Resultado: 6 (valor actualizado)
   ```

---

### **Operadores en JavaScript**

En esta parte, nos vamos a enfocar en los **operadores de asignación**, **comparación** y **lógicos** en JavaScript. Estos operadores son esenciales para manipular datos, realizar comparaciones y realizar evaluaciones lógicas en nuestros algoritmos. A continuación, se describen los detalles de cada tipo de operador.

---

## **Operadores de Asignación**

Los **operadores de asignación** en JavaScript permiten asignar o modificar el valor de una variable de manera más concisa. 

### **Ejemplo Básico de Asignación**

Si tenemos una variable `a` con un valor inicial y queremos modificarla sumándole un valor específico, podemos hacer lo siguiente:

```javascript
let a = 5;
a = a + 5;  // Asignamos a un nuevo valor, sumando 5
console.log(a);  // Resultado: 10
```

### **Operadores de Asignación Combinada**

Los **operadores de asignación combinada** permiten realizar una operación sobre la variable y asignarle el resultado de manera más compacta. Por ejemplo:

- **Suma (`+=`)**:  
  `a += 5` es equivalente a `a = a + 5`.

  ```javascript
  let a = 5;
  a += 5;  // Suma 5 a 'a', ahora 'a' es 10
  console.log(a);  // Resultado: 10
  ```

- **Resta (`-=`)**:  
  `a -= 5` es equivalente a `a = a - 5`.

  ```javascript
  a -= 3;  // Resta 3 a 'a', ahora 'a' es 7
  console.log(a);  // Resultado: 7
  ```

- **Multiplicación (`*=`)**:  
  `a *= 2` es equivalente a `a = a * 2`.

  ```javascript
  a *= 2;  // Multiplica 'a' por 2, ahora 'a' es 14
  console.log(a);  // Resultado: 14
  ```

- **División (`/=`)**:  
  `a /= 2` es equivalente a `a = a / 2`.

  ```javascript
  a /= 2;  // Divide 'a' entre 2, ahora 'a' es 7
  console.log(a);  // Resultado: 7
  ```

- **Módulo (`%=`)**:  
  `a %= 3` es equivalente a `a = a % 3`.

  ```javascript
  a %= 3;  // Calcula el resto de 'a' dividido entre 3, ahora 'a' es 1
  console.log(a);  // Resultado: 1
  ```

- **Potencia (`**=`)**:  
  `a **= 2` es equivalente a `a = a ** 2`.

  ```javascript
  a **= 2;  // Eleva 'a' a la potencia de 2, ahora 'a' es 1
  console.log(a);  // Resultado: 1
  ```

---

## **Operadores de Comparación**

Los **operadores de comparación** se utilizan para comparar valores y devuelven un valor de tipo booleano (`true` o `false`), que es muy útil en estructuras condicionales.

### **Operadores Relacionales**

1. **Mayor que (`>`)**  
   Evalúa si el valor a la izquierda es mayor que el valor a la derecha.

   ```javascript
   let a = 10;
   console.log(a > 5);  // Resultado: true
   ```

2. **Mayor o igual que (`>=`)**  
   Evalúa si el valor a la izquierda es mayor o igual que el valor a la derecha.

   ```javascript
   console.log(a >= 5);  // Resultado: true
   console.log(a >= 15); // Resultado: false
   ```

3. **Menor que (`<`)**  
   Evalúa si el valor a la izquierda es menor que el valor a la derecha.

   ```javascript
   console.log(a < 15);  // Resultado: true
   ```

4. **Menor o igual que (`<=`)**  
   Evalúa si el valor a la izquierda es menor o igual que el valor a la derecha.

   ```javascript
   console.log(a <= 15); // Resultado: true
   console.log(a <= 5);  // Resultado: false
   ```

### **Operadores de Igualdad**

1. **Igualdad simple (`==`)**  
   Compara solo los **valores** de las variables, no el tipo de datos.

   ```javascript
   console.log(10 == "10");  // Resultado: true (porque solo compara el valor)
   ```

2. **Igualdad estricta (`===`)**  
   Compara tanto el **valor** como el **tipo de dato**.

   ```javascript
   console.log(10 === "10"); // Resultado: false (diferente tipo de dato)
   ```

3. **Desigualdad (`!=`)**  
   Compara si los valores no son iguales.

   ```javascript
   console.log(10 != 5);   // Resultado: true
   console.log(10 != 10);  // Resultado: false
   ```

4. **Desigualdad estricta (`!==`)**  
   Compara si los valores o los tipos de datos no son iguales.

   ```javascript
   console.log(10 !== "10");  // Resultado: true
   console.log(10 !== 10);    // Resultado: false
   ```

---

## **Operadores Lógicos**

Los **operadores lógicos** se utilizan para combinar condiciones y expresar relaciones entre expresiones booleanas.

### **Operador AND (`&&`)**

El operador **AND** devuelve `true` solo si ambas condiciones son `true`. Si alguna de las condiciones es `false`, el resultado es `false`.

```javascript
let mayor = true;
let suscrito = true;
console.log(mayor && suscrito);  // Resultado: true
```

Ejemplo práctico:

```javascript
let mayor = true;
let suscrito = true;
if (mayor && suscrito) {
  console.log("Acceso permitido a todo el contenido.");
} else {
  console.log("Acceso denegado.");
}
```

### **Operador OR (`||`)**

El operador **OR** devuelve `true` si al menos una de las condiciones es `true`. Solo devuelve `false` si ambas condiciones son `false`.

```javascript
console.log(mayor || suscrito);  // Resultado: true
```

Si una de las condiciones es `false` pero la otra es `true`, el resultado será `true`.

```javascript
mayor = false;
console.log(mayor || suscrito);  // Resultado: true
```

### **Operador NOT (`!`)**

El operador **NOT** invierte el valor de una expresión booleana. Si la condición es `true`, el operador `!` la convierte en `false` y viceversa.

```javascript
let acceso = true;
console.log(!acceso);  // Resultado: false
```

Ejemplo práctico:

```javascript
let mayor = false;
let catalogoInfantil = !mayor;  // Si mayor es false, catalogoInfantil será true
console.log(catalogoInfantil);  // Resultado: true
```

---

### Short Circuit en JavaScript

El "short circuit" o corto circuito es una técnica de evaluación en operadores lógicos donde la evaluación se detiene tan pronto como el resultado es conocido sin evaluar el resto de las expresiones. En este video, se usa en los operadores `AND` (`&&`) y `OR` (`||`). 

#### Conceptos Claves:
1. **Evaluación de valores "falsy"**: Algunos valores en JavaScript como `false`, `0`, `""` (cadena vacía), `null`, `undefined`, y `NaN` son considerados "falsy", es decir, cuando se evalúan en un contexto booleano, se interpretan como `false`.

2. **Operador OR (`||`)**: Si el primer valor evaluado es **truthy**, el operador OR devuelve ese valor y no evalúa el segundo operando. Si el primer valor es **falsy**, evalúa y devuelve el segundo valor. 

3. **Operador AND (`&&`)**: Si el primer valor es **falsy**, el operador AND devuelve ese valor sin evaluar el segundo operando. Si el primer valor es **truthy**, entonces evalúa y devuelve el segundo valor.

#### Ejemplo con "Short Circuit":
```javascript
let username = "";
let user = username || "anónimo"; // Si username es falsy, asigna "anónimo"
console.log(user); // Muestra "anónimo" porque username es un string vacío

username = "Chanchito feliz";
user = username || "anónimo"; // Ahora username tiene valor, por lo que no cambia
console.log(user); // Muestra "Chanchito feliz"
```

#### Uso de `&&` para ejecutar funciones condicionalmente:
El operador `&&` permite ejecutar una función solo si la primera expresión es `true`:
```javascript
function fn1() {
    console.log("Soy función 1");
    return true;
}

function fn2() {
    console.log("Soy función 2");
    return true;
}

fn1() && fn2(); // Ambas se ejecutan porque ambas devuelven true

fn1 = () => { console.log("Soy función 1"); return false; }
fn1() && fn2(); // Solo se ejecuta "Soy función 1" porque fn1 devuelve false
```

Esta técnica es útil para evitar la ejecución de código innecesario y optimizar el rendimiento en situaciones donde una expresión ya determina el resultado.

---

### Operadores Bitwise en JavaScript

Los **operadores bitwise** operan a nivel de bits en lugar de a nivel de valores completos. Esto puede ser útil para trabajar con manipulaciones de datos más eficientes o en aplicaciones que requieren operaciones de bajo nivel, aunque su uso en desarrollo diario es limitado.

#### Principales operadores bitwise:
1. **OR (`|`)**: Compara cada bit de dos números. Si al menos uno de los bits es 1, el resultado es 1.  
   Ejemplo: `1 | 3` → en binario `00000001 | 00000011 = 00000011` (resultado: 3).

2. **AND (`&`)**: Compara cada bit de dos números. El resultado es 1 solo si ambos bits son 1.  
   Ejemplo: `1 & 3` → en binario `00000001 & 00000011 = 00000001` (resultado: 1).

3. **XOR (`^`)**: Compara cada bit de dos números. El resultado es 1 si los bits son diferentes, de lo contrario es 0.  
   Ejemplo: `1 ^ 3` → en binario `00000001 ^ 00000011 = 00000010` (resultado: 2).

4. **NOT (`~`)**: Invierte todos los bits de un número.  
   Ejemplo: `~1` → en binario `~00000001 = 11111110` (resultado: -2).

#### Ejemplo de uso:
Si tienes los números `1` (binario `00000001`) y `3` (binario `00000011`), al usar `OR` (`|`):
```javascript
console.log(1 | 3); // 3
```
El operador OR da como resultado `3` porque ambos números comparten bits con 1, y el resultado es la combinación de estos bits.

#### Operadores AND:
Para `AND` (`&`), la operación devuelve un bit 1 solo si ambos operandos tienen un bit 1 en la misma posición:
```javascript
console.log(1 & 3); // 1
```
Aquí, el único bit 1 común en `1` y `3` está en la posición más baja, por lo que el resultado es `1`.

---

### Orden de Operaciones y Operador Ternario en JavaScript

#### **Orden de Operaciones**

El **orden de operaciones** en JavaScript sigue una jerarquía definida, que es crucial para evitar resultados inesperados al realizar operaciones matemáticas o lógicas. Si no se respeta este orden, puedes obtener resultados incorrectos, como en el ejemplo que se menciona en el video.

1. **Jerarquía básica de operadores**:
   - **Paréntesis** `()` tienen la **más alta prioridad**.
   - **Operadores matemáticos** como `*`, `/`, `%` tienen una prioridad mayor que los operadores de suma y resta (`+`, `-`).
   - **Operadores lógicos** como `&&`, `||` tienen una menor prioridad que los matemáticos.
   - Los **operadores de comparación** (`<`, `>`, `===`, `!==`, etc.) tienen una prioridad similar a los operadores lógicos.

En el ejemplo dado, el orden de las operaciones determinará si se ejecuta la multiplicación primero o si se realiza la división antes. Si quieres asegurarte de que una operación se ejecute antes que otra, puedes usar paréntesis `()` para cambiar el orden.

#### **Ejemplo práctico del orden de operaciones**:
```javascript
let resultado = 8 / (2 + 2);
console.log(resultado);  // Resultado: 1

// Sin los paréntesis, se ejecutaría primero la división y luego la suma
resultado = 8 / 2 + 2;
console.log(resultado);  // Resultado: 6
```

- En el primer caso, con paréntesis, primero se calcula `2 + 2`, y luego la división `8 / 4` devuelve `1`.
- En el segundo caso, sin paréntesis, la división se realiza primero (`8 / 2`), lo que da `4`, y luego se suma `2`, resultando en `6`.

### **Operador Ternario**

El **operador ternario** es una forma compacta de realizar una estructura condicional `if-else`. Su sintaxis es:
```javascript
condición ? valor_si_true : valor_si_false;
```
Es útil cuando tienes una condición simple y quieres asignar un valor a una variable basado en si la condición es verdadera o falsa.

#### Ejemplo de uso:
Supón que tienes una condición basada en la edad de un usuario y deseas permitir o no el ingreso según su edad. El operador ternario se usa para esto:
```javascript
let edad = 16;
let acceso = edad > 17 ? "Permitir ingreso" : "No puede ingresar";
console.log(acceso);  // "No puede ingresar"

// Cambiamos la edad a 25
edad = 25;
acceso = edad > 17 ? "Permitir ingreso" : "No puede ingresar";
console.log(acceso);  // "Permitir ingreso"
```

En este caso:
- Si la **edad** es mayor a 17, el resultado será `"Permitir ingreso"`.
- Si la **edad** es menor o igual a 17, el resultado será `"No puede ingresar"`.

#### **Ventajas del Operador Ternario**:
- Es más compacto y más fácil de leer en operaciones simples que un bloque `if-else`.
- Permite asignar el resultado directamente a una variable sin necesidad de declarar un bloque condicional largo.

**Recuerda**:
Aunque el operador ternario es útil, para condiciones más complejas, el uso de `if-else` es más recomendable ya que mejora la legibilidad del código.

---

### **Control de Flujo en JavaScript**

El **control de flujo** en JavaScript te permite determinar qué camino seguirá tu código dependiendo de las condiciones que se presenten. Es decir, según ciertos valores o circunstancias, puedes decidir qué instrucciones ejecutar o qué bloque de código saltar. En esta sección, se abordan los **condicionales** (`if`, `else`, `else if`) y los **bucles** (`while`), herramientas clave para controlar el flujo de ejecución de un programa.

#### **Condicionales (`if`, `else`, `else if`)**

1. **Instrucción `if`**:
   La instrucción `if` te permite ejecutar un bloque de código solo si una **condición** es verdadera. Si la condición no se cumple, el bloque de código dentro del `if` será ignorado.
   
   **Sintaxis básica**:
   ```javascript
   if (condición) {
       // Código a ejecutar si la condición es verdadera
   }
   ```

   **Ejemplo**:
   Si tenemos una variable `edad`, podemos verificar si es mayor de 17 años:
   ```javascript
   let edad = 25;
   if (edad > 17) {
       console.log("Usuario mayor de edad");
   }
   ```

   Si la edad fuera menor o igual a 17, no veríamos ningún mensaje porque el bloque de código dentro de `if` no se ejecutaría.

2. **Instrucción `else`**:
   La instrucción `else` te permite definir un bloque de código alternativo que se ejecutará **cuando la condición del `if` sea falsa**.

   **Sintaxis básica**:
   ```javascript
   if (condición) {
       // Código si la condición es verdadera
   } else {
       // Código si la condición es falsa
   }
   ```

   **Ejemplo**:
   Si cambiamos la edad a 15:
   ```javascript
   let edad = 15;
   if (edad > 17) {
       console.log("Usuario mayor de edad");
   } else {
       console.log("Usuario menor de edad");
   }
   ```

   El mensaje que se imprimirá será "Usuario menor de edad" porque la condición `edad > 17` no se cumple.

3. **Instrucción `else if`**:
   Cuando tienes múltiples condiciones que evaluar, puedes usar `else if` para agregar más condiciones intermedias. Solo se ejecutará el bloque de código correspondiente al primer `if` o `else if` cuya condición sea verdadera.

   **Sintaxis básica**:
   ```javascript
   if (condición1) {
       // Código si condición1 es verdadera
   } else if (condición2) {
       // Código si condición2 es verdadera
   } else {
       // Código si ninguna condición anterior es verdadera
   }
   ```

   **Ejemplo**:
   Supongamos que quieres verificar diferentes edades para permitir el ingreso al cine:
   ```javascript
   let edad = 16;

   if (edad >= 18) {
       console.log("Usuario mayor de edad, puede ver la película");
   } else if (edad >= 13) {
       console.log("Usuario necesita estar acompañado de sus padres");
   } else {
       console.log("No puede ingresar");
   }
   ```

   En este caso, si `edad` es 16, el resultado será "Usuario necesita estar acompañado de sus padres".

#### **Bucle `while`**

El bucle `while` se usa cuando quieres ejecutar un bloque de código **múltiples veces**, pero hasta que se cumpla una condición determinada. La sintaxis básica es:

```javascript
while (condición) {
    // Código a ejecutar mientras la condición sea verdadera
}
```

**Ejemplo básico**:
Supongamos que quieres imprimir los números del 0 al 9 en la consola:
```javascript
let i = 0;

while (i < 10) {
    console.log(i);
    i++;  // Incrementamos i para evitar un bucle infinito
}
```

**Explicación**:
- Comienza con `i` igual a 0.
- La condición es `i < 10`, por lo que el bucle se ejecuta mientras `i` sea menor que 10.
- Dentro del bucle, se imprime el valor de `i` y luego se incrementa `i` en 1.
- Cuando `i` llega a 10, la condición ya no se cumple y el bucle se detiene.

**Importante**: Si no incrementas o cambias la variable dentro del bucle, este podría entrar en un **bucle infinito**, ejecutándose indefinidamente.

#### **Ejemplo de combinación `if` con `while`**:

Si deseas imprimir solo los números **pares** entre 0 y 9, puedes combinar `if` dentro de un `while`:
```javascript
let i = 0;

while (i < 10) {
    if (i % 2 === 0) {
        console.log(i);  // Imprime solo los números pares
    }
    i++;  // Incrementamos i
}
```

Aquí, el bucle sigue ejecutándose hasta que `i` sea 10, pero solo imprime los números pares porque la condición `i % 2 === 0` (que verifica si el número es par) debe ser verdadera.

### **Resumen y Buenas Prácticas**

- **Condicionales**: `if`, `else`, y `else if` se usan para ejecutar diferentes bloques de código basados en condiciones.
- **Bucle `while`**: Permite ejecutar repetidamente un bloque de código mientras una condición se cumpla.
- **Sangrado y Tabulación**: Asegúrate de usar un sangrado correcto (tabulación) para que tu código sea legible y evitar errores de sintaxis.
- **Evita bucles infinitos**: Siempre asegúrate de modificar la variable que controla la condición del bucle, de lo contrario, el código se ejecutará indefinidamente.

Este control de flujo básico es fundamental en la mayoría de las aplicaciones que construyas, ya que permite que tu programa tome decisiones y repita tareas de forma eficiente.

---

**Loops Infinitos:**

Es crucial tener cuidado con los *loops* infinitos, que son fragmentos de código que se ejecutan indefinidamente. Aquí se muestra un ejemplo con un bucle `while` que imprime los números del 0 al 9. Para hacer que este bucle sea infinito, simplemente eliminamos la condición de salida. El comportamiento del navegador puede variar: Chrome puede dejar de funcionar o mostrar un "cargando" constante, y será difícil detenerlo sin cerrar el navegador o forzar su cierre. La mejor práctica es evitar estos bucles, ya que pueden colapsar el sistema. Para evitarlo, puedes comentar el código que genera el bucle infinito.

---

**Bucle `do while`:**

El bucle `do while` se comporta de manera diferente al `while` tradicional. En un bucle `while`, la condición se evalúa antes de ejecutar el bloque de código. En el `do while`, la condición se evalúa después de ejecutar el código, lo que significa que el código dentro del bucle se ejecutará al menos una vez, incluso si la condición no se cumple. 

Para entenderlo mejor, se crea un archivo con un ejemplo. Cambiamos la condición de la comparación a un valor más pequeño (como 3) para no ver demasiados números. Primero, se comenta el bucle `while` y luego se descomenta el `do while`. Al ejecutar, veremos que el bucle `do while` imprime los números de manera diferente al `while`.

La diferencia principal entre ambos es que:
- **`while`** evalúa la condición antes de ejecutar el bloque de código.
- **`do while`** ejecuta el bloque de código primero y luego evalúa la condición.

---

**Bucle `for`:**

El bucle `for` se utiliza para realizar iteraciones de manera más compacta. A diferencia de `while`, en `for` todo se define en una sola línea: la inicialización, la condición y la acción a realizar después de cada iteración. En este caso, un bucle `for` es más fácil de leer y utilizar cuando se conoce de antemano el número de iteraciones.

Se crea un archivo y se inicializa una variable `i`. Luego, se valida si `i` es menor que 10. Si es cierto, se ejecuta el código y al final, `i` aumenta en 1. Esto se repite hasta que `i` alcanza 10.

En resumen, el bucle `for` es más directo y eficiente para casos donde se conoce cuántas veces debe ejecutarse el bucle.

---

**Bucle `for of`:**

El bucle `for of` es una forma más simple y directa de iterar sobre los elementos de un array. A diferencia del bucle `for` tradicional, donde necesitas definir un índice y acceder manualmente a los elementos del array, `for of` te permite acceder directamente a cada elemento del array.

Ejemplo:
```javascript
let animales = ["Chanchito feliz", "Dragón", "Perrito"];
for (let animal of animales) {
  console.log(animal);
}
```
Esto imprimirá cada uno de los elementos del array: "Chanchito feliz", "Dragón" y "Perrito".

---

**Bucle `while` para iterar un array:**

Aunque puedes usar el bucle `while` para iterar sobre un array, la sintaxis y el proceso son más complejos. Necesitas definir una variable de índice y luego aumentar su valor manualmente en cada iteración. Aquí, el valor de `i` se inicializa en 0, y el bucle continúa mientras `i` sea menor que la longitud del array.

Ejemplo de cómo iterar un array con `while`:
```javascript
let animales = ["Chanchito feliz", "Dragón", "Perrito"];
let i = 0;
while (i < animales.length) {
  console.log(animales[i]);
  i++;
}
```
Este código también imprimirá "Chanchito feliz", "Dragón" y "Perrito". Sin embargo, el bucle `for of` es mucho más sencillo para este tipo de tareas.

---

**Bucle `for in`:**

El bucle `for in` es útil para iterar las propiedades de un objeto. Si tienes un objeto cuyas propiedades no conoces de antemano, puedes utilizar `for in` para iterar sobre ellas.

Ejemplo:
```javascript
let user = {
  id: 1,
  name: "Chanchito feliz",
  age: 25
};

for (let prop in user) {
  console.log(prop); // Imprime las propiedades: 'id', 'name', 'age'
  console.log(user[prop]); // Imprime los valores: 1, "Chanchito feliz", 25
}
```
Aquí, `for in` recorre todas las propiedades del objeto `user`, mostrando tanto el nombre de la propiedad como su valor.

---

**Bucle `for in` con un array:**

Aunque `for in` se puede usar para iterar sobre los elementos de un array, **no es la mejor práctica**. En su lugar, se recomienda usar `for of` debido a que `for in` devuelve los índices del array, lo cual puede generar resultados inesperados en algunos casos.

Ejemplo de `for in` con un array:
```javascript
let animales = ["Chanchito feliz", "Dragón", "Canguro"];
for (let index in animales) {
  console.log(index); // Imprime los índices: 0, 1, 2
  console.log(animales[index]); // Imprime los elementos: "Chanchito feliz", "Dragón", "Canguro"
}
```

Aunque este código funciona, es más recomendable usar `for of` para evitar complicaciones con los índices.

---

**Conclusión:**

- Utiliza `for of` cuando necesites iterar sobre los elementos de un array, ya que es más sencillo y claro.
- Si tienes un objeto, usa `for in` para iterar sobre sus propiedades.
- Si necesitas controlar manualmente las iteraciones, utiliza `while` o `for` según la situación, pero con la cautela de no crear bucles infinitos.

---

En esta parte del video, se continúa explicando el uso de las instrucciones `break` y `continue` en loops en JavaScript, así como la implementación de la instrucción `switch`.

### **Break y Continue:**

1. **Continue**: Se utiliza cuando se desea saltarse una iteración de un ciclo (loop) sin terminarlo por completo. El flujo de ejecución se "salta" al siguiente ciclo.

   - En el ejemplo mostrado, se usa un `while` en el cual se incrementa `i` en cada ciclo. Si `i` es igual a 2, se ejecuta un `continue`, lo que hace que esa iteración sea ignorada y el ciclo pase a la siguiente.

   ```js
   let i = 0;
   while (i < 6) {
       i++;
       console.log(i); // Imprime el valor de i
       
       if (i === 2) {
           continue; // Salta la iteración cuando i es igual a 2
       }
   }
   ```

   En el navegador, se puede observar que no se imprime el valor `2` porque, cuando `i` es 2, se salta esa iteración y continúa con la siguiente.

2. **Break**: Detiene por completo la ejecución de un loop, incluso si no se ha completado todo el ciclo. En el ejemplo, si `i` es igual a 4, se ejecuta un `break` que termina el ciclo.

   ```js
   let i = 0;
   while (i < 6) {
       i++;
       console.log(i); // Imprime el valor de i
       
       if (i === 4) {
           break; // Termina el loop cuando i es igual a 4
       }
   }
   ```

   En este caso, el ciclo termina después de que `i` llega a 4, y no se siguen ejecutando las siguientes iteraciones.

### **Switch:**

3. **Switch Statement**: El `switch` se utiliza para hacer múltiples comparaciones con una sola variable. Es más limpio y claro cuando tienes que comparar una variable contra varios valores posibles.

   - Se utiliza `case` para definir los valores que se van a comparar y `break` para salir del bloque de `switch` una vez que se haya encontrado una coincidencia.
   - Si ninguno de los casos se cumple, se puede utilizar la instrucción `default` para manejar situaciones donde el valor de la variable no coincida con ningún `case`.

   ```js
   let accion = 'listar';

   switch (accion) {
       case 'listar':
           console.log('Acción de listar');
           break;
       case 'guardar':
           console.log('Acción de guardar');
           break;
       default:
           console.log('Acción no reconocida');
           break;
   }
   ```

   **Comportamiento**: Si la variable `accion` es igual a `'listar'`, se ejecuta el bloque correspondiente y se imprime `'Acción de listar'`. Si no es ninguna de las opciones (`listar` o `guardar`), se ejecuta el bloque `default` y se imprime `'Acción no reconocida'`.

4. **Diferencia entre `switch` y `if-else`**: 
   - El `switch` puede ser más legible y estructurado cuando se tienen muchas condiciones. 
   - Con `if-else`, tendrías que hacer comparaciones secuenciales, lo que puede resultar más largo y menos claro.
   - Ambas estructuras pueden lograr el mismo resultado, pero el uso de `switch` puede facilitar la lectura del código cuando hay múltiples condiciones.

### **Conclusión**: 

- **Break y Continue**: Son esenciales cuando necesitas controlar el flujo dentro de loops. `break` termina el loop, mientras que `continue` omite una iteración.
- **Switch**: Facilita la comparación de una sola variable con múltiples valores posibles de manera más estructurada que con `if-else`.

---

## **Introducción**
En esta sección, se van a resolver 10 ejercicios de programación en **JavaScript**. Los ejercicios se realizarán utilizando únicamente los conocimientos adquiridos hasta el momento, sin necesidad de buscar información adicional. A continuación, se documentan los primeros 7 ejercicios.

---

### **Ejercicio 01: Determinar el número mayor**

**Objetivo**: Crear una función que reciba dos parámetros y devuelva el mayor de los dos.

**Solución**:
1. Crear una función que reciba dos parámetros: `a` y `b`.
2. Usar una estructura de control `if` para comparar ambos valores.
3. Retornar el valor mayor.

**Código**:

```javascript
function obtenerMayor(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
```

Alternativa más corta usando el operador ternario:

```javascript
function obtenerMayor(a, b) {
  return a > b ? a : b;
}
```

**Explicación**:
- Se utiliza una estructura `if` para comparar los dos números y retornar el mayor.
- La versión corta usa un **operador ternario** para realizar la comparación y retornar el valor correspondiente.

---

### **Ejercicio 02: Determinar la resolución**

**Objetivo**: Crear una función que reciba `ancho` y `alto`, y devuelva el nombre de la resolución correspondiente.

**Resoluciones soportadas**:
- **8k**: 7680x4320
- **4k**: 3840x2160
- **WQHD**: 2560x1440
- **FHD**: 1920x1080
- **HD**: 1280x720
- Si no se encuentra una resolución válida, retornar `false`.

**Código**:

```javascript
function obtenerResolucion(ancho, alto) {
  if (ancho >= 7680 && alto >= 4320) {
    return '8k';
  } else if (ancho >= 3840 && alto >= 2160) {
    return '4k';
  } else if (ancho >= 2560 && alto >= 1440) {
    return 'WQHD';
  } else if (ancho >= 1920 && alto >= 1080) {
    return 'FHD';
  } else if (ancho >= 1280 && alto >= 720) {
    return 'HD';
  } else {
    return false;
  }
}
```

**Explicación**:
- Se utilizan múltiples condiciones `else if` para verificar las resoluciones y retornar el nombre adecuado.
- Si no se cumple ninguna de las resoluciones, la función retorna `false`.

---

### **Ejercicio 03: Obtener elemento por índice**

**Objetivo**: Crear una función que reciba un arreglo y un índice, y devuelva el elemento en ese índice. Validar que el índice sea válido (no menor que 0 y dentro de los límites del arreglo).

**Código**:

```javascript
function obtenerElementoPorIndice(arr, indice) {
  if (indice < 0 || indice >= arr.length) {
    return 'Elemento no existe';
  }
  return arr[indice];
}
```

**Explicación**:
- Se valida que el índice no sea negativo y que esté dentro de los límites del arreglo.
- Si el índice es válido, se retorna el elemento en ese índice, de lo contrario, se retorna `'Elemento no existe'`.

---

### **Ejercicio 04: Números impares del 0 al 10**

**Objetivo**: Crear un algoritmo que imprima todos los números impares entre 0 y 10.

**Solución**:
- Se utilizará un bucle `while` para iterar sobre los números entre 0 y 10.
- Usar el operador módulo `%` para verificar si un número es impar.

**Código**:

```javascript
let i = 0;
while (i <= 10) {
  if (i % 2 !== 0) {
    console.log(`Impar ${i}`);
  }
  i++;
}
```

**Explicación**:
- Se utiliza un bucle `while` para iterar desde `0` hasta `10`.
- Se verifica si el número es impar con `i % 2 !== 0`. Si es impar, se imprime el número.

---

### **Ejercicio 05: Obtener el número menor y mayor de un array**

**Objetivo**: Crear una función que reciba un arreglo y devuelva un arreglo con el valor mínimo y máximo del arreglo.

**Código**:

```javascript
function obtenerMenorMayor(arr) {
  let menor = arr[0];
  let mayor = arr[0];
  
  for (let num of arr) {
    if (num < menor) {
      menor = num;
    }
    if (num > mayor) {
      mayor = num;
    }
  }
  
  return [menor, mayor];
}
```

**Explicación**:
- Se inicializan las variables `menor` y `mayor` con el primer valor del arreglo.
- Luego, se itera sobre el arreglo y se actualizan `menor` y `mayor` cuando se encuentra un valor más bajo o más alto, respectivamente.
- Al final, se retorna un arreglo con los valores de `menor` y `mayor`.

---

### **Ejercicio 06: Contar los números positivos en un array**

**Objetivo**: Crear una función que reciba un arreglo y cuente cuántos números positivos contiene.

**Código**:

```javascript
function contarPositivos(arr) {
  let cantidad = 0;
  
  for (let elem of arr) {
    if (elem > 0) {
      cantidad++;
    }
  }
  
  return cantidad;
}
```

**Explicación**:
- Se inicializa la variable `cantidad` en 0.
- Luego, se recorre el arreglo con un bucle `for` y se incrementa la variable `cantidad` cada vez que se encuentra un número positivo.
- Finalmente, se retorna el valor de `cantidad`.

---

### **Ejercicio 07: Calculadora de impuestos**

**Objetivo**: Crear una función que calcule el precio final de un producto sumando el impuesto.

**Código**:

```javascript
function calcularPrecioConImpuesto(precio, impuesto) {
  return precio + (precio * (impuesto / 100));
}
```

**Explicación**:
- Se calcula el impuesto multiplicando el precio por el porcentaje del impuesto.
- Luego, se suma ese valor al precio inicial para obtener el precio final.
- Se retorna el precio final.

---

### **Conclusión**

En esta sección se han resuelto varios ejercicios básicos de programación en **JavaScript**. Los ejercicios han cubierto temas como:
- Condicionales (`if`, `else`).
- Bucles (`while`, `for`).
- Validaciones y manejo de arreglos.
- Uso del operador ternario y otras estructuras de control.

---

### Ejercicio 08

Este ejercicio empieza a ser más interesante, ya que vamos a construir una función que se utiliza mucho en el mundo real. La función se va a llamar `twoPairs` y su propósito es tomar un arreglo de objetos y devolver un arreglo de pares. A continuación, te explico cómo lo vamos a resolver.

Lo primero es definir un arreglo de objetos. En este caso, tenemos un arreglo con tres objetos, donde cada objeto tiene dos propiedades: `ID` y `name`, con sus respectivos valores. Lo que tiene que hacer esta función es devolverme un arreglo de pares.

### ¿Qué son los pares?

Los pares son un arreglo de arreglos. En cada iteración del arreglo de objetos, queremos que cada "par" esté compuesto de dos elementos: el primer elemento será el `ID` del objeto y el segundo elemento será el objeto completo.

Por ejemplo, para el arreglo de objetos:

```javascript
[
  { id: 1, name: "Nico" },
  { id: 2, name: "Juan" },
  { id: 3, name: "Pedro" }
]
```

La función `twoPairs` debería devolver algo como esto:

```javascript
[
  [1, { id: 1, name: "Nico" }],
  [2, { id: 2, name: "Juan" }],
  [3, { id: 3, name: "Pedro" }]
]
```

### Solución

1. Primero, vamos a definir una variable que va a almacenar estos pares, y la vamos a llamar `pairs`. Esta variable será un arreglo vacío.

2. A continuación, necesitamos iterar sobre los elementos del arreglo. Sabemos que debemos usar un `for` para esto. Aunque podríamos usar `for of`, necesitamos el índice del elemento en cada iteración para poder construir el par correctamente.

3. Usaremos un `for in` para poder acceder a cada elemento con su índice y construir el arreglo de pares. En cada iteración, el primer valor del par será el `ID` del objeto, y el segundo valor será el objeto completo.

```javascript
function twoPairs(arr) {
  let pairs = [];
  
  for (let idx in arr) {
    let element = arr[idx]; // Obtenemos el objeto
    pairs.push([element.id, element]); // Creamos el par y lo agregamos al arreglo de pares
  }
  
  return pairs;
}
```

4. Finalmente, cuando llamemos a esta función y le pasemos el arreglo, debería devolver el resultado esperado.

---

### Ejercicio 09

Este ejercicio se parece al anterior, pero en este caso, vamos a hacer la operación inversa. Es decir, vamos a tener un arreglo de pares y lo que necesitamos es crear una función que devuelva un arreglo de objetos, agregando una propiedad `ID` a cada uno de ellos. El valor del `ID` se obtiene del primer elemento de cada par.

Por ejemplo, si el arreglo de pares es:

```javascript
[
  [1, { name: "Nico" }],
  [2, { name: "Juan" }],
  [3, { name: "Pedro" }]
]
```

La función `toCollection` debería devolver:

```javascript
[
  { id: 1, name: "Nico" },
  { id: 2, name: "Juan" },
  { id: 3, name: "Pedro" }
]
```

### Solución

1. Primero, creamos un arreglo vacío llamado `collection` donde vamos a almacenar los nuevos objetos.

2. Luego, necesitamos iterar sobre el arreglo de pares. Usamos un `for in` para obtener tanto el índice como el contenido del par. Para cada par, el primer elemento es el `ID` y el segundo es el objeto que necesitamos modificar.

3. A cada objeto, le agregamos una propiedad `id` que será igual al valor del primer elemento del par.

```javascript
function toCollection(pairs) {
  let collection = [];
  
  for (let idx in pairs) {
    let element = pairs[idx]; // Obtenemos el par [ID, objeto]
    let obj = element[1]; // Obtenemos el objeto
    obj.id = element[0]; // Asignamos el ID
    collection.push(obj); // Agregamos el objeto modificado al arreglo
  }
  
  return collection;
}
```

4. Finalmente, al llamar a esta función con un arreglo de pares, debería devolver el resultado esperado con los objetos correctamente modificados.

---

### Ejercicio 10

En este ejercicio, necesitamos crear una función que genere un arreglo de longitud `n`, donde los elementos son los números del 1 hasta `n`. La función se llamará `crearArreglo`.

Si pasamos el valor `7` a la función, esta debería devolver el siguiente arreglo:

```javascript
[1, 2, 3, 4, 5, 6, 7]
```

### Solución

1. Primero, necesitamos verificar que el valor de `n` no sea menor que cero, ya que no podemos crear un arreglo con elementos negativos. Si `n` es menor o igual que cero, debemos devolver un arreglo vacío.

2. Después, creamos un ciclo `for` que vaya desde `0` hasta `n - 1` para llenar el arreglo con los números del 1 al `n`. 

3. Cada número en el ciclo será incrementado por 1 antes de ser insertado en el arreglo.

```javascript
function crearArreglo(n) {
  if (n <= 0) return []; // Si n es menor o igual que cero, devolvemos un arreglo vacío.
  
  let arr = [];
  
  for (let i = 1; i <= n; i++) {
    arr.push(i); // Agregamos los números del 1 al n al arreglo
  }
  
  return arr;
}
```

4. Cuando llamemos a esta función, pasándole el valor `7`, debería devolver el arreglo:

```javascript
[1, 2, 3, 4, 5, 6, 7]
```

---

### Introducción a los Objetos en JavaScript

Ahora que hemos practicado con arreglos y funciones, pasemos a trabajar con objetos en JavaScript.

Un objeto es una colección de propiedades, donde cada propiedad tiene una clave y un valor. Los objetos se usan para almacenar datos relacionados entre sí. Por ejemplo, en lugar de tener variables separadas para el correo electrónico, el nombre y la dirección de un usuario, podemos agrupar todos estos datos en un solo objeto.

#### Creación de un objeto

Vamos a crear un objeto `user` que contendrá las siguientes propiedades:

- `email`: El correo electrónico del usuario.
- `name`: El nombre del usuario.
- `address`: La dirección del usuario, que a su vez puede ser un objeto con `street` y `number`.
- `active`: Un valor booleano que indica si el usuario está activo o no.
- `recoverPassword`: Una función que se puede ejecutar para recuperar la contraseña del usuario.

El código sería algo así:

```javascript
let user = {
  email: "nico@holamundo.com",
  name: "Nicolás",
  address: {
    street: "Queen Street",
    number: 15
  },
  active: true,
  recoverPassword: function() {
    console.log("Recuperando clave...");
  }
};
```

Aquí hemos definido un objeto `user` con varias propiedades, incluidas algunas propiedades que son objetos (como `address`), y una función (como `recoverPassword`).

#### Programación Orientada a Objetos (POO)

Este estilo de programación, en el que agrupamos datos y comportamientos en un solo objeto, se llama **Programación Orientada a Objetos** (POO). La idea es encapsular tanto datos como comportamientos relacionados con esos datos en un solo lugar, facilitando la manipulación de estos.

#### Dinamismo en los objetos

En JavaScript, los objetos son dinámicos. Esto significa que podemos agregar o eliminar propiedades de un objeto en cualquier momento, incluso después de que el objeto haya sido creado. También podemos cambiar el valor de sus propiedades.

Por ejemplo, si tenemos un objeto `user`, podemos agregarle nuevas propiedades:

```javascript
user.username = "nico";
user.updateProfile = function() {
  console.log("Actualizando perfil...");
};
```

Además, también podemos eliminar propiedades de un objeto utilizando la palabra reservada `delete`:

```javascript
delete user.username;
delete user.updateProfile;
```

---

### Inmutabilidad con `const`

En JavaScript, al declarar un objeto con `const`, no podemos reasignar el objeto completo, pero sí podemos modificar sus propiedades. Esto significa que si intentamos asignar un nuevo valor a la variable completa (como el objeto `user`), obtendremos un error, pero si modificamos sus propiedades, JavaScript lo permite sin problemas.

Para hacer que un objeto no pueda ser modificado, usamos el método `Object.freeze()`. Esto hace que el objeto sea inmutable, es decir, no se le pueden agregar, eliminar ni modificar propiedades.

Si queremos que las propiedades del objeto no puedan ser eliminadas o agregadas, pero sí podamos modificar sus valores, usamos `Object.seal()`. 

Por ejemplo:

```javascript
Object.freeze(user);
Object.seal(user);
```

Con `freeze`, no se puede modificar ni agregar ninguna propiedad, pero con `seal`, sí puedes cambiar los valores de las propiedades existentes, pero no agregar ni eliminar nuevas propiedades.

---

### **Factory Functions (Funciones Fábricas)**

En este video, vamos a hablar sobre las **Factory Functions**. Estas son funciones que nos permiten crear objetos de manera sencilla y no repetitiva. Para este ejemplo, vamos a trabajar en el archivo `03-gu-factory.js` dentro de nuestro directorio `05-gu-objetos`.

1. **Objeto de Usuario**
   
   Empezamos con un objeto de usuario como el siguiente:

   ```javascript
   const user = {
       ID: 1,
       name: "Nicolás",
       email: "nico@holamundo.io",
       recuperarClave() {
           console.log("Recuperando clave");
       }
   };
   ```

   En este objeto tenemos las propiedades `ID`, `name`, `email`, y un **método** llamado `recuperarClave` que simplemente imprime un mensaje.

2. **Problema de la Repetición**

   Si tenemos que crear múltiples usuarios, este código se vuelve repetitivo y poco eficiente. Veamos cómo lo haríamos manualmente:

   ```javascript
   const user1 = {
       ID: 1,
       name: "Nicolás",
       email: "nico@holamundo.io",
       recuperarClave() {
           console.log("Recuperando clave");
       }
   };

   const user2 = {
       ID: 2,
       name: "Chanchito",
       email: "chanchito@holamundo.com",
       recuperarClave() {
           console.log("Recuperando clave");
       }
   };
   ```

   Como vemos, cada vez que necesitamos un nuevo usuario, tenemos que repetir el mismo código. Esto no es eficiente.

3. **Solución: Factory Functions**

   Para evitar la repetición, podemos usar una **Factory Function**. Estas funciones nos permiten crear objetos de manera dinámica. Creamos una función llamada `crearUsuario`, que tomará `name` y `email` como parámetros.

   ```javascript
   function crearUsuario(name, email) {
       return {
           ID: Math.floor(Math.random() * 1000), // ID único aleatorio
           name: name,
           email: email,
           recuperarClave() {
               console.log("Recuperando clave");
           }
       };
   }
   ```

   Ahora, cada vez que queramos crear un usuario, simplemente llamamos a esta función y le pasamos los valores para `name` y `email`.

   ```javascript
   const user1 = crearUsuario("Nicolás", "nico@holamundo.io");
   const user2 = crearUsuario("Chanchito", "chanchito@holamundo.com");
   ```

4. **Ventajas**

   La ventaja de usar una **Factory Function** es que no tenemos que repetir el mismo código una y otra vez. Cada vez que llamamos a `crearUsuario`, podemos generar un objeto con una estructura similar, pero con valores distintos.

---

### **Funciones Constructoras**

Ahora vamos a hablar sobre las **Funciones Constructoras**. Estas funciones nos permiten crear objetos de una manera similar a las Factory Functions, pero con una sintaxis diferente y utilizando la palabra clave `new`.

1. **Creando una Función Constructora**

   Una función constructora es una función que está diseñada para crear objetos. En este caso, vamos a crear una función constructora llamada `Usuario`.

   ```javascript
   function Usuario(name, email) {
       this.ID = Math.floor(Math.random() * 1000);  // Asignamos un ID único
       this.name = name;                            // Asignamos el nombre
       this.email = email;                          // Asignamos el email
       this.recuperarClave = function() {
           console.log("Recuperando clave");
       };
   }
   ```

   Aquí, `this` hace referencia al objeto que se va a crear cuando invoquemos la función.

2. **Creando Objetos con `new`**

   Para crear objetos utilizando una función constructora, usamos la palabra clave `new`:

   ```javascript
   const user1 = new Usuario("Nicolás", "nico@holamundo.io");
   const user2 = new Usuario("Chanchito", "chanchito@holamundo.com");
   ```

   **¿Qué sucede con `new`?**

   Cuando usamos `new`, JavaScript hace lo siguiente internamente:

   - Crea un nuevo objeto vacío.
   - Asocia el prototipo de la función constructora al nuevo objeto.
   - Asigna el objeto recién creado a `this` dentro de la función constructora.
   - Finalmente, retorna el objeto creado (si la función constructora no retorna explícitamente otro valor).

   Entonces, al usar `new Usuario(...)`, estamos creando un objeto con las propiedades y métodos definidos dentro de la función constructora.

3. **Ejemplo de Creación de Objetos**

   Ahora podemos crear objetos de tipo `Usuario` y ver sus propiedades:

   ```javascript
   console.log(user1);
   console.log(user2);
   ```

   La salida será algo como esto:

   ```javascript
   user1 = {
       ID: 123,
       name: "Nicolás",
       email: "nico@holamundo.io",
       recuperarClave: [Function: recuperarClave]
   };

   user2 = {
       ID: 456,
       name: "Chanchito",
       email: "chanchito@holamundo.com",
       recuperarClave: [Function: recuperarClave]
   };
   ```

4. **Métodos en Funciones Constructoras**

   Es importante notar que cuando usamos una **función constructora**, los métodos dentro de la función son asociados con `this` y pertenecen al objeto que estamos creando. Es por eso que `recuperarClave` es un método de cada uno de los objetos creados.

---

### **Resumen**

- **Factory Functions**: Funciones que crean objetos de manera dinámica y retornan un objeto. Son útiles cuando queremos crear múltiples objetos con la misma estructura, pero con valores diferentes.
  
- **Funciones Constructoras**: Son funciones que se utilizan con la palabra clave `new` para crear nuevos objetos. Utilizan la palabra `this` para asignar propiedades y métodos al objeto recién creado.

Ambas son herramientas útiles para evitar la repetición de código y para crear objetos de manera más estructurada y eficiente. La diferencia clave entre ellas es el uso de `new` en las funciones constructoras y la manera en que los métodos son gestionados.

---

### **Funciones en JavaScript: Objetos de Primera Clase**

#### **Funciones como Objetos de Primera Clase**
Las funciones en JavaScript son objetos, lo que significa que se les considera **objetos de primera clase**. Esto quiere decir que las funciones pueden:

1. **Ser asignadas a otras variables.**
2. **Ser pasadas como argumentos a otras funciones.**
3. **Ser retornadas desde otras funciones.**

#### **Accediendo a Propiedades de las Funciones**

Por ejemplo, si tenemos una función constructora como `Usuario`, podemos acceder a sus propiedades usando `console.log`:

```javascript
function Usuario(name, email) {
   this.name = name;
   this.email = email;
   this.recuperarClave = function() {
       console.log("Recuperando clave");
   };
}
```

Ahora, podemos ver las propiedades que tiene la función `Usuario`, como el nombre de la función y la cantidad de argumentos que recibe:

```javascript
console.log(Usuario.name);  // Muestra el nombre de la función
console.log(Usuario.length);  // Muestra la cantidad de argumentos que acepta la función
```

- **`name`**: Nos devuelve el nombre de la función (`Usuario`).
- **`length`**: Nos devuelve el número de parámetros que la función recibe (en este caso, 2: `name` y `email`).

#### **Asignando Funciones a Variables**

Podemos asignar una función a una nueva variable para reutilizarla. Por ejemplo:

```javascript
const u = Usuario;
const user1 = new u("Nicolás", "nico@holamundo.io");
console.log(user1);
```

- Hemos asignado la función `Usuario` a una nueva variable llamada `u`.
- Luego, hemos creado un nuevo objeto `user1` usando `u` de la misma manera que lo haríamos con `Usuario`.

#### **Pasando Funciones como Argumentos**

Las funciones también pueden ser pasadas como argumentos a otras funciones. Para demostrar esto, se crea una función llamada `off` que recibe una función como parámetro y la ejecuta:

```javascript
function off(fn, arg) {
    return new fn(arg);
}

const user2 = off(Usuario, "Chanchito");
console.log(user2);
```

- La función `off` recibe como argumento una **función** (en este caso, `Usuario`) y un **argumento** (el nombre del usuario).
- Dentro de `off`, usamos `new fn(arg)` para crear un nuevo objeto usando la función constructora `Usuario`, pasándole `arg` como argumento.

#### **Retornando Funciones**

En JavaScript, también podemos retornar funciones desde otras funciones. Aquí se muestra cómo hacerlo con una función que retorna otra función anónima:

```javascript
function returned() {
    return function() {
        console.log("Hola mundo");
    };
}

const saludo = returned();  // Llamamos a returned(), que retorna una función.
saludo();  // Ejecutamos la función retornada.
```

- La función `returned` retorna una función anónima.
- Cuando ejecutamos `returned()`, nos devuelve una función que imprime `"Hola mundo"`.
- Luego, esa función es asignada a la variable `saludo`, y la podemos ejecutar.

#### **Resumen de los Conceptos**

- Las funciones son **objetos de primera clase**, lo que significa que tienen propiedades como los objetos comunes.
- Podemos **asignar funciones a variables**.
- Podemos **pasar funciones como argumentos** a otras funciones.
- Podemos **retornar funciones** desde otras funciones.

---

### **Método `Function` Constructor**

En JavaScript también existe el **constructor `Function`**, que nos permite crear funciones de manera dinámica. Sin embargo, se recomienda evitar el uso de este constructor, ya que no es una práctica comúnmente usada.

#### **Creando Funciones con el Constructor `Function`**

Primero, veamos cómo se podría crear una función utilizando el constructor `Function`:

```javascript
const Point = new Function('x', 'y', `
   this.x = x;
   this.y = y;
   this.dibujar = function() {
       console.log("Dibujando");
   };
`);
```

- Aquí, `Point` es una función creada dinámicamente utilizando el constructor `Function`.
- La función toma dos parámetros (`x` y `y`) y asigna estos valores a las propiedades `x` y `y` del objeto creado. Además, tiene un método `dibujar` que imprime `"Dibujando"`.

#### **Creando un Objeto con la Función `Point`**

Ahora, podemos crear un objeto `p` utilizando la función `Point`:

```javascript
const p = new Point(1, 2);
console.log(p);
```

Esto nos dará un objeto con las propiedades `x` e `y`, y el método `dibujar`.

#### **Problema con el Constructor `Function`**

Aunque podemos crear funciones de esta manera, esta no es una práctica recomendada. **Nunca deberías usar el constructor `Function`** para crear funciones. Es mejor crear funciones de la manera tradicional.

---

### **Método `call` y `apply`**

Los métodos `call` y `apply` son muy útiles cuando necesitamos cambiar el contexto (`this`) dentro de una función. Vamos a ver cómo funciona `call`.

#### **Método `call`**

El método `call` permite ejecutar una función y especificar el contexto de `this` de la función. Por ejemplo:

```javascript
function Punto(x, y) {
    this.x = x;
    this.y = y;
    this.dibujar = function() {
        console.log(`Dibujando punto en (${this.x}, ${this.y})`);
    };
}

const punto1 = new Punto(1, 2);
const punto2 = { x: 3, y: 4 };

Punto.call(punto2, 3, 4);  // Usamos call para cambiar el contexto de 'this'.
punto2.dibujar();  // Dibujará en (3, 4)
```

- En este ejemplo, utilizamos `call` para cambiar el contexto de `this` de la función `Punto` y asignarlo a un objeto diferente (`punto2`).
- Después, podemos usar el método `dibujar` para ver cómo cambia el contexto.

#### **Problema con `new` y `call`**

Es importante notar que **no se debe usar `new` con `call`**, ya que esto generaría un error. **`call` no es un constructor** y no debe ser utilizado con la palabra reservada `new`.

```javascript
// Esto genera un error:
const p = new Punto.call(punto2, 3, 4);  // No es correcto
```

#### **Método `apply`**

El método `apply` funciona igual que `call`, pero la diferencia es que los argumentos deben ser pasados en forma de **array**:

```javascript
Punto.apply(punto2, [3, 4]);  // Funciona igual que call, pero los parámetros son un array
punto2.dibujar();
```

#### **Resumen sobre `call` y `apply`**

- Ambos métodos (`call` y `apply`) permiten cambiar el contexto de `this` dentro de una función.
- `call` recibe los argumentos uno a uno, mientras que `apply` recibe los argumentos en un array.
- Estos métodos son útiles para extender objetos y reutilizar funciones.

#### **Conclusión Final**

- **Evitar el constructor `Function`**: Aunque es posible usarlo, se recomienda **no usarlo**, ya que existen formas más claras y seguras de definir funciones.
- **Métodos `call` y `apply`**: Nos permiten **extender objetos** y cambiar el contexto de `this` dentro de las funciones. Ambos son útiles para reutilizar y manipular funciones de manera flexible.

---

### **Tipos de Datos en JavaScript: Primitivos vs Referencia**

En JavaScript, los **tipos de datos** se dividen en **tipos primitivos** y **tipos por referencia**. Cada uno tiene un comportamiento diferente cuando se asignan a nuevas variables o se manipulan en memoria.

---

### **1. Tipos Primitivos**

Los **tipos primitivos** son:
- **String**: Cadenas de texto.
- **Number**: Números (enteros o decimales).
- **Boolean**: `true` o `false`.
- **Null**: Representa la ausencia intencional de un valor.
- **Undefined**: Indica que una variable ha sido declarada, pero no tiene valor asignado.

Cuando se asigna un tipo primitivo a una variable, **se crea una copia del valor**. Las variables que contienen tipos primitivos son **independientes**.

#### Ejemplo:
```javascript
let a = 1;   // Asignación de un número
let b = a;   // b recibe una copia del valor de a

b = 2;       // Se modifica b, pero no afecta a a

console.log(a); // 1
console.log(b); // 2
```

En este ejemplo:
- `a` contiene el valor `1`.
- `b` recibe una copia del valor de `a`.
- Al modificar `b`, no se afecta a `a`, ya que se trabaja con copias del valor.

---

### **2. Tipos por Referencia**

Los **tipos por referencia** incluyen:
- **Objetos** (`{}`).
- **Arreglos** (`[]`).
- **Funciones** (`function`).

Cuando se asigna un **tipo por referencia** a una variable, **se guarda una referencia a la ubicación en memoria** donde está almacenado el objeto, no el objeto en sí. Esto significa que si se modifica el objeto a través de una variable, **todas las variables que referencian ese objeto** se verán afectadas.

#### Ejemplo:
```javascript
let objA = { prop: 1 };  // Se crea un objeto con una propiedad 'prop'
let objB = objA;          // objB recibe la misma referencia que objA

objB.prop = 2;            // Se modifica la propiedad del objeto

console.log(objA.prop);   // 2
console.log(objB.prop);   // 2
```

En este ejemplo:
- `objA` y `objB` **apuntan al mismo objeto** en memoria.
- Modificar el objeto a través de `objB` también afecta a `objA` porque ambas variables tienen la misma referencia al mismo objeto.

---

### **3. Comparación de Objetos con Triple Igual (`===`)**

La comparación de objetos en JavaScript con `===` compara **las referencias de memoria**, no el contenido del objeto. Dos objetos con el mismo contenido, pero almacenados en diferentes direcciones de memoria, no son iguales.

#### Ejemplo:
```javascript
let objA = {};
let objB = {};

console.log(objA === objB);  // false
```

En este caso:
- Aunque `objA` y `objB` contienen un objeto vacío, **están almacenados en diferentes ubicaciones de memoria**, por lo que la comparación con `===` devuelve `false`.

---

### **4. Funciones y Tipos por Referencia**

Las **funciones** también se pasan por referencia. Esto significa que si una función modifica un objeto pasado como argumento, los cambios afectarán al objeto original.

#### Ejemplo:
```javascript
let objA = { prop: 1 };

function incrementar(obj) {
    obj.prop++;  // Modifica la propiedad 'prop' del objeto
}

incrementar(objA);

console.log(objA.prop);  // 2
```

En este caso:
- El objeto `objA` es pasado por referencia a la función `incrementar`.
- La función **modifica el objeto directamente** en memoria, lo que afecta a `objA`.

---

### **5. Listar Propiedades de un Objeto**

En JavaScript, es posible **listar las propiedades** de un objeto de varias maneras. Existen métodos como `in`, `Object.keys()`, `Object.entries()`, y `for...in` que permiten iterar sobre las propiedades de un objeto.

#### 5.1 **Operador `in`**

El operador `in` verifica si una propiedad existe dentro de un objeto.

#### Ejemplo:
```javascript
let obj = { x: 10, y: 15 };

if ('x' in obj) {
    console.log('La propiedad "x" existe');
}
```

Este código verifica si la propiedad `'x'` existe en el objeto `obj`.

#### 5.2 **`Object.keys()`**

El método `Object.keys()` devuelve un **array de las claves** (propiedades) de un objeto.

#### Ejemplo:
```javascript
let obj = { x: 10, y: 15 };
let keys = Object.keys(obj);

console.log(keys);  // ["x", "y"]
```

#### 5.3 **`Object.entries()`**

El método `Object.entries()` devuelve un **array de pares clave-valor** en formato de tuplas.

#### Ejemplo:
```javascript
let obj = { x: 10, y: 15 };
let entries = Object.entries(obj);

console.log(entries);  // [["x", 10], ["y", 15]]
```

#### 5.4 **`for...in`**

El bucle `for...in` itera sobre todas las propiedades enumerables de un objeto.

#### Ejemplo:
```javascript
let obj = { x: 10, y: 15 };

for (let key in obj) {
    console.log(key, obj[key]);  // Muestra la propiedad y su valor
}
```

---

### **6. Métodos Estáticos de `Object`**

Algunos métodos dentro del constructor `Object` son **métodos estáticos**. Esto significa que se pueden llamar directamente sobre el constructor `Object`, no sobre instancias de objetos.

#### Métodos Estáticos Comunes:
- **`Object.keys(obj)`**: Devuelve un array con las claves del objeto.
- **`Object.entries(obj)`**: Devuelve un array con los pares clave-valor del objeto.

#### Ejemplo:
```javascript
let obj = { x: 10, y: 15 };

// Usamos métodos estáticos sobre el constructor 'Object'
let keys = Object.keys(obj);
let entries = Object.entries(obj);

console.log(keys);     // ["x", "y"]
console.log(entries);  // [["x", 10], ["y", 15]]
```

---

### **Resumen**

- **Tipos primitivos** (string, number, boolean, null, undefined) se copian por valor.
- **Tipos por referencia** (objetos, arrays, funciones) se pasan por referencia.
- **Comparación de objetos** con `===` compara las **referencias**, no el contenido.
- **Funciones** modifican los objetos pasados como parámetros si estos son de tipo referencia.
- Para **listar las propiedades** de un objeto, se pueden usar métodos como `Object.keys()`, `Object.entries()` y el operador `in`.
- Los métodos estáticos de `Object` como `Object.keys()` y `Object.entries()` permiten interactuar con objetos de manera eficiente.

---