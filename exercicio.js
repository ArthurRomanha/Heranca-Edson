console.log("=== EXERCÍCIO 2: HERANÇA ===");

// Classe pai
class Funcionario {
    constructor(nome, salarioBase) {
        this.nome = nome;
        this.salarioBase = salarioBase;
    }
    calcSalario() { return this.salarioBase; }
    apresentar() { console.log(`${this.nome} - Funcionário`); }
}
// Classe filha - Vendedor
class Vendedor extends Funcionario { // Vendedor é um "filho" do funcionário ou seja, recebe hereditariamente os métodos do pai
    constructor(nome, salarioBase, vendas) {
        super(nome, salarioBase); // Chama construtor da classe pai
        this.vendas = vendas;
    }
    // Sobrescreve o método da classe pai, ou seja, ele já tem o método, porém, para esse filho o método deverá funcionar diferente
    calcSalario() { return this.salarioBase + (this.vendas * 50); }
    // Sobrescreve o método apresentar
    apresentar() {
        console.log(`${this.nome} - Vendedor com ${this.vendas} vendas este mês`);
    }
}
// Classe filha - Gerente
class Gerente extends Funcionario {
    constructor(nome, salarioBase, bonus) {
        super(nome, salarioBase);
        this.bonus = bonus;
    }
    // Sobrescreve o método da classe pai
    calcSalario() { return this.salarioBase + this.bonus; }
    // Sobrescreve o método apresentar
    apresentar() {
        console.log(`${this.nome} - Gerente com bônus de R$${this.bonus}`);
    }
}
// Teste do Exercício 2
const funcionario1 = new Funcionario("João", 3000);
const vendedor1 = new Vendedor("Ana", 2000, 10);
const gerente1 = new Gerente("Carlos", 5000, 1000);

console.log("=== Apresentações ===");
funcionario1.apresentar(); // João - Funcionário
vendedor1.apresentar(); // Ana - Vendedor com 10 vendas este mês
gerente1.apresentar(); // Carlos - Gerente com bônus de R$1000

console.log("\n=== Salários ===");
console.log(`${funcionario1.nome}: R$${funcionario1.calcSalario()}`); // 3000
console.log(`${vendedor1.nome}: R$${vendedor1.calcSalario()}`); // 2000 + (10*50)
console.log(`${gerente1.nome}: R$${gerente1.calcSalario()}`); // 5000 + 1000