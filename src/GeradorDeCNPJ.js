var listelement = document.getElementById('list');

var CNPJlist = JSON.parse(localStorage.getItem('CNPJlist')) || [];

function verlista(){
    listelement.innerHTML = '';
    for (list of CNPJlist){
        let Celement = document.createElement('li');
        let textelement = document.createTextNode(list);

        let linkelement = document.createElement('a');

        linkelement.setAttribute('href', '#');

        let pos = CNPJlist.indexOf(list);
        linkelement.setAttribute('onclick', 'Delet('+ pos + ')');

        let linktext = document.createTextNode(' excluir ');
        
        linkelement.appendChild(linktext);
       
        Celement.appendChild(textelement);
        Celement.appendChild(linkelement);
        
        listelement.appendChild(Celement);
    }
}
    
const Geradordecnpj = () => {
    let gerar = [];
   
 let getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    for (var i = 0; i < 8; i++){
        gerar.push(getRandomInt(0, 9));
       
    }
    let Arraynovo = [0,0,0,1];

    Arraynovo.forEach(element => gerar.push(element) );
   
    let gerarD1 = gerar.concat([]);
    
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
    gerarD1.forEach((element)=> d1 += element );
    d1 = (d1%11);
    d1<2 ? d1=0 : d1=11-d1;
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
    gerarD2.forEach((element) => d2 += element );
    d2 = (d2%11);
    d2<2 ? d2=0 : d2=11-d2;
    gerar.push(d2);

    var mascara = () =>{
        return gerar.join("").replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")
    }

    var mascaraTerminada = mascara(gerar);
    document.getElementById('Generator').value= mascaraTerminada;
    
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
