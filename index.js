
var who = ["My dog", "My Mom", "Isabelle", "Pedro","My roomate", "My ex-girlfriend"];
var what = ["broke", "kicked", "pushed", "stole", "burned", "brought"];
var avoid = ["my homework", "the dinner", "the gun", "the debt", "my car", "your house"];
var when = ["yesterday", "last month", "two weeks ago", "last night", "on Monday", "few minutes ago"];


function excuse(){

var sentence =[];
var valuePosition=0;

valuePosition= Math.floor(Math.random()*6);
sentence.push(who[valuePosition]);

valuePosition= Math.floor(Math.random()*6);
sentence.push(what[valuePosition]);

valuePosition= Math.floor(Math.random()*6);
sentence.push(avoid[valuePosition]);

valuePosition= Math.floor(Math.random()*6);
sentence.push(when[valuePosition]);

document.write(sentence[0]+" "+sentence[1]+" "+sentence[2]+" "+sentence[3]);

}

