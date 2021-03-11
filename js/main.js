//testes com strings em js
/*
//declaração de variáveis
var nome = "David Busch";
var n1 = 23;
var n2 = 10;
var frase = "Argentina é o melhor time do mundo!";

//Visualização por meio do comando alert
//alert(nome + " tem " + n1 + " anos!");
//alert(n1 + n2);
//comando .replace troca uma palavra da string 'frase' de lugar
alert(frase.replace("Argentina", "Brasil"));
//comando .toUpperCase transforma todo conteúdo da string 'frase' em caixa alta
alert(frase.toUpperCase());
//comando .toLowerCase transforma todo conteúdo da string 'frase' para letras minúsculas.
alert(frase.toLowerCase());

//visualização por meio do console (F12 ou inspecionar)
console.log(nome);
console.log(n1 + n2);
console.log(frase.replace("Argentina", "Brasil"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
console.log(n1 * n2);
*/
//----------------------------------------------------------------------------------------------
/*
//testes com dicionários em js

//declaração de variáveis
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
*/
/*
//declaração de variáveis
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/
//----------------------------------------------------------------------------------------------
/*
//testes com array em js

//declaração de variáveis
var lista = ["maça", "pera", "laranja"];
//comando console.log exibe o resultado no console da browser (F12 ou inspecionar)
console.log(lista[0]);
console.log(lista[1]);
console.log(lista[2]);
console.log(lista);
//exibe a quantidade de elementos na variavel 'lista'
console.log(lista.length);

//alert(lista);

//comando para incluir o item 'uva' na lista
lista.push("uva");
console.log(lista);
console.log(lista.length);

//comando para inverter a posição dos elementos de 'lista'
console.log(lista.reverse());
console.log(lista.reverse());

//comando para remover um item da lista
lista.pop();
console.log(lista);

//comando que exibe os elementos de 'lista' como strings
console.log(lista.toString());

//comando que permite que os elementos sejam exibidos com um - ao invés de virgulas
console.log(lista.join(" - "));
*/

/*lista.pop();
console.log(lista);
lista.pop();
console.log(lista);
*/
//----------------------------------------------------------------------------------------------

//testes com estruturas de repetição em js
/*
//if
//o comando prompt exibe uma pergunta pelo browser e grava na variavel 'idade'
var idade = prompt("Qual sua idade?")
if (idade >= 18){
    alert("Maior de idade.");
}else{
    alert("Menor de idade. O acesso é restrito para maiores de 18 anos.");
};
*/
/*
//while
//declaração de variáveis
var count = 0;

//laço que se repete até que o valor da variável 'count' > 4.
while (count < 5){
    console.log(count);
    count ++;
};
*/
/*
//for
//declaração de variáveis (não é necessário atribuir valor à variável 'count', pois na estrutura de repetição for nós fazemos isso.)
var count;
for(count=0; count <= 5; count++){
    console.log(count);
}
*/
/*
//testes com datas em js
//declaração de variáveis, o comando new Date exibe a data atual de teste.
var d = new Date();
console.log(d);

//o comando getSeconds serve para que apenas os segundos sejam exibidos. 
alert("segundos: " + d.getSeconds());
//o comando getMinutes serve para que apenas os minutos sejam exibidos. 
alert("minutos: " + d.getMinutes());
//o comando getMonth serve para que apenas o mês seja exibido, porém precisamos somar 1, pois a máquina começa sua contagem por 0. 
alert("mês: " + (d.getMonth()+1));
*/
//----------------------------------------------------------------------------------------------
//testes com funções em js
/*
//função que soma dois numeros 'n1' e 'n2'
function soma(n1, n2){
    return n1 + n2;
}
console.log(soma(5, 10));

//função que troca palavras de uma string
function setReplace(frase, nome, novo_nome){
   return frase.replace(nome, novo_nome);
}
console.log(setReplace("Vai Argentina", "Argentina", "Brasil"));

//função que valida se a idade é >= 18.
function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}
var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));
*/

//aplicação com botão no index

/*
function clicou(){
    //exibe a mensagem quando o usuario clicar no botão do index
    alert("Obrigado por clicar!");
}
*/
/*
function clicou(){
    //recebe a tag agradecimento com o comando getElementById,emtp do index para exibilo conforme a lógica
    //exibe o conteúdo de innerHTML na tag agradecimento no index
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
    console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    //ao clicar no conteúdo retornado no index pela tag agradecimento o browser é abre outra aba para a página a seguir:
    window.open("https://github.com/davidbusch1/introducaoJavaScript");
    //ao clicar no conteúdo retornado no index pela tag agradecimento o user é direcionado para a página a seguir:
    window.location.href = "https://github.com/davidbusch1/introducaoJavaScript";
}
*/
//função que troca o elemento do index quando o mouse é passado em cima da tag.
function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!"
    elemento.innerHTML = "Obrigado por passar o mouse!";
    //mensagem a ser exibida quando o usuário passar o mouse no index
    //alert("Trocar texto");
}
//função que retorna um valor e o mantém quando o mouse é retirado de cima da tag.
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!"
    elemento.innerHTML = "Passe o mouse aqui!";
}
//função que exibe uma mensagem ao carregar a página.
function load(){
    alert("Página carregada com sucesso!");
}
//função que guarda qual valor que foi trocado pelo usuário.
function funcaoChange(elemento){
    console.log(elemento.value);
}