// criar referencias aos elementos da pag
const frm = document.querySelector("form");
const resp1 = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    //evita o envio do formulario
    e.preventDefault();
    const frase = String(frm.inFrase.value);
    const palavra = String(frm.inPalavra.value);
    const indexes = String(frm.inIndex.value);

    insertString(frase, palavra, indexes);
});

function insertString(frase, palavra, indexes){ //indexes [1,6,3]
    let aux = frase.split(""); // separa a frase por caracteres 

    // tirar os '[', ']' e ',' dos indexes
}

function escreve_str(frase, palavra, pos){ //pos [1,6,3]
    let list_aux = frase.split("");
    let cont = 0;

    for (let i = 0; i <= frase.lenght; i++){
        if (pos.inCludes(i)){
            list_aux.splice(i + cont, 0, palavra);
            cont++;
        }
    }
    return list_aux.join(""); // junta todos elementos da lista
}
