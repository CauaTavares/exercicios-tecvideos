let salario = 700;
let gastos = {
    'Aluguel' : 0,
    'luz' : 0,
    'Água' : 0,
    'Internet' : 0,
    'Cartão de crédito' : 800,
};

// console.log(gastos);

const total = Object.values(gastos).reduce((a, b) => a + b);

console.log(`Salário: R$${salario}
Total de gastos R$${total}
Restante: R$${salario - total}`);
