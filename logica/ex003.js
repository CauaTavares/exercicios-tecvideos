let preco = 60;
let aVista = 10;
let totalAVista = 0; 

totalAVista = (preco - (aVista / 100) * preco);

console.log(`Preço: R$${preco},00`);
console.log(`À vista: R$${totalAVista},00`);
console.log(`Ou 3x de: R$${preco/3},00`);

