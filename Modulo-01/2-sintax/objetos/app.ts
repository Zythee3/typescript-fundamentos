interface Pessoa {
    nome: string,
    idade: number,
    profissao?: string // a interrogação serve para indicar que o campo da inferface é opcional

}

const pessoa: Pessoa = {
    nome: "Guilherme",
    idade: 21
}


const pessoa2: Pessoa = {
    nome: "Matheus",
    idade: 22
}

const arrayPessoas: Array<Pessoa> = [         //aqui é uma forma de criar um objeto que vai receber um array com elementos apenas do tipo "Pessoa"
    pessoa, pessoa2
]