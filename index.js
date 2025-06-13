console.log("\n=== HERANÇA ===");

// Classe pai (superclasse)
class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    comer() { console.log(`${this.nome} está comendo...`); }
    dormir() { console.log(`${this.nome} está dormindo...`); }
    falar() { console.log(`${this.nome} faz algum som...`); }
}

// Classe filha (subclasse) - herda de Animal
class Cachorro extends Animal {
    constructor(nome, idade, raca) {
        super(nome, idade); // Chama o construtor da classe pai
        this.raca = raca;
    }   
    // Sobrescreve o método falar da classe pai
    falar() { console.log(`${this.nome} faz: Au au!`); }
    // Método específico do cachorro
    abanarRabo() { console.log(`${this.nome} está abanando o rabo!`); }
}
// Outra classe filha
class Gato extends Animal {
    constructor(nome, idade, cor) {
        super(nome, idade);
        this.cor = cor;
    }
    // Sobrescreve o método falar
    falar() { console.log(`${this.nome} faz: Miau!`); }
    // Método específico do gato
    arranhar() { console.log(`${this.nome} está arranhando!`); }
}

// Exemplos de herança
const rex = new Cachorro("Rex", 3, "Labrador");
const mimi = new Gato("Mimi", 2, "Branco");

// Métodos herdados da classe Animal
rex.comer(); // Rex está comendo
rex.dormir(); // Rex está dormindo
// Métodos sobrescritos (polimorfismo)
rex.falar(); // Au au!
mimi.falar(); // Miau!
// Métodos específicos de cada classe
rex.abanarRabo();
mimi.arranhar();