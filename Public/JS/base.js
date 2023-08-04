const nome = "Pedro Jimenez";
let nome2 = "";
let pessoadefault = {
    nome:"Pedro Junior",
    idade:"29",
    trabalho:"Programador"
}
let nomes = ["Pedro Jimenez", "Melissa Rossi", "Pedro Augusto", "João Gabriel" ];
let pessoaslistavazia = [];
let pessoas = [
    {
        nome:"Pedro Junior",
        idade:"29",
        trabalho:"Programador"
    },
    {
        nome:"Melissa Rossi",
        idade:"43",
        trabalho:"Bailarina"
    }
];

function alterarnome() {
        nome2 = "Bolivia Junior";
        console.log("Valor Alterado");
        console.log(nome2);
}

function recebeEalteranome(novonome) {
        name2 = novonome;
        console.log("Valor alterado recebendo um nome");
        console.log(nome2);
}

function imprimirpessoa(pessoa) {
        console.log("Nome:");
        console.log(pessoa.nome);
    
        console.log("Idade:");
        console.log(pessoa.idade);
    
        console.log("Trabalho:");
        console.log(pessoa.trabalho);
}

function adicionarPessoa(pessoa) {
        pessoas.push(pessoa);

}

function imprimirPessoas() {
    pessoas.forEach((item) => {
        console.log("Nome:");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.nome);

        console.log("Trabalho:");
        console.log(item.nome);
    })
}

imprimirPessoas();
//adicionarpessoa({
    //nome: "Rodrigo Reis"
    //idade: "33"
   // trabalho: "Hoteleiro"
//});

console.log(pessoas);

//imprimirpessoa(pessoadefault);

//imprimirpessoa({
    //nome:"Melissa Rossi",
    //idade:"43",
    //trabalho:"Bailarina"
//})


//recebeEalteranome("Pedro Bolivia Junior")
//recebeEalteranome("PEDREIRA")

//alterarnome();