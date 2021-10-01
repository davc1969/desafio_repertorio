# Repertorio
## Desaf�o Latam e-camp.  Manejo de reprtorio para karaoke

Aplicaci�n CRUD en el lado del backend para manejar, con base de datos postgres, un listado de canciones.  INcluye opcines para agregar, editar, borrar y por supuesto, mostrar las coanciones.

Se utilizaron la librer�a pg para manejar la conexi�n con la base de datos y el patr�n de dise�o *Singleton* para menajar el objeto ***Pool*** de esa librer�a de manera de que no existiese mas de una instancia creada en alg�n momento.

Se deja constncia que se debi� modificar el archivo del frontend **index.html** que hab�a sido suministrado porque en la opci�n de editar una canci�n, al momento de hacer la solicitud PUT al servidor, no se hab�a incluido el *id* de la canci�n en el cuerpo de la solicitud.

Realizado por ***Dar�o Valenzuela***, septiembre 2021