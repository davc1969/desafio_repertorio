# Repertorio
## Desafío Latam e-camp.  Manejo de reprtorio para karaoke

Aplicación CRUD en el lado del backend para manejar, con base de datos postgres, un listado de canciones.  INcluye opcines para agregar, editar, borrar y por supuesto, mostrar las coanciones.

Se utilizaron la librería pg para manejar la conexión con la base de datos y el patrón de diseño *Singleton* para menajar el objeto ***Pool*** de esa librería de manera de que no existiese mas de una instancia creada en algún momento.

Se deja constncia que se debió modificar el archivo del frontend **index.html** que había sido suministrado porque en la opción de editar una canción, al momento de hacer la solicitud PUT al servidor, no se había incluido el *id* de la canción en el cuerpo de la solicitud.

Realizado por ***Darío Valenzuela***, septiembre 2021