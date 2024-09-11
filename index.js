/*# 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"*/

let heroi = prompt("Digite o nome do Herói: ");
let forca = prompt("Digite o XP do Herói: ");
let nivel = "";
let XP = (forca * 1)
let msgInicio = "O Herói de nome ";
let msgFim =  " está no nível de ";

if (XP*1 < 1001){
    nivel = "Ferro";
    console.log(msgInicio + heroi + msgFim + nivel);
    }
else if (XP < 2001){
    nivel = "Bronze";
    console.log(msgInicio + heroi + msgFim + nivel);
    }
else if (XP < 5001){
    nivel = "Prata";
    console.log(msgInicio + heroi + msgFim + nivel);
    }
else if (XP < 7001){
    nivel = "Ouro";
    console.log(msgInicio + heroi + msgFim + nivel);
    }
else if (XP < 8001){
    nivel = "Platina";
    console.log(msgInicio + heroi + msgFim + nivel);
    }
else if (XP < 9001){
    nivel = "Ascendente";
    console.log(msgInicio + heroi + msgFim + nivel);
    }
else if (XP < 10001){
    nivel = "Imortal";
    console.log(msgInicio + heroi + msgFim + nivel);
    }
else
    {
        nivel = "Radiante";
        console.log(msgInicio + heroi + msgFim + nivel);
    }