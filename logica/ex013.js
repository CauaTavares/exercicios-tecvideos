let altura = 1.50;
let sexo = 'Nao binario';
let pesoIdeal = 0;

if(sexo === 'Masculino') {
    pesoIdeal = 22 * Math.pow(altura, 2);
} else {
    pesoIdeal = 21 * Math.pow(altura, 2)
}


console.log(`Seu peso ideal é: ${pesoIdeal.toFixed(3)} kg`);