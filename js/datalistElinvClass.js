/**
 *  * Clase Datalist Elinv
 *  * Parametros:
 *  * ------------------------------------------------------------
 * 	inputSearch :   id del Input de busqueda
 * 
 *  listDiv:        id del Datalist que es visible o invisible 
 *                  dependiendo si hay o no resultados. 
 *          		Se muestra con los resultados de la busqueda.
 * 
 *  lblinnerHTML:   id del input label que muestra un solo resultado 
 *                  de la fila seleccionada sea con el mouse 
 *                  o con el teclado.
 *  
 *  lblHallados:    id del input label que muestra la cantidad 
 *                  de resultados alcanzados
 * 
 *  arrDatalistElv: Parametro array para llenar el datalist
 *  * ------------------------------------------------------------ 
 */

class datalistElinv {

    constructor(inputSearch, listDiv, lblinnerHTML, lblHallados, arrDatalistElv) {

        // Para recorrer mediante el teclado las filas visibles 
        // resultantes de la búsqueda.
        this.arrVisiblesKeyNav = [];
        // Control mediante teclas de las filas
        this.s, this.p = -1;
        // label muestra el resultado de la linea resaltada.
        this.lblinnerHTML = lblinnerHTML;
        // label contador resultados hallados
        this.lblHallados = lblHallados;
        // datalist donde ingresaremos los listados
        this.listDiv = listDiv;
        // doble click en casilla de busqueda
        this.inputSearch = inputSearch;
        // array para llenar el Datalist
        this.arrDatalistElv = arrDatalistElv;
        // para la insensibilidad en acentos.
        this.accent_map = { 'á': 'a', 'é': 'e', 'è': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'Á': 'a', 'É': 'e', 'è': 'e', 'Í': 'i', 'Ó': 'o', 'Ú': 'u' };

    }

    // Para poder buscar a pesar de los acentos
    obviarAcentos(s) {
        if (!s) { return ''; }
        var ret = '';
        for (var i = 0; i < s.length; i++) {
            ret += this.accent_map[s.charAt(i)] || s.charAt(i);
        }
        return ret;
    };

    // devuelve las coincidencias respecto de lo buscado
    visibles(tagOptions) {
        //Recorrer con el teclado pero solo por sobre los elementos visibles.
        let options = document.getElementsByClassName(tagOptions);
        let tantos = options.length;
        let arrVisibles = [];
        for (let i = 0; i < tantos; i++) {
            if (options[i].style.display == 'block') {
                arrVisibles.push(options[i].id);
            }
        }
        return arrVisibles;
    }

    ver(s) {
        let d = document.getElementById(s);
        d.focus();
        //document.getElementById(s).focus({focusVisible: true});
        let verLbl = document.getElementById(this.lblinnerHTML);
        verLbl.value = d.innerHTML;
        // donde mostramos este item resaltado, y solo si esta oculto.
        if (verLbl.style.display !== 'block'){
            verLbl.style.display = "block";
        }
    }

    next() {
        let cuantos = this.arrVisiblesKeyNav.length;
        this.p++;                     
        if (this.arrVisiblesKeyNav[this.p] !== undefined) {
            this.ver(this.arrVisiblesKeyNav[this.p]);
        } else {
            this.p = cuantos;
        }
    }

    prev() {
        this.p--;    
        if (this.arrVisiblesKeyNav[this.p] !== undefined) {
            this.ver(this.arrVisiblesKeyNav[this.p]);
        } else {
            this.p = -1;
        }
    }

