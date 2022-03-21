var btn_agregar_libro=document.getElementById("agregarLibro");
var imprimir_Libro=document.getElementById("imprimirLibro");
var index=0;
var campo = document.getElementById('campoCreacion');
var impr_libros=document.getElementById('imprimirLibros');
var listBooks=document.createDocumentFragment();

class Book{
    constructor(titulo,autor,precio){
        this._titulo=titulo;
        this._autor=autor;
        this._precio=parseFloat(precio);
    }
    get getTitulo(){
        return this._titulo;
    }
    get getAutor(){
        return this._autor;
    }
    get getPrecio(){
        return this._precio;
    }
}
var libros=new Array;
btn_agregar_libro.addEventListener('click',function(){
    btn_agregar_libro.disabled=true;
    campo.innerHTML='<form><input placeholder="Título"id="inpTitle"><br><br> <input placeholder="Autor" id="inpAutor"><br><br><input placeholder="Precio"type="number" id="inpPrecio" min="5">                                      <button id="btn_cargarDatos">Cargar</button><button id="btnCancelar">Cancelar</button></form>';
    var btnCargarDatos=document.getElementById('btn_cargarDatos');
    var inpTitulo=document.getElementById('inpTitle');
    var inp_Autor=document.getElementById('inpAutor');
    var inp_precio=document.getElementById('inpPrecio');
    var btn_cancelar=document.getElementById('btnCancelar');
    btn_cancelar.addEventListener('click',function(){
        campo.innerHTML='';
        btn_agregar_libro.disabled=false;
    });
    btnCargarDatos.addEventListener('click',function(){
        var tituloBook=inpTitulo.value;
        tituloBook=tituloBook.trim();
        var autor=inp_Autor.value;
        autor=autor.trim();
        var precio=inp_precio.value;
        precio=parseFloat(precio);
        campo.innerHTML='';
        btn_agregar_libro.disabled=false;
        if((tituloBook=="")||(autor=="")||(isNaN(precio))){
            alert("Hubieron campos de texto vacíos, no es posible cargar el libro");
        }
       /* else if(libros.getTitulo.includes(tituloBook)&&libros.getAutor.includes(autor)){
            alert("Este libro ya ha sido ingresado");
        } */
        else{
            libros[index]=new Book(tituloBook,autor,precio);
            index++
        }
    })
})
impr_libros.addEventListener('click',function(){
    btn_agregar_libro.disabled=false;
    libros.forEach((libro,i) => {
        var item=new Array;
        item[i]=document.createElement('li');
        item[i].textContent='"'+libro.getTitulo+'"'+', de '+libro.getAutor+', $'+libro.getPrecio;
        var btnRemove=new Array;
        btnRemove[i]=document.createElement('button');
        btnRemove[i].textContent="Remover"; 
        item[i].appendChild(btnRemove[i]);
        listBooks.appendChild(item[i]);
        
        btnRemove[i].addEventListener('click',function(){
            campo.removeChild(item[i]);
            libros.splice(i,1);
            console.log(libros);
        })
    }); 
    campo.innerHTML='';
    campo.appendChild(listBooks);
})






