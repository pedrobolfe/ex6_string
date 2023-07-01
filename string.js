// criar referencias aos elementos da pag
const frm = document.querySelector("form");
const resp1 = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    //evita o envio do formulario
    e.preventDefault();
    const frase = String(frm.inFrase.value);
    const palavra = String(frm.inPalavra.value);
    const indexes = String(frm.inIndex.value);

    console.log(insertString(frase, palavra, indexes));
});

function insertString(frase, palavra, pos){ //indexes [1,6,3]
    const list_aux = frase.split(""); // separa a frase por caracteres 
    let cont = 0;

    // tirar os '[', ']' e ',' dos indexes
    const tiraIndexes = pos.replace(/[\[\]]/g, '');
    let indexes = tiraIndexes.split(','); // array de string, ex,['1', '4', '10']

    // converter os index do array para inteiro
    indexes = indexes.map(index => parseInt(index.trim())); // [1, 4, 10]

    // colocar a palavra no lugar dos indexes na frase
    for (let i = 0; i < frase.length; i++){  
        if(indexes.includes(i)){
            list_aux.splice(i + cont, 0, palavra);
            cont++;
        }
    }

    resp1.innerText = list_aux.join("");
}
