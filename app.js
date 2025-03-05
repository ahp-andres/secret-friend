// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

/*  PRIMER EJERCICIO FORMAR EL ARRAY PARA AGREGAR A LA LISTA SIN RESTRICCIONES
    const amigos = [];

    function agregarAmigos (nombre) {
        amigos.push(nombre);
        console.log('Lista actualizada:', amigos);
    }

    agregarAmigos ('Rosa');
    agregarAmigos ('Janet');
    agregarAmigos ('Andres');

*/ /* 2DO EJERCICIO FORMAR EL ARRAY PARA AGREGAR A LA LISTA CON RESTRICCIONES


    const amigos = []

    function agregarNombreValido (nombre) 
    {
    if (nombre.trim() === '') 
        {
        alert('Error: Ingrese un nombre válido por favor.');
        return;
        }
    else 
        {   
        amigos.push(nombre);
        console.log (`Lista actualizada: ${amigos}`)
        }   

    }


    agregarNombreValido ('')
    agregarNombreValido ('Rafuña')
    agregarNombreValido ('Tonino')
    agregarNombreValido ('    ')

*/

    /*const listadeAmigos = [];

    function agregarAmigo () 
    {
        const inputNombre = document.getElementById("amigo");
        const textoIngresado = inputNombre.value.trim();

        if (nombre.trim() === '') 
            {
            alert('Error: Ingrese un nombre válido por favor.');
            return;
            }
        else 
            {   
            listadeAmigos.push(nombre);
            console.log (`Lista actualizada: ${amigos}`)
            }   
    }
*/


const listaDeAmigos = []; //Creamos un ARRAY

    function agregarAmigo() //Estamos LLAMANDO a la funcion para que haga una ACCIÓN que ya estaba creada en el HTML
    {
        let capturarInput = document.getElementById("amigo"); // Captura el input 
        let nombreDelInput = capturarInput.value.trim(); // Obtiene el texto que escribe el USER sin espacios extra
        

        if (nombreDelInput === "") {
            alert("Por favor, escribe un nombre antes de añadirlo."); //Si el nombre ingresado es igual a nada, devuelve el ALERT.
            return; //Devuelve el valor, no lo guarda.
        } else { 
            listaDeAmigos.push(nombreDelInput) //En caso se cumpla la condicion y sea un texto se guarda en el ARRAY ListaDeAmigos
            
        }
        

        actualizarLista();
        limpiarTexto();

        console.log(`Nombre ingresado:, ${nombreDelInput}`); // Muestra el nombre en la consola
        console.log(`Lista actualizada:, ${listaDeAmigos}`); // Muestra la lista actualizada con todos los nombres añadidos hasta el momento
    }
    
    function actualizarLista () {
        let capturarLista = document.getElementById("listaAmigos"); // Capturamos la lista de HTML
        capturarLista.innerHTML= ''; // Limpiamos la lista antes de actualizarla
        

        for ( let i = 0; i< listaDeAmigos.length ; i++) // Estructura del Bucle, empieza en 0 y va aumentando en 1.
        {
            capturarLista.innerHTML += `<li>${listaDeAmigos[i]}</li>`; // Agregamos cada amigo sin borrar las anteriores como <li>
            
        }
    }

    
    function limpiarTexto () {
        let cajaDeTexto = document.getElementById("amigo"); // Captura el input
        cajaDeTexto.value = ''; // Borra el contenido del input modificando la propiedad agregando el ".value" para limpiar correctamente.

    }
    

    
    function sortearAmigo() // No invocamos la función arriba dentro de agregarAmigo() porque sino se sorteria automaticamente apenas agreguemos un nombre.
    {

        if (listaDeAmigos.length === 0) { // Si el array esta vacio devuelve el alert (Como es un ARRAY utilizamos .length y no === '' porque no es un string)
            alert('Ingrese un nombre');
            return;

        } else {

        //Seleccionamos un amigo ALEATORIO

        let indiceAleatorio = Math.floor(Math.random()*listaDeAmigos.length); //Generamos el INDICE aleatorio en base al length del ARRAY
        let amigoSorteado = listaDeAmigos[indiceAleatorio]; //Obtenemos el indice aleatorio sorteado del ARRAY
        
        //Mostramos el nombre SORTEADO  

        let capturarElSorteado = document.getElementById("resultado"); // Conectamos el ID de html que esta en formato ul y mostramos el nombre elegido en pantalla (SIEMPRE PONER EL ID ENTRE "")
        capturarElSorteado.innerHTML = `<li>El amigo secreto es: ${amigoSorteado}</li>`; //  Mostramos el amigo sorteado.
        }

        //Limpiamos despues de SORTEAR

        document.getElementById("listaAmigos").innerHTML = ""; //Limpiamos la lista en el HTML (Borra los nombres de la lista visualmente).

        listaDeAmigos.length = 0; // Limpiar el array de amigos (Vacía el array para evitar que se sigan almacenando los nombres después de sortear).

    }