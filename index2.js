let who2 = ['the dog','my granma','his turtle','my bird'];
let what2 = ['eat','pissed','crushed','broked'];
let when2 = ['before the class','right in time','when I finished','during my lunch','while I was praying'];


let excuse2 = who2[Math.floor(Math.random()*who2.length)]+' '+what2[Math.floor(Math.random()*what2.length)]+' '+when2[Math.floor(Math.random()*when2.length)];


document.querySelector("#excuse2").innerHTML = excuse2;