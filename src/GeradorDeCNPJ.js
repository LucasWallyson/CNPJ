var listelement = document.getElementById('list');

var CNPJlist = JSON.parse(localStorage.getItem('CNPJlist')) || [];

function verlista(){
    listelement.innerHTML = '';
    for (list of CNPJlist){
        var Celement = document.createElement('li');
        var textelement = document.createTextNode(list);

        var linkelement = document.createElement('a');

        linkelement.setAttribute('href', '#');

        var pos = CNPJlist.indexOf(list);
        linkelement.setAttribute('onclick', 'Delet('+ pos + ')');

        var linktext = document.createTextNode(' excluir ');
        
      

        linkelement.appendChild(linktext);
       
        Celement.appendChild(textelement);
        Celement.appendChild(linkelement);
        
        listelement.appendChild(Celement);

    }
}
var Geradordecnpj = function() {
    var gerar = [];

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
   
    }

    for (var i = 0; i < 8; i++){
        gerar.push(getRandomInt(0, 9));
       
    }
    var Arraynovo = [0,0,0,1];

    Arraynovo.forEach(function(element) {    
        gerar.push(element);
    });
   
    var gerarD1 = gerar.concat([]);
        

    var primeiroDecremento = 5;
    var SegundoDecremento = 9;

    for(var i = 0; i < 4; i++){
        gerarD1[i] = gerarD1[i] * primeiroDecremento;
        primeiroDecremento--;
    }
      
    for(var i = 4; i < 12; i++){
        gerarD1[i] = gerarD1[i] * SegundoDecremento;
        SegundoDecremento--;    
     } 
     var d1 = 0;
     gerarD1.forEach(function(element){
        d1 += element;
     });
    
        d1 = (d1%11);
    if(d1<2){
        d1=0;
    }else{
        d1=11-d1;
    }  

    gerar.push(d1);
    
    var gerarD2 = gerar.concat([]);
    
    var primeiroDecremento = 6;
    var SegundoDecremento = 9;

    for(var i = 0; i < 5; i++){
        gerarD2[i] = gerarD2[i] * primeiroDecremento;
        primeiroDecremento--;
    }
      
     for(var i = 5; i < 13; i++){
        gerarD2[i] = gerarD2[i] * SegundoDecremento;
        SegundoDecremento--;    
     } 
     var d2 = 0;
     gerarD2.forEach(function(element){
        d2 += element;
     });
   
        d2 = (d2%11);
    if(d2<2){
        d2=0;
    }else{
        d2=11-d2;
    } 
    gerar.push(d2);
   var string = gerar.join("");

    var mascara = function(valor) {
        return string.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")
    }

    var mascaraTerminada = mascara(gerar);
    document.getElementById('demo1').value= mascaraTerminada;
    
    var mac = mascaraTerminada;
    CNPJlist.push(mac);
    salvarstorage();
};
function Delet(pos){
    CNPJlist.splice(pos, 1);
    verlista();
    salvarstorage();
}

function salvarstorage(){
    localStorage.setItem('CNPJlist', JSON.stringify(CNPJlist));
}

