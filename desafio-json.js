

let animais = ['Boi','Vaca','Touro','Cobra','Galo'];
let dadosConverter = JSON.stringify(animais);

console.log(dadosConverter);

let dadosJson = '["Boi","Vaca","Touro","Cobra","Galo"]'

let dadosObjetos = JSON.parse(dadosJson);
console.log(dadosObjetos);