    init(nameDL) {
        var s = document.getElementById(this.inputSearch);
        let gralRes = document.getElementById(this.listDiv);

        // input search si se presiona cualquier tecla
        s.addEventListener('keyup', function (event) {
            //Se ejecuta si no es espacio
            if (event.key !== " ") {
                // Separamos las palabras buscadas por espacio
                let pal = this.value.split(' ');
                //Creamos la expresión regular para buscar 
                // hasta por cuatro argumentos.
                let regexp;
                if (pal.length == 1) regexp = `(?=.*${pal[0]})`
                if (pal.length == 2) regexp = `(?=.*${pal[0]})(?=.*${pal[1]})`
                if (pal.length == 3) regexp = `(?=.*${pal[0]})(?=.*${pal[1]})(?=.*${pal[2]})`
                if (pal.length == 4) regexp = `(?=.*${pal[0]})(?=.*${pal[1]})(?=.*${pal[2]})(?=.*${pal[3]})`
                // Convertimos para comparación 'insensitive'
                regexp = regexp.toLowerCase();
                // obviamos acentos
                regexp = nameDL.obviarAcentos(regexp);
                // analizamos cada option
                let options = document.getElementsByClassName("options");
                let tantos = options.length;
                let hallados = 0;
                let res;
                let contHallados = document.getElementById(nameDL.lblHallados);
                for (let i = 0; i < tantos; i++) {
                    let this_element = options[i];
                    let this_elementStr = this_element.innerHTML.toLowerCase();
                    // obviamos acentos
                    this_elementStr = nameDL.obviarAcentos(this_elementStr);
                    // Comparamos y mostramos u ocultamos conforme el resultado
                    if (this_elementStr.match(regexp)) {
                        this_element.style.display = "block";
                        // incrementamos
                        hallados++;
                        // informamos cantidad
                        res = (hallados == 1) ? ' resultado.' : ' resultados.';
                        contHallados.value = hallados + res;
                    } else {
                        this_element.style.display = "none";
                        this_element.classList.replace("in", "out");
                        setTimeout(function () {
                            this_element.style.display = "none";
                        }, 700);
                        contHallados.value = "Sin resultado!";
                    }
                }

                // si no se halla ninguno ocultamos
                if (hallados == 0 || this.value == '') {
                    gralRes.classList.replace("in", "out");
                    setTimeout(function () {
                        gralRes.style.display = "none";
                    }, 400);
                    contHallados.value = "Sin resultado!";
                    // o mostramos.
                } else {
                    gralRes.classList.replace("out", "in");
                    setTimeout(function () {
                        gralRes.style.display = "block";
                    }, 400);
                    // obtenemos los id en array de elem visibles
                    nameDL.arrVisiblesKeyNav = nameDL.visibles("options");
                    contHallados.value = hallados + res;
                }

            }
        });

        //input search si se hace doble click con el boton izquierdo del mouse
        s.addEventListener('dblclick', (e) => {
            // limpiamos el text input buscador de palabras
            s.value = ''; 
            // ocultamos el datalist
            document.getElementById(this.listDiv).style.display = 'none'; 
            // limpiamos el contador de hallados.
            let contHallados = document.getElementById(nameDL.lblHallados);
            contHallados.value = '';
            // El resultado individual resaltado lo ocultamos.
            let verLbl = document.getElementById(nameDL.lblinnerHTML);
            verLbl.style.display = 'none';
        });

        // llenamos el datalist
        let iArr = 0;
        this.arrDatalistElv.forEach(element => {
            // Para poder enfocar un div 
            // contenteditable="true" es una forma
            // o la otra agregando atributo tabindex
            let divStr = `<div id="${iArr}" tabindex="${iArr++}" class="options">${element}</div>`
            let nodo = divStr.toDOM();
            gralRes.appendChild(nodo);
        });

        // detect click dentro de los divs
        document.addEventListener("click", function (event) {
            // Si el click es dentro del listado
            let verLbl = document.getElementById(nameDL.lblinnerHTML);
            if (event.target.closest(".dataListElinv")) {
                // lo mostramos individualmente
                verLbl.value = event.target.innerHTML;                
                // solo si el tag visualizador esta oculto
                if (verLbl.style.display !== 'block'){
                    verLbl.style.display = "block";
                }
                //actualizamos la posición para la selección por teclas arriba|abajo
                nameDL.arrVisiblesKeyNav.forEach((element, index) => {
                    if (document.getElementById(element).innerHTML === event.target.innerHTML){
                        nameDL.p = index;
                    }
                });
            }
        })

        // detect key 'ArrowUp' and 'ArrowDown' y ejecuta funciones.
        document.onkeydown = function (e) {
            e = e || window.event;
            if (e.key == 'ArrowUp') {
                nameDL.prev();
            }
            if (e.key == 'ArrowDown') {
                nameDL.next();
            }
            return;
        }
    }
}

// Para crear fragment de document => nodes
String.prototype.toDOM = function () {
    var d = document
        , i
        , a = d.createElement("div")
        , b = d.createDocumentFragment();
    a.innerHTML = this;
    while (i = a.firstChild) b.appendChild(i);
    return b;
};
