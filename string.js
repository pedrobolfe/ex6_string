// criar referencias aos elementos da pag
const frm = document.querySelector("form");
const resp1 = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    //evita o envio do formulario
    e.preventDefault();
    let entrada = String(frm.inTexto.value);

    entrada = entrada.split(";");

    let frase = entrada[0];
    const palavra = entrada[1];
    const pos = entrada[2];

    escreve_str(frase, palavra, pos);
});

function escreve_str(frase, palavra, pos){
    let aux = frase;
    
    posicoes = pos.split(',')
    posicoes[0] = posicoes[0].replace['['];
    posicoes[-1] = posicoes[-1].replace[']'];

    // for (let i =0; i < posicoes.lenght; i++){
        
    // }
    
    // pos.slice(1); // remover o ultimo elemento "]"
    //pos.shift(); // remover o primeiro elemento "["
    
    console.log(posicoes);

    
}
