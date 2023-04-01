const cntTexto = document.querySelector('.cnt-letters p');

const maquinaScribir = () => {
    let indicador = 1;
    let cnt = 0;
    /* Valores Máquina de Escribir */
    const valorArreglo = ['Juan','Maria','Laura','Sofia'];
    /*[velocidad, intervalo]*/
    const timer = [130, 3000];

    let arrayCaracteres = valorArreglo[cnt].split('');
    let araseChain = valorArreglo[cnt];

    indicador = write(arrayCaracteres, timer)

    let intervalo = setInterval(
        () => {
            indicador === 1 
            ? indicador = write(arrayCaracteres, timer)
            : indicador = remove(araseChain, timer);

            if(indicador === 1){
                
                cnt === valorArreglo.length - 1 ? cnt = 0 : cnt++;
                arrayCaracteres = valorArreglo[cnt].split('');
                araseChain = valorArreglo[cnt];

            }
            if(indicador !== 1 && indicador !==0)
                clearInterval(intervalo);
        }       
    , timer[1])
}

function write(arreglo, timer){
    let i = 0;
    let cadena = '';
    let write = setInterval(
        () => {
            cadena += arreglo[i];
            cntTexto.innerHTML = cadena;
            i++;

            if(i === arreglo.length)
                clearInterval(write);
        }
    , timer[0])
    return 0;
}
function remove(chain, timer){
    let erase = setInterval(
        () => {
            
            chain = chain.slice(0, -1);
            cntTexto.innerHTML = chain;

            if(chain.length === 0){
                cntTexto.innerHTML = '_';
                clearInterval(erase);
            }    
        }
    , timer[0])
    return 1;
}
maquinaScribir();