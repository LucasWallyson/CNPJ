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
        linkelement.setAttribute('onclick', 'Delet('+ pos +')');

        var linktext = document.createTextNode('excluir');

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
    // for (var i = 0; i < Arraynovo.length; i++){
        
    // }
   
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
    // for(var i = 0; i < gerarD1.length; i++){
    //      d1 += gerarD1[i];
    //  }
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
    //  for(var i = 0; i < gerarD2.length; i++){
    //      d2 += gerarD2[i];
    //  }
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
    
    
    // var n1 = getRandomInt(0, 9);
    // var n2 = getRandomInt(0, 9);
    // var n3 = getRandomInt(0, 9);
    // var n4 = getRandomInt(0, 9);
    // var n5 = getRandomInt(0, 9);
    // var n6 = getRandomInt(0, 9);
    // var n7 = getRandomInt(0, 9);
    // var n8 = getRandomInt(0, 9);
    // var n9 = 0; //Math.round(Math.random()*10)
    // var n10 = 0; //Math.round(Math.random()*10)
    // var n11 = 0; //Math.round(Math.random()*10)
    // var n12 = 1; //Math.round(Math.random()*10)

    // var d1 = n1*5+n2*4+n3*3+n4*2+n5*9+n6*8+n7*7+n8*6+n9*5+n10*4+n11*3+n12*2;

    // d1 = (d1%11);
    // if(d1<2){
    //     d1=0;
    // }else{
    //     d1=11-d1;
    // }
    // var d2 = n1*6+n2*5+n3*4+n4*3+n5*2+n6*9+n7*8+n8*7+n9*6+n10*5+n11*4+n12*3+d1*2;
    // d2 = (d2%11);
    // if(d2<2){
    //     d2=0;
    // }else{
    //     d2=11-d2;
    // }

    // var mascara = [''+gerar+'/'+geraN+'-'+d1+d2+''] ;
    // document.getElementById('demo1').value= mascara;
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

